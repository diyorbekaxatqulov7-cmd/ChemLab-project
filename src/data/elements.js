/**
 * ChemLab - davriy jadval ma'lumotlari (118 element).
 * Har bir element: belgisi, uch tildagi nomi, atom massasi, holati, kategoriyasi va guruhi.
 */

const el = (z, s, uz, en, ru, mass, state, cat, g) => ({ z, s, uz, en, ru, mass, state, cat, g })

export const elements = [
  el(1, "H", "Vodorod", "Hydrogen", "Водород", "1.008", "gas", "nonmetal", 1),
  el(2, "He", "Geliy", "Helium", "Гелий", "4.003", "gas", "noble", 18),
  el(3, "Li", "Litiy", "Lithium", "Литий", "6.94", "solid", "alkali", 1),
  el(4, "Be", "Berilliy", "Beryllium", "Бериллий", "9.012", "solid", "alkaline", 2),
  el(5, "B", "Bor", "Boron", "Бор", "10.81", "solid", "metalloid", 13),
  el(6, "C", "Uglerod", "Carbon", "Углерод", "12.011", "solid", "nonmetal", 14),
  el(7, "N", "Azot", "Nitrogen", "Азот", "14.007", "gas", "nonmetal", 15),
  el(8, "O", "Kislorod", "Oxygen", "Кислород", "15.999", "gas", "nonmetal", 16),
  el(9, "F", "Ftor", "Fluorine", "Фтор", "18.998", "gas", "halogen", 17),
  el(10, "Ne", "Neon", "Neon", "Неон", "20.180", "gas", "noble", 18),
  el(11, "Na", "Natriy", "Sodium", "Натрий", "22.990", "solid", "alkali", 1),
  el(12, "Mg", "Magniy", "Magnesium", "Магний", "24.305", "solid", "alkaline", 2),
  el(13, "Al", "Alyuminiy", "Aluminium", "Алюминий", "26.982", "solid", "postTransition", 13),
  el(14, "Si", "Kremniy", "Silicon", "Кремний", "28.085", "solid", "metalloid", 14),
  el(15, "P", "Fosfor", "Phosphorus", "Фосфор", "30.974", "solid", "nonmetal", 15),
  el(16, "S", "Oltingugurt", "Sulfur", "Сера", "32.06", "solid", "nonmetal", 16),
  el(17, "Cl", "Xlor", "Chlorine", "Хлор", "35.45", "gas", "halogen", 17),
  el(18, "Ar", "Argon", "Argon", "Аргон", "39.95", "gas", "noble", 18),
  el(19, "K", "Kaliy", "Potassium", "Калий", "39.098", "solid", "alkali", 1),
  el(20, "Ca", "Kaltsiy", "Calcium", "Кальций", "40.078", "solid", "alkaline", 2),
  el(21, "Sc", "Skandiy", "Scandium", "Скандий", "44.956", "solid", "transition", 3),
  el(22, "Ti", "Titan", "Titanium", "Титан", "47.867", "solid", "transition", 4),
  el(23, "V", "Vanadiy", "Vanadium", "Ванадий", "50.942", "solid", "transition", 5),
  el(24, "Cr", "Xrom", "Chromium", "Хром", "51.996", "solid", "transition", 6),
  el(25, "Mn", "Marganets", "Manganese", "Марганец", "54.938", "solid", "transition", 7),
  el(26, "Fe", "Temir", "Iron", "Железо", "55.845", "solid", "transition", 8),
  el(27, "Co", "Kobalt", "Cobalt", "Кобальт", "58.933", "solid", "transition", 9),
  el(28, "Ni", "Nikel", "Nickel", "Никель", "58.693", "solid", "transition", 10),
  el(29, "Cu", "Mis", "Copper", "Медь", "63.546", "solid", "transition", 11),
  el(30, "Zn", "Rux", "Zinc", "Цинк", "65.38", "solid", "transition", 12),
  el(31, "Ga", "Galliy", "Gallium", "Галлий", "69.723", "solid", "postTransition", 13),
  el(32, "Ge", "Germaniy", "Germanium", "Германий", "72.630", "solid", "metalloid", 14),
  el(33, "As", "Margimush", "Arsenic", "Мышьяк", "74.922", "solid", "metalloid", 15),
  el(34, "Se", "Selen", "Selenium", "Селен", "78.971", "solid", "nonmetal", 16),
  el(35, "Br", "Brom", "Bromine", "Бром", "79.904", "liquid", "halogen", 17),
  el(36, "Kr", "Kripton", "Krypton", "Криптон", "83.798", "gas", "noble", 18),
  el(37, "Rb", "Rubidiy", "Rubidium", "Рубидий", "85.468", "solid", "alkali", 1),
  el(38, "Sr", "Stronsiy", "Strontium", "Стронций", "87.62", "solid", "alkaline", 2),
  el(39, "Y", "Ittriy", "Yttrium", "Иттрий", "88.906", "solid", "transition", 3),
  el(40, "Zr", "Zirkoniy", "Zirconium", "Цирконий", "91.224", "solid", "transition", 4),
  el(41, "Nb", "Niobiy", "Niobium", "Ниобий", "92.906", "solid", "transition", 5),
  el(42, "Mo", "Molibden", "Molybdenum", "Молибден", "95.95", "solid", "transition", 6),
  el(43, "Tc", "Texnetsiy", "Technetium", "Технеций", "[98]", "solid", "transition", 7),
  el(44, "Ru", "Ruteniy", "Ruthenium", "Рутений", "101.07", "solid", "transition", 8),
  el(45, "Rh", "Rodiy", "Rhodium", "Родий", "102.906", "solid", "transition", 9),
  el(46, "Pd", "Palladiy", "Palladium", "Палладий", "106.42", "solid", "transition", 10),
  el(47, "Ag", "Kumush", "Silver", "Серебро", "107.868", "solid", "transition", 11),
  el(48, "Cd", "Kadmiy", "Cadmium", "Кадмий", "112.414", "solid", "transition", 12),
  el(49, "In", "Indiy", "Indium", "Индий", "114.818", "solid", "postTransition", 13),
  el(50, "Sn", "Qalay", "Tin", "Олово", "118.710", "solid", "postTransition", 14),
  el(51, "Sb", "Surma", "Antimony", "Сурьма", "121.760", "solid", "metalloid", 15),
  el(52, "Te", "Tellur", "Tellurium", "Теллур", "127.60", "solid", "metalloid", 16),
  el(53, "I", "Yod", "Iodine", "Йод", "126.904", "solid", "halogen", 17),
  el(54, "Xe", "Ksenon", "Xenon", "Ксенон", "131.293", "gas", "noble", 18),
  el(55, "Cs", "Seziy", "Caesium", "Цезий", "132.905", "solid", "alkali", 1),
  el(56, "Ba", "Bariy", "Barium", "Барий", "137.327", "solid", "alkaline", 2),
  el(57, "La", "Lantan", "Lanthanum", "Лантан", "138.905", "solid", "lanthanide", null),
  el(58, "Ce", "Seriy", "Cerium", "Церий", "140.116", "solid", "lanthanide", null),
  el(59, "Pr", "Prazeodim", "Praseodymium", "Празеодим", "140.908", "solid", "lanthanide", null),
  el(60, "Nd", "Neodim", "Neodymium", "Неодим", "144.242", "solid", "lanthanide", null),
  el(61, "Pm", "Prometiy", "Promethium", "Прометий", "[145]", "solid", "lanthanide", null),
  el(62, "Sm", "Samariy", "Samarium", "Самарий", "150.36", "solid", "lanthanide", null),
  el(63, "Eu", "Yevropiy", "Europium", "Европий", "151.964", "solid", "lanthanide", null),
  el(64, "Gd", "Gadoliniy", "Gadolinium", "Гадолиний", "157.25", "solid", "lanthanide", null),
  el(65, "Tb", "Terbiy", "Terbium", "Тербий", "158.925", "solid", "lanthanide", null),
  el(66, "Dy", "Disproziy", "Dysprosium", "Диспрозий", "162.500", "solid", "lanthanide", null),
  el(67, "Ho", "Golmiy", "Holmium", "Гольмий", "164.930", "solid", "lanthanide", null),
  el(68, "Er", "Erbiy", "Erbium", "Эрбий", "167.259", "solid", "lanthanide", null),
  el(69, "Tm", "Tuliy", "Thulium", "Тулий", "168.934", "solid", "lanthanide", null),
  el(70, "Yb", "Itterbiy", "Ytterbium", "Иттербий", "173.045", "solid", "lanthanide", null),
  el(71, "Lu", "Lyutetsiy", "Lutetium", "Лютеций", "174.967", "solid", "lanthanide", null),
  el(72, "Hf", "Gafniy", "Hafnium", "Гафний", "178.486", "solid", "transition", 4),
  el(73, "Ta", "Tantal", "Tantalum", "Тантал", "180.948", "solid", "transition", 5),
  el(74, "W", "Volfram", "Tungsten", "Вольфрам", "183.84", "solid", "transition", 6),
  el(75, "Re", "Reniy", "Rhenium", "Рений", "186.207", "solid", "transition", 7),
  el(76, "Os", "Osmiy", "Osmium", "Осмий", "190.23", "solid", "transition", 8),
  el(77, "Ir", "Iridiy", "Iridium", "Иридий", "192.217", "solid", "transition", 9),
  el(78, "Pt", "Platina", "Platinum", "Платина", "195.084", "solid", "transition", 10),
  el(79, "Au", "Oltin", "Gold", "Золото", "196.967", "solid", "transition", 11),
  el(80, "Hg", "Simob", "Mercury", "Ртуть", "200.592", "liquid", "transition", 12),
  el(81, "Tl", "Talliy", "Thallium", "Таллий", "204.38", "solid", "postTransition", 13),
  el(82, "Pb", "Qo'rg'oshin", "Lead", "Свинец", "207.2", "solid", "postTransition", 14),
  el(83, "Bi", "Vismut", "Bismuth", "Висмут", "208.980", "solid", "postTransition", 15),
  el(84, "Po", "Poloniy", "Polonium", "Полоний", "[209]", "solid", "postTransition", 16),
  el(85, "At", "Astat", "Astatine", "Астат", "[210]", "solid", "halogen", 17),
  el(86, "Rn", "Radon", "Radon", "Радон", "[222]", "gas", "noble", 18),
  el(87, "Fr", "Fransiy", "Francium", "Франций", "[223]", "solid", "alkali", 1),
  el(88, "Ra", "Radiy", "Radium", "Радий", "[226]", "solid", "alkaline", 2),
  el(89, "Ac", "Aktiniy", "Actinium", "Актиний", "[227]", "solid", "actinide", null),
  el(90, "Th", "Toriy", "Thorium", "Торий", "232.038", "solid", "actinide", null),
  el(91, "Pa", "Protaktiniy", "Protactinium", "Протактиний", "231.036", "solid", "actinide", null),
  el(92, "U", "Uran", "Uranium", "Уран", "238.029", "solid", "actinide", null),
  el(93, "Np", "Neptuniy", "Neptunium", "Нептуний", "[237]", "solid", "actinide", null),
  el(94, "Pu", "Plutoniy", "Plutonium", "Плутоний", "[244]", "solid", "actinide", null),
  el(95, "Am", "Ameritsiy", "Americium", "Америций", "[243]", "solid", "actinide", null),
  el(96, "Cm", "Kyuriy", "Curium", "Кюрий", "[247]", "solid", "actinide", null),
  el(97, "Bk", "Berkeliy", "Berkelium", "Берклий", "[247]", "solid", "actinide", null),
  el(98, "Cf", "Kaliforniy", "Californium", "Калифорний", "[251]", "solid", "actinide", null),
  el(99, "Es", "Eynshteyniy", "Einsteinium", "Эйнштейний", "[252]", "solid", "actinide", null),
  el(100, "Fm", "Fermiy", "Fermium", "Фермий", "[257]", "solid", "actinide", null),
  el(101, "Md", "Mendeleviy", "Mendelevium", "Менделевий", "[258]", "solid", "actinide", null),
  el(102, "No", "Nobeliy", "Nobelium", "Нобелий", "[259]", "solid", "actinide", null),
  el(103, "Lr", "Lourensiy", "Lawrencium", "Лоуренсий", "[266]", "solid", "actinide", null),
  el(104, "Rf", "Rezerfordiy", "Rutherfordium", "Резерфордий", "[267]", "solid", "transition", 4),
  el(105, "Db", "Dubniy", "Dubnium", "Дубний", "[268]", "solid", "transition", 5),
  el(106, "Sg", "Siborgiy", "Seaborgium", "Сиборгий", "[269]", "solid", "transition", 6),
  el(107, "Bh", "Boriy", "Bohrium", "Борий", "[270]", "solid", "transition", 7),
  el(108, "Hs", "Hassiy", "Hassium", "Хассий", "[269]", "solid", "transition", 8),
  el(109, "Mt", "Meitneriy", "Meitnerium", "Мейтнерий", "[278]", "solid", "transition", 9),
  el(110, "Ds", "Darmshtadtiy", "Darmstadtium", "Дармштадтий", "[281]", "solid", "transition", 10),
  el(111, "Rg", "Rentgeniy", "Roentgenium", "Рентгений", "[282]", "solid", "transition", 11),
  el(112, "Cn", "Kopernitsiy", "Copernicium", "Коперниций", "[285]", "solid", "transition", 12),
  el(113, "Nh", "Nixaniy", "Nihonium", "Нихоний", "[286]", "unknown", "unknown", 13),
  el(114, "Fl", "Flyeroviy", "Flerovium", "Флеровий", "[289]", "unknown", "unknown", 14),
  el(115, "Mc", "Moskoviy", "Moscovium", "Московий", "[290]", "unknown", "unknown", 15),
  el(116, "Lv", "Livermoriy", "Livermorium", "Ливерморий", "[293]", "unknown", "unknown", 16),
  el(117, "Ts", "Tennessin", "Tennessine", "Теннессин", "[294]", "unknown", "unknown", 17),
  el(118, "Og", "Oganesson", "Oganesson", "Оганесон", "[294]", "unknown", "unknown", 18),
]

