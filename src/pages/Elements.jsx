import { useMemo, useState } from "react"
import { FlaskConical, Search } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"
import { useLab } from "../context/LabContext.jsx"
import { ROUTES } from "../hooks/useRoute.js"
import {
  ELEMENT_CATEGORIES,
  elementName,
  elementSearchText,
  elements,
  layoutOf,
  periodOf,
} from "../data/elements.js"
import ElementCard, { CATEGORY_RGB } from "../components/ElementCard.jsx"

/** Elementdan laboratoriya reagentiga bog'lanish (katalogda mavjud bo'lganlar). */
const ELEMENT_TO_SUBSTANCE = {
  Na: "sodium",
  Mg: "magnesium",
  Fe: "iron",
  O: "oxygen",
  H: "hydrogen",
}

export default function Elements({ navigate }) {
  const { t, lang } = useLanguage()
  const { loadPreset } = useLab()
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [selected, setSelected] = useState(null)

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return elements.filter((item) => {
      const matchesCategory = category === "all" || item.cat === category
      const matchesQuery = !needle || elementSearchText(item).includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const matchIds = useMemo(() => new Set(matches.map((item) => item.z)), [matches])

  const goToLab = (substanceId) => {
    loadPreset([substanceId, "water"])
    navigate(ROUTES.laboratory)
  }

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <header className="page-head">
        <h1>{t("elements.title")}</h1>
        <p>{t("elements.subtitle")}</p>
      </header>

      <div className="page-toolbar">
        <label className="field">
          <Search size={16} aria-hidden="true" />
          <span className="visually-hidden">{t("common.search")}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("elements.searchPlaceholder")}
            aria-label={t("common.search")}
          />
        </label>

        <div className="row" role="group" aria-label={t("elements.legend")}>
          <button
            type="button"
            className={`chip chip--button${category === "all" ? " chip--active" : ""}`}
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
          >
            {t("elements.allCategories")}
          </button>
          {ELEMENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`chip chip--button${category === cat ? " chip--active" : ""}`}
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
              style={{ borderColor: category === cat ? `rgba(${CATEGORY_RGB[cat]}, 0.6)` : undefined }}
            >
              <span className="el-legend__dot" style={{ background: `rgba(${CATEGORY_RGB[cat]}, 0.85)` }} aria-hidden="true" />
              {t(`elements.categories.${cat}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="elements-layout">
        <div>
          <div className="periodic-scroll">
            <p className="periodic-caption">{t("elements.hoverHint")}</p>
            <div className="periodic" role="grid" aria-label={t("elements.title")}>
              {elements.map((element) => {
                const { row, col } = layoutOf(element)
                return (
                  <div key={element.z} style={{ gridRow: row, gridColumn: col }}>
                    <ElementCard
                      element={element}
                      onSelect={setSelected}
                      isActive={selected?.z === element.z}
                      isDim={!matchIds.has(element.z)}
                    />
                  </div>
                )
              })}
              <div className="el-tile--spacer" style={{ gridRow: 6, gridColumn: 3 }}>
                {t("elements.lanthanideLabel")}
              </div>
              <div className="el-tile--spacer" style={{ gridRow: 7, gridColumn: 3 }}>
                {t("elements.actinideLabel")}
              </div>
              <div className="periodic__gap" style={{ gridRow: 8, gridColumn: "1 / -1" }} aria-hidden="true" />
            </div>
          </div>

          <div className="el-legend" aria-label={t("elements.legend")}>
            {ELEMENT_CATEGORIES.map((cat) => (
              <span className="el-legend__item" key={cat} style={{ "--tile-rgb": CATEGORY_RGB[cat] }}>
                <span className="el-legend__dot" aria-hidden="true" />
                {t(`elements.categories.${cat}`)}
              </span>
            ))}
          </div>
        </div>
        <aside className="el-detail card" aria-live="polite">
          {selected ? (
            <>
              <div className="row" style={{ gap: "1rem" }}>
                <span
                  className="el-detail__symbol"
                  style={{ "--tile-rgb": CATEGORY_RGB[selected.cat] || CATEGORY_RGB.unknown }}
                >
                  {selected.s}
                </span>
                <div>
                  <h2 style={{ marginBottom: "0.15rem" }}>{elementName(selected, lang)}</h2>
                  <p className="muted" style={{ margin: 0, fontSize: "0.88rem" }}>
                    {selected.en} · {selected.ru}
                  </p>
                </div>
              </div>

              <div className="el-detail__rows">
                <div className="el-detail__row">
                  <span className="el-detail__key">{t("elements.atomicNumber")}</span>
                  <span className="el-detail__val">{selected.z}</span>
                </div>
                <div className="el-detail__row">
                  <span className="el-detail__key">{t("elements.atomicMass")}</span>
                  <span className="el-detail__val">
                    {selected.mass} {t("elements.massUnit")}
                  </span>
                </div>
                <div className="el-detail__row">
                  <span className="el-detail__key">{t("elements.state")}</span>
                  <span className="el-detail__val">{t(`elements.states.${selected.state}`)}</span>
                </div>
                <div className="el-detail__row">
                  <span className="el-detail__key">{t("elements.category")}</span>
                  <span className="el-detail__val">{t(`elements.categories.${selected.cat}`)}</span>
                </div>
                <div className="el-detail__row">
                  <span className="el-detail__key">{t("elements.period")}</span>
                  <span className="el-detail__val">{periodOf(selected.z)}</span>
                </div>
                <div className="el-detail__row">
                  <span className="el-detail__key">{t("elements.group")}</span>
                  <span className="el-detail__val">{selected.g || "—"}</span>
                </div>
              </div>

              {ELEMENT_TO_SUBSTANCE[selected.s] && (
                <button
                  type="button"
                  className="btn btn--primary btn--block"
                  onClick={() => goToLab(ELEMENT_TO_SUBSTANCE[selected.s])}
                >
                  <FlaskConical size={16} aria-hidden="true" />
                  {t("elements.goToLab")}
                </button>
              )}

              <button type="button" className="btn btn--ghost" onClick={() => setSelected(null)}>
                {t("elements.close")}
              </button>
            </>
          ) : (
            <div>
              <h3 style={{ marginBottom: "0.4rem" }}>{t("elements.detailTitle")}</h3>
              <p className="el-empty">{t("elements.tapHint")}</p>
            </div>
          )}

          {matches.length === 0 && (
            <div className="notice notice--warn" role="alert">
              <span aria-hidden="true">🔍</span>
              <div>{t("elements.noResults")}</div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
