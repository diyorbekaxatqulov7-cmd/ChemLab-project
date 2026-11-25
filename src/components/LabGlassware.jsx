/**
 * Laboratoriya jihozlari - kichik SVG komponentlar.
 * Har biri mustaqil ishlatilishi mumkin (stol ustida joylashtiriladi).
 */
import { useId } from "react"

const glassFill = "rgba(226,240,252,0.14)"
const glassStroke = "rgba(214,236,252,0.72)"

/** Probirkalar stendi: 4 ta probirka, ba'zilarida rangli suyuqlik. */
export function TestTubeRack({ width = 130 }) {
  const uid = useId().replace(/:/g, "")
  const tubes = [
    { x: 12, color: "#bcd9f2", fill: 30 },
    { x: 44, color: "#8fd3c4", fill: 22 },
    { x: 76, color: "#f0c26b", fill: 34 },
    { x: 108, color: "#c6b8f0", fill: 18 },
  ]

  return (
    <svg width={width} height={110} viewBox="0 0 140 110" role="img" aria-label="Probirkalar stendi">
      <defs>
        {tubes.map((tube, index) => (
          <clipPath key={`clip-${index}`} id={`tube-clip-${uid}-${index}`}>
            <path
              d={`M${tube.x} 14 L${tube.x} 82 Q${tube.x} 90 ${tube.x + 7} 90 Q${tube.x + 14} 90 ${tube.x + 14} 82 L${tube.x + 14} 14 Z`}
            />
          </clipPath>
        ))}
      </defs>

      <rect x="4" y="60" width="132" height="12" rx="4" fill="#5a4632" />
      <rect x="4" y="88" width="132" height="14" rx="4" fill="#4a3728" />
      <rect x="4" y="60" width="132" height="4" rx="2" fill="rgba(255,255,255,0.14)" />

      {tubes.map((tube, index) => (
        <g key={`tube-${index}`}>
          <path
            d={`M${tube.x} 12 L${tube.x} 82 Q${tube.x} 90 ${tube.x + 7} 90 Q${tube.x + 14} 90 ${tube.x + 14} 82 L${tube.x + 14} 12 Z`}
            fill={glassFill}
            stroke={glassStroke}
            strokeWidth="1.6"
          />
          <g clipPath={`url(#tube-clip-${uid}-${index})`}>
            <rect x={tube.x} y={90 - tube.fill} width="14" height={tube.fill} fill={tube.color} opacity="0.8" />
          </g>
          <rect x={tube.x - 1.5} y="9" width="17" height="4" rx="2" fill="rgba(214,236,252,0.55)" />
        </g>
      ))}
    </svg>
  )
}

