/**
 * ChemLab - reaksiyalar bazasi (virtual simulyatsiya).
 *
 * MUHIM: barcha tenglamalar va kuzatishlar haqiqiy kimyo ma'lumotlariga asoslangan.
 * Simulyatsiya soddalashtirilgan: harorat, konsentratsiya va vaqt real emas,
 * balki ta'lim maqsadida umumiy kuzatish ko'rsatiladi ("Demo Simulation").
 */

export const REACTION_TYPES = {
  neutralization: { uz: "Neytrallanish", en: "Neutralisation", ru: "Нейтрализация" },
  acidMetal: {
    uz: "Kislota + metall (o'rin almashish)",
    en: "Acid + metal (displacement)",
    ru: "Кислота + металл (замещение)",
  },
  replacement: { uz: "Metall almashinishi", en: "Metal displacement", ru: "Замещение металла" },
  precipitation: {
    uz: "Ion almashinish (cho'kma)",
    en: "Double displacement (precipitation)",
    ru: "Ионный обмен (осадок)",
  },
  combustion: { uz: "Yonish", en: "Combustion", ru: "Горение" },
  oxidation: { uz: "Oksidlanish (sekin)", en: "Slow oxidation", ru: "Медленное окисление" },
  metalWater: { uz: "Metall + suv", en: "Metal + water", ru: "Металл + вода" },
  synthesis: { uz: "Birikish", en: "Synthesis", ru: "Соединение" },
  dissociation: {
    uz: "Dissotsiatsiya (ionlarga ajralish)",
    en: "Dissociation (ionisation)",
    ru: "Диссоциация (ионизация)",
  },
  dissolution: {
    uz: "Eritish (fizik jarayon)",
    en: "Dissolution (physical process)",
    ru: "Растворение (физический процесс)",
  },
  twoStep: {
    uz: "Ketma-ket reaksiyalar",
    en: "Consecutive reactions",
    ru: "Последовательные реакции",
  },
  none: { uz: "Reaksiya yo'q", en: "No reaction", ru: "Реакции нет" },
}

export const HAZARD_KEYS = ["none", "low", "medium", "high"]

/** Ikki modda uchun kalit: tartibdan qat'i nazar bir xil bo'ladi. */
export function pairKey(a, b) {
  return [a, b].sort().join("+")
}

