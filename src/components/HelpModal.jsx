import { LifeBuoy } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import Modal from "./Modal.jsx"

/** Yordam oynasi: tez boshlash, interfeys, xavfsizlik va klaviatura bo'limlari. */
export default function HelpModal({ onClose }) {
  const { t } = useLanguage()
  const quickStart = t("help.quickStart") || []
  const interfaceItems = t("help.interfaceItems") || []
  const safetyItems = t("help.safetyItems") || []
  const keyboardItems = t("help.keyboardItems") || []

  return (
    <Modal
      title={`${t("help.title")} — ${t("brand.name")}`}
      icon={<LifeBuoy size={18} aria-hidden="true" />}
      onClose={onClose}
      footer={
        <button type="button" className="btn btn--primary" onClick={onClose}>
          {t("help.gotIt")}
        </button>
      }
    >
      <p className="muted">{t("help.subtitle")}</p>

      <section className="modal-section">
        <h3>{t("help.quickStartTitle")}</h3>
        <ul>
          {quickStart.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="modal-section">
        <h3>{t("help.interfaceTitle")}</h3>
        <ul>
          {interfaceItems.map((item) => (
            <li key={item.title}>
              <strong>{item.title}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="modal-section">
        <h3>{t("help.safetyTitle")}</h3>
        <ul>
          {safetyItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="modal-section">
        <h3>{t("help.keyboardTitle")}</h3>
        <ul>
          {keyboardItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="notice notice--warn" style={{ marginTop: "1.1rem" }}>
        <span aria-hidden="true">⚠️</span>
        <div>
          <strong>{t("safety.title")}</strong>
          {t("safety.text")}
        </div>
      </div>
    </Modal>
  )
}
