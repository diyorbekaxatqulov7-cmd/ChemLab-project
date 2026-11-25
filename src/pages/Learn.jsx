import { useMemo, useState } from "react"
import {
  Atom,
  BookOpen,
  Check,
  Droplet,
  FlaskConical,
  Gauge,
  Hexagon,
  Layers,
  Shield,
  Table,
  Zap,
} from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { useLab } from "../context/LabContext.jsx"
import { ROUTES } from "../hooks/useRoute.js"
import { learnTopics } from "../data/learn.js"
import ModeSwitch from "../components/ModeSwitch.jsx"

const ICONS = {
  atom: Atom,
  hexagon: Hexagon,
  zap: Zap,
  table: Table,
  droplet: Droplet,
  shield: Shield,
  layers: Layers,
  gauge: Gauge,
}

/** Mavzu uchun vizual tushuntirish (oddiy SVG). */
function LearnVisual({ visual, caption }) {
  if (visual === "atom") {
    return (
      <svg width="200" height="160" viewBox="0 0 200 160" role="img" aria-label={caption}>
        <circle cx="100" cy="80" r="16" fill="#e5533d" />
        <ellipse cx="100" cy="80" rx="70" ry="26" fill="none" stroke="#4cc4f0" strokeWidth="1.6" opacity="0.8" />
        <ellipse cx="100" cy="80" rx="70" ry="26" fill="none" stroke="#4cc4f0" strokeWidth="1.6" opacity="0.6" transform="rotate(60 100 80)" />
        <ellipse cx="100" cy="80" rx="70" ry="26" fill="none" stroke="#4cc4f0" strokeWidth="1.6" opacity="0.6" transform="rotate(-60 100 80)" />
        <circle cx="170" cy="80" r="4" fill="#7dd3fc" />
        <circle cx="65" cy="57" r="4" fill="#7dd3fc" />
        <circle cx="65" cy="103" r="4" fill="#7dd3fc" />
      </svg>
    )
  }

  if (visual === "molecule") {
    return (
      <svg width="200" height="160" viewBox="0 0 200 160" role="img" aria-label={caption}>
        <circle cx="100" cy="52" r="18" fill="#3fa1d9" />
        <circle cx="66" cy="104" r="12" fill="#e5533d" />
        <circle cx="134" cy="104" r="12" fill="#e5533d" />
        <path d="M88 66 L76 92" stroke="rgba(226,240,252,0.7)" strokeWidth="4" strokeLinecap="round" />
        <path d="M112 66 L124 92" stroke="rgba(226,240,252,0.7)" strokeWidth="4" strokeLinecap="round" />
        <text x="100" y="57" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">O</text>
        <text x="66" y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">H</text>
        <text x="134" y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">H</text>
      </svg>
    )
  }

  if (visual === "reaction") {
    return (
      <svg width="220" height="120" viewBox="0 0 220 120" role="img" aria-label={caption}>
        <rect x="10" y="36" width="52" height="52" rx="10" fill="#2f7fd4" opacity="0.8" />
        <rect x="76" y="36" width="52" height="52" rx="10" fill="#4cc4f0" opacity="0.8" />
        <path d="M134 62 L168 62" stroke="#9db1c9" strokeWidth="3" />
        <path d="M160 54 L172 62 L160 70" fill="none" stroke="#9db1c9" strokeWidth="3" strokeLinecap="round" />
        <rect x="176" y="36" width="36" height="52" rx="10" fill="#2bb3a3" opacity="0.9" />
        <text x="36" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">A</text>
        <text x="102" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">B</text>
        <text x="194" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">AB</text>
      </svg>
    )
  }

  if (visual === "table") {
    const cats = ["#2f7fd4", "#4cc4f0", "#2bb3a3", "#e2a52f", "#e5533d", "#946edd", "#e978b4"]
    return (
      <svg width="220" height="120" viewBox="0 0 220 120" role="img" aria-label={caption}>
        {Array.from({ length: 12 }).map((_, index) => {
          const row = Math.floor(index / 6)
          const col = index % 6
          return (
            <rect
              key={index}
              x={10 + col * 34}
              y={14 + row * 44}
              width="28"
              height="38"
              rx="5"
              fill={cats[index % cats.length]}
              opacity="0.85"
            />
          )
        })}
      </svg>
    )
  }

  if (visual === "acid" || visual === "base") {
    const color = visual === "acid" ? "#e5533d" : "#3fa1d9"
    return (
      <svg width="160" height="150" viewBox="0 0 160 150" role="img" aria-label={caption}>
        <path d="M70 20 L70 64 L34 124 Q30 136 44 136 L116 136 Q130 136 126 124 L90 64 L90 20 Z" fill="rgba(226,240,252,0.14)" stroke="rgba(214,236,252,0.72)" strokeWidth="2" />
        <rect x="42" y="88" width="76" height="48" fill={color} opacity="0.55" />
        <ellipse cx="80" cy="88" rx="38" ry="4" fill={color} opacity="0.6" />
      </svg>
    )
  }

  if (visual === "salt") {
    return (
      <svg width="160" height="150" viewBox="0 0 160 150" role="img" aria-label={caption}>
        <g fill="#e9f1fb">
          <rect x="46" y="66" width="24" height="24" rx="4" transform="rotate(12 58 78)" />
          <rect x="76" y="56" width="28" height="28" rx="4" transform="rotate(-8 90 70)" />
          <rect x="64" y="96" width="22" height="22" rx="4" transform="rotate(20 75 107)" />
        </g>
        <text x="80" y="138" textAnchor="middle" fontSize="13" fontWeight="700" fill="#9db1c9">NaCl</text>
      </svg>
    )
  }

  return null
}

