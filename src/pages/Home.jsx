import {
  ArrowRight,
  Atom,
  BookOpen,
  Check,
  FlaskConical,
  Languages,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { useLab } from "../context/LabContext.jsx"
import { ROUTES } from "../hooks/useRoute.js"
import Flask from "../components/Flask.jsx"
import ReagentBottle from "../components/ReagentBottle.jsx"
import HazardBadge from "../components/HazardBadge.jsx"
import SafetyNotice from "../components/SafetyNotice.jsx"
import { experiments } from "../data/experiments.js"
import { getSubstance } from "../data/substances.js"

const FEATURE_ICONS = [FlaskConical, ShieldCheck, Atom, Languages]
const STEP_ICONS = [MousePointerClick, FlaskConical, Sparkles, BookOpen]
const MODE_EMOJI = { beginner: "👶", student: "🎓", advanced: "🔬" }

export default function Home({ navigate }) {
  const { t, pick } = useLanguage()
  const { loadPreset } = useLab()

  const features = t("features.items") || []
  const steps = t("how.steps") || []
  const stats = t("home.stats") || []
  const previewSubstances = ["hcl", "naoh", "cuso4"].map((id) => getSubstance(id)).filter(Boolean)

  const startLab = () => navigate(ROUTES.laboratory)

  const startExperiment = (pair) => {
    loadPreset(pair)
    navigate(ROUTES.laboratory)
  }

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="hero__badge">
              <span aria-hidden="true">🇺🇿</span> {t("hero.badge")}
            </span>
            <h1 className="hero__title">
              {t("hero.titleTop")}
              <span className="hero__accent">{t("hero.titleBottom")}</span>
            </h1>
            <p className="hero__lead">{t("hero.subtitle")}</p>
            <p className="hero__desc">{t("hero.description")}</p>

            <div className="hero__cta">
              <button type="button" className="btn btn--primary btn--lg" onClick={startLab}>
                <FlaskConical size={18} aria-hidden="true" />
                {t("hero.ctaPrimary")}
              </button>
              <button type="button" className="btn btn--secondary btn--lg" onClick={() => navigate(ROUTES.learn)}>
                <BookOpen size={18} aria-hidden="true" />
                {t("hero.ctaSecondary")}
              </button>
            </div>

            <ul className="hero__points">
              <li>
                <Check size={16} aria-hidden="true" /> {t("hero.hint")}
              </li>
              <li>
                <Check size={16} aria-hidden="true" /> {t("modes.beginner").text}
              </li>
            </ul>
          </div>

          <div className="hero__visual">
            <div className="card card--glass" style={{ padding: "clamp(1rem, 2.4vw, 1.5rem)" }}>
              <div className="row" style={{ justifyContent: "space-between" }}>
                <span className="chip">
                  <Wand2 size={13} aria-hidden="true" /> {t("safety.badge")}
                </span>
                <HazardBadge level="medium" />
              </div>

              <div style={{ display: "grid", placeItems: "center", padding: "0.6rem 0 0" }}>
                <Flask phase="reacting" fill={0.52} color="#7dd3fc" bubbles={7} glow="#38bdf8" width={220} />
              </div>

              <div className="row" style={{ justifyContent: "center", marginBottom: "0.9rem" }}>
                {previewSubstances.map((substance) => (
                  <div key={substance.id} className="row" style={{ gap: "0.35rem" }}>
                    <ReagentBottle substance={substance} width={26} showLabel={false} />
                    <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{substance.formula}</span>
                  </div>
                ))}
              </div>

              <div className="result-equation" style={{ fontSize: "1rem" }}>
                HCl + NaOH → NaCl + H₂O
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="stat-row">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <span className="stat__value">{item.value}</span>
                <span className="stat__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("brand.tagline")}</span>
            <h2>{t("features.title")}</h2>
            <p>{t("features.subtitle")}</p>
          </div>

          <div className="grid grid-4">
            {features.map((item, index) => {
              const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length]
              return (
                <article className="card feature-card" key={item.title}>
                  <span className="feature-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("nav.laboratory")}</span>
            <h2>{t("how.title")}</h2>
            <p>{t("how.subtitle")}</p>
          </div>

          <div className="steps">
            {steps.map((step, index) => {
              const Icon = STEP_ICONS[index % STEP_ICONS.length]
              return (
                <article className="card step-card" key={step.title}>
                  <span className="step-card__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="feature-card__icon" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <h3 className="card__title">{step.title}</h3>
                  <p className="card__text">{step.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("nav.experiments")}</span>
            <h2>{t("experiments.title")}</h2>
            <p>{t("experiments.subtitle")}</p>
          </div>

          <div className="grid grid-3">
            {experiments.slice(0, 3).map((experiment) => (
              <article className="card exp-card" key={experiment.id}>
                <div className="exp-card__top">
                  <span className="exp-card__icon" aria-hidden="true">
                    <FlaskConical size={20} />
                  </span>
                  <span className="badge badge--none">{t(`experiments.difficulty.${experiment.difficulty}`)}</span>
                </div>
                <h3 className="card__title">{pick(experiment.title)}</h3>
                <p className="card__text">{pick(experiment.description)}</p>
                <div className="exp-substances">
                  {experiment.pair.map((id) => {
                    const substance = getSubstance(id)
                    return substance ? (
                      <span className="chip" key={id}>
                        {substance.formula}
                      </span>
                    ) : null
                  })}
                </div>
                <div className="exp-card__footer">
                  <HazardBadge level={experiment.hazard} />
                  <button
                    type="button"
                    className="btn btn--primary btn--sm"
                    onClick={() => startExperiment(experiment.pair)}
                  >
                    {t("experiments.start")}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="row" style={{ justifyContent: "center", marginTop: "1.4rem" }}>
            <button type="button" className="btn btn--secondary" onClick={() => navigate(ROUTES.experiments)}>
              {t("homeCta.secondary")}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("modes.label")}</span>
            <h2>{t("modes.title")}</h2>
            <p>{t("modes.subtitle")}</p>
          </div>

          <div className="grid grid-3">
            {["beginner", "student", "advanced"].map((mode) => (
              <div className="card feature-card" key={mode}>
                <span className="mode-card__emoji" aria-hidden="true">
                  {MODE_EMOJI[mode]}
                </span>
                <h3 className="card__title">{t(`modes.${mode}.name`)}</h3>
                <p className="card__text">{t(`modes.${mode}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.2rem" }}>
          <SafetyNotice title={t("safety.title")} text={t("safety.text")} variant="warn" />
          <SafetyNotice title={t("footer.safetyTitle")} text={t("footer.disclaimer")} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>{t("homeCta.title")}</h2>
            <p>{t("homeCta.text")}</p>
            <div className="cta-banner__actions">
              <button type="button" className="btn btn--primary btn--lg" onClick={startLab}>
                <FlaskConical size={18} aria-hidden="true" />
                {t("homeCta.button")}
              </button>
              <button type="button" className="btn btn--secondary btn--lg" onClick={() => navigate(ROUTES.elements)}>
                {t("nav.elements")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
