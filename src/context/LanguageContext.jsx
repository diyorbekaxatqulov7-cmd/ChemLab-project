import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { createTranslator, DEFAULT_LANGUAGE, LANGUAGES } from "../data/translations"

const STORAGE_KEY = "chemlab-language"

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (LANGUAGES.some((item) => item.code === saved)) return saved
    } catch {
      /* localStorage mavjud emas */
    }
    return DEFAULT_LANGUAGE
  })

  const t = useMemo(() => createTranslator(lang), [lang])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* saqlash imkonsiz */
    }
    document.documentElement.setAttribute("lang", lang)
    document.title = t("brand.name") + " — " + t("brand.tagline")
  }, [lang, t])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      languages: LANGUAGES,
      /** Uch tildagi matn obyektidan tanlangan tilni oladi: pick({uz:"Suv", en:"Water"}) */
      pick: (localized, fallback = "") => {
        if (!localized) return fallback
        return localized[lang] || localized.uz || fallback
      },
    }),
    [lang, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage faqat LanguageProvider ichida ishlatiladi")
  return context
}