export default function Learn({ navigate }) {
  const { t, pick } = useLanguage()
  const { userMode, setUserMode } = useLab()
  const [activeId, setActiveId] = useState(learnTopics[0].id)

  const active = useMemo(() => learnTopics.find((item) => item.id === activeId) || learnTopics[0], [activeId])
  const phColors = [
    "#b3202c", "#e5533d", "#ea7a3c", "#f0932b", "#f0b429", "#c4c34a", "#8fbf4a",
    "#4cb782", "#3fbf9a", "#3fa1d9", "#4b6fd8", "#5b4fd8", "#7b4fbf", "#5c2d91",
  ]

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <header className="page-head">
        <h1>{t("learn.title")}</h1>
        <p>{t("learn.subtitle")}</p>
      </header>

      <div className="page-toolbar" style={{ justifyContent: "space-between" }}>
        <span className="muted" style={{ fontSize: "0.88rem" }}>{t("learn.modeNote")}</span>
        <ModeSwitch value={userMode} onChange={setUserMode} />
      </div>

      <div className="learn-layout">
        <aside className="card learn-list" aria-label={t("learn.topicList")}>
          <p className="footer__title" style={{ marginBottom: "0.4rem" }}>{t("learn.topicList")}</p>
          {learnTopics.map((topic) => {
            const Icon = ICONS[topic.icon] || BookOpen
            return (
              <button
                key={topic.id}
                type="button"
                className={`learn-list__btn${topic.id === activeId ? " is-active" : ""}`}
                onClick={() => setActiveId(topic.id)}
                aria-pressed={topic.id === activeId}
              >
                <Icon size={16} aria-hidden="true" />
                {pick(topic.title)}
              </button>
            )
          })}
        </aside>

        <div className="learn-body">
          <section className="card">
            <h2>{pick(active.title)}</h2>
            <p className="muted">{pick(active.text)}</p>

            {userMode === "advanced" && active.advanced && (
              <div className="learn-advanced">
                <p style={{ margin: 0 }}>{pick(active.advanced)}</p>
              </div>
            )}

            <ul className="learn-facts" style={{ marginTop: "1rem" }}>
              {active.facts.map((fact, index) => (
                <li key={`${active.id}-fact-${index}`}>
                  <Check size={16} aria-hidden="true" />
                  <span>{pick(fact)}</span>
                </li>
              ))}
            </ul>

            <div className="row" style={{ marginTop: "1.2rem" }}>
              <button type="button" className="btn btn--primary" onClick={() => navigate(ROUTES.laboratory)}>
                <FlaskConical size={16} aria-hidden="true" />
                {t("learn.goToLab")}
              </button>
            </div>
          </section>

          <section className="learn-visual card" style={{ display: "grid", placeItems: "center" }}>
            {active.id === "ph" ? (
              <div className="ph-scale">
                <div className="ph-scale__bar" role="img" aria-label={t("learn.phScaleTitle")}>
                  {phColors.map((color, index) => (
                    <span key={color} className="ph-scale__seg" style={{ background: color }}>
                      {index}
                    </span>
                  ))}
                </div>
                <div className="ph-scale__labels">
                  <span>{t("learn.phAcid")} · {t("learn.phStrongAcid")}</span>
                  <span>{t("learn.phNeutral")} (7)</span>
                  <span>{t("learn.phBase")} · {t("learn.phStrongBase")}</span>
                </div>
                <div className="ph-examples">
                  {active.facts.map((fact, index) => (
                    <div key={`ph-${index}`}>
                      <span>{pick(fact)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <LearnVisual visual={active.visual} caption={pick(active.title)} />
                <span className="learn-visual__caption">{pick(active.title)}</span>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