export const reactions = [
  {
    pair: ["hcl", "naoh"],
    typeKey: "neutralization",
    equation: "HCl + NaOH → NaCl + H₂O",
    name: {
      uz: "Neytrallanish reaksiyasi",
      en: "Neutralisation reaction",
      ru: "Реакция нейтрализации",
    },
    resultText: {
      uz: "Kislota va ishqor o'zaro ta'sirlashib tuz (NaCl) va suv hosil qildi.",
      en: "The acid and the base reacted to form a salt (NaCl) and water.",
      ru: "Кислота и основание прореагировали, образовав соль (NaCl) и воду.",
    },
    observed: ["temperature"],
    hazard: "medium",
    products: ["salt", "water"],
    animation: {
      liquid: "#dff0fb",
      glow: null,
      bubbles: false,
      precipitate: null,
      light: false,
      intensity: "low",
      duration: 2400,
    },
    notes: {
      beginner: {
        uz: "Kislota va ishqor bir-birini zararsizlantiradi. Yangi moddalar: osh tuzi va suv. Kolba biroz isiydi.",
        en: "The acid and the base cancel each other out. New substances: table salt and water. The flask warms up a little.",
        ru: "Кислота и основание нейтрализуют друг друга. Новые вещества: поваренная соль и вода. Колба немного нагревается.",
      },
      student: {
        uz: "Eritmadagi H⁺ va OH⁻ ionlari birikib suv molekulasini beradi: H⁺ + OH⁻ → H₂O. Reaksiya ekzotermik, shuning uchun eritma isiydi.",
        en: "The H⁺ and OH⁻ ions in solution combine into water: H⁺ + OH⁻ → H₂O. The reaction is exothermic, so the solution warms up.",
        ru: "Ионы H⁺ и OH⁻ в растворе соединяются в воду: H⁺ + OH⁻ → H₂O. Реакция экзотермична, поэтому раствор нагревается.",
      },
      advanced: {
        uz: "Protolitik (kislota-asos) reaksiya. 1 mol HCl 1 mol NaOH bilan ekvivalent nisbatda neytrallanadi, eritma pH ≈ 7 bo'ladi. Neytrallanish issiqligi ΔH ≈ −57 kJ/mol.",
        en: "A protolytic (acid–base) reaction. One mole of HCl is neutralised by one mole of NaOH and the solution reaches pH ≈ 7. Heat of neutralisation ΔH ≈ −57 kJ/mol.",
        ru: "Протолитическая реакция. 1 моль HCl нейтрализуется 1 моль NaOH, pH раствора ≈ 7. Теплота нейтрализации ΔH ≈ −57 кДж/моль.",
      },
    },
  },
  {
    pair: ["hcl", "iron"],
    typeKey: "acidMetal",
    equation: "Fe + 2HCl → FeCl₂ + H₂↑",
    gasName: "H₂",
    name: {
      uz: "Kislotaning temir bilan reaksiyasi",
      en: "Reaction of the acid with iron",
      ru: "Реакция кислоты с железом",
    },
    resultText: {
      uz: "Temir kislotada erib och yashil FeCl₂ eritmasi hosil qildi va vodorod gazi ajraldi.",
      en: "The iron dissolved in the acid forming a pale green FeCl₂ solution and releasing hydrogen.",
      ru: "Железо растворилось в кислоте, образовав бледно-зелёный раствор FeCl₂ и выделив водород.",
    },
    observed: ["bubbles", "gas", "colorChange"],
    hazard: "medium",
    products: [],
    animation: {
      liquid: "#a9d3ac",
      glow: null,
      bubbles: true,
      precipitate: null,
      light: false,
      intensity: "medium",
      duration: 3200,
    },
    notes: {
      beginner: {
        uz: "Kolbadan pufakchalar chiqadi — bu vodorod gazi. Temir asta-sekin eriydi, eritma yashil tusga o'tadi.",
        en: "Bubbles rise in the flask — that is hydrogen gas. The iron slowly dissolves and the solution turns green.",
        ru: "В колбе поднимаются пузырьки — это водород. Железо постепенно растворяется, раствор зеленеет.",
      },
      student: {
        uz: "Temir kislotadagi vodorod ionlarini siqib chiqaradi (o'rin almashish): Fe + 2H⁺ → Fe²⁺ + H₂↑. Cho'kma hosil bo'lmaydi.",
        en: "Iron displaces hydrogen ions from the acid: Fe + 2H⁺ → Fe²⁺ + H₂↑. No precipitate forms.",
        ru: "Железо вытесняет ионы водорода: Fe + 2H⁺ → Fe²⁺ + H₂↑. Осадок не образуется.",
      },
      advanced: {
        uz: "Redoks: Fe⁰ − 2e⁻ → Fe²⁺, 2H⁺ + 2e⁻ → H₂. Fe²⁺ akva kompleksi och yashil rang beradi. Suyultirilgan HCl bilan reaksiya sekin, konsentratsiya va harorat oshsa tezlashadi.",
        en: "Redox: Fe⁰ − 2e⁻ → Fe²⁺, 2H⁺ + 2e⁻ → H₂. The Fe²⁺ aqua complex causes the pale green colour. With dilute HCl the reaction is slow and speeds up with concentration and temperature.",
        ru: "Редокс: Fe⁰ − 2e⁻ → Fe²⁺, 2H⁺ + 2e⁻ → H₂. Аквакомплекс Fe²⁺ даёт бледно-зелёный цвет. С разбавленной HCl реакция медленная, ускоряется при повышении концентрации и температуры.",
      },
    },
  },
  {
    pair: ["hcl", "magnesium"],
    typeKey: "acidMetal",
    equation: "Mg + 2HCl → MgCl₂ + H₂↑",
    gasName: "H₂",
    name: {
      uz: "Kislotaning magniy bilan reaksiyasi",
      en: "Reaction of the acid with magnesium",
      ru: "Реакция кислоты с магнием",
    },
    resultText: {
      uz: "Magniy tez erib, rangsiz MgCl₂ eritmasi hosil qildi va kuchli gaz ajralishi kuzatildi.",
      en: "The magnesium dissolved quickly, forming colourless MgCl₂ and releasing gas vigorously.",
      ru: "Магний быстро растворился, образовав бесцветный MgCl₂ и активно выделяя газ.",
    },
    observed: ["bubbles", "gas", "temperature"],
    hazard: "medium",
    products: [],
    animation: {
      liquid: "#dcf0f7",
      glow: null,
      bubbles: true,
      precipitate: null,
      light: false,
      intensity: "high",
      duration: 2600,
    },
    notes: {
      beginner: {
        uz: "Magniy kislotada juda tez eriydi va ko'p pufakcha chiqadi. Kolba sezilarli isiydi.",
        en: "Magnesium dissolves very quickly in the acid with lots of bubbles, and the flask warms up noticeably.",
        ru: "Магний очень быстро растворяется в кислоте с обильными пузырьками, колба заметно нагревается.",
      },
      student: {
        uz: "Mg faol metall, shuning uchun temirga qaraganda tezroq reaksiyaga kirishadi: Mg + 2H⁺ → Mg²⁺ + H₂↑. Reaksiya ekzotermik.",
        en: "Mg is an active metal, so it reacts faster than iron: Mg + 2H⁺ → Mg²⁺ + H₂↑. The reaction is exothermic.",
        ru: "Mg — активный металл, поэтому реагирует быстрее железа: Mg + 2H⁺ → Mg²⁺ + H₂↑. Реакция экзотермична.",
      },
      advanced: {
        uz: "Metallning aktivlik qatorida Mg temirdan oldinda turadi, shuning uchun E°(Mg²⁺/Mg) = −2.37 V standart potensiali H₂ ajralishini tezlashtiradi. MgCl₂ eritmasi rangsiz, cho'kma hosil bo'lmaydi.",
        en: "Mg stands before iron in the activity series: E°(Mg²⁺/Mg) = −2.37 V makes H₂ evolution fast. MgCl₂ solution is colourless and no precipitate forms.",
        ru: "Mg стоит до железа в ряду активности: E°(Mg²⁺/Mg) = −2.37 В ускоряет выделение H₂. Раствор MgCl₂ бесцветен, осадок не образуется.",
      },
    },
  },
  {
    pair: ["hcl", "sodium"],
    typeKey: "acidMetal",
    equation: "2Na + 2HCl → 2NaCl + H₂↑",
    gasName: "H₂",
    name: {
      uz: "Kislotaning natriy bilan reaksiyasi (juda faol)",
      en: "Reaction of the acid with sodium (very vigorous)",
      ru: "Реакция кислоты с натрием (очень активная)",
    },
    resultText: {
      uz: "Natriy kislota bilan juda tez reaksiyaga kirishdi: kuchli gaz ajralishi va katta issiqlik ajralishi kuzatildi.",
      en: "Sodium reacted very rapidly with the acid, releasing a large amount of gas and heat.",
      ru: "Натрий очень быстро прореагировал с кислотой, выделив много газа и тепла.",
    },
    observed: ["bubbles", "gas", "light", "temperature"],
    hazard: "high",
    products: ["salt"],
    animation: {
      liquid: "#f2fbff",
      glow: "#fbbf24",
      bubbles: true,
      precipitate: null,
      light: true,
      intensity: "high",
      duration: 2000,
    },
    notes: {
      beginner: {
        uz: "Natriy juda faol metall: reaksiya shunchalik tez va issiqki, haqiqiy laboratoriyada xavfli bo'lardi.",
        en: "Sodium is a very active metal: the reaction is so fast and hot that it would be dangerous in a real laboratory.",
        ru: "Натрий — очень активный металл: реакция настолько быстра и горяча, что в реальной лаборатории была бы опасной.",
      },
      student: {
        uz: "Na aktivlik qatorida eng oldinda: 2Na + 2H⁺ → 2Na⁺ + H₂↑. Issiqlik juda ko'p ajraladi, vodorod yonishi mumkin.",
        en: "Na is at the top of the activity series: 2Na + 2H⁺ → 2Na⁺ + H₂↑. A lot of heat is released and the hydrogen can ignite.",
        ru: "Na стоит в начале ряда активности: 2Na + 2H⁺ → 2Na⁺ + H₂↑. Выделяется много тепла, водород может воспламениться.",
      },
      advanced: {
        uz: "Standart potensiali E°(Na⁺/Na) = −2.71 V bo'lgan ishqoriy metall. Reaksiya diffuziya bilan cheklanadi, ajralayotgan H₂ va issiqlik kuchli ekzotermik effekt beradi — real sharoitda portlash xavfi bor.",
        en: "An alkali metal with E°(Na⁺/Na) = −2.71 V. The reaction is diffusion-limited; the evolved H₂ and heat give a strong exothermic effect — explosive risk under real conditions.",
        ru: "Щелочной металл с E°(Na⁺/Na) = −2.71 В. Реакция лимитируется диффузией; выделяющийся H₂ и тепло дают сильный экзотермический эффект — риск взрыва в реальных условиях.",
      },
    },
  },
  {
    pair: ["hcl", "water"],
    typeKey: "dissociation",
    equation: "HCl + H₂O → H₃O⁺ + Cl⁻",
    name: {
      uz: "Kislotaning suvda ionlanishi",
      en: "Ionisation of the acid in water",
      ru: "Ионизация кислоты в воде",
    },
    resultText: {
      uz: "Yangi modda hosil bo'lmadi: HCl suvda ionlarga (H₃O⁺ va Cl⁻) ajraldi va eritma suyultirildi.",
      en: "No new substance formed: HCl dissociated in water into ions (H₃O⁺ and Cl⁻) and the solution became dilute.",
      ru: "Новое вещество не образовалось: HCl распалась в воде на ионы (H₃O⁺ и Cl⁻), раствор разбавился.",
    },
    observed: ["temperature"],
    hazard: "low",
    products: [],
    animation: {
      liquid: "#e6f5ff",
      glow: null,
      bubbles: false,
      precipitate: null,
      light: false,
      intensity: "low",
      duration: 2000,
    },
    notes: {
      beginner: {
        uz: "Bu yerda yangi modda hosil bo'lmaydi — kislota suvda «tarqaladi» va suyultiriladi.",
        en: "No new substance forms here — the acid simply spreads out in the water and becomes dilute.",
        ru: "Новое вещество здесь не образуется — кислота просто распределяется в воде и разбавляется.",
      },
      student: {
        uz: "Suv qo'shilganda kislota ionlarga ajraladi: HCl → H⁺ + Cl⁻ (aslida H₃O⁺). Bu kimyoviy jarayon, lekin yangi modda hisoblanmaydi.",
        en: "Adding water makes the acid dissociate: HCl → H⁺ + Cl⁻ (really H₃O⁺). It is a chemical process, but no new compound is formed.",
        ru: "При добавлении воды кислота диссоциирует: HCl → H⁺ + Cl⁻ (фактически H₃O⁺). Это химический процесс, но новое соединение не образуется.",
      },
      advanced: {
        uz: "Kuchli kislota to'liq dissotsiatsiyalanadi (α ≈ 1). Suyultirishda ajralayotgan issiqlik suyultirish entalpiyasi bilan bog'liq; pH suyultirish darajasiga qarab 0 dan 7 tomonga siljiydi.",
        en: "A strong acid dissociates completely (α ≈ 1). The heat released on dilution relates to the enthalpy of dilution; the pH moves from 0 towards 7 as dilution increases.",
        ru: "Сильная кислота диссоциирует полностью (α ≈ 1). Выделяющееся при разбавлении тепло связано с энтальпией разбавления; pH смещается от 0 к 7.",
      },
    },
  },
  {
    pair: ["naoh", "water"],
    typeKey: "dissociation",
    equation: "NaOH → Na⁺ + OH⁻",
    name: {
      uz: "Ishqorning suvda erishi va ionlanishi",
      en: "Dissolution and ionisation of the base",
      ru: "Растворение и ионизация основания",
    },
    resultText: {
      uz: "NaOH suvda erib Na⁺ va OH⁻ ionlarini berdi; eritma kuchli ishqoriy bo'ldi va isidi.",
      en: "NaOH dissolved giving Na⁺ and OH⁻ ions; the solution became strongly basic and warmed up.",
      ru: "NaOH растворился, дав ионы Na⁺ и OH⁻; раствор стал сильно щелочным и нагрелся.",
    },
    observed: ["temperature"],
    hazard: "medium",
    products: [],
    animation: {
      liquid: "#e9fcff",
      glow: null,
      bubbles: false,
      precipitate: null,
      light: false,
      intensity: "low",
      duration: 2200,
    },
    notes: {
      beginner: {
        uz: "Ishqor suvda eriydi va eritma isiydi. Yangi modda hosil bo'lmaydi, lekin eritma o'yuvchi bo'ladi.",
        en: "The base dissolves in water and the solution warms up. No new substance forms, but the solution becomes corrosive.",
        ru: "Основание растворяется в воде, раствор нагревается. Новое вещество не образуется, но раствор становится едким.",
      },
      student: {
        uz: "NaOH kuchli ishqor: suvda to'liq Na⁺ va OH⁻ ionlariga ajraladi. Eritish ekzotermik jarayon, shuning uchun harorat ko'tariladi.",
        en: "NaOH is a strong base: it fully dissociates in water into Na⁺ and OH⁻. Dissolution is exothermic, so the temperature rises.",
        ru: "NaOH — сильное основание: полностью диссоциирует в воде на Na⁺ и OH⁻. Растворение экзотермично, поэтому температура повышается.",
      },
      advanced: {
        uz: "Kuchli asos, pKb juda kichik. OH⁻ kontsentratsiyasi oshishi pH ni 13–14 ga ko'taradi. Kristall NaOH eritilganda katta miqdorda gidratatsiya issiqligi ajraladi — bu real sharoitda idish yorilishiga olib kelishi mumkin.",
        en: "A strong base with a very small pKb. The increased OH⁻ concentration raises pH to 13–14. Dissolving solid NaOH releases large hydration heat — in real conditions this can crack the vessel.",
        ru: "Сильное основание с очень малым pKb. Рост концентрации OH⁻ поднимает pH до 13–14. Растворение кристаллического NaOH выделяет много тепла гидратации — в реальных условиях это может расколоть посуду.",
      },
    },
  },
  {
    pair: ["cuso4", "naoh"],
    typeKey: "precipitation",
    equation: "CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄",
    name: {
      uz: "Ko'k cho'kma hosil bo'lishi",
      en: "Formation of a blue precipitate",
      ru: "Образование синего осадка",
    },
    resultText: {
      uz: "Eritmada och ko'k Cu(OH)₂ cho'kmasi hosil bo'ldi.",
      en: "A pale blue Cu(OH)₂ precipitate formed in the solution.",
      ru: "В растворе образовался светло-синий осадок Cu(OH)₂.",
    },
    observed: ["precipitate", "colorChange"],
    hazard: "medium",
    products: [],
    precipitateName: "Cu(OH)₂",
    animation: {
      liquid: "#9fd0f0",
      glow: null,
      bubbles: false,
      precipitate: "#5bb3e8",
      light: false,
      intensity: "medium",
      duration: 3000,
    },
    notes: {
      beginner: {
        uz: "Ko'k eritmada mayda ko'k cho'kma paydo bo'ldi — bu yangi modda: mis(II) gidroksid.",
        en: "A fine blue solid appeared in the blue solution — a new substance: copper(II) hydroxide.",
        ru: "В синем растворе появился голубой осадок — новое вещество: гидроксид меди(II).",
      },
      student: {
        uz: "Ion almashinish: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓. Hosil bo'lgan gidroksid suvda erimaydi, shuning uchun cho'kmaga tushadi.",
        en: "Double displacement: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓. The hydroxide is insoluble in water, so it settles as a precipitate.",
        ru: "Ионный обмен: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓. Гидроксид нерастворим в воде, поэтому выпадает в осадок.",
      },
      advanced: {
        uz: "Erituvchanlik ko'paytmasi SP(Cu(OH)₂) ≈ 2.2·10⁻²⁰ juda kichik, shu sababli Cu²⁺ ionlari OH⁻ qo'shilganda deyarli to'liq cho'kmaga o'tadi. Cho'kma ammiakda erib, to'q ko'k [Cu(NH₃)₄]²⁺ kompleksini beradi — sifat analizida shu xossadan foydalaniladi.",
        en: "The solubility product Ksp(Cu(OH)₂) ≈ 2.2·10⁻²⁰ is very small, so Cu²⁺ is almost completely precipitated by OH⁻. The precipitate dissolves in ammonia giving the deep blue [Cu(NH₃)₄]²⁺ complex — a classic qualitative test.",
        ru: "Произведение растворимости ПР(Cu(OH)₂) ≈ 2.2·10⁻²⁰ очень мало, поэтому Cu²⁺ практически полностью осаждается. Осадок растворяется в аммиаке с образованием тёмно-синего комплекса [Cu(NH₃)₄]²⁺ — классический качественный тест.",
      },
    },
  },
  {
    pair: ["cuso4", "iron"],
    typeKey: "replacement",
    equation: "Fe + CuSO₄ → FeSO₄ + Cu",
    name: {
      uz: "Temirning misni siqib chiqarishi",
      en: "Iron displacing copper",
      ru: "Вытеснение меди железом",
    },
    resultText: {
      uz: "Ko'k rang asta-sekin yo'qoldi: FeSO₄ hosil bo'ldi va metall mis ajralib chiqdi.",
      en: "The blue colour slowly faded: FeSO₄ formed and metallic copper was deposited.",
      ru: "Синий цвет постепенно исчез: образовался FeSO₄ и выделилась металлическая медь.",
    },
    observed: ["colorChange"],
    hazard: "low",
    products: [],
    depositName: "Cu",
    animation: {
      liquid: "#a9cfc0",
      glow: null,
      bubbles: false,
      precipitate: "#b06a3b",
      light: false,
      intensity: "medium",
      duration: 3600,
    },
    notes: {
      beginner: {
        uz: "Ko'k eritma sekin rangsizlanadi va temir ustida qizg'ish mis qatlami paydo bo'ladi.",
        en: "The blue solution slowly loses its colour and a reddish copper layer appears on the iron.",
        ru: "Синий раствор постепенно обесцвечивается, а на железе появляется красноватый слой меди.",
      },
      student: {
        uz: "Fe aktivlik qatorida Cu dan oldinda turadi, shuning uchun misni tuzidan siqib chiqaradi: Fe + Cu²⁺ → Fe²⁺ + Cu.",
        en: "Fe stands before Cu in the activity series, so it displaces copper from its salt: Fe + Cu²⁺ → Fe²⁺ + Cu.",
        ru: "Fe стоит до Cu в ряду активности, поэтому вытесняет медь из её соли: Fe + Cu²⁺ → Fe²⁺ + Cu.",
      },
      advanced: {
        uz: "Redoks reaksiya: E°(Fe²⁺/Fe) = −0.44 V, E°(Cu²⁺/Cu) = +0.34 V; ΔE° = +0.78 V > 0 bo'lgani uchun jarayon o'z-o'zidan boradi. Ko'k rang Cu²⁺ akva kompleksining yo'qolishini ko'rsatadi (Fe²⁺ yashil, lekin suyultirilgan eritmada deyarli ko'rinmaydi).",
        en: "A redox reaction: E°(Fe²⁺/Fe) = −0.44 V, E°(Cu²⁺/Cu) = +0.34 V; ΔE° = +0.78 V > 0, so the process is spontaneous. The blue colour disappears together with the Cu²⁺ aqua complex.",
        ru: "Редокс-реакция: E°(Fe²⁺/Fe) = −0.44 В, E°(Cu²⁺/Cu) = +0.34 В; ΔE° = +0.78 В > 0, процесс самопроизвольный. Синий цвет исчезает вместе с аквакомплексом Cu²⁺.",
      },
    },
  },
  {
    pair: ["cuso4", "magnesium"],
    typeKey: "replacement",
    equation: "Mg + CuSO₄ → MgSO₄ + Cu",
    name: {
      uz: "Magniyning misni siqib chiqarishi",
      en: "Magnesium displacing copper",
      ru: "Вытеснение меди магнием",
    },
    resultText: {
      uz: "Reaksiya tez bordi: ko'k rang yo'qoldi, qizg'ish mis ajraldi va eritma isidi.",
      en: "The reaction was fast: the blue colour disappeared, reddish copper formed and the solution warmed up.",
      ru: "Реакция прошла быстро: синий цвет исчез, выделилась красноватая медь, раствор нагрелся.",
    },
    observed: ["colorChange", "temperature"],
    hazard: "medium",
    products: [],
    depositName: "Cu",
    animation: {
      liquid: "#cfe6e2",
      glow: null,
      bubbles: true,
      precipitate: "#b06a3b",
      light: false,
      intensity: "high",
      duration: 2800,
    },
    notes: {
      beginner: {
        uz: "Magniy misdan faolroq, shuning uchun ko'k eritmadan misni «siqib chiqaradi». Eritma isiydi.",
        en: "Magnesium is more active than copper, so it pushes copper out of the blue solution. The mixture warms up.",
        ru: "Магний активнее меди, поэтому вытесняет медь из синего раствора. Смесь нагревается.",
      },
      student: {
        uz: "Mg + Cu²⁺ → Mg²⁺ + Cu. Mg faolroq bo'lgani uchun reaksiya temirga qaraganda tezroq va kuchliroq issiqlik ajralishi bilan boradi.",
        en: "Mg + Cu²⁺ → Mg²⁺ + Cu. Since Mg is more active, the reaction is faster than with iron and releases more heat.",
        ru: "Mg + Cu²⁺ → Mg²⁺ + Cu. Mg активнее, поэтому реакция идёт быстрее, чем с железом, и с большим выделением тепла.",
      },
      advanced: {
        uz: "ΔE° = E°(Cu²⁺/Cu) − E°(Mg²⁺/Mg) = +0.34 − (−2.37) = +2.71 V — juda katta harakatlantiruvchi kuch, shuning uchun jarayon kuchli ekzotermik. MgSO₄ eritmasi rangsiz bo'lib qoladi.",
        en: "ΔE° = E°(Cu²⁺/Cu) − E°(Mg²⁺/Mg) = +0.34 − (−2.37) = +2.71 V, a very large driving force, hence the strongly exothermic behaviour. MgSO₄ solution stays colourless.",
        ru: "ΔE° = E°(Cu²⁺/Cu) − E°(Mg²⁺/Mg) = +0.34 − (−2.37) = +2.71 В — очень большая движущая сила, поэтому процесс сильно экзотермичен. Раствор MgSO₄ остаётся бесцветным.",
      },
    },
  },
  {
    pair: ["sodium", "water"],
    typeKey: "metalWater",
    equation: "2Na + 2H₂O → 2NaOH + H₂↑",
    gasName: "H₂",
    name: {
      uz: "Natriyning suv bilan reaksiyasi",
      en: "Reaction of sodium with water",
      ru: "Реакция натрия с водой",
    },
    resultText: {
      uz: "Natriy suv yuzasida erib, tez harakatlandi: vodorod ajraldi va NaOH hosil bo'ldi (kuchli issiqlik).",
      en: "Sodium melted and moved rapidly over the water surface: hydrogen was released and NaOH formed with intense heat.",
      ru: "Натрий плавился и быстро двигался по поверхности воды: выделился водород и образовался NaOH с сильным теплом.",
    },
    observed: ["bubbles", "gas", "light", "temperature"],
    hazard: "high",
    products: ["naoh"],
    animation: {
      liquid: "#e8fbff",
      glow: "#f97316",
      bubbles: true,
      precipitate: null,
      light: true,
      intensity: "high",
      duration: 2200,
    },
    notes: {
      beginner: {
        uz: "Natriy suvda eriydi va juda ko'p issiqlik chiqaradi. Ajralgan vodorod gazi yonishi mumkin — bu haqiqiy laboratoriyada xavfli.",
        en: "Sodium melts in the water and releases a lot of heat. The hydrogen formed can ignite — dangerous in a real laboratory.",
        ru: "Натрий плавится в воде и выделяет много тепла. Образующийся водород может воспламениться — опасно в реальной лаборатории.",
      },
      student: {
        uz: "2Na + 2H₂O → 2NaOH + H₂↑. Bu ishqoriy metallar uchun xarakterli reaksiya: hosil bo'lgan NaOH eritmaning pH ni keskin oshiradi.",
        en: "2Na + 2H₂O → 2NaOH + H₂↑. This is typical for alkali metals: the NaOH formed raises the pH sharply.",
        ru: "2Na + 2H₂O → 2NaOH + H₂↑. Это характерно для щелочных металлов: образующийся NaOH резко повышает pH.",
      },
      advanced: {
        uz: "E°(Na⁺/Na) = −2.71 V — suvning vodorodga nisbatan tiklash potensialidan ancha past, shuning uchun jarayon spontan boradi. Reaksiya issiqligi vodorodni alanga temperaturasidan oshirib, vodorod-havo aralashmasining portlashiga olib kelishi mumkin (real laboratoriyada shu sabab xavfli).",
        en: "E°(Na⁺/Na) = −2.71 V is well below water reduction, so the process is spontaneous. The heat can bring hydrogen above its ignition temperature and ignite the hydrogen–air mixture (the main real-lab danger).",
        ru: "E°(Na⁺/Na) = −2.71 В значительно ниже восстановления воды, поэтому процесс самопроизвольный. Тепло может нагреть водород выше температуры воспламенения и поджечь смесь с воздухом (главная опасность в реальной лаборатории).",
      },
    },
  },
  {
    pair: ["magnesium", "oxygen"],
    typeKey: "combustion",
    equation: "2Mg + O₂ → 2MgO",
    energyRequired: true,
    name: {
      uz: "Magniyning yonishi (oksidlanish)",
      en: "Combustion of magnesium",
      ru: "Горение магния",
    },
    resultText: {
      uz: "Magniy yorqin oq nur bilan yondi va oq rangli MgO kukuni hosil bo'ldi.",
      en: "The magnesium burned with a bright white light and white MgO powder formed.",
      ru: "Магний сгорел ярко-белым пламенем, образовав белый порошок MgO.",
    },
    observed: ["light", "temperature"],
    hazard: "high",
    products: [],
    animation: {
      liquid: "#fdfdff",
      glow: "#fff3bf",
      bubbles: false,
      precipitate: "#f4f4f0",
      light: true,
      intensity: "high",
      duration: 2600,
    },
    notes: {
      beginner: {
        uz: "Magniy juda yorqin oq nur bilan yonadi va oq kukun (magniy oksidi) hosil bo'ladi. Bu nurning yorqinligi haqiqiy laboratoriyada ko'z uchun xavfli.",
        en: "Magnesium burns with a very bright white light and a white powder (magnesium oxide) forms. In a real laboratory this light is dangerous for the eyes.",
        ru: "Магний горит очень ярким белым светом, образуется белый порошок (оксид магния). В реальной лаборатории этот свет опасен для глаз.",
      },
      student: {
        uz: "Yonish — tez boradigan oksidlanish: 2Mg + O₂ → 2MgO. Boshlanishi uchun qo'shimcha energiya (yoqish) kerak, keyin reaksiya o'zi davom etadi.",
        en: "Combustion is rapid oxidation: 2Mg + O₂ → 2MgO. It needs activation energy (ignition) to start, then continues by itself.",
        ru: "Горение — быстрое окисление: 2Mg + O₂ → 2MgO. Для начала нужна энергия активации (поджиг), затем реакция идёт сама.",
      },
      advanced: {
        uz: "Kuchli ekzotermik reaksiya: ΔH ≈ −1200 kJ/mol. Magniy yonishida harorat 2000 °C dan oshadi va shu sabab yorug'lik ultrabinafsha qismini o'z ichiga oladi. MgO amfoter oksid.",
        en: "Strongly exothermic: ΔH ≈ −1200 kJ/mol. The flame temperature exceeds 2000 °C, so the light includes a strong UV component. MgO is an amphoteric oxide.",
        ru: "Сильно экзотермичная реакция: ΔH ≈ −1200 кДж/моль. Температура пламени превышает 2000 °C, поэтому свет содержит УФ-составляющую. MgO — амфотерный оксид.",
      },
    },
  },
  {
    pair: ["hydrogen", "oxygen"],
    typeKey: "combustion",
    equation: "2H₂ + O₂ → 2H₂O",
    energyRequired: true,
    name: {
      uz: "Vodorodning yonishi (suv hosil bo'lishi)",
      en: "Combustion of hydrogen (formation of water)",
      ru: "Горение водорода (образование воды)",
    },
    resultText: {
      uz: "Uchqun ta'sirida gazlar reaksiyaga kirishdi: suv bug'i hosil bo'ldi va issiqlik ajraldi.",
      en: "Triggered by a spark the gases reacted: water vapour formed and heat was released.",
      ru: "От искры газы прореагировали: образовался водяной пар и выделилось тепло.",
    },
    observed: ["light", "temperature"],
    hazard: "high",
    products: ["water"],
    animation: {
      liquid: "#e4f2ff",
      glow: "#93c5fd",
      bubbles: true,
      precipitate: null,
      light: true,
      intensity: "high",
      duration: 2000,
    },
    notes: {
      beginner: {
        uz: "Vodorod va kislorod uchqun bilan birlashadi va suv hosil qiladi. Aralashma portlovchi bo'lgani uchun haqiqiy laboratoriyada juda xavfli.",
        en: "Hydrogen and oxygen combine at a spark to form water. Because the mixture is explosive it is very dangerous in a real laboratory.",
        ru: "Водород и кислород соединяются от искры, образуя воду. Смесь взрывоопасна, поэтому в реальной лаборатории это очень опасно.",
      },
      student: {
        uz: "2H₂ + O₂ → 2H₂O. Reaksiya kuchli ekzotermik; boshlanishi uchun uchqun yoki olov kerak, aralashma esa «portlovchi gaz» deb ataladi.",
        en: "2H₂ + O₂ → 2H₂O. The reaction is strongly exothermic; a spark or flame is needed to start it and the mixture is known as “detonating gas”.",
        ru: "2H₂ + O₂ → 2H₂O. Реакция сильно экзотермична; для начала нужна искра или пламя, а смесь называют «гремучим газом».",
      },
      advanced: {
        uz: "ΔH ≈ −286 kJ/mol (suyuq suv bo'yicha). Vodorodning havodagi portlash chegarasi 4–75 % — juda keng, shu sababli real laboratoriyada vodorodni yig'ishda olov manbai uzoq bo'lishi talab etiladi.",
        en: "ΔH ≈ −286 kJ/mol (to liquid water). Hydrogen's explosive range in air (4–75 %) is very wide, so in a real laboratory any flame source must be kept away when collecting hydrogen.",
        ru: "ΔH ≈ −286 кДж/моль (для жидкой воды). Пределы взрываемости водорода в воздухе (4–75 %) очень широки, поэтому в реальной лаборатории источники огня должны быть удалены.",
      },
    },
  },
  {
    pair: ["oxygen", "sodium"],
    typeKey: "oxidation",
    equation: "4Na + O₂ → 2Na₂O",
    name: {
      uz: "Natriyning havoda oksidlanishi",
      en: "Oxidation of sodium in air",
      ru: "Окисление натрия на воздухе",
    },
    resultText: {
      uz: "Kumushsimon natriy yuzasi tez oqarib, oq Na₂O qatlami bilan qoplandi.",
      en: "The silvery sodium surface quickly dulled and became covered with a white Na₂O layer.",
      ru: "Серебристая поверхность натрия быстро потускнела и покрылась белым слоем Na₂O.",
    },
    observed: ["colorChange"],
    hazard: "high",
    products: [],
    animation: {
      liquid: "#eef3f8",
      glow: null,
      bubbles: false,
      precipitate: "#f7f7f2",
      light: false,
      intensity: "medium",
      duration: 2600,
    },
    notes: {
      beginner: {
        uz: "Natriy havoda tez qorayadi: yuzasida oq qatlam paydo bo'ladi. Shu sababli u kerosin ostida saqlanadi.",
        en: "Sodium dulls quickly in air and a white layer appears on its surface. That is why it is stored under oil.",
        ru: "Натрий быстро тускнеет на воздухе, на поверхности появляется белый слой. Поэтому его хранят под маслом.",
      },
      student: {
        uz: "4Na + O₂ → 2Na₂O. Ishqoriy metallar kislorod bilan oson reaksiyaga kirishadi, shu sababli ular havodan izolyatsiya qilinadi.",
        en: "4Na + O₂ → 2Na₂O. Alkali metals react easily with oxygen, so they must be kept away from air.",
        ru: "4Na + O₂ → 2Na₂O. Щелочные металлы легко реагируют с кислородом, поэтому их изолируют от воздуха.",
      },
      advanced: {
        uz: "Standart sharoitda Na₂O dan tashqari peroksid Na₂O₂ ham hosil bo'lishi mumkin (2Na + O₂ → Na₂O₂), ortiqcha kislorod va yuqori haroratda. Hosil bo'lgan oksid suv bilan NaOH beradi.",
        en: "Besides Na₂O, the peroxide Na₂O₂ can also form (2Na + O₂ → Na₂O₂) with excess oxygen and higher temperature. Both oxides give NaOH with water.",
        ru: "Помимо Na₂O, при избытке кислорода и высокой температуре может образоваться пероксид Na₂O₂ (2Na + O₂ → Na₂O₂). Оба оксида с водой дают NaOH.",
      },
    },
  },
  {
    pair: ["iron", "oxygen"],
    typeKey: "oxidation",
    equation: "4Fe + 3O₂ + xH₂O → 2Fe₂O₃·xH₂O",
    name: {
      uz: "Temirning zanglash reaksiyasi",
      en: "Rusting of iron",
      ru: "Ржавление железа",
    },
    resultText: {
      uz: "Temir yuzasida qizg'ish-qo'ng'ir zang qatlami sekin hosil bo'ldi (soatlar/kunlar davomida).",
      en: "A reddish-brown rust layer slowly formed on the iron surface (over hours or days).",
      ru: "На поверхности железа медленно образовался красно-бурый слой ржавчины (часы или дни).",
    },
    observed: ["colorChange"],
    hazard: "low",
    products: [],
    animation: {
      liquid: "#d8b79a",
      glow: null,
      bubbles: false,
      precipitate: "#8b5a2b",
      light: false,
      intensity: "low",
      duration: 4200,
    },
    notes: {
      beginner: {
        uz: "Temir havo va namlik ta'sirida zanglaydi. Bu juda sekin jarayon — bir zumda emas, kunlar davomida boradi.",
        en: "Iron rusts under the influence of air and moisture. It is a very slow process — it takes days, not a moment.",
        ru: "Железо ржавеет под действием воздуха и влаги. Это очень медленный процесс — дни, а не мгновение.",
      },
      student: {
        uz: "Zanglash — sekin oksidlanish. Zang asosan Fe₂O₃·xH₂O dan iborat va temirni butunlay yemirib, mustahkamligini yo'qotadi.",
        en: "Rusting is slow oxidation. Rust consists mainly of Fe₂O₃·xH₂O and gradually destroys the iron, reducing its strength.",
        ru: "Ржавление — медленное окисление. Ржавчина состоит в основном из Fe₂O₃·xH₂O и постепенно разрушает железо.",
      },
      advanced: {
        uz: "Elektrokimyoviy korroziya: anodda Fe → Fe²⁺ + 2e⁻, katodda O₂ + 2H₂O + 4e⁻ → 4OH⁻. Namlik va elektrolitlar (masalan NaCl) jarayonni tezlashtiradi. Simulyatsiya real vaqtni qisqartiradi.",
        en: "Electrochemical corrosion: at the anode Fe → Fe²⁺ + 2e⁻, at the cathode O₂ + 2H₂O + 4e⁻ → 4OH⁻. Moisture and electrolytes (such as NaCl) accelerate it. The simulation compresses real time.",
        ru: "Электрохимическая коррозия: на аноде Fe → Fe²⁺ + 2e⁻, на катоде O₂ + 2H₂O + 4e⁻ → 4OH⁻. Влага и электролиты (например NaCl) ускоряют процесс. Симуляция сжимает реальное время.",
      },
    },
  },
  {
    pair: ["magnesium", "water"],
    typeKey: "metalWater",
    equation: "Mg + 2H₂O → Mg(OH)₂ + H₂↑ (sekin, qizdirilganda tezlashadi)",
    gasName: "H₂",
    name: {
      uz: "Magniyning suv bilan sekin reaksiyasi",
      en: "Slow reaction of magnesium with water",
      ru: "Медленная реакция магния с водой",
    },
    resultText: {
      uz: "Sovuq suvda reaksiya juda sekin: oz miqdorda pufakcha ajraldi, Mg(OH)₂ hosil bo'ldi.",
      en: "In cold water the reaction is very slow: a few bubbles appeared and Mg(OH)₂ formed.",
      ru: "В холодной воде реакция очень медленная: появилось немного пузырьков и образовался Mg(OH)₂.",
    },
    observed: ["bubbles", "gas"],
    hazard: "low",
    products: [],
    animation: {
      liquid: "#e8f1f5",
      glow: null,
      bubbles: true,
      precipitate: "#eef4f7",
      light: false,
      intensity: "low",
      duration: 4200,
    },
    notes: {
      beginner: {
        uz: "Magniy suvda juda sekin eriydi. Bir nechta pufakcha ko'rish uchun uzoq kutish kerak — qaynoq suvda esa tezroq bo'ladi.",
        en: "Magnesium reacts very slowly with water. You must wait a long time to see a few bubbles; in hot water it is faster.",
        ru: "Магний реагирует с водой очень медленно. Чтобы увидеть пузырьки, нужно долго ждать; в горячей воде быстрее.",
      },
      student: {
        uz: "Mg + 2H₂O → Mg(OH)₂ + H₂↑. Magniy suv bilan faqat qizdirilganda sezilarli reaksiyaga kirishadi (bug' bilan tezroq).",
        en: "Mg + 2H₂O → Mg(OH)₂ + H₂↑. Magnesium reacts noticeably with water only when heated (faster with steam).",
        ru: "Mg + 2H₂O → Mg(OH)₂ + H₂↑. Магний заметно реагирует с водой только при нагревании (с паром быстрее).",
      },
      advanced: {
        uz: "Reaksiya yuzasida hosil bo'ladigan erimaydigan Mg(OH)₂ qatlami jarayonni passivlaydi, shu sabab sovuq suvda tezlik amalda nolga yaqin. Harorat oshishi himoya qatlamining buzilishiga olib keladi.",
        en: "The insoluble Mg(OH)₂ layer formed on the surface passivates the reaction, so the rate in cold water is practically zero. Higher temperature breaks down that protective layer.",
        ru: "Образующийся нерастворимый слой Mg(OH)₂ пассивирует поверхность, поэтому в холодной воде скорость практически нулевая. Нагревание разрушает защитный слой.",
      },
    },
  },
  {
    pair: ["cuso4", "water"],
    typeKey: "dissolution",
    equation: "CuSO₄ → Cu²⁺ + SO₄²⁻ (gidratlanish)",
    name: {
      uz: "Mis sulfatning suvda erishi",
      en: "Dissolution of copper sulfate in water",
      ru: "Растворение сульфата меди в воде",
    },
    resultText: {
      uz: "Yangi modda hosil bo'lmadi: CuSO₄ suvda erib ko'k rangli eritma berdi.",
      en: "No new substance formed: CuSO₄ dissolved in water giving a blue solution.",
      ru: "Новое вещество не образовалось: CuSO₄ растворился в воде, дав синий раствор.",
    },
    observed: ["colorChange"],
    hazard: "low",
    products: [],
    animation: {
      liquid: "#5aa6e0",
      glow: null,
      bubbles: false,
      precipitate: null,
      light: false,
      intensity: "low",
      duration: 2400,
    },
    notes: {
      beginner: {
        uz: "Suv quyilganda eritma ko'k rangga ega bo'ladi. Bu yangi modda emas — shunchaki erish jarayoni.",
        en: "When water is added the solution becomes blue. This is not a new substance — just a dissolution process.",
        ru: "При добавлении воды раствор становится синим. Это не новое вещество — просто растворение.",
      },
      student: {
        uz: "Eritish — fizik jarayon: CuSO₄ kristallari ionlarga ajralib suv molekulalari bilan gidratlanadi. Ko'k rang Cu(H₂O)₄²⁺ akva kompleksiga tegishli.",
        en: "Dissolution is a physical process: CuSO₄ crystals dissociate into ions hydrated by water. The blue colour belongs to the Cu(H₂O)₄²⁺ aqua complex.",
        ru: "Растворение — физический процесс: кристаллы CuSO₄ диссоциируют на ионы, гидратируемые водой. Синий цвет даёт аквакомплекс Cu(H₂O)₄²⁺.",
      },
      advanced: {
        uz: "Kristall panjara energiyasi gidratlanish energiyasidan farq qiladi, shu sabab CuSO₄ eritilganda ozgina issiqlik ajraladi (ΔH_gidr < 0). Cu²⁺ ionlarining d-d o'tishlari 600–800 nm sohada yutilish beradi — eritma ko'k ko'rinadi.",
        en: "Lattice enthalpy differs from hydration enthalpy, so dissolving CuSO₄ releases a little heat (ΔH_hyd < 0). The d–d transitions of Cu²⁺ absorb at 600–800 nm, making the solution appear blue.",
        ru: "Энергия кристаллической решётки и энергия гидратации различаются, поэтому при растворении CuSO₄ выделяется немного тепла (ΔH_гидр < 0). d–d переходы Cu²⁺ поглощают при 600–800 нм, раствор выглядит синим.",
      },
    },
  },
  {
    pair: ["salt", "water"],
    typeKey: "dissolution",
    equation: "NaCl (q) → Na⁺ + Cl⁻",
    name: {
      uz: "Tuzning suvda erishi",
      en: "Dissolution of salt in water",
      ru: "Растворение соли в воде",
    },
    resultText: {
      uz: "Yangi modda hosil bo'lmadi: NaCl kristallari suvda ionlarga ajraldi va tiniq eritma hosil qildi.",
      en: "No new substance formed: the NaCl crystals dissociated into ions and gave a clear solution.",
      ru: "Новое вещество не образовалось: кристаллы NaCl распались на ионы, дав прозрачный раствор.",
    },
    observed: ["noChange"],
    hazard: "none",
    products: [],
    animation: {
      liquid: "#e9f8ff",
      glow: null,
      bubbles: false,
      precipitate: null,
      light: false,
      intensity: "low",
      duration: 2000,
    },
    notes: {
      beginner: {
        uz: "Tuz suvda eriydi va ko'zdan yo'qoladi, lekin u yo'qolmaydi — ionlar eritmada qoladi.",
        en: "The salt dissolves and seems to disappear, but it does not vanish — the ions stay in the solution.",
        ru: "Соль растворяется и будто исчезает, но не исчезает — ионы остаются в растворе.",
      },
      student: {
        uz: "Bu fizik jarayon: NaCl → Na⁺ + Cl⁻. Suv molekulalari ionlarni o'rab (gidratlaydi) va kristall panjarani buzadi.",
        en: "This is a physical process: NaCl → Na⁺ + Cl⁻. Water molecules surround (hydrate) the ions and break up the crystal lattice.",
        ru: "Это физический процесс: NaCl → Na⁺ + Cl⁻. Молекулы воды окружают (гидратируют) ионы и разрушают кристаллическую решётку.",
      },
      advanced: {
        uz: "NaCl erishi deyarli issiqlik effektisiz boradi (ΔH_eritma ≈ +3.9 kJ/mol, ozgina endotermik), chunki panjara energiyasi gidratlanish energiyasi bilan deyarli qoplanadi. Yangi kovalent bog'lanish hosil bo'lmaydi.",
        en: "Dissolving NaCl is almost thermally neutral (ΔH_sol ≈ +3.9 kJ/mol, slightly endothermic) because lattice enthalpy is almost balanced by hydration enthalpy. No new covalent bond forms.",
        ru: "Растворение NaCl почти теплонейтрально (ΔH_раств ≈ +3.9 кДж/моль, слабо эндотермично), так как энергия решётки почти компенсируется гидратацией. Новых ковалентных связей не образуется.",
      },
    },
  },
  {
    pair: ["hydrogen", "sodium"],
    typeKey: "synthesis",
    equation: "2Na + H₂ → 2NaH (yuqori haroratda)",
    energyRequired: true,
    name: {
      uz: "Natriy gidridi hosil bo'lishi",
      en: "Formation of sodium hydride",
      ru: "Образование гидрида натрия",
    },
    resultText: {
      uz: "Xona haroratida reaksiya bo'lmadi: jarayon faqat 200–400 °C da boshlanadi (simulyatsiyada energiya berildi).",
      en: "No reaction at room temperature: the process starts only at 200–400 °C (energy was supplied in the simulation).",
      ru: "При комнатной температуре реакции нет: процесс идёт только при 200–400 °C (в симуляции энергия подведена).",
    },
    observed: ["colorChange", "temperature"],
    hazard: "high",
    products: [],
    animation: {
      liquid: "#eef4fa",
      glow: "#fbbf24",
      bubbles: true,
      precipitate: "#e9e9e4",
      light: false,
      intensity: "medium",
      duration: 3000,
    },
    notes: {
      beginner: {
        uz: "Sovuq holatda natriy vodorod bilan reaksiyaga kirishmaydi: buning uchun juda yuqori harorat kerak.",
        en: "At room temperature sodium does not react with hydrogen: a very high temperature is needed.",
        ru: "При комнатной температуре натрий не реагирует с водородом: нужна очень высокая температура.",
      },
      student: {
        uz: "2Na + H₂ → 2NaH. Bu birikish reaksiyasi va faqat qizdirilganda (200–400 °C) boradi. NaH — kuchli tiklovchi (reduktor).",
        en: "2Na + H₂ → 2NaH. A synthesis reaction that only proceeds when heated (200–400 °C). NaH is a strong reducing agent.",
        ru: "2Na + H₂ → 2NaH. Реакция соединения, идёт только при нагревании (200–400 °C). NaH — сильный восстановитель.",
      },
      advanced: {
        uz: "Ionli gidrid: NaH tarkibida H⁻ gidrid ioni bo'ladi. H₂ molekulasining dissotsiatsiya energiyasi yuqori (436 kJ/mol), shu sabab faollashuv energiyasi katta va reaksiya faqat yuqori haroratda boradi.",
        en: "An ionic hydride: NaH contains the H⁻ hydride ion. The H₂ bond dissociation energy is high (436 kJ/mol), so the activation barrier is large and the reaction needs high temperature.",
        ru: "Ионный гидрид: NaH содержит гидрид-ион H⁻. Энергия диссоциации H₂ высока (436 кДж/моль), поэтому барьер активации велик и реакция идёт лишь при высокой температуре.",
      },
    },
  },
  {
    pair: ["cuso4", "sodium"],
    typeKey: "twoStep",
    equation: "2Na + 2H₂O → 2NaOH + H₂↑  ⓵  |  CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄  ⓶",
    gasName: "H₂",
    name: {
      uz: "Natriyning mis sulfat eritmasi bilan ketma-ket reaksiyasi",
      en: "Consecutive reaction of sodium with copper sulfate solution",
      ru: "Последовательная реакция натрия с раствором сульфата меди",
    },
    resultText: {
      uz: "Natriy avval suv bilan reaksiyaga kirishdi (H₂ ajraldi, NaOH hosil bo'ldi), so'ng NaOH mis sulfat bilan ko'k cho'kma berdi.",
      en: "Sodium first reacted with the water (H₂ released, NaOH formed), then the NaOH gave a blue precipitate with copper sulfate.",
      ru: "Сначала натрий прореагировал с водой (выделился H₂, образовался NaOH), затем NaOH дал синий осадок с сульфатом меди.",
    },
    observed: ["bubbles", "gas", "precipitate", "temperature", "light"],
    hazard: "high",
    products: [],
    precipitateName: "Cu(OH)₂",
    animation: {
      liquid: "#8fc4ea",
      glow: "#f97316",
      bubbles: true,
      precipitate: "#5bb3e8",
      light: true,
      intensity: "high",
      duration: 3400,
    },
    notes: {
      beginner: {
        uz: "Bu yerda bir vaqtda ikki jarayon bor: natriy suv bilan reaksiyaga kirishadi, keyin hosil bo'lgan ishqor mis sulfat bilan ko'k cho'kma beradi.",
        en: "Two processes happen here: sodium reacts with water, then the base formed gives a blue precipitate with copper sulfate.",
        ru: "Здесь идут два процесса: натрий реагирует с водой, затем образовавшееся основание даёт синий осадок с сульфатом меди.",
      },
      student: {
        uz: "Natriy to'g'ridan-to'g'ri CuSO₄ bilan emas, avval suv bilan reaksiyaga kirishadi: 2Na + 2H₂O → 2NaOH + H₂↑, so'ng CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.",
        en: "Sodium does not react with CuSO₄ directly; it reacts with water first: 2Na + 2H₂O → 2NaOH + H₂↑, then CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.",
        ru: "Натрий не реагирует с CuSO₄ напрямую: сначала с водой — 2Na + 2H₂O → 2NaOH + H₂↑, затем CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.",
      },
      advanced: {
        uz: "Bu misol «aktiv metall faqat tuz bilan reaksiyaga kirishadi» degan soddalashtirishning xato ekanini ko'rsatadi: E°(Na⁺/Na) = −2.71 V bo'lgani uchun suv vodorodini tiklash termodinamik jihatdan ancha qulay, shu sabab birinchi bosqich suv bilan boradi. Amalda reaksiya nazoratsiz — real laboratoriyada bajarmaslik kerak.",
        en: "This shows why the simplification “an active metal reacts with the salt” is wrong: with E°(Na⁺/Na) = −2.71 V, reducing water is thermodynamically far more favourable, so the first step is with water. In practice the reaction is uncontrolled and must not be attempted in a real laboratory.",
        ru: "Это показывает ошибочность упрощения «активный металл реагирует с солью»: при E°(Na⁺/Na) = −2.71 В восстановление воды термодинамически выгоднее, поэтому первая стадия идёт с водой. В реальной лаборатории реакция неконтролируема.",
      },
    },
  },
  {
    pair: ["naoh", "sodium"],
    typeKey: "metalWater",
    equation: "2Na + 2H₂O → 2NaOH + H₂↑ (NaOH reaksiyada ishtirok etmaydi)",
    gasName: "H₂",
    name: {
      uz: "Natriyning ishqor eritmasidagi suv bilan reaksiyasi",
      en: "Reaction of sodium with the water in the base solution",
      ru: "Реакция натрия с водой в растворе основания",
    },
    resultText: {
      uz: "Natriy ishqor bilan emas, eritmadagi suv bilan reaksiyaga kirishdi: H₂ ajraldi va NaOH miqdori oshdi.",
      en: "Sodium reacted not with the base but with the water in the solution: H₂ was released and NaOH increased.",
      ru: "Натрий прореагировал не с основанием, а с водой в растворе: выделился H₂, количество NaOH выросло.",
    },
    observed: ["bubbles", "gas", "light", "temperature"],
    hazard: "high",
    products: ["naoh"],
    animation: {
      liquid: "#eafcff",
      glow: "#f97316",
      bubbles: true,
      precipitate: null,
      light: true,
      intensity: "high",
      duration: 2400,
    },
    notes: {
      beginner: {
        uz: "Natriy ishqorga emas, suvga ta'sir qiladi: suvdan vodorod ajraladi.",
        en: "Sodium attacks the water, not the base: hydrogen is released from the water.",
        ru: "Натрий действует на воду, а не на основание: водород выделяется из воды.",
      },
      student: {
        uz: "2Na + 2H₂O → 2NaOH + H₂↑. Eritmadagi NaOH reaksiyaga kirishmaydi, faqat uning konsentratsiyasi ortadi.",
        en: "2Na + 2H₂O → 2NaOH + H₂↑. The NaOH already in the solution does not react; only its concentration grows.",
        ru: "2Na + 2H₂O → 2NaOH + H₂↑. NaOH в растворе не реагирует, растёт лишь его концентрация.",
      },
      advanced: {
        uz: "Bu «metall ishqor bilan reaksiyaga kirishmaydi» qoidasining tasdig'i: E°(Na⁺/Na) = −2.71 V bo'lgani uchun elektronlar suvga o'tadi, OH⁻ esa faqat kuzatuvchi (spektator) ion hisoblanadi.",
        en: "This confirms the rule that a metal such as Na does not react with the base itself: with E°(Na⁺/Na) = −2.71 V the electrons go to water, and OH⁻ is merely a spectator ion.",
        ru: "Это подтверждает правило, что Na не реагирует с основанием: при E°(Na⁺/Na) = −2.71 В электроны переходят к воде, а OH⁻ — лишь спектатор-ион.",
      },
    },
  },
]

