import { useMemo, useState } from "react"
import { Droplets, Eye, FlaskConical, Microscope, Wind, Zap } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { useLab } from "../context/LabContext.jsx"
import { ROUTES } from "../hooks/useRoute.js"
import { experiments } from "../data/experiments.js"
import { getReactionFor } from "../data/reactions.js"
import { getSubstance } from "../data/substances.js"
import HazardBadge from "../components/HazardBadge.jsx"
import SafetyNotice from "../components/SafetyNotice.jsx"

const ICONS = { flask: FlaskConical, microscope: Microscope, droplets: Droplets, wind: Wind, flame: FlameIcon, zap: Zap }

function FlameIcon(props) {
  return (
    <svg
      width={props.size || 20}
      height={props.size || 20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

export default function Experiments({ navigate }) {
  const { t, pick } = useLanguage()
  const { loadPreset } = useLab()
  const [difficulty, setDifficulty] = useState("all")

  const filtered = useMemo(
    () => experiments.filter((item) => difficulty === "all" || item.difficulty === difficulty),
    [difficulty],
  )

  const start = (pair) => {
    loadPreset(pair)
    navigate(ROUTES.laboratory)
  }

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <header className="page-head">
        <h1>{t("experiments.title")}</h1>
        <p>{t("experiments.subtitle")}</p>
      </header>

      <div className="page-toolbar">
        <div className="exp-filter" role="group" aria-label={t("experiments.difficultyLabel")}>
          {["all", "easy", "medium", "hard"].map((level) => (
            <button
              key={level}
              type="button"
              className={`chip chip--button${difficulty === level ? " chip--active" : ""}`}
              aria-pressed={difficulty === level}
              onClick={() => setDifficulty(level)}
            >
              {level === "all" ? t("experiments.filterAll") : t(`experiments.difficulty.${level}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-3">
        {filtered.map((experiment) => {
          const Icon = ICONS[experiment.icon] || FlaskConical
          const reaction = getReactionFor(experiment.pair[0], experiment.pair[1])
          return (
            <article className="card card--interactive exp-card" key={experiment.id}>
              <div className="exp-card__top">
                <span className="exp-card__icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <span className="badge badge--none">
                  {t("experiments.difficultyLabel")}: {t(`experiments.difficulty.${experiment.difficulty}`)}
                </span>
              </div>

              <h3 className="card__title">{pick(experiment.title)}</h3>
              <p className="card__text">{pick(experiment.description)}</p>

              {reaction && reaction.kind === "reaction" && (
                <p className="exp-card__eq">{reaction.equation}</p>
              )}

              <div className="exp-substances">
                <span className="faint" style={{ fontSize: "0.78rem" }}>
                  {t("experiments.substancesLabel")}:
                </span>
                {experiment.pair.map((id) => {
                  const substance = getSubstance(id)
                  return substance ? (
                    <span className="chip" key={id}>
                      {pick(substance.name)} · {substance.formula}
                    </span>
                  ) : null
                })}
              </div>

              <div className="exp-card__expect">
                <Eye size={15} aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>{t("experiments.expectsLabel")}:</strong> {pick(experiment.expect)}
                </span>
              </div>

              <div className="exp-card__footer">
                <HazardBadge level={experiment.hazard} />
                <button type="button" className="btn btn--primary btn--sm" onClick={() => start(experiment.pair)}>
                  <FlaskConical size={15} aria-hidden="true" />
                  {t("experiments.start")}
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state" style={{ marginTop: "1.2rem" }}>
          <span className="empty-state__icon" aria-hidden="true">
            🧪
          </span>
          <p className="muted" style={{ marginBottom: 0 }}>
            {t("common.noResults")}
          </p>
        </div>
      )}

      <div style={{ marginTop: "1.6rem" }}>
        <SafetyNotice title={t("safety.title")} text={t("safety.text")} variant="warn" />
      </div>
    </div>
  )
}
