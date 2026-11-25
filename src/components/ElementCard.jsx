import { useLanguage } from "../context/LanguageContext.jsx"
import { elementName } from "../data/elements.js"

/** Kategoriya ranglari (RGB uchlik ko'rinishida, CSS o'zgaruvchisiga beriladi). */
export const CATEGORY_RGB = {
  alkali: "229, 83, 61",
  alkaline: "226, 165, 47",
  transition: "47, 127, 212",
  postTransition: "94, 137, 178",
  metalloid: "43, 179, 163",
  nonmetal: "63, 191, 127",
  halogen: "76, 196, 240",
  noble: "148, 110, 220",
  lanthanide: "233, 120, 180",
  actinide: "200, 90, 140",
  unknown: "126, 139, 160",
}

/** Davriy jadval katakchasi (hover'da qisqa ma'lumot ko'rsatiladi). */
export default function ElementCard({ element, onSelect, isActive = false, isDim = false }) {
  const { lang, t } = useLanguage()
  const name = elementName(element, lang)
  const rgb = CATEGORY_RGB[element.cat] || CATEGORY_RGB.unknown

  return (
    <button
      type="button"
      className={`el-tile el-tile--${element.cat}${isActive ? " is-active" : ""}${isDim ? " is-dim" : ""}`}
      style={{ "--tile-rgb": rgb }}
      onClick={() => onSelect(element)}
      title={`${name} (${element.s}) — #${element.z} · ${element.mass} ${t("elements.massUnit")}`}
      aria-label={`${name} (${element.s}), ${t("elements.atomicNumber")}: ${element.z}`}
      aria-pressed={isActive}
    >
      <span className="el-tile__z" aria-hidden="true">
        {element.z}
      </span>
      <span className="el-tile__sym" aria-hidden="true">
        {element.s}
      </span>
      <span className="el-tile__name" aria-hidden="true">
        {name}
      </span>
    </button>
  )
}
