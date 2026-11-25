/**
 * ChemLab - laboratoriya holati (flask, aralashtirish jarayoni, tarix).
 * Server kerak emas: barcha holat brauzerda saqlanadi.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { getReactionFor } from "../data/reactions"
import { getSubstance } from "../data/substances"

const LabContext = createContext(null)

export const USER_MODES = ["beginner", "student", "advanced"]

/** Animatsiya bosqichlari: idle -> pouring -> reacting -> done */
export const PHASES = { IDLE: "idle", POURING: "pouring", REACTING: "reacting", DONE: "done" }

export function LabProvider({ children }) {
  const [contents, setContents] = useState([])
  const [phase, setPhase] = useState(PHASES.IDLE)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([])
  const [userMode, setUserMode] = useState("beginner")
  const [message, setMessage] = useState(null)
  const [pendingRun, setPendingRun] = useState(null)
  const timers = useRef([])

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const prefersReducedMotion = useCallback(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  const addSubstance = useCallback(
    (id) => {
      const substance = getSubstance(id)
      if (!substance) return
      clearTimers()
      setResult(null)
      setPhase(PHASES.IDLE)
      setPendingRun(null)
      setContents((current) => {
        if (current.includes(id)) {
          setMessage({ type: "info", textKey: "lab.errorSameSubstance" })
          return current
        }
        setMessage({ type: "success", textKey: "lab.added", prefix: substance.formula })
        return current.length >= 2 ? [id] : [...current, id]
      })
    },
    [clearTimers],
  )

  const removeSubstance = useCallback(
    (id) => {
      const substance = getSubstance(id)
      clearTimers()
      setResult(null)
      setPhase(PHASES.IDLE)
      setMessage({ type: "info", textKey: "lab.removed", prefix: substance ? substance.formula : "" })
      setContents((current) => current.filter((item) => item !== id))
    },
    [clearTimers],
  )

  const clearFlask = useCallback(() => {
    clearTimers()
    setContents([])
    setResult(null)
    setPhase(PHASES.IDLE)
    setMessage(null)
    setPendingRun(null)
  }, [clearTimers])

  const runMix = useCallback(
    (pair) => {
      const [first, second] = pair
      const outcome = getReactionFor(first, second)
      if (!outcome) return

      if (outcome.kind === "same") {
        setMessage({ type: "error", textKey: "lab.errorSameSubstance" })
        return
      }
      if (outcome.kind === "unknown") {
        setMessage({ type: "error", textKey: "lab.errorUnknown" })
        return
      }

      setMessage(null)
      const animation = outcome.animation || { duration: 2200 }
      const reduce = prefersReducedMotion()
      const total = reduce ? 360 : Math.max(1400, animation.duration || 2200)
      const pourTime = reduce ? 160 : Math.round(total * 0.35)
      const reactTime = reduce ? 200 : Math.round(total * 0.65)

      clearTimers()
      setResult(outcome)
      setPhase(PHASES.POURING)

      timers.current.push(
        window.setTimeout(() => setPhase(PHASES.REACTING), pourTime),
        window.setTimeout(() => {
          setPhase(PHASES.DONE)
          setHistory((current) =>
            [{ id: `${outcome.id}-${Date.now()}`, pair, result: outcome, at: new Date() }, ...current].slice(0, 8),
          )
        }, pourTime + reactTime),
      )
    },
    [clearTimers, prefersReducedMotion],
  )

  const mix = useCallback(() => {
    if (contents.length < 2) {
      setMessage({ type: "error", textKey: "lab.errorSelectTwo" })
      return
    }
    const outcome = getReactionFor(contents[0], contents[1])
    if (outcome && outcome.kind === "reaction" && outcome.hazard === "high") {
      setPendingRun([...contents])
      return
    }
    runMix([...contents])
  }, [contents, runMix])

  const confirmPendingRun = useCallback(() => {
    if (!pendingRun) return
    const pair = [...pendingRun]
    setPendingRun(null)
    runMix(pair)
  }, [pendingRun, runMix])

  const cancelPendingRun = useCallback(() => setPendingRun(null), [])
  const clearHistory = useCallback(() => setHistory([]), [])

  /** Tajribalar sahifasidan kolbani tayyor holatda yuklash. */
  const loadPreset = useCallback(
    (pair) => {
      clearTimers()
      setContents([pair[0], pair[1]])
      setResult(null)
      setPhase(PHASES.IDLE)
      setMessage({ type: "info", textKey: "experiments.preloaded" })
      setPendingRun(null)
    },
    [clearTimers],
  )

  const computed = useMemo(() => {
    const substancesInFlask = contents.map((id) => getSubstance(id)).filter(Boolean)
    return {
      substancesInFlask,
      preview: contents.length === 2 ? getReactionFor(contents[0], contents[1]) : null,
      ready: contents.length === 2,
      isBusy: phase === PHASES.POURING || phase === PHASES.REACTING,
      showResult: phase === PHASES.DONE && Boolean(result),
      animation: result ? result.animation || null : null,
    }
  }, [contents, phase, result])

  const value = useMemo(
    () => ({
      contents,
      phase,
      PHASES,
      result,
      history,
      userMode,
      setUserMode,
      message,
      setMessage,
      pendingRun,
      addSubstance,
      removeSubstance,
      clearFlask,
      mix,
      confirmPendingRun,
      cancelPendingRun,
      loadPreset,
      clearHistory,
      ...computed,
    }),
    [
      contents,
      phase,
      result,
      history,
      userMode,
      message,
      pendingRun,
      addSubstance,
      removeSubstance,
      clearFlask,
      mix,
      confirmPendingRun,
      cancelPendingRun,
      loadPreset,
      clearHistory,
      computed,
    ],
  )

  return <LabContext.Provider value={value}>{children}</LabContext.Provider>
}

export function useLab() {
  const context = useContext(LabContext)
  if (!context) throw new Error("useLab faqat LabProvider ichida ishlatiladi")
  return context
}
