/**
 * Vaqtinchalik tekshiruv skripti: ma'lumotlar bazasi izchilligini tekshiradi.
 * Ishga tushirish: node scripts/validate-data.mjs
 */
import { substances } from "../src/data/substances.js"
import { getReactionFor, reactions, noReactionReasons, REACTION_TYPES } from "../src/data/reactions.js"
import { translations, LANGUAGES } from "../src/data/translations.js"
import { elements } from "../src/data/elements.js"

let errors = 0

// 1) Juftliklar qamrovi
const missing = []
for (let i = 0; i < substances.length; i += 1) {
  for (let j = i + 1; j < substances.length; j += 1) {
    const result = getReactionFor(substances[i].id, substances[j].id)
    if (!result || result.kind === "unknown") missing.push(result ? result.id : "null")
  }
}
console.log(`Moddalar: ${substances.length}, reaksiyalar: ${reactions.length}, reaksiyasiz juftliklar: ${Object.keys(noReactionReasons).length}`)
console.log(`Qoplanmagan juftliklar (${missing.length}):`, missing.join(", ") || "yo'q")
if (missing.length) errors += 1

// 2) Tarjima kalitlari tengligi
const flatKeys = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key
    if (Array.isArray(value)) return [path]
    if (value && typeof value === "object") return flatKeys(value, path)
    return [path]
  })

const base = new Set(flatKeys(translations.uz))
for (const lang of LANGUAGES.map((item) => item.code)) {
  const keys = new Set(flatKeys(translations[lang]))
  const onlyInLang = [...keys].filter((key) => !base.has(key))
  const onlyInUz = [...base].filter((key) => !keys.has(key))
  console.log(`Til ${lang}: kalitlar ${keys.size}; faqat ${lang} da: ${onlyInLang.length}; uz da bor, ${lang} da yo'q: ${onlyInUz.length}`)
  if (onlyInLang.length) console.log("   ->", onlyInLang.slice(0, 10).join(", "))
  if (onlyInUz.length) console.log("   <-", onlyInUz.slice(0, 10).join(", "))
  if (onlyInLang.length) errors += 1
}

// 3) Reaksiyalar maydonlari
for (const reaction of reactions) {
  if (!reaction.equation || !reaction.name || !reaction.notes) {
    console.log("Nuqsonli reaksiya:", reaction.pair.join("+"))
    errors += 1
  }
  for (const lang of ["uz", "en", "ru"]) {
    if (!reaction.name?.[lang]) {
      console.log("Nom yetishmaydi:", reaction.pair.join("+"), lang)
      errors += 1
    }
    for (const mode of ["beginner", "student", "advanced"]) {
      if (!reaction.notes?.[mode]?.[lang]) {
        console.log("Izoh yetishmaydi:", reaction.pair.join("+"), mode, lang)
        errors += 1
      }
    }
  }
  if (!REACTION_TYPES[reaction.typeKey]) {
    console.log("Noma'lum reaksiya turi:", reaction.typeKey)
    errors += 1
  }
}

// 4) Elementlar
console.log(`Elementlar soni: ${elements.length}`)
const zs = elements.map((el) => el.z)
for (let z = 1; z <= 118; z += 1) {
  if (!zs.includes(z)) {
    console.log("Element yetishmaydi: Z =", z)
    errors += 1
  }
}
const badElement = elements.find((el) => !el.uz || !el.en || !el.ru || !el.s || !el.cat)
if (badElement) {
  console.log("Nuqsonli element:", badElement.z)
  errors += 1
}

console.log(errors === 0 ? "\nBarcha tekshiruvlar muvaffaqiyatli o'tdi ✅" : `\nXatolar: ${errors} ❌`)
process.exit(errors === 0 ? 0 : 1)
