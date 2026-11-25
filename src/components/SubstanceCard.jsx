import { Plus } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { SUBSTANCE_CATEGORIES } from "../data/substances.js"
import HazardBadge from "./HazardBadge.jsx"
import ReagentBottle from "./ReagentBottle.jsx"

/**
 * Modda kartochkasi: sudrab tashlash (drag & drop) va tugma orqali qo'shish.
 * Klaviatura uchun ichidagi tugma ishlatiladi.
 */
export default function SubstanceCard({ substance, onAdd, isAdded = false }) {
  const { t, pick } = useLanguage()
  const name = pick(substance.name)
  const category = pick(SUBSTANCE_CATEGORIES[substance.category] || SUBSTANCE_CATEGORIES.other)
  const stateLabel = t(`elements.states.${substance.state}`)

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", substance.id)
    event.dataTransfer.effectAllowed = "copy"
  }

  return (
    <div
      className={`substance-card${isAdded ? " is-added" : ""}`}
      draggable
      onDragStart={handleDragStart}
      title={`${name} — ${t("lab.dragHint")}`}
    >
      <ReagentBottle substance={substance} width={46} />

      <div style={{ minWidth: 0 }}>
        <span className="substance-card__name">
          {name}
          <span className="substance-card__formula">{substance.formula}</span>
        </span>
        <span className="substance-card__meta">
          <span className="chip">{category}</span>
          <span>{stateLabel}</span>
        </span>
      </div>

      <div className="substance-card__add">
        <button
          type="button"
          className={`btn btn--sm ${isAdded ? "btn--secondary" : "btn--primary"}`}
          onClick={() => onAdd(substance.id)}
          aria-label={`${name} — ${t("lab.addToFlask")}`}
        >
          <Plus size={15} aria-hidden="true" />
          {isAdded ? t("lab.flaskContents") : t("lab.addToFlask")}
        </button>
        <HazardBadge level={substance.hazard} />
      </div>
    </div>
  )
}
