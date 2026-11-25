/**
 * ChemLab - virtual laboratoriya reagentlar katalogi.
 * Har bir modda: formulasi, kategoriyasi, agregat holati, rangi va xavfsizlik ma'lumoti.
 * Ranglar virtual idishdagi suyuqlik/gaz ko'rinishini yaratish uchun ishlatiladi.
 */

export const CATEGORY_IDS = ["all", "element", "acid", "base", "salt", "water", "other"]

/** Modda kategoriyalari uchun qisqa nomlar (barcha tillarda) */
export const SUBSTANCE_CATEGORIES = {
  all: { uz: "Barchasi", en: "All", ru: "Все" },
  element: { uz: "Elementlar", en: "Elements", ru: "Элементы" },
  acid: { uz: "Kislotalar", en: "Acids", ru: "Кислоты" },
  base: { uz: "Ishqorlar", en: "Bases", ru: "Основания" },
  salt: { uz: "Tuzlar", en: "Salts", ru: "Соли" },
  water: { uz: "Suv", en: "Water", ru: "Вода" },
  other: { uz: "Boshqa moddalar", en: "Other substances", ru: "Другие вещества" },
}

export const substances = [
  {
    id: "water",
    formula: "H₂O",
    category: "water",
    state: "liquid",
    kind: "solvent",
    color: "#bfe2f7",
    solutionColor: "#cfe9f7",
    hazard: "none",
    name: { uz: "Suv", en: "Water", ru: "Вода" },
    aliases: { uz: "distillangan suv", en: "distilled water", ru: "дистиллированная вода" },
    label: { uz: "Distillangan suv", en: "Distilled water", ru: "Дистиллированная вода" },
    description: {
      uz: "Universal erituvchi. Ko'p reaksiyalar suvli eritmada boradi.",
      en: "The universal solvent. Many reactions occur in aqueous solution.",
      ru: "Универсальный растворитель. Многие реакции идут в водном растворе.",
    },
    safety: {
      uz: "Xavfsiz. Faqat toza (distillangan) suv ishlatiladi.",
      en: "Safe. Only clean (distilled) water is used.",
      ru: "Безопасна. Используется только чистая (дистиллированная) вода.",
    },
  },
  {
    id: "sodium",
    formula: "Na",
    category: "element",
    state: "solid",
    kind: "metal",
    color: "#d9dde3",
    solutionColor: "#e8eef5",
    hazard: "high",
    name: { uz: "Natriy", en: "Sodium", ru: "Натрий" },
    aliases: { uz: "ishqoriy metall", en: "alkali metal", ru: "щелочной металл" },
    label: {
      uz: "Metall natriy (kerosin ostida)",
      en: "Sodium metal (under oil)",
      ru: "Металлический натрий (под маслом)",
    },
    description: {
      uz: "Yumshoq kumushsimon metall. Suv bilan juda faol reaksiyaga kirishadi.",
      en: "A soft silvery metal. Reacts very vigorously with water.",
      ru: "Мягкий серебристый металл. Очень активно реагирует с водой.",
    },
    safety: {
      uz: "Yuqori reaktiv: suv va nam havo bilan portlashgacha boradigan reaksiya beradi. Faqat virtual muhitda.",
      en: "Highly reactive: with water and moist air the reaction can become explosive. Virtual environment only.",
      ru: "Очень реактивен: с водой и влажным воздухом реакция может стать взрывной. Только виртуальная среда.",
    },
  },
  {
    id: "hcl",
    formula: "HCl",
    category: "acid",
    state: "liquid",
    kind: "solution",
    color: "#e4f5ff",
    solutionColor: "#eaf7ff",
    hazard: "medium",
    name: { uz: "Xlorid kislota", en: "Hydrochloric acid", ru: "Соляная кислота" },
    aliases: { uz: "tuz kislotasi", en: "muriatic acid", ru: "хлороводородная кислота" },
    label: { uz: "HCl, 1 M eritma", en: "HCl, 1 M solution", ru: "HCl, 1 M раствор" },
    description: {
      uz: "Kuchli bir asosli kislota. Metallar bilan vodorod ajratadi.",
      en: "A strong monoprotic acid. Releases hydrogen with metals.",
      ru: "Сильная одноосновная кислота. С металлами выделяет водород.",
    },
    safety: {
      uz: "O'yuvchi suyuqlik: teri va ko'zni shikastlaydi, bug'lari nafas yo'lini ta'sirlantiradi.",
      en: "Corrosive liquid: damages skin and eyes, vapours irritate the airways.",
      ru: "Едкая жидкость: повреждает кожу и глаза, пары раздражают дыхательные пути.",
    },
  },
  {
    id: "naoh",
    formula: "NaOH",
    category: "base",
    state: "liquid",
    kind: "solution",
    color: "#eafcff",
    solutionColor: "#eefcff",
    hazard: "medium",
    name: { uz: "Natriy gidroksid", en: "Sodium hydroxide", ru: "Гидроксид натрия" },
    aliases: {
      uz: "o'yuvchi natriy, kaustik soda",
      en: "caustic soda, lye",
      ru: "едкий натр, каустическая сода",
    },
    label: { uz: "NaOH, 1 M eritma", en: "NaOH, 1 M solution", ru: "NaOH, 1 M раствор" },
    description: {
      uz: "Kuchli ishqor. Kislotalar bilan neytrallanish reaksiyasiga kirishadi.",
      en: "A strong base. Reacts with acids in a neutralisation reaction.",
      ru: "Сильное основание. Вступает с кислотами в реакцию нейтрализации.",
    },
    safety: {
      uz: "O'yuvchi: teri va ko'zga jiddiy zarar yetkazadi. Eritilganda issiqlik ajraladi.",
      en: "Corrosive: causes serious damage to skin and eyes. Dissolution releases heat.",
      ru: "Едкое вещество: серьёзно повреждает кожу и глаза. При растворении выделяется тепло.",
    },
  },
  {
    id: "cuso4",
    formula: "CuSO₄",
    category: "salt",
    state: "liquid",
    kind: "solution",
    color: "#2f86d8",
    solutionColor: "#2f86d8",
    hazard: "medium",
    name: { uz: "Mis(II) sulfat", en: "Copper(II) sulfate", ru: "Сульфат меди(II)" },
    aliases: { uz: "mis kuporosi", en: "blue vitriol", ru: "медный купорос" },
    label: { uz: "CuSO₄, ko'k eritma", en: "CuSO₄, blue solution", ru: "CuSO₄, синий раствор" },
    description: {
      uz: "Ko'k rangli tuz eritmasi. Metallar bilan almashinish reaksiyasini beradi.",
      en: "A blue salt solution. Gives displacement reactions with metals.",
      ru: "Синий раствор соли. Даёт реакции замещения с металлами.",
    },
    safety: {
      uz: "Zaharli: yutilganda zararli, suv havzalari uchun xavfli.",
      en: "Toxic: harmful if swallowed, dangerous for water ecosystems.",
      ru: "Токсичен: вреден при проглатывании, опасен для водоёмов.",
    },
  },
  {
    id: "iron",
    formula: "Fe",
    category: "element",
    state: "solid",
    kind: "metal",
    color: "#9aa4b2",
    solutionColor: "#b6c3d1",
    hazard: "low",
    name: { uz: "Temir", en: "Iron", ru: "Железо" },
    aliases: { uz: "temir qipig'i", en: "iron filings", ru: "железные опилки" },
    label: { uz: "Temir qipig'i", en: "Iron filings", ru: "Железные опилки" },
    description: {
      uz: "O'rtacha faol metall. Kislotalar bilan vodorod ajratadi.",
      en: "A moderately active metal. Releases hydrogen with acids.",
      ru: "Металл средней активности. С кислотами выделяет водород.",
    },
    safety: {
      uz: "Past xavf. Kukun holatida chang portlashi xavfi mavjud.",
      en: "Low hazard. As a powder there is a dust explosion risk.",
      ru: "Низкая опасность. В виде порошка есть риск пылевого взрыва.",
    },
  },
  {
    id: "magnesium",
    formula: "Mg",
    category: "element",
    state: "solid",
    kind: "metal",
    color: "#c6ccd4",
    solutionColor: "#dde3ea",
    hazard: "medium",
    name: { uz: "Magniy", en: "Magnesium", ru: "Магний" },
    aliases: { uz: "magniy lentasi", en: "magnesium ribbon", ru: "магниевая лента" },
    label: { uz: "Magniy lentasi", en: "Magnesium ribbon", ru: "Магниевая лента" },
    description: {
      uz: "Faol metall. Kislotalar bilan tez reaksiyaga kirishadi, yondirilganda oq nur beradi.",
      en: "An active metal. Reacts quickly with acids and burns with a bright white light.",
      ru: "Активный металл. Быстро реагирует с кислотами, горит ярко-белым пламенем.",
    },
    safety: {
      uz: "Yonuvchan: yondirilganda ko'zni shikastlaydigan darajada yorqin nur beradi.",
      en: "Flammable: burns with a light bright enough to damage the eyes.",
      ru: "Горюч: горит настолько ярко, что может повредить глаза.",
    },
  },
  {
    id: "oxygen",
    formula: "O₂",
    category: "element",
    state: "gas",
    kind: "gas",
    color: "#cfe7ff",
    solutionColor: "#dff0ff",
    hazard: "low",
    name: { uz: "Kislorod", en: "Oxygen", ru: "Кислород" },
    aliases: { uz: "kislorod gazi", en: "oxygen gas", ru: "кислород (газ)" },
    label: { uz: "O₂ gazi (ballon)", en: "O₂ gas (cylinder)", ru: "Газ O₂ (баллон)" },
    description: {
      uz: "Yonishni qo'llab-quvvatlovchi gaz. O'zi yonmaydi.",
      en: "A gas that supports combustion. It does not burn itself.",
      ru: "Газ, поддерживающий горение. Сам не горит.",
    },
    safety: {
      uz: "Yonuvchi moddalar bilan birga yong'in xavfini keskin oshiradi.",
      en: "Together with flammable substances it sharply increases fire risk.",
      ru: "Вместе с горючими веществами резко повышает риск пожара.",
    },
  },
  {
    id: "hydrogen",
    formula: "H₂",
    category: "element",
    state: "gas",
    kind: "gas",
    color: "#e6f4ff",
    solutionColor: "#f0f8ff",
    hazard: "high",
    name: { uz: "Vodorod", en: "Hydrogen", ru: "Водород" },
    aliases: { uz: "vodorod gazi", en: "hydrogen gas", ru: "водород (газ)" },
    label: { uz: "H₂ gazi (ballon)", en: "H₂ gas (cylinder)", ru: "Газ H₂ (баллон)" },
    description: {
      uz: "Eng yengil gaz. Kislorod bilan aralashmasi portlovchi.",
      en: "The lightest gas. Its mixture with oxygen is explosive.",
      ru: "Самый лёгкий газ. Его смесь с кислородом взрывоопасна.",
    },
    safety: {
      uz: "Portlash xavfi: uchqun yoki ochiq olov yaqinida xavfli.",
      en: "Explosion hazard: dangerous near a spark or open flame.",
      ru: "Взрывоопасен: опасен рядом с искрой или открытым пламенем.",
    },
  },
  {
    id: "salt",
    formula: "NaCl",
    category: "salt",
    state: "liquid",
    kind: "solution",
    color: "#e7fbff",
    solutionColor: "#eefcff",
    hazard: "none",
    name: { uz: "Natriy xlorid", en: "Sodium chloride", ru: "Хлорид натрия" },
    aliases: { uz: "osh tuzi, tuz eritmasi", en: "table salt, brine", ru: "поваренная соль, рассол" },
    label: { uz: "NaCl eritmasi", en: "NaCl solution", ru: "Раствор NaCl" },
    description: {
      uz: "Neytrallanish reaksiyasining mahsuloti. Suvda ionlarga ajraladi.",
      en: "The product of a neutralisation reaction. Dissociates into ions in water.",
      ru: "Продукт реакции нейтрализации. В воде распадается на ионы.",
    },
    safety: {
      uz: "Amalda xavfsiz, lekin konsentrlangan eritmasi tirnash xususiyati beradi.",
      en: "Practically safe, but a concentrated solution is irritating.",
      ru: "Практически безопасен, но концентрированный раствор раздражает.",
    },
  },
]

/** id bo'yicha moddani topish */
export function getSubstance(id) {
  return substances.find((item) => item.id === id) || null
}

/** Tanlangan tildagi nom (topilmasa o'zbekcha nom qaytadi). */
export function substanceName(substance, lang = "uz") {
  if (!substance) return ""
  return substance.name[lang] || substance.name.uz
}

/** Qidiruv uchun matn: barcha tillardagi nomlar, formula va qo'shimcha nomlar. */
export function substanceSearchText(substance) {
  const names = Object.values(substance.name).join(" ")
  const aliases = Object.values(substance.aliases || {}).join(" ")
  return `${names} ${aliases} ${substance.formula} ${substance.id}`.toLowerCase()
}
