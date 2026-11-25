import { useCallback, useEffect, useState } from "react"

/** ChemLab sahifalari (hash-router, qo'shimcha kutubxonasiz). */
export const ROUTES = {
  home: "/",
  laboratory: "/laboratory",
  elements: "/elements",
  experiments: "/experiments",
  learn: "/learn",
}

function readPath() {
  if (typeof window === "undefined") return ROUTES.home
  const hash = window.location.hash.replace(/^#/, "")
  return hash || ROUTES.home
}

export function useRoute() {
  const [path, setPath] = useState(readPath)

  useEffect(() => {
    const handleChange = () => setPath(readPath())
    window.addEventListener("hashchange", handleChange)
    return () => window.removeEventListener("hashchange", handleChange)
  }, [])

  const navigate = useCallback((next) => {
    const target = next || ROUTES.home
    if (readPath() === target) {
      setPath(target)
      return
    }
    window.location.hash = target
  }, [])

  return { path, navigate }
}
