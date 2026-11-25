/**
 * ChemLab - "Kimyoni o'rganish" bo'limi mavzulari.
 * Har bir mavzu: qisqa matn, ilg'or daraja uchun qo'shimcha va 3 ta asosiy fakt.
 */

export const learnTopics = [
  {
    id: "atom",
    icon: "atom",
    visual: "atom",
    title: { uz: "Atom nima?", en: "What is an atom?", ru: "Что такое атом?" },
    text: {
      uz: "Atom — moddaning eng kichik bo'lagi. U markazdagi yadro (protonlar va neytronlar) hamda atrofida harakatlanuvchi elektronlardan tuzilgan. Atomdagi protonlar soni elementni belgilaydi: masalan, 11 protonli atom — natriy.",
      en: "An atom is the smallest part of a substance. It consists of a central nucleus (protons and neutrons) and electrons moving around it. The number of protons defines the element: an atom with 11 protons is sodium.",
      ru: "Атом — мельчайшая частица вещества. Он состоит из ядра (протоны и нейтроны) и электронов вокруг. Число протонов определяет элемент: атом с 11 протонами — это натрий.",
    },
    advanced: {
      uz: "Elektronlar to'lqin funksiyasi bilan tavsiflanadi va elektron buluti shaklida ko'rsatiladi. Atom o'lchami ~10⁻¹⁰ m, yadro ~10⁻¹⁵ m.",
      en: "Electrons are described by a wave function and shown as an electron cloud. An atom is ~10⁻¹⁰ m across, the nucleus ~10⁻¹⁵ m.",
      ru: "Электроны описываются волновой функцией и изображаются как облако. Размер атома ~10⁻¹⁰ м, ядра ~10⁻¹⁵ м.",
    },
    facts: [
      { uz: "Atom yadro va elektronlardan iborat.", en: "An atom is a nucleus plus electrons.", ru: "Атом — это ядро и электроны." },
      { uz: "Protonlar soni = atom raqami.", en: "Number of protons = atomic number.", ru: "Число протонов = атомный номер." },
      { uz: "Atomlar juda kichik: 1 mm da millionlab atom bor.", en: "Atoms are tiny: millions fit in 1 mm.", ru: "Атомы крошечные: в 1 мм — миллионы." },
    ],
  },
  {
    id: "molecule",
    icon: "hexagon",
    visual: "molecule",
    title: { uz: "Molekula nima?", en: "What is a molecule?", ru: "Что такое молекула?" },
    text: {
      uz: "Molekula — ikki yoki undan ko'p atomning kimyoviy bog'lanish natijasida birikishi. Suv molekulasi H₂O ikkita vodorod va bitta kislorod atomidan tuzilgan. Molekula — moddaning xossalarini saqlaydigan eng kichik bo'lak.",
      en: "A molecule is two or more atoms joined by chemical bonds. A water molecule H₂O consists of two hydrogen atoms and one oxygen atom. A molecule is the smallest unit keeping the properties of a substance.",
      ru: "Молекула — два или более атомов, соединённых химической связью. Молекула воды H₂O состоит из двух атомов водорода и одного атома кислорода.",
    },
    advanced: {
      uz: "Kovalent bog'lanishda elektronlar juftligi atomlar orasida umumiy bo'ladi. Bundan tashqari vodorod bog'lanish (suvda), ion bog'lanish (NaCl) va metall bog'lanish mavjud.",
      en: "In a covalent bond a pair of electrons is shared. There are also hydrogen bonds (water), ionic bonds (NaCl) and metallic bonds.",
      ru: "В ковалентной связи электронная пара общая. Есть также водородные связи (вода), ионные (NaCl) и металлические.",
    },
    facts: [
      { uz: "Molekula atomlardan tuzilgan.", en: "Molecules are built from atoms.", ru: "Молекулы состоят из атомов." },
      { uz: "H₂O — eng oddiy va muhim molekula.", en: "H₂O is the simplest important molecule.", ru: "H₂O — простейшая важная молекула." },
      { uz: "Kimyoviy bog'lanish atomlarni ushlab turadi.", en: "Chemical bonds hold atoms together.", ru: "Химическая связь удерживает атомы." },
    ],
  },
  {
    id: "reaction",
    icon: "zap",
    visual: "reaction",
    title: { uz: "Kimyoviy reaksiya nima?", en: "What is a chemical reaction?", ru: "Что такое химическая реакция?" },
    text: {
      uz: "Kimyoviy reaksiya — moddalarning yangi moddalarga aylanishi. Reaksiyada atomlar yo'qolmaydi, faqat qayta guruhlanadi (massaning saqlanish qonuni). Belgilanishi: HCl + NaOH → NaCl + H₂O.",
      en: "A chemical reaction is the transformation of substances into new ones. Atoms are not lost, they only rearrange (law of conservation of mass): HCl + NaOH → NaCl + H₂O.",
      ru: "Химическая реакция — превращение веществ в новые. Атомы не исчезают, а перегруппировываются (закон сохранения массы): HCl + NaOH → NaCl + H₂O.",
    },
    advanced: {
      uz: "Reaksiyalar tur bo'yicha farqlanadi: birikish, parchalanish, o'rin almashish, ion almashinish (neytrallanish, cho'kma). Ko'p reaksiyalar oksidlanish-qaytarilish (redoks) hisoblanadi.",
      en: "Reactions differ by type: synthesis, decomposition, displacement, double displacement (neutralisation, precipitation). Many reactions are redox.",
      ru: "Реакции делятся на соединение, разложение, замещение, ионный обмен (нейтрализация, осадок). Многие реакции — редокс.",
    },
    facts: [
      { uz: "Atomlar yo'qolmaydi, qayta guruhlanadi.", en: "Atoms rearrange, they do not vanish.", ru: "Атомы перегруппируются, не исчезают." },
      { uz: "Belgilari: rang, harorat, gaz, cho'kma.", en: "Signs: colour, heat, gas, precipitate.", ru: "Признаки: цвет, тепло, газ, осадок." },
      { uz: "Reaksiya tenglamasi — qisqa retsept.", en: "The equation is a short recipe.", ru: "Уравнение — краткий рецепт." },
    ],
  },
  {
    id: "elements-intro",
    icon: "table",
    visual: "table",
    title: { uz: "Elementlar", en: "Elements", ru: "Элементы" },
    text: {
      uz: "Kimyoviy element — bir xil turdagi atomlar. Hozir 118 element ma'lum va ular davriy jadvalda joylashgan. Jadvaldagi o'rin atom tuzilishini, ustunlar (guruhlar) esa o'xshash xossalarni ko'rsatadi.",
      en: "A chemical element is one type of atom. 118 elements are known, arranged in the periodic table. The position shows the atomic structure and the groups show similar properties.",
      ru: "Химический элемент — атомы одного вида. Известно 118 элементов в периодической таблице. Положение указывает на строение атома, группы — на схожие свойства.",
    },
    advanced: {
      uz: "Elementlar metallar, nometalllar va metalloidlarga bo'linadi. Guruh bo'ylab elektron qobiq tuzilishi takrorlanadi — Mendeleyev davriy qonuni.",
      en: "Elements are metals, nonmetals and metalloids. Along a group the electron shell structure repeats — Mendeleev's periodic law.",
      ru: "Элементы делятся на металлы, неметаллы и металлоиды. По группе повторяется строение оболочек — периодический закон Менделеева.",
    },
    facts: [
      { uz: "118 element ma'lum.", en: "118 elements are known.", ru: "Известно 118 элементов." },
      { uz: "Fe — temir, Cu — mis, Na — natriy.", en: "Fe — iron, Cu — copper, Na — sodium.", ru: "Fe — железо, Cu — медь, Na — натрий." },
      { uz: "Element belgisi 1–2 harfdan iborat.", en: "Element symbols use 1–2 letters.", ru: "Символы элементов — 1–2 буквы." },
    ],
  },
  {
    id: "acids",
    icon: "droplet",
    visual: "acid",
    title: { uz: "Kislotalar", en: "Acids", ru: "Кислоты" },
    text: {
      uz: "Kislotalar suvda eriganda vodorod ionlari (H⁺) ajratadigan moddalardir. Ular nordon ta'mga ega va pH ko'rsatkichi 7 dan kichik bo'ladi. Kislotalar metallar bilan reaksiyaga kirishib vodorod gazi ajratadi.",
      en: "Acids release hydrogen ions (H⁺) when dissolved in water. They taste sour, have a pH below 7 and react with metals releasing hydrogen gas.",
      ru: "Кислоты выделяют ионы водорода (H⁺) при растворении в воде. Они имеют кислый вкус, pH ниже 7 и реагируют с металлами с выделением водорода.",
    },
    advanced: {
      uz: "Kuchli kislotalar (HCl, H₂SO₄, HNO₃) suvda to'liq dissotsiatsiyalanadi (α ≈ 1), kuchsizlari (CH₃COOH) qisman. pH = −lg[H⁺].",
      en: "Strong acids (HCl, H₂SO₄, HNO₃) dissociate completely in water (α ≈ 1), weak acids (CH₃COOH) only partly. pH = −lg[H⁺].",
      ru: "Сильные кислоты (HCl, H₂SO₄, HNO₃) диссоциируют полностью (α ≈ 1), слабые (CH₃COOH) — частично. pH = −lg[H⁺].",
    },
    facts: [
      { uz: "pH < 7 — kislotali muhit.", en: "pH < 7 means acidic.", ru: "pH < 7 — кислая среда." },
      { uz: "HCl — oshqozon sharbatidagi kislota.", en: "HCl is the acid in gastric juice.", ru: "HCl — кислота желудочного сока." },
      { uz: "Metall + kislota → tuz + H₂.", en: "Metal + acid → salt + H₂.", ru: "Металл + кислота → соль + H₂." },
    ],
  },
  {
    id: "bases",
    icon: "shield",
    visual: "base",
    title: { uz: "Ishqorlar", en: "Bases", ru: "Основания" },
    text: {
      uz: "Ishqorlar suvda eriganda gidroksid ionlari (OH⁻) ajratadi. Ularning pH ko'rsatkichi 7 dan katta bo'ladi. Kuchli ishqorlar (NaOH, KOH) terini kuydiradi, shuning uchun ehtiyot bo'lish kerak.",
      en: "Bases release hydroxide ions (OH⁻) in water. Their pH is above 7. Strong bases (NaOH, KOH) burn the skin, so care is needed.",
      ru: "Основания выделяют ионы гидроксида (OH⁻) в воде. Их pH выше 7. Сильные основания (NaOH, KOH) обжигают кожу.",
    },
    advanced: {
      uz: "Kuchli asoslar suvda to'liq dissotsiatsiyalanadi: NaOH → Na⁺ + OH⁻. Kislota bilan aralashganda neytrallanish reaksiyasi boradi va pH 7 ga yaqinlashadi.",
      en: "Strong bases dissociate completely: NaOH → Na⁺ + OH⁻. With an acid they undergo neutralisation and the pH approaches 7.",
      ru: "Сильные основания диссоциируют полностью: NaOH → Na⁺ + OH⁻. С кислотой идёт нейтрализация, pH приближается к 7.",
    },
    facts: [
      { uz: "pH > 7 — ishqoriy muhit.", en: "pH > 7 means basic.", ru: "pH > 7 — щелочная среда." },
      { uz: "NaOH — o'yuvchi ishqor (kaustik soda).", en: "NaOH — caustic soda.", ru: "NaOH — едкий натр." },
      { uz: "Ishqor + kislota → tuz + suv.", en: "Base + acid → salt + water.", ru: "Основание + кислота → соль + вода." },
    ],
  },
  {
    id: "salts",
    icon: "layers",
    visual: "salt",
    title: { uz: "Tuzlar", en: "Salts", ru: "Соли" },
    text: {
      uz: "Tuzlar kislota va ishqor reaksiyasidan (neytrallanish) yoki metall va kislota reaksiyasidan hosil bo'ladi. Ular metall ioni va kislota qoldig'idan tuzilgan. Masalan, NaCl — natriy ioni (Na⁺) va xlorid ioni (Cl⁻).",
      en: "Salts form in the reaction of an acid and a base (neutralisation) or of a metal and an acid. They consist of a metal ion and an acid residue, e.g. NaCl is Na⁺ and Cl⁻.",
      ru: "Соли образуются при реакции кислоты и основания (нейтрализация) или металла и кислоты. Они состоят из иона металла и кислотного остатка, например NaCl — это Na⁺ и Cl⁻.",
    },
    advanced: {
      uz: "Ko'p tuzlar suvda ionlarga ajraladi va ion almashinish reaksiyalariga kirishadi. Cho'kma faqat eruvchanlik ko'paytmasi kichik bo'lgan tuzlar (masalan Cu(OH)₂, BaSO₄) hosil bo'lganda kuzatiladi.",
      en: "Most salts dissociate into ions and take part in double displacement reactions. A precipitate is observed only when a poorly soluble compound forms (e.g. Cu(OH)₂, BaSO₄).",
      ru: "Большинство солей диссоциируют на ионы и вступают в реакции ионного обмена. Осадок наблюдается лишь при образовании малорастворимого соединения (Cu(OH)₂, BaSO₄).",
    },
    facts: [
      { uz: "NaCl — osh tuzi.", en: "NaCl is table salt.", ru: "NaCl — поваренная соль." },
      { uz: "CuSO₄ eritmasi ko'k rangda.", en: "CuSO₄ solution is blue.", ru: "Раствор CuSO₄ — синий." },
      { uz: "Neytrallanish natijasida tuz + suv hosil bo'ladi.", en: "Neutralisation gives salt + water.", ru: "Нейтрализация даёт соль + воду." },
    ],
  },
  {
    id: "ph",
    icon: "gauge",
    visual: "ph",
    title: { uz: "pH nima?", en: "What is pH?", ru: "Что такое pH?" },
    text: {
      uz: "pH — eritmaning kislotalilik yoki ishqoriylik darajasini ko'rsatadigan o'lchov (0 dan 14 gacha). 7 — neytrallik (toza suv). 7 dan kichik qiymat kislotali, 7 dan katta qiymat ishqoriy muhitni bildiradi.",
      en: "pH is a scale (0 to 14) showing how acidic or basic a solution is. 7 is neutral (pure water). Below 7 is acidic, above 7 is basic.",
      ru: "pH — шкала (от 0 до 14), показывающая кислотность или щёлочность раствора. 7 — нейтрально (чистая вода). Меньше 7 — кислая среда, больше 7 — щелочная.",
    },
    advanced: {
      uz: "pH = −lg[H⁺]. Kuchli kislotada pH 1–3, ishqorda 11–14 bo'ladi. Neytrallanishda H⁺ va OH⁻ ekvivalent nisbatda bo'lsa, pH 7 ga teng bo'ladi.",
      en: "pH = −lg[H⁺]. A strong acid gives pH 1–3, a strong base 11–14. On neutralisation, when H⁺ and OH⁻ are in equivalent amounts, pH is 7.",
      ru: "pH = −lg[H⁺]. Сильная кислота даёт pH 1–3, сильное основание — 11–14. При нейтрализации эквивалентных количеств pH = 7.",
    },
    facts: [
      { uz: "Limon sharbati pH ≈ 2.", en: "Lemon juice has pH ≈ 2.", ru: "Лимонный сок: pH ≈ 2." },
      { uz: "Suv pH ≈ 7 (neytrallik).", en: "Water has pH ≈ 7 (neutral).", ru: "Вода: pH ≈ 7 (нейтрально)." },
      { uz: "Sovun pH 9–10 atrofida.", en: "Soap is around pH 9–10.", ru: "Мыло: pH около 9–10." },
    ],
  },
]
