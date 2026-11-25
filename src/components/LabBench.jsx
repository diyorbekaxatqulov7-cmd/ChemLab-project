import { Droplet, Eraser, Lightbulb, LampDesk } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import Flask from "./Flask.jsx"
import ReagentBottle from "./ReagentBottle.jsx"
import { Beaker, GraduatedCylinder, PhIndicator, Pipette, TestTubeRack, Thermometer } from "./LabGlassware.jsx"
import { blendColors } from "../utils/colors.js"
import { getSubstance } from "../data/substances.js"

const SHELF_IDS = ["hcl", "naoh", "cuso4", "water", "salt", "magnesium"]

function bubbleCount(intensity) {
  if (intensity === "high") return 9
  if (intensity === "medium") return 6
  return 4
}

/**
 * Laboratoriya stoli: jihozlar, reagentlar javoni va reaksiya idishi (kolba).
 * Kolba - drag & drop maqsadi (drop target).
 */
export default function LabBench({
  phase = "idle",
  substances = [],
  animation = null,
  isDragover = false,
  onDragOver,
  onDragLeave,
  onDrop,
  lampLit,
  onToggleLamp,
  onClear,
  canClear,
  dropHint,
}) {
  const { t, pick } = useLanguage()

  const idleColor = blendColors(substances.map((item) => item.solutionColor))
  const isReacting = phase === "reacting"
  const isDone = phase === "done"
  const isPouring = phase === "pouring"

  const liquidColor =
    (isReacting || isDone || isPouring) && animation?.liquid ? animation.liquid : idleColor

  const fill = () => {
    if (!substances.length && !animation) return 0
    if (isPouring) return 0.5
    if (isReacting) return 0.55
    if (isDone) return 0.6
    return substances.length >= 2 ? 0.44 : 0.3
  }

  const bubbles = isReacting || isDone ? (animation?.bubbles ? bubbleCount(animation.intensity) : 0) : 0
  const glow = isReacting || isDone ? animation?.glow || (animation?.light ? "#fbbf24" : null) : null
  const precipitate = isDone ? animation?.precipitate || null : null
  const heat =
    isReacting || isDone
      ? animation?.intensity === "high"
        ? 0.85
        : animation?.intensity === "medium"
          ? 0.6
          : 0.4
      : 0.34

  return (
    <section className="card bench-card" aria-label={t("lab.benchLabel")}>
      <div className="bench-card__bar">
        <span className="bench-card__title">{t("lab.benchLabel")}</span>

        <button
          type="button"
          className="icon-btn"
          onClick={onToggleLamp}
          aria-pressed={lampLit}
          aria-label={lampLit ? t("lab.lampOff") : t("lab.lampOn")}
          title={lampLit ? t("lab.lampOff") : t("lab.lampOn")}
        >
          {lampLit ? <Lightbulb size={17} aria-hidden="true" /> : <LampDesk size={17} aria-hidden="true" />}
        </button>

        <button type="button" className="btn btn--ghost btn--sm" onClick={onClear} disabled={!canClear}>
          <Eraser size={15} aria-hidden="true" />
          {t("lab.clear")}
        </button>
      </div>

      <div className={`bench${lampLit ? " is-lit" : ""}`}>
        <div className="bench__wall">
          <span className="bench__lamp" aria-hidden="true" />
          <div className="bench__shelf">
            <span className="bench__shelf-line" aria-hidden="true" />
            {SHELF_IDS.map((id) => {
              const substance = getSubstance(id)
              return substance ? <ReagentBottle key={id} substance={substance} width={30} showLabel={false} /> : null
            })}
          </div>
          <span className="bench__lamp-light" aria-hidden="true" />
        </div>

        <div className="bench__surface">
          <div className="bench-item">
            <span className="bench-item__shadow" aria-hidden="true" />
            <TestTubeRack width={118} />
            <span className="bench-item__label">{t("lab.rackCaption")}</span>
          </div>

          <div className="bench-item bench-item--main">
            <span className="bench-item__shadow" aria-hidden="true" />
            <div
              onDragOver={onDragOver}
              onDragEnter={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              style={{ display: "inline-block" }}
            >
              <Flask
                phase={phase}
                fill={fill()}
                color={liquidColor}
                bubbles={bubbles}
                glow={glow}
                precipitate={precipitate}
                dropHint={dropHint}
                extraClassName={isDragover ? "is-dragover" : ""}
                label={`${t("lab.vessel")} — ${t("lab.flaskCaption")}`}
              />
            </div>
            <span className="bench-item__label">
              {t("lab.flaskCaption")} · {t("lab.flaskVolume")}
            </span>
          </div>

          <div className="bench-item">
            <span className="bench-item__shadow" aria-hidden="true" />
            <Beaker width={92} />
            <span className="bench-item__label">{t("lab.beakerCaption")}</span>
          </div>

          <div className="bench-item bench-item--optional">
            <span className="bench-item__shadow" aria-hidden="true" />
            <GraduatedCylinder width={52} />
            <span className="bench-item__label">{t("lab.cylinderCaption")}</span>
          </div>

          <div className="bench-item bench-item--optional">
            <div className="row" style={{ gap: "0.4rem", justifyContent: "center", alignItems: "flex-end" }}>
              <Thermometer value={heat} />
              <PhIndicator width={64} />
              <Pipette />
            </div>
            <span className="bench-item__label">
              {t("lab.thermometerCaption")} · {t("lab.phCaption")}
            </span>
          </div>
        </div>
      </div>

      <div className="mix-bar__hint" style={{ padding: "0.7rem 1rem", display: "flex", gap: "0.5rem" }}>
        <Droplet size={15} aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }} />
        <span>
          {t("lab.dropHint")} — {t("lab.clickHint")}
        </span>
      </div>
    </section>
  )
}
