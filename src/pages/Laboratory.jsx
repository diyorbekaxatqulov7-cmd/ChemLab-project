import { useMemo, useState } from "react"
import {
  ArrowRight,
  Beaker as BeakerIcon,
  Flame,
  Info,
  Search,
  Sparkles,
  Trash2,
  TriangleAlert,
  X,
} from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { useLab } from "../context/LabContext.jsx"
import { ROUTES } from "../hooks/useRoute.js"
import { CATEGORY_IDS, SUBSTANCE_CATEGORIES, substances, substanceSearchText } from "../data/substances.js"
import { reactionTypeName } from "../data/reactions.js"
import LabBench from "../components/LabBench.jsx"
import SubstanceCard from "../components/SubstanceCard.jsx"
import ReactionPanel from "../components/ReactionPanel.jsx"
import ModeSwitch from "../components/ModeSwitch.jsx"
import Modal from "../components/Modal.jsx"
import HazardBadge from "../components/HazardBadge.jsx"
import SafetyNotice from "../components/SafetyNotice.jsx"

export default function Laboratory({ navigate }) {
  const { t, pick, lang } = useLanguage()
  const lab = useLab()
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [dragover, setDragover] = useState(false)
  const [lampLit, setLampLit] = useState(true)

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return substances.filter((item) => {
      const matchesCategory = category === "all" || item.category === category
      const matchesQuery = !needle || substanceSearchText(item).includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const handleDrop = (event) => {
    event.preventDefault()
    setDragover(false)
    const id = event.dataTransfer.getData("text/plain")
    if (id) lab.addSubstance(id)
  }

  const messageText = lab.message
    ? `${lab.message.prefix ? `${lab.message.prefix} — ` : ""}${lab.message.textKey ? t(lab.message.textKey) : ""}`
    : ""

  const pendingSubstances = (lab.pendingRun || [])
    .map((id) => substances.find((item) => item.id === id))
    .filter(Boolean)

  return (
    <div className="lab-page container">
      <div className="lab-head">
        <div>
          <h1>{t("lab.title")}</h1>
          <p>{t("lab.subtitle")}</p>
        </div>
        <div className="row">
          <ModeSwitch value={lab.userMode} onChange={lab.setUserMode} />
        </div>
      </div>

      {lab.message && (
        <div
          className={`lab-toast lab-toast--${lab.message.type}`}
          role="status"
          style={{ marginBottom: "0.9rem" }}
        >
          <Info size={16} aria-hidden="true" />
          <span>{messageText}</span>
          <button
            type="button"
            className="slot__remove"
            onClick={() => lab.setMessage(null)}
            aria-label={t("common.close")}
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="lab-layout">
        <div className="lab-col">
          <LabBench
            phase={lab.phase}
            substances={lab.substancesInFlask}
            animation={lab.animation}
            isDragover={dragover}
            onDragOver={(event) => {
              event.preventDefault()
              setDragover(true)
            }}
            onDragLeave={() => setDragover(false)}
            onDrop={handleDrop}
            lampLit={lampLit}
            onToggleLamp={() => setLampLit((value) => !value)}
            onClear={lab.clearFlask}
            canClear={lab.contents.length > 0}
            dropHint={t("lab.dropHint")}
          />

          <div className="mix-bar">
            <div className="mix-bar__slots">
              {[0, 1].map((index) => {
                const substance = lab.substancesInFlask[index]
                return (
                  <div className={`slot${substance ? " is-filled" : ""}`} key={`slot-${index}`}>
                    <span
                      className="slot__dot"
                      style={{ background: substance ? substance.solutionColor : "transparent" }}
                      aria-hidden="true"
                    />
                    <span className="slot__body">
                      <span className="slot__label">{index === 0 ? t("lab.slotA") : t("lab.slotB")}</span>
                      <span className="slot__name">
                        {substance ? `${pick(substance.name)} · ${substance.formula}` : t("lab.emptySlot")}
                      </span>
                    </span>
                    {substance && (
                      <button
                        type="button"
                        className="slot__remove"
                        onClick={() => lab.removeSubstance(substance.id)}
                        aria-label={`${t("lab.remove")}: ${pick(substance.name)}`}
                      >
                        <X size={14} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mix-bar__actions">
              <button
                type="button"
                className={`btn btn--accent btn--lg mix-button${lab.isBusy ? " is-busy" : ""}`}
                onClick={lab.mix}
                disabled={lab.isBusy}
                aria-busy={lab.isBusy}
              >
                {lab.isBusy ? (
                  <>
                    <Flame size={18} className="spin" aria-hidden="true" />
                    {lab.phase === lab.PHASES.POURING ? t("lab.pouring") : t("lab.mixing")}
                  </>
                ) : (
                  <>
                    <BeakerIcon size={18} aria-hidden="true" />
                    {t("lab.mix")}
                  </>
                )}
              </button>

              <button
                type="button"
                className="btn btn--ghost"
                onClick={lab.clearFlask}
                disabled={!lab.contents.length}
              >
                <Trash2 size={16} aria-hidden="true" />
                {t("lab.reset")}
              </button>

              <p className="mix-bar__hint">{lab.ready ? t("lab.readyToMix") : t("lab.selectTwo")}</p>
            </div>
          </div>
          {/* __LAB_MORE__ */}
          {lab.showResult && lab.result ? (
            <ReactionPanel
              result={lab.result}
              userMode={lab.userMode}
              onReset={lab.clearFlask}
              onGoExperiments={() => navigate(ROUTES.experiments)}
            />
          ) : (
            <div className="empty-state">
              <span className="empty-state__icon" aria-hidden="true">
                🧪
              </span>
              <h3>{t("lab.emptyTitle")}</h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                {lab.contents.length === 1 ? t("lab.selectTwo") : t("lab.emptyText")}
              </p>
            </div>
          )}

          {lab.history.length > 0 && (
            <section className="card">
              <div className="catalog__head" style={{ marginBottom: "0.7rem" }}>
                <h3 className="catalog__title">{t("lab.history")}</h3>
                <button type="button" className="btn btn--ghost btn--sm" onClick={lab.clearHistory}>
                  <Trash2 size={14} aria-hidden="true" />
                  {t("lab.clearHistory")}
                </button>
              </div>
              <div className="history">
                {lab.history.map((entry) => (
                  <div className="history__item" key={entry.id}>
                    <span
                      className="history__dot"
                      style={{ background: entry.result.animation?.liquid || "#7e8ba0" }}
                      aria-hidden="true"
                    />
                    <span>
                      {entry.result.kind === "reaction" ? pick(entry.result.name) : t("lab.noReactionName")}
                    </span>
                    <span className="history__eq">
                      {entry.result.equation || reactionTypeName(entry.result.typeKey || "none", lang)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        {/* __LAB_ASIDE__ */}
        <aside className="lab-col">
          <section className="card catalog" aria-label={t("lab.reagentsTitle")}>
            <div className="catalog__head">
              <h2 className="catalog__title">{t("lab.reagentsTitle")}</h2>
              <span className="catalog__count">
                {filtered.length} / {substances.length}
              </span>
            </div>

            <label className="field">
              <Search size={16} aria-hidden="true" />
              <span className="visually-hidden">{t("lab.searchLabel")}</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("lab.searchPlaceholder")}
                aria-label={t("lab.searchLabel")}
              />
            </label>

            <div className="catalog__filters" role="group" aria-label={t("lab.reagentsTitle")}>
              {CATEGORY_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  className={`chip chip--button${category === id ? " chip--active" : ""}`}
                  aria-pressed={category === id}
                  onClick={() => setCategory(id)}
                >
                  {pick(SUBSTANCE_CATEGORIES[id])}
                </button>
              ))}
            </div>

            <div className="substance-list">
              {filtered.map((substance) => (
                <SubstanceCard
                  key={substance.id}
                  substance={substance}
                  onAdd={lab.addSubstance}
                  isAdded={lab.contents.includes(substance.id)}
                />
              ))}

              {filtered.length === 0 && (
                <div className="empty-state">
                  <span className="empty-state__icon" aria-hidden="true">
                    🔍
                  </span>
                  <p className="muted" style={{ marginBottom: 0 }}>
                    {t("common.noResults")}
                  </p>
                </div>
              )}
            </div>
          </section>
          <section className="card">
            <h3 className="catalog__title" style={{ marginBottom: "0.6rem" }}>
              <Sparkles size={16} aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: "0.35rem" }} />
              {t("lab.flaskContents")}
            </h3>
            <ul className="observed-list">
              {lab.substancesInFlask.length === 0 && <li>{t("lab.emptyText")}</li>}
              {lab.substancesInFlask.map((substance) => (
                <li key={substance.id}>
                  <span className="slot__dot" style={{ background: substance.solutionColor }} aria-hidden="true" />
                  <span>
                    <strong>{pick(substance.name)}</strong> · {substance.formula} — {pick(substance.label)}
                  </span>
                </li>
              ))}
            </ul>

            {lab.preview && lab.preview.kind === "reaction" && (
              <div style={{ marginTop: "0.7rem" }} className="row">
                <HazardBadge level={lab.preview.hazard} labelPrefix={t("lab.hazardLabel")} />
                {lab.preview.hazard === "high" && (
                  <span className="chip" style={{ color: "var(--hazard-high)" }}>
                    <TriangleAlert size={13} aria-hidden="true" /> {t("safety.virtualOnly")}
                  </span>
                )}
              </div>
            )}

            <p className="muted" style={{ fontSize: "0.84rem", margin: "0.8rem 0 0" }}>
              {t("lab.keyboardTip")}
            </p>
          </section>

          <SafetyNotice title={t("safety.title")} text={t("safety.text")} variant="warn" />

          <button
            type="button"
            className="btn btn--secondary btn--block"
            onClick={() => navigate(ROUTES.experiments)}
          >
            {t("experiments.title")}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </aside>
      </div>

      {lab.pendingRun && (
        <Modal
          title={t("safety.highTitle")}
          icon={<TriangleAlert size={18} aria-hidden="true" />}
          tone="high"
          onClose={lab.cancelPendingRun}
          footer={
            <>
              <button type="button" className="btn btn--secondary" onClick={lab.cancelPendingRun}>
                {t("safety.cancelBtn")}
              </button>
              <button type="button" className="btn btn--primary" onClick={lab.confirmPendingRun}>
                {t("safety.continueBtn")}
              </button>
            </>
          }
        >
          <p>{t("safety.highText")}</p>
          <div className="row" style={{ marginBottom: "1rem" }}>
            {pendingSubstances.map((substance) => (
              <span className="chip" key={substance.id}>
                {pick(substance.name)} · {substance.formula}
              </span>
            ))}
          </div>
          <div className="notice notice--warn">
            <TriangleAlert size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong>{t("safety.reminder")}</strong>
              {pendingSubstances.map((substance) => (
                <p key={substance.id} style={{ margin: "0.4rem 0 0" }}>
                  <strong>{substance.formula}:</strong> {pick(substance.safety)}
                </p>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
