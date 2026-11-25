import { FlaskConical } from "lucide-react"
import { ROUTES } from "../hooks/useRoute.js"
import { useLanguage } from "../context/LanguageContext.jsx"

export default function Footer({ navigate }) {
  const { t, lang } = useLanguage()

  const links = [
    { path: ROUTES.home, label: t("nav.home") },
    { path: ROUTES.laboratory, label: t("nav.laboratory") },
    { path: ROUTES.elements, label: t("nav.elements") },
    { path: ROUTES.experiments, label: t("nav.experiments") },
    { path: ROUTES.learn, label: t("nav.learn") },
  ]

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand" style={{ marginBottom: "0.6rem" }}>
            <span className="brand__mark" aria-hidden="true">
              <FlaskConical size={19} />
            </span>
            <span className="brand__text">
              <span className="brand__name">{t("brand.name")}</span>
              <span className="brand__tagline">{t("brand.tagline")}</span>
            </span>
          </div>
          <p className="muted" style={{ fontSize: "0.92rem", maxWidth: "38ch" }}>
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <p className="footer__title">{t("footer.navTitle")}</p>
          <ul className="footer__list">
            {links.map((link) => (
              <li key={link.path}>
                <a
                  href={`#${link.path}`}
                  onClick={(event) => {
                    event.preventDefault()
                    navigate(link.path)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__title">{t("footer.infoTitle")}</p>
          <ul className="footer__list">
            <li>
              <span className="muted" style={{ fontSize: "0.9rem" }}>
                {t("footer.safetyTitle")}: {t("footer.safetyText")}
              </span>
            </li>
            <li>
              <span className="muted" style={{ fontSize: "0.9rem" }}>
                {t("footer.disclaimer")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {t("brand.name")} · {t("footer.rights")}
        </span>
        <span>
          {t("footer.built")} · {t("nav.language")}: {lang.toUpperCase()}
        </span>
      </div>
    </footer>
  )
}
