/**
 * ChemLab - tayyor tajribalar (stsenariylar).
 * Har bir tajriba laboratoriyada oldindan belgilangan juftlikni yuklaydi.
 */

export const experiments = [
  {
    id: "acid-base",
    pair: ["hcl", "naoh"],
    difficulty: "easy",
    hazard: "medium",
    icon: "flask",
    title: {
      uz: "Kislota va ishqor",
      en: "Acid and base",
      ru: "Кислота и основание",
    },
    description: {
      uz: "Eng mashhur laboratoriya tajribasi: kislota ishqor bilan aralashganda tuz va suv hosil bo'ladi.",
      en: "The most famous laboratory experiment: an acid and a base give a salt and water.",
      ru: "Самый известный лабораторный опыт: кислота и основание дают соль и воду.",
    },
    expect: {
      uz: "Eritma isiydi, tashqi ko'rinish o'zgarmaydi.",
      en: "The solution warms up, the appearance stays unchanged.",
      ru: "Раствор нагревается, внешний вид не меняется.",
    },
  },
  {
    id: "colour-change",
    pair: ["cuso4", "iron"],
    difficulty: "medium",
    hazard: "low",
    icon: "microscope",
    title: {
      uz: "Rang o'zgarishi",
      en: "Colour change",
      ru: "Изменение цвета",
    },
    description: {
      uz: "Ko'k mis sulfat eritmasiga temir solinadi: rang asta-sekin yo'qoladi va mis ajralib chiqadi.",
      en: "Iron is placed in blue copper sulfate solution: the colour fades and copper is deposited.",
      ru: "В синий раствор сульфата меди опускают железо: цвет исчезает, выделяется медь.",
    },
    expect: {
      uz: "Ko'k rang yo'qoladi, qizg'ish mis qatlami paydo bo'ladi.",
      en: "The blue colour fades and a reddish copper layer appears.",
      ru: "Синий цвет исчезает, появляется красноватый слой меди.",
    },
  },
  {
    id: "precipitate",
    pair: ["cuso4", "naoh"],
    difficulty: "medium",
    hazard: "medium",
    icon: "droplets",
    title: {
      uz: "Cho'kma hosil bo'lishi",
      en: "Precipitate formation",
      ru: "Образование осадка",
    },
    description: {
      uz: "Ishqor ko'k mis sulfat eritmasiga qo'shilsa, och ko'k cho'kma paydo bo'ladi.",
      en: "Adding a base to blue copper sulfate solution gives a pale blue precipitate.",
      ru: "При добавлении основания к синему раствору сульфата меди образуется голубой осадок.",
    },
    expect: {
      uz: "Och ko'k Cu(OH)₂ cho'kmasi hosil bo'ladi.",
      en: "A pale blue Cu(OH)₂ precipitate forms.",
      ru: "Образуется светло-синий осадок Cu(OH)₂.",
    },
  },
  {
    id: "gas-release",
    pair: ["hcl", "magnesium"],
    difficulty: "easy",
    hazard: "medium",
    icon: "wind",
    title: {
      uz: "Gaz ajralishi",
      en: "Gas release",
      ru: "Выделение газа",
    },
    description: {
      uz: "Magniy kislotada eriydi va tez pufakchalar chiqaradi — vodorod gazi ajraladi.",
      en: "Magnesium dissolves in the acid with fast bubbling — hydrogen gas is released.",
      ru: "Магний растворяется в кислоте с быстрым выделением пузырьков — выделяется водород.",
    },
    expect: {
      uz: "Kuchli gaz ajralishi va eritmaning isishi.",
      en: "Vigorous gas release and warming of the solution.",
      ru: "Интенсивное выделение газа и нагревание раствора.",
    },
  },
  {
    id: "combustion",
    pair: ["hydrogen", "oxygen"],
    difficulty: "hard",
    hazard: "high",
    icon: "flame",
    title: {
      uz: "Yonish: suv hosil bo'lishi",
      en: "Combustion: formation of water",
      ru: "Горение: образование воды",
    },
    description: {
      uz: "Vodorod va kislorod aralashmasi uchqun ta'sirida portlab, suv hosil qiladi.",
      en: "A mixture of hydrogen and oxygen ignites at a spark and forms water.",
      ru: "Смесь водорода и кислорода воспламеняется от искры и образует воду.",
    },
    expect: {
      uz: "Yorqin chaqnash, kuchli issiqlik ajralishi.",
      en: "A bright flash and intense heat release.",
      ru: "Яркая вспышка и сильное выделение тепла.",
    },
  },
  {
    id: "active-metal-water",
    pair: ["sodium", "water"],
    difficulty: "hard",
    hazard: "high",
    icon: "zap",
    title: {
      uz: "Faol metall va suv",
      en: "Active metal and water",
      ru: "Активный металл и вода",
    },
    description: {
      uz: "Natriy suv bilan juda tez reaksiyaga kirishadi: vodorod ajraladi va ishqor hosil bo'ladi.",
      en: "Sodium reacts very rapidly with water: hydrogen is released and a base forms.",
      ru: "Натрий очень быстро реагирует с водой: выделяется водород и образуется основание.",
    },
    expect: {
      uz: "Kuchli pufakchalar, ajralayotgan gaz va yuqori issiqlik.",
      en: "Strong bubbling, gas evolution and intense heat.",
      ru: "Сильное вскипание, выделение газа и высокое тепло.",
    },
  },
]