/** Kimyoviy stakan (beaker) - 250 ml. */
export function Beaker({ width = 96 }) {
  const uid = useId().replace(/:/g, "")

  return (
    <svg width={width} height={100} viewBox="0 0 90 100" role="img" aria-label="Kimyoviy stakan">
      <defs>
        <clipPath id={`beaker-clip-${uid}`}>
          <path d="M10 20 L10 86 Q10 94 20 94 L70 94 Q80 94 80 86 L80 20 Z" />
        </clipPath>
      </defs>
      <path
        d="M10 20 L10 86 Q10 94 20 94 L70 94 Q80 94 80 86 L80 20"
        fill={glassFill}
        stroke={glassStroke}
        strokeWidth="2"
      />
      <g clipPath={`url(#beaker-clip-${uid})`}>
        <rect x="10" y="58" width="70" height="36" fill="#a8d4f0" opacity="0.75" />
        <ellipse cx="45" cy="58" rx="35" ry="3.5" fill="#a8d4f0" opacity="0.6" />
      </g>
      <path d="M8 20 Q4 16 12 14 L24 18" fill="none" stroke={glassStroke} strokeWidth="1.8" />
      <g stroke="rgba(255,255,255,0.45)" strokeWidth="1">
        <path d="M62 30 L78 30" />
        <path d="M62 44 L78 44" />
        <path d="M62 58 L78 58" />
      </g>
      <path d="M16 26 L16 88" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

/** O'lchov silindri (graduated cylinder) - 100 ml. */
export function GraduatedCylinder({ width = 58 }) {
  const uid = useId().replace(/:/g, "")

  return (
    <svg width={width} height={130} viewBox="0 0 52 130" role="img" aria-label="O'lchov silindri">
      <defs>
        <clipPath id={`cyl-clip-${uid}`}>
          <path d="M14 18 L14 112 Q14 122 26 122 Q38 122 38 112 L38 18 Z" />
        </clipPath>
      </defs>
      <path
        d="M14 18 L14 112 Q14 122 26 122 Q38 122 38 112 L38 18 Z"
        fill={glassFill}
        stroke={glassStroke}
        strokeWidth="2"
      />
      <g clipPath={`url(#cyl-clip-${uid})`}>
        <rect x="14" y="70" width="24" height="52" fill="#b6dcf4" opacity="0.8" />
        <ellipse cx="26" cy="70" rx="12" ry="2.6" fill="#b6dcf4" opacity="0.6" />
      </g>
      <path d="M8 122 L44 122 L44 128 L8 128 Z" fill="#5b6b7d" />
      <path d="M22 18 L22 8 L30 8 L30 18" fill="none" stroke={glassStroke} strokeWidth="1.8" />
      <g stroke="rgba(255,255,255,0.5)" strokeWidth="1">
        <path d="M34 30 L40 30" />
        <path d="M34 44 L40 44" />
        <path d="M34 58 L40 58" />
        <path d="M34 72 L40 72" />
        <path d="M34 86 L40 86" />
        <path d="M32 100 L40 100" />
      </g>
      <text x="41" y="34" fontSize="7" fill="rgba(226,240,252,0.7)">
        100
      </text>
    </svg>
  )
}

/** Laboratoriya termometri. */
export function Thermometer({ width = 34, value = 0.35 }) {
  const level = Math.max(0.05, Math.min(1, value))
  const top = 18
  const bottom = 96
  const y = bottom - (bottom - top) * level

  return (
    <svg width={width} height={128} viewBox="0 0 34 128" role="img" aria-label="Termometr">
      <rect x="13" y="10" width="8" height="98" rx="4" fill={glassFill} stroke={glassStroke} strokeWidth="1.6" />
      <circle cx="17" cy="112" r="10" fill="#d94b3c" />
      <rect x="14.5" y={y} width="5" height={bottom - y + 8} rx="2.5" fill="#e5533d" />
      <g stroke="rgba(255,255,255,0.45)" strokeWidth="1">
        <path d="M23 24 L28 24" />
        <path d="M23 40 L28 40" />
        <path d="M23 56 L28 56" />
        <path d="M23 72 L28 72" />
        <path d="M23 88 L28 88" />
      </g>
    </svg>
  )
}

/** Pipetka (drop-pipette). */
export function Pipette({ width = 30 }) {
  return (
    <svg width={width} height={120} viewBox="0 0 30 120" role="img" aria-label="Pipetka">
      <rect x="9" y="8" width="12" height="26" rx="6" fill="#c96a4c" />
      <path d="M11 34 L19 34 L16 76 L14 76 Z" fill={glassFill} stroke={glassStroke} strokeWidth="1.4" />
      <path
        d="M14 76 L15.9 76 L15.5 104 L14.5 104 Z"
        fill="rgba(226,240,252,0.5)"
        stroke={glassStroke}
        strokeWidth="1.2"
      />
      <circle cx="15" cy="112" r="3.4" fill="#8fd3f4" opacity="0.9" />
    </svg>
  )
}

/** pH indikator kartasi (rang shkalasi). */
export function PhIndicator({ width = 78 }) {
  const colors = ["#e5533d", "#ea7a3c", "#f0b429", "#a3c94a", "#4cb782", "#3fa1d9", "#4b6fd8", "#7b4fbf"]

  return (
    <svg width={width} height={94} viewBox="0 0 78 94" role="img" aria-label="pH indikator">
      <rect
        x="4"
        y="6"
        width="70"
        height="82"
        rx="8"
        fill="rgba(226,240,252,0.16)"
        stroke={glassStroke}
        strokeWidth="1.6"
      />
      <rect x="10" y="12" width="58" height="12" rx="4" fill="rgba(255,255,255,0.82)" />
      <text x="39" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#10233a">
        pH
      </text>
      {colors.map((color, index) => (
        <rect key={color} x="10" y={32 + index * 6} width="58" height="5" rx="1.6" fill={color} opacity="0.9" />
      ))}
    </svg>
  )
}

/** Stol chirog'i. */
export function BenchLamp({ width = 74, lit = false }) {
  return (
    <svg width={width} height={84} viewBox="0 0 74 84" role="img" aria-label="Stol chirog'i">
      <rect x="22" y="74" width="30" height="6" rx="3" fill="#4b5563" />
      <path d="M37 74 L37 30" stroke="#6b7280" strokeWidth="4" />
      <path d="M37 32 L60 18" stroke="#6b7280" strokeWidth="4" strokeLinecap="round" />
      <path d="M52 12 L70 22 L62 34 Z" fill={lit ? "#f7d774" : "#8f9aab"} />
      {lit && <circle cx="61" cy="23" r="6" fill="#fff3bf" opacity="0.85" />}
    </svg>
  )
}

