import { AlertTriangle, Info } from "lucide-react"

/** Doimiy xavfsizlik eslatmasi (ta'lim loyihasi uchun majburiy). */
export default function SafetyNotice({ title, text, variant = "info" }) {
  const Icon = variant === "warn" ? AlertTriangle : Info

  return (
    <div className={`notice${variant === "warn" ? " notice--warn" : ""}`} role="note">
      <Icon size={18} aria-hidden="true" style={{ marginTop: "2px", flexShrink: 0 }} />
      <div>
        {title && <strong>{title}</strong>}
        {text}
      </div>
    </div>
  )
}