/**
 * Ro'yxatdagi kombinatsiyalar xona haroratida kimyoviy reaksiya bermaydi.
 * Sabab har bir juftlik uchun alohida, ilmiy asoslangan holda yozilgan.
 */
export const DEFAULT_NO_REACTION_REASON = {
  uz: "Bu ikki modda xona haroratida (≈20 °C) o'zaro kimyoviy reaksiyaga kirishmaydi: yangi barqaror modda, cho'kma yoki gaz hosil bo'lmaydi.",
  en: "These two substances do not react at room temperature (≈20 °C): no new stable substance, precipitate or gas is formed.",
  ru: "Эти два вещества не реагируют при комнатной температуре (≈20 °C): новое устойчивое вещество, осадок или газ не образуются.",
}

export const noReactionReasons = {
  "cuso4+hcl": {
    uz: "Har ikkala modda ham suvda yaxshi eriydigan ionlarga ajralgan. CuCl₂ ham, H₂SO₄ ham suvda eriydi, shuning uchun cho'kma, gaz yoki suv hosil bo'lmaydi.",
    en: "Both substances are dissolved as ions. CuCl₂ and H₂SO₄ are both soluble, so no precipitate, gas or water is formed.",
    ru: "Оба вещества находятся в виде ионов. CuCl₂ и H₂SO₄ растворимы, поэтому осадок, газ или вода не образуются.",
  },
  "cuso4+hydrogen": {
    uz: "Termodinamik jihatdan H₂ mis(II) ionlarini tiklay oladi, lekin katalizatorsiz bu jarayon juda sekin — shu sabab oddiy sharoitda ko'rinadigan reaksiya kuzatilmaydi.",
    en: "Thermodynamically H₂ can reduce copper(II) ions, but without a catalyst the process is extremely slow, so no visible reaction occurs under ordinary conditions.",
    ru: "Термодинамически H₂ может восстанавливать ионы меди(II), но без катализатора процесс крайне медленный, поэтому видимой реакции нет.",
  },
  "cuso4+oxygen": {
    uz: "Cu²⁺ ionlari kislorod ta'sirida oksidlanmaydi, sulfat ioni esa barqaror. Shu sabab ikki modda o'zaro ta'sirlashmaydi.",
    en: "Cu²⁺ ions are not oxidised by oxygen and the sulfate ion is stable, so the two substances do not interact.",
    ru: "Ионы Cu²⁺ не окисляются кислородом, сульфат-ион устойчив, поэтому вещества не взаимодействуют.",
  },
  "cuso4+salt": {
    uz: "Ion almashinishda CuCl₂ ham, Na₂SO₄ ham suvda eriydi. Cho'kma hosil bo'lmasa, reaksiya amalda ko'rinmaydi — faqat ionlar aralashadi.",
    en: "In a possible ion exchange both CuCl₂ and Na₂SO₄ are soluble. With no precipitate the reaction is not visible — the ions simply mix.",
    ru: "При ионном обмене и CuCl₂, и Na₂SO₄ растворимы. Без осадка реакция не наблюдается — ионы просто смешиваются.",
  },
  "hcl+hydrogen": {
    uz: "Vodorod H⁺ ionlari bilan reaksiyaga kirishmaydi: oksidlanish-qaytarilish uchun kuchli tiklovchi yoki oksidlovchi kerak, bu yerda ikkalasi ham yo'q.",
    en: "Hydrogen does not react with H⁺ ions: a redox reaction needs a stronger oxidising or reducing partner, which is absent here.",
    ru: "Водород не реагирует с ионами H⁺: для редокс-реакции нужен более сильный окислитель или восстановитель, которого здесь нет.",
  },
  "hcl+oxygen": {
    uz: "Xona haroratida HCl kislorod bilan reaksiyaga kirishmaydi. Sanoatda bu jarayon faqat katalizator va ~400 °C da boradi (4HCl + O₂ → 2Cl₂ + 2H₂O).",
    en: "HCl does not react with oxygen at room temperature. Industrially the process needs a catalyst and about 400 °C (4HCl + O₂ → 2Cl₂ + 2H₂O).",
    ru: "При комнатной температуре HCl с кислородом не реагирует. В промышленности процесс идёт с катализатором при ~400 °C (4HCl + O₂ → 2Cl₂ + 2H₂O).",
  },
  "hcl+salt": {
    uz: "Ikkala eritma ham ionlarga ajralgan (H⁺, Cl⁻, Na⁺, Cl⁻). Yangi cho'kma, gaz yoki kuchsiz elektrolit hosil bo'lmaydi, shu sabab reaksiya kuzatilmaydi.",
    en: "Both solutions are fully dissociated (H⁺, Cl⁻, Na⁺, Cl⁻). No precipitate, gas or weak electrolyte forms, so no reaction is observed.",
    ru: "Оба раствора полностью диссоциированы (H⁺, Cl⁻, Na⁺, Cl⁻). Осадок, газ или слабый электролит не образуются, реакции нет.",
  },
  "hydrogen+iron": {
    uz: "Xona haroratida temir vodorodni yutmaydi va birikma hosil qilmaydi. Yuqori haroratda esa vodorod metall ichida tarqalib, uni mo'rtlashtiradi (vodorod mo'rtlashuvi) — bu kimyoviy birikma emas.",
    en: "At room temperature iron neither absorbs hydrogen nor forms a compound. At high temperature hydrogen diffuses into the metal causing embrittlement — not a chemical compound.",
    ru: "При комнатной температуре железо не поглощает водород и не образует соединений. При высокой температуре водород диффундирует в металл и охрупчивает его — это не соединение.",
  },
  "hydrogen+magnesium": {
    uz: "MgH₂ faqat yuqori harorat va bosimda (katalizator ishtirokida) hosil bo'ladi. Standart sharoitda reaksiya termodinamik jihatdan qulay emas.",
    en: "MgH₂ forms only at high temperature and pressure (with a catalyst). Under standard conditions the reaction is not thermodynamically favourable.",
    ru: "MgH₂ образуется только при высокой температуре и давлении (с катализатором). В стандартных условиях реакция термодинамически невыгодна.",
  },
  "hydrogen+naoh": {
    uz: "OH⁻ ioni vodorodni oksidlay olmaydi, H₂ esa ishqor bilan reaksiyaga kirishmaydi. Shu sabab eritmada hech qanday o'zgarish kuzatilmaydi.",
    en: "The OH⁻ ion cannot oxidise hydrogen and H₂ does not react with the base, so no change is observed in the solution.",
    ru: "Ион OH⁻ не может окислить водород, а H₂ не реагирует с основанием, поэтому изменений в растворе нет.",
  },
  "hydrogen+salt": {
    uz: "Na⁺ ionini vodorod bilan tiklash mumkin emas: buning uchun ancha kuchli tiklovchi yoki elektroliz kerak. Eritmada reaksiya kuzatilmaydi.",
    en: "Na⁺ cannot be reduced by hydrogen: a much stronger reducing agent or electrolysis would be needed. No reaction is observed in the solution.",
    ru: "Na⁺ нельзя восстановить водородом: требуется более сильный восстановитель или электролиз. Реакции в растворе нет.",
  },
  "hydrogen+water": {
    uz: "Vodorod suvda juda kam eriydi (~0.0016 g/L) va standart sharoitda suv bilan kimyoviy reaksiyaga kirishmaydi.",
    en: "Hydrogen is very poorly soluble in water (~0.0016 g/L) and does not react with it under standard conditions.",
    ru: "Водород очень плохо растворим в воде (~0.0016 г/л) и в стандартных условиях с ней не реагирует.",
  },
  "iron+magnesium": {
    uz: "Qattiq holatdagi ikki metall xona haroratida kimyoviy reaksiyaga kirishmaydi. Yuqori haroratda faqat qotishma (fizik aralashma) hosil bo'lishi mumkin, bu kimyoviy birikma emas.",
    en: "Two solid metals do not react at room temperature. At high temperature only an alloy (a physical mixture) can form, not a chemical compound.",
    ru: "Два твёрдых металла не реагируют при комнатной температуре. При высокой температуре образуется лишь сплав (физическая смесь), а не соединение.",
  },
  "iron+naoh": {
    uz: "Temir ishqor eritmasi bilan reaksiyaga kirishmaydi: u amfoter metall emas (aluminiy va ruxdan farqli). Shu sabab NaOH ta'sirida o'zgarish bo'lmaydi.",
    en: "Iron does not react with a base solution: it is not an amphoteric metal (unlike aluminium or zinc), so NaOH has no effect.",
    ru: "Железо не реагирует с раствором основания: оно не амфотерный металл (в отличие от алюминия и цинка), поэтому NaOH не действует.",
  },
  "iron+salt": {
    uz: "Quruq holatda reaksiya yo'q. Suv va kislorod ishtirokida NaCl elektrolit sifatida temirning zanglashini sezilarli tezlashtiradi (dengiz suvi korroziyasi).",
    en: "No reaction when dry. In the presence of water and oxygen, NaCl acts as an electrolyte and noticeably accelerates the rusting of iron (marine corrosion).",
    ru: "В сухом виде реакции нет. В присутствии воды и кислорода NaCl как электролит заметно ускоряет ржавление железа (морская коррозия).",
  },
  "iron+sodium": {
    uz: "Natriy 98 °C da eriydi, lekin suyuq holatda ham temir bilan kimyoviy birikma hosil qilmaydi (ular faqat qotishma berishi mumkin).",
    en: "Sodium melts at 98 °C, but even molten it does not form a chemical compound with iron (they can only form an alloy).",
    ru: "Натрий плавится при 98 °C, но даже в расплаве не образует химического соединения с железом (возможен только сплав).",
  },
  "iron+water": {
    uz: "Xona haroratida sezilarli reaksiya yo'q. Kislorod va namlik uzoq ta'sir etganda sekin zanglash boshlanadi (bu alohida «Temir + kislorod» tajribasida ko'rsatilgan).",
    en: "No significant reaction at room temperature. With oxygen and moisture over a long time slow rusting begins (shown in the separate “Iron + oxygen” experiment).",
    ru: "При комнатной температуре заметной реакции нет. При длительном действии кислорода и влаги начинается медленное ржавление (см. опыт «Железо + кислород»).",
  },
  "magnesium+naoh": {
    uz: "Magniy ishqor eritmasi bilan reaksiyaga kirishmaydi: uning himoya oksid pardasi NaOH ta'sirida erimaydi. Magniy faqat kislota yoki qaynoq suv/bug' bilan reaksiyaga kirishadi.",
    en: "Magnesium does not react with a base solution: its protective oxide film is not dissolved by NaOH. Magnesium reacts only with acids or with hot water/steam.",
    ru: "Магний не реагирует с раствором основания: его защитная оксидная плёнка не растворяется в NaOH. Магний реагирует лишь с кислотами или с горячей водой/паром.",
  },
  "magnesium+salt": {
    uz: "Mg aktiv metall bo'lsa ham NaCl eritmasi bilan reaksiyaga kirishmaydi: E°(Mg²⁺/Mg) = −2.37 V, E°(Na⁺/Na) = −2.71 V — ya'ni magniy natriydan kuchsizroq tiklovchi, shuning uchun Na⁺ ionini tiklay olmaydi.",
    en: "Although Mg is an active metal it does not react with NaCl solution: E°(Mg²⁺/Mg) = −2.37 V versus E°(Na⁺/Na) = −2.71 V, so magnesium is a weaker reducing agent than sodium and cannot reduce Na⁺.",
    ru: "Хотя Mg — активный металл, с раствором NaCl он не реагирует: E°(Mg²⁺/Mg) = −2.37 В, E°(Na⁺/Na) = −2.71 В, то есть магний слабее натрия как восстановитель и не может восстановить Na⁺.",
  },
  "magnesium+sodium": {
    uz: "Qattiq holatdagi ikki metall xona haroratida reaksiyaga kirishmaydi. Ular faqat birgalikda eritilganda qotishma (fizik aralashma) hosil qiladi.",
    en: "Two solid metals do not react at room temperature. Only when melted together do they form an alloy (a physical mixture).",
    ru: "Два твёрдых металла не реагируют при комнатной температуре. Только при совместном плавлении образуется сплав (физическая смесь).",
  },
  "naoh+oxygen": {
    uz: "Ishqor eritmasi normal sharoitda kislorod bilan reaksiyaga kirishmaydi: O₂ molekulasi barqaror va NaOH ni oksidlamaydi.",
    en: "A base solution does not react with oxygen under ordinary conditions: the O₂ molecule is stable and does not oxidise NaOH.",
    ru: "Раствор основания в обычных условиях с кислородом не реагирует: молекула O₂ устойчива и не окисляет NaOH.",
  },
  "naoh+salt": {
    uz: "Ikkala eritmada ham Na⁺ ioni bor, Cl⁻ va OH⁻ esa bir-biri bilan cho'kma, gaz yoki suv hosil qilmaydi. Shu sabab reaksiya kuzatilmaydi.",
    en: "Both solutions contain Na⁺, while Cl⁻ and OH⁻ do not form a precipitate, gas or water with each other, so no reaction occurs.",
    ru: "В обоих растворах есть Na⁺, а Cl⁻ и OH⁻ не образуют между собой осадок, газ или воду, поэтому реакции нет.",
  },
  "oxygen+salt": {
    uz: "NaCl tarkibida natriy va xlor allaqachon barqaror oksidlangan holatda, shu sabab kislorod ular bilan normal sharoitda reaksiyaga kirishmaydi.",
    en: "In NaCl both sodium and chlorine are already in stable oxidised states, so oxygen does not react with them under ordinary conditions.",
    ru: "В NaCl натрий и хлор уже находятся в устойчивых окисленных состояниях, поэтому кислород с ними не реагирует.",
  },
  "oxygen+water": {
    uz: "Kimyoviy reaksiya yo'q — faqat fizik erish: kislorod suvda eriydi (erigan kislorod ≈ 8 mg/L, baliqlar shu kisloroddan foydalanadi).",
    en: "No chemical reaction — only physical dissolution: oxygen dissolves in water (dissolved oxygen ≈ 8 mg/L, which fish rely on).",
    ru: "Химической реакции нет — только физическое растворение: кислород растворяется в воде (растворённый кислород ≈ 8 мг/л, им дышат рыбы).",
  },
  "salt+sodium": {
    uz: "Qattiq natriy NaCl bilan xona haroratida reaksiyaga kirishmaydi. Suyuq natriy erigan tuzda fizik jihatdan eriydi (sanoatda natriy elektrolizida shu jarayon muhim).",
    en: "Solid sodium does not react with NaCl at room temperature. Molten sodium dissolves physically in molten salt (important in industrial sodium electrolysis).",
    ru: "Твёрдый натрий не реагирует с NaCl при комнатной температуре. Расплавленный натрий физически растворяется в расплаве соли (важно в промышленном электролизе).",
  },
}

