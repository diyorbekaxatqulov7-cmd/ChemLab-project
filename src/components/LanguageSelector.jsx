import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"

/** Til tanlagich: 🇺🇿 O'zbekcha ▾ */
export default function LanguageSelector() {
  const { lang, setLang, languages, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handlePointer = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false)
    }
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", handlePointer)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handlePointer)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  const current = languages.find((item) => item.code === lang) || languages[0]

  return (
    <div className="lang" ref={wrapperRef}>
      <button
        type="button"
        className="lang__button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("nav.language")}: ${current.label}`}
      >
        <Globe size={16} aria-hidden="true" />
        <span className="lang__flag" aria-hidden="true">
          {current.flag}
        </span>
        <span className="lang__label">{current.label}</span>
        <ChevronDown size={15} aria-hidden="true" />
      </button>

      {open && (
        <div className="lang__menu" role="listbox" aria-label={t("nav.language")}>
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={item.code === lang}
              className={`lang__item${item.code === lang ? " is-active" : ""}`}
              onClick={() => {
                setLang(item.code)
                setOpen(false)
              }}
            >
              <span aria-hidden="true">{item.flag}</span>
              <span>{item.label}</span>
              <small>{item.short}</small>
              {item.code === lang && <Check size={15} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
