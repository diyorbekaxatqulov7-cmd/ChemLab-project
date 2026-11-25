/**
 * Reagent idishi (SVG). Modda holatiga qarab idish shakli o'zgaradi:
 * suyuqlik - butilka, qattiq - banka, gaz - ballon.
 */
export default function ReagentBottle({ substance, width = 46, showLabel = true }) {
  const color = substance?.color || "#cfe6f7"
  const formula = substance?.formula || ""
  const state = substance?.state || "liquid"
  const height = Math.round((width / 60) * 100)

  const label = showLabel ? (
    <g>
      <rect x="13" y="44" width="34" height="18" rx="3" fill="rgba(255,255,255,0.86)" />
      <text
        x="30"
        y="57"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#10233a"
        fontFamily="Inter, sans-serif"
      >
        {formula}
      </text>
    </g>
  ) : null

  return (
    <svg
      className="bottle"
      width={width}
      height={height}
      viewBox="0 0 60 100"
      role="img"
      aria-label={formula || "reagent"}
    >
      {state === "gas" ? (
        <>
          {/* gaz balloni */}
          <rect x="18" y="4" width="24" height="10" rx="3" fill="#8f9aab" />
          <rect x="26" y="14" width="8" height="8" fill="#6b7686" />
          <circle cx="30" cy="6" r="3" fill="#cbd5e1" />
          <rect x="10" y="22" width="40" height="72" rx="14" fill="rgba(226,240,252,0.16)" stroke="rgba(214,236,252,0.7)" strokeWidth="2" />
          <rect x="14" y="52" width="32" height="26" rx="10" fill={color} opacity="0.85" />
          <rect x="10" y="34" width="40" height="10" rx="5" fill="rgba(255,255,255,0.22)" />
          <text
            x="30"
            y="68"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="#10233a"
            fontFamily="Inter, sans-serif"
          >
            {formula}
          </text>
          <path className="bottle-shine" d="M16 30 L16 86" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : state === "solid" ? (
        <>
          {/* qattiq modda bankasi */}
          <rect x="20" y="2" width="20" height="9" rx="3" fill="#8f9aab" />
          <rect x="16" y="11" width="28" height="12" rx="4" fill="rgba(214,236,252,0.35)" stroke="rgba(214,236,252,0.7)" strokeWidth="1.6" />
          <rect
            x="8"
            y="22"
            width="44"
            height="72"
            rx="8"
            fill="rgba(226,240,252,0.14)"
            stroke="rgba(214,236,252,0.7)"
            strokeWidth="2"
          />
          <g fill={color}>
            <circle cx="18" cy="88" r="4" />
            <circle cx="30" cy="90" r="5" />
            <circle cx="42" cy="87" r="4" />
            <circle cx="24" cy="80" r="3" />
            <circle cx="38" cy="79" r="3" />
          </g>
          {label}
          <path className="bottle-shine" d="M13 30 L13 86" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          {/* suyuq reagent butilkasi */}
          <rect x="22" y="2" width="16" height="9" rx="3" fill="#8f9aab" />
          <rect x="25" y="11" width="10" height="12" fill="rgba(214,236,252,0.4)" stroke="rgba(214,236,252,0.7)" strokeWidth="1.4" />
          <rect
            x="9"
            y="22"
            width="42"
            height="72"
            rx="9"
            fill="rgba(226,240,252,0.14)"
            stroke="rgba(214,236,252,0.7)"
            strokeWidth="2"
          />
          <rect x="12" y="60" width="36" height="31" rx="7" fill={color} opacity="0.9" />
          <ellipse cx="30" cy="60" rx="18" ry="3" fill={color} opacity="0.7" />
          {label}
          <path className="bottle-shine" d="M14 30 L14 86" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}