/** Juftlik bo'yicha tez qidirish uchun indeks. */
const reactionIndex = new Map(reactions.map((item) => [pairKey(item.pair[0], item.pair[1]), item]))

/**
 * Ikki modda bo'yicha simulyatsiya natijasini qaytaradi.
 * kind: "reaction" | "noReaction" | "same" | "unknown"
 */
export function getReactionFor(idA, idB) {
  if (!idA || !idB) return null
  const key = pairKey(idA, idB)

  if (idA === idB) {
    return { id: key, kind: "same", pair: [idA, idB] }
  }

  const reaction = reactionIndex.get(key)
  if (reaction) {
    return { ...reaction, id: key, kind: "reaction" }
  }

  const reason = noReactionReasons[key]
  if (reason) {
    return {
      id: key,
      kind: "noReaction",
      pair: [idA, idB],
      reason,
      hazard: "none",
      typeKey: "none",
      observed: ["noChange"],
    }
  }

  return { id: key, kind: "unknown", pair: [idA, idB] }
}

/** Reaksiya turini tanlangan tilda qaytaradi. */
export function reactionTypeName(typeKey, lang = "uz") {
  const type = REACTION_TYPES[typeKey]
  if (!type) return ""
  return type[lang] || type.uz
}

/** Barcha simulyatsiya qilinadigan juftliklar soni (statistika uchun). */
export const simulatedPairCount = reactions.length + Object.keys(noReactionReasons).length

/** Reaksiya animatsiyasi uchun standart qiymatlar. */
export const DEFAULT_ANIMATION = {
  liquid: "#dbeafe",
  glow: null,
  bubbles: false,
  precipitate: null,
  light: false,
  intensity: "low",
  duration: 2200,
}