export const ELEMENT_CATEGORIES = [
  "alkali",
  "alkaline",
  "transition",
  "postTransition",
  "metalloid",
  "nonmetal",
  "halogen",
  "noble",
  "lanthanide",
  "actinide",
  "unknown",
]

/** Atom raqamidan davrni aniqlaydi. */
export function periodOf(z) {
  if (z <= 2) return 1
  if (z <= 10) return 2
  if (z <= 18) return 3
  if (z <= 36) return 4
  if (z <= 54) return 5
  if (z <= 86) return 6
  return 7
}

/** Davriy jadvaldagi joylashuv (qator va ustun). Lantanoidlar/aktinoidlar alohida qatorlarda. */
export function layoutOf(element) {
  if (element.cat === "lanthanide") return { row: 9, col: 3 + (element.z - 57) }
  if (element.cat === "actinide") return { row: 10, col: 3 + (element.z - 89) }
  return { row: periodOf(element.z), col: element.g }
}

/** Tanlangan tildagi element nomi. */
export function elementName(element, lang = "uz") {
  if (!element) return ""
  return element[lang] || element.uz
}

/** Qidiruv: nom (barcha tillarda), belgi va atom raqami. */
export function elementSearchText(element) {
  return `${element.uz} ${element.en} ${element.ru} ${element.s} ${element.z}`.toLowerCase()
}
