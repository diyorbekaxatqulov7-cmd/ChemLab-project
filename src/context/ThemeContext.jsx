import { createContext, useContext, useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "chemlab-theme"

const ThemeContext = createContext(null)

function readInitialTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "light" || saved === "dark") return saved
  } catch {
    /* localStorage mavjud emas */
  }
  return "dark"
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* saqlash imkonsiz */
    }
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme faqat ThemeProvider ichida ishlatiladi")
  return context
}
