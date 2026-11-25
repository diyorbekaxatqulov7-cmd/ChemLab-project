import { Moon, Sun } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { useTheme } from "../context/ThemeContext.jsx"

/** Tungi / kunduzgi rejim almashtirgichi */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const label = theme === "dark" ? t("nav.toLight") : t("nav.toDark")

  return (
    <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
