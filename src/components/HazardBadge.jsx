import { useLanguage } from "../context/LanguageContext.jsx"

const ICONS = { none: "⚪", low: "🟢", medium: "🟡", high: "🔴" }

/** Xavflilik darajasi belgisi (badge). */
export default function HazardBadge({ level = "none", labelPrefix = "" }) {
  const { t } = useLanguage()
  const safeLevel = ["none", "low", "medium", "high"].includes(level) ? level : "none"

  return (
    <span className={`badge badge--${safeLevel}`}>
      <span aria-hidden="true">{ICONS[safeLevel]}</span>
      {labelPrefix ? `${labelPrefix}: ` : ""}
      {t(`lab.hazardLevels.${safeLevel}`)}
    </span>
  )
}
