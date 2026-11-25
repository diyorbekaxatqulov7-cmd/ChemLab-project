import { useLanguage } from "../context/LanguageContext.jsx"
import { USER_MODES } from "../context/LabContext.jsx"

const EMOJI = { beginner: "👶", student: "🎓", advanced: "🔬" }

/** Tushuntirish darajasini tanlash: boshlang'ich / o'quvchi / ilg'or. */
export default function ModeSwitch({ value, onChange }) {
  const { t } = useLanguage()

  return (
    <div className="mode-switch" role="group" aria-label={t("modes.label")}>
      {USER_MODES.map((mode) => (
        <button
          key={mode}
          type="button"
          className={`mode-switch__btn${mode === value ? " is-active" : ""}`}
          aria-pressed={mode === value}
          onClick={() => onChange(mode)}
          title={t(`modes.${mode}.text`)}
        >
          <span aria-hidden="true">{EMOJI[mode]}</span> {t(`modes.${mode}.name`)}
        </button>
      ))}
    </div>
  )
}
