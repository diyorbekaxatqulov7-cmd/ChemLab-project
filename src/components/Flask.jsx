import { useId } from "react"

/**
 * Erlenmeyer kolbasi (500 ml) - SVG.
 * CSS klasslar orqali animatsiya boshqariladi (is-pouring / is-reacting / is-done).
 */
export default function Flask({
  phase = "idle",
  fill = 0,
  color = "#cfe6f7",
  glow = null,
  bubbles = 0,
  precipitate = null,
  width = 190,
  label = "",
  dropHint = "",
  extraClassName = "",
}) {
  const uid = useId().replace(/:/g, "")
  const clipId = `flask-clip-${uid}`
  const liquidId = `flask-liquid-${uid}`
  const height = 190
  const bodyTop = 70
  const bodyBottom = 166
  const maxHeight = bodyBottom - bodyTop
  const liquidHeight = Math.max(0, Math.min(1, fill)) * maxHeight
  const liquidY = bodyBottom - liquidHeight

  return (
    <div className={`flask-wrap ${phase ? `is-${phase}` : ""} ${extraClassName}`.trim()}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 190"
        role="img"
        aria-label={label}
        style={{ maxWidth: "100%" }}
      >
        <defs>
          <clipPath id={clipId}>
            <path d="M70 64 L28 156 Q26 166 38 166 L122 166 Q134 166 132 156 L90 64 Z" />
          </clipPath>
          <linearGradient id={liquidId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.85" />
            <stop offset="100%" stopColor={color} stopOpacity="1" />
          </linearGradient>
          <radialGradient id={`flask-shine-${uid}`} cx="35%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.04" />
          </radialGradient>
        </defs>

        {/* orqa yorug'lik (reaksiya glow) */}
        {glow && (
          <circle
            className="flask-glow"
            cx="80"
            cy="120"
            r="58"
            fill={glow}
            style={{ filter: "blur(16px)" }}
          />
        )}

        {/* quyilayotgan suyuqlik oqimi */}
        <rect
          className="pour-stream"
          x="74"
          y="-34"
          width="12"
          height="56"
          rx="6"
          fill={color}
          opacity="0.85"
        />

        {/* suyuqlik */}
        <g clipPath={`url(#${clipId})`}>
          {liquidHeight > 0 && (
            <>
              <rect
                className="flask-liquid"
                x="24"
                y={liquidY}
                width="112"
                height={liquidHeight + 2}
                fill={`url(#${liquidId})`}
              />
              <ellipse
                className="flask-liquid"
                cx="80"
                cy={liquidY}
                rx="54"
                ry="4.5"
                fill={color}
                opacity="0.7"
              />
            </>
          )}

          {/* cho'kma (precipitate) */}
          {precipitate && (
            <path
              className="precipitate"
              d="M30 166 Q30 148 80 148 Q130 148 130 166 Z"
              fill={precipitate}
              opacity="0.92"
            />
          )}

          {/* pufakchalar */}
          {Array.from({ length: bubbles }).map((_, index) => {
            const x = 42 + ((index * 17) % 78)
            const size = 3 + (index % 3)
            return (
              <circle
                key={`bubble-${index}`}
                className="bubble"
                cx={x}
                cy={150 - (index % 4) * 6}
                r={size}
                fill="#ffffff"
                opacity="0.8"
                style={{ animationDelay: `${(index % 6) * 0.22}s` }}
              />
            )
          })}
        </g>

        {/* shisha tanasi */}
        <g className="flask-body">
          <path
            className="flask-glass"
            d="M66 12 L66 62 L24 156 Q20 172 38 172 L122 172 Q140 172 136 156 L94 62 L94 12 Z"
            fill="rgba(190, 225, 250, 0.12)"
            stroke="rgba(214, 236, 252, 0.75)"
            strokeWidth="2.4"
          />
          <rect x="60" y="6" width="40" height="7" rx="3.5" fill="rgba(214, 236, 252, 0.6)" />
          <path
            d="M66 14 L66 60 L26 154 Q24 166 38 168 L122 168 Q138 166 134 154 L94 60 L94 14 Z"
            fill={`url(#flask-shine-${uid})`}
          />
          <path d="M72 26 L72 58" stroke="rgba(255,255,255,0.55)" strokeWidth="3" strokeLinecap="round" />
          {/* hajm belgilari */}
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.2">
            <path d="M120 140 L132 140" />
            <path d="M112 118 L132 118" />
            <path d="M104 96 L132 96" />
          </g>
          <text x="136" y="86" fontSize="8" fill="rgba(226,240,252,0.7)">
            500
          </text>
          <text x="136" y="95" fontSize="6" fill="rgba(226,240,252,0.55)">
            ml
          </text>
        </g>
      </svg>
      <span className="flask-drop-hint">{dropHint}</span>
    </div>
  )
}
