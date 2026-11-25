import { useEffect, useId, useRef } from "react"
import { X } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"

/** Qayta ishlatiladigan dialog: Escape bilan yopiladi, fokus dialog ichida bo'ladi. */
export default function Modal({ title, icon, onClose, children, footer, tone = "" }) {
  const { t } = useLanguage()
  const dialogRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const previous = document.activeElement
    const node = dialogRef.current
    if (node) node.focus()

    const handleKey = (event) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKey)
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = overflow
      if (previous && typeof previous.focus === "function") previous.focus()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="modal__head">
          {icon && <span aria-hidden="true" className={tone ? `badge badge--${tone}` : ""}>{icon}</span>}
          <h2 id={titleId}>{title}</h2>
          <button
            type="button"
            className="icon-btn modal__close"
            onClick={onClose}
            aria-label={t("common.close")}
            title={t("common.close")}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <div className="modal__body">{children}</div>
        {footer && <div className="modal__actions">{footer}</div>}
      </div>
    </div>
  )
}
