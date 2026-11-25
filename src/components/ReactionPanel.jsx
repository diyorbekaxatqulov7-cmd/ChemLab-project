import { AlertTriangle, ArrowRight, Atom, CheckCircle2, FlaskConical, Info, RotateCcw, Sparkles } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { reactionTypeName } from "../data/reactions.js"
import { getSubstance } from "../data/substances.js"
import HazardBadge from "./HazardBadge.jsx"

/**
 * Reaksiya natijasi paneli: tenglama, turi, xavfliligi, kuzatishlar va izoh.
 * Izoh tanlangan darajaga (boshlang'ich / o'quvchi / ilg'or) moslashadi.
 */
export default function ReactionPanel({ result, userMode = "beginner", onReset, onGoExperiments }) {
  const { t, lang, pick } = useLanguage()
  if (!result) return null

  const isReaction = result.kind === "reaction"
  const isNoReaction = result.kind === "noReaction"
  const title = isReaction ? pick(result.name) : t("lab.noReactionName")
  const typeName = reactionTypeName(result.typeKey || "none", lang)
  const observedKeys = result.observed || ["noChange"]
  const notes = result.notes ? pick(result.notes[userMode] || result.notes.beginner) : pick(result.reason)
  const products = (result.products || []).map((id) => getSubstance(id)).filter(Boolean)

  return (
    <section className="card result-panel" aria-live="polite" aria-label={t("lab.resultTitle")}>
      <div className="result-panel__head">
        <h2>
          <FlaskConical size={19} aria-hidden="true" style={{ verticalAlign: "-3px", marginRight: "0.4rem" }} />
          {t("lab.resultTitle")}
        </h2>
        <div className="row">
          <span className={`badge ${isReaction ? "badge--low" : "badge--none"}`}>
            {isReaction ? <CheckCircle2 size={14} aria-hidden="true" /> : <Info size={14} aria-hidden="true" />}
            {isReaction ? t("lab.statusSuccess") : t("lab.statusNoReaction")}
          </span>
          <HazardBadge level={result.hazard || "none"} labelPrefix={t("lab.hazardLabel")} />
        </div>
      </div>

      <p className="result-panel__summary" style={{ margin: 0, color: "var(--text-muted)" }}>
        {title}
      </p>

      {result.equation ? (
        <div className="result-equation">
          <span className="result-equation__label">{t("lab.equation")}</span>
          {result.equation}
        </div>
      ) : null}

      {isNoReaction && (
        <div className="notice notice--warn">
          <AlertTriangle size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <strong>{t("lab.statusNoReaction")}</strong>
            {pick(result.reason)}
          </div>
        </div>
      )}

      <div className="result-grid">
        <div className="info-block">
          <span className="info-block__label">{t("lab.typeLabel")}</span>
          <span className="info-block__value">{typeName || t("lab.hazardLevels.none")}</span>
        </div>
        <div className="info-block">
          <span className="info-block__label">{t("lab.statusLabel")}</span>
          <span className="info-block__value">
            {isReaction ? t("lab.statusSuccess") : t("lab.statusNoReaction")}
          </span>
        </div>
        {(result.gasName || result.precipitateName || products.length > 0) && (
          <div className="info-block">
            <span className="info-block__label">{t("lab.productsLabel")}</span>
            <span className="info-block__value">
              {[result.gasName, result.precipitateName, ...products.map((item) => pick(item.name))]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
        )}
      </div>

      <div className="result-grid">
        <div className="info-block">
          <span className="info-block__label">{t("lab.observedLabel")}</span>
          <ul className="observed-list">
            {observedKeys.map((key) => (
              <li key={key}>
                <Sparkles size={15} aria-hidden="true" />
                <span>{t(`lab.observations.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="result-notes">
          <span className="result-notes__mode">
            {t("lab.explanationLabel")} · {t(`modes.${userMode}.name`)}
          </span>
          <p>{notes || t(`modes.${userMode}.text`)}</p>
          {result.energyRequired && (
            <p className="muted" style={{ marginTop: "0.5rem", fontSize: "0.88rem" }}>
              ⚡ {t("lab.energyNote")}
            </p>
          )}
        </div>
      </div>

      <div className="result-footer">
        <span className="simulation-note">
          <Atom size={14} aria-hidden="true" />
          {t("lab.simulationNote")}
        </span>
        <div className="row">
          <button type="button" className="btn btn--secondary btn--sm" onClick={onReset}>
            <RotateCcw size={15} aria-hidden="true" />
            {t("lab.tryAgain")}
          </button>
          <button type="button" className="btn btn--primary btn--sm" onClick={onGoExperiments}>
            {t("experiments.start")}
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
