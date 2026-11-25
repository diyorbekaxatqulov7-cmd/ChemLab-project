/** Rang bilan ishlash uchun kichik yordamchilar (virtual suyuqlik ranglari uchun). */

export function hexToRgb(hex) {
  const clean = hex.replace("#", "")
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean
  const value = Number.parseInt(full, 16)
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 }
}

export function rgbToHex({ r, g, b }) {
  const clamp = (n) => Math.max(0, Math.min(255, Math.round(n)))
  return `#${[clamp(r), clamp(g), clamp(b)].map((n) => n.toString(16).padStart(2, "0")).join("")}`
}

/** Bir nechta rangni o'rtacha qiymat bilan aralashtiradi. */
export function blendColors(colors) {
  const list = colors.filter(Boolean)
  if (list.length === 0) return "#cfe0ee"
  if (list.length === 1) return list[0]
  const total = list.reduce(
    (acc, hex) => {
      const { r, g, b } = hexToRgb(hex)
      return { r: acc.r + r, g: acc.g + g, b: acc.b + b }
    },
    { r: 0, g: 0, b: 0 },
  )
  return rgbToHex({ r: total.r / list.length, g: total.g / list.length, b: total.b / list.length })
}

/** Rangni oq tomonga yoki qora tomonga suradi (0–1 oralig'i). */
export function shiftColor(hex, amount) {
  const { r, g, b } = hexToRgb(hex)
  const target = amount >= 0 ? 255 : 0
  const k = Math.abs(amount)
  return rgbToHex({
    r: r + (target - r) * k,
    g: g + (target - g) * k,
    b: b + (target - b) * k,
  })
}

/** HEX rangni rgba() ko'rinishiga o'tkazadi. */
export function withAlpha(hex, alpha = 1) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
