import { useEffect, useState } from "react"
import { FlaskConical, HelpCircle, Menu, X } from "lucide-react"
import { ROUTES } from "../hooks/useRoute.js"
import { useLanguage } from "../context/LanguageContext.jsx"
import LanguageSelector from "./LanguageSelector.jsx"
import ThemeToggle from "./ThemeToggle.jsx"
import HelpModal from "./HelpModal.jsx"

export default function Navbar({ path, navigate }) {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  const links = [
    { path: ROUTES.home, label: t("nav.home") },
    { path: ROUTES.laboratory, label: t("nav.laboratory") },
    { path: ROUTES.elements, label: t("nav.elements") },
    { path: ROUTES.experiments, label: t("nav.experiments") },
    { path: ROUTES.learn, label: t("nav.learn") },
  ]

  useEffect(() => {
    setMenuOpen(false)
  }, [path])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  const go = (event, target) => {
    event.preventDefault()
    navigate(target)
    setMenuOpen(false)
  }

  return (
    <>
      <header className="navbar">
        <div className="container navbar__inner">
          <a className="brand" href={`#${ROUTES.home}`} onClick={(event) => go(event, ROUTES.home)}>
            <span className="brand__mark" aria-hidden="true">
              <FlaskConical size={19} />
            </span>
            <span className="brand__text">
              <span className="brand__name">{t("brand.name")}</span>
              <span className="brand__tagline">{t("brand.tagline")}</span>
            </span>
          </a>

          <nav className="navbar__nav" aria-label={t("nav.menu")}>
            {links.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                className={`navbar__link${path === link.path ? " is-active" : ""}`}
                aria-current={path === link.path ? "page" : undefined}
                onClick={(event) => go(event, link.path)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <ThemeToggle />
            <LanguageSelector />
            <button
              type="button"
              className="icon-btn"
              onClick={() => setHelpOpen(true)}
              aria-label={t("nav.help")}
              title={t("nav.help")}
            >
              <HelpCircle size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="icon-btn navbar__burger"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
          <div className="container">
            {links.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                className={`mobile-menu__link${path === link.path ? " is-active" : ""}`}
                onClick={(event) => go(event, link.path)}
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
    </>
  )
}
