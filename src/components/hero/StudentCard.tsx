/**
 * StudentCard — Stat Card "150+ Siswa Aktif"
 *
 * Mockup ref: lines 353-362 di Hero section (01_edukazia-Landing_Page_Final.jsx)
 *
 * Small stat card showcasing total active students.
 * Pakai useCounter hook untuk animate angka dari 0 → target saat masuk viewport.
 *
 * Self-contained — tanpa positioning/rotation/animation (Hero parent yang handle).
 *
 * @example
 *   <motion.div
 *     style={{ position: "absolute", top: -24, right: -10, zIndex: 1 }}
 *     animate={{ y: [0, -10, 0] }}
 *     transition={{ duration: 7, delay: 1, repeat: Infinity }}
 *   >
 *     <StudentCard tilt={3} />
 *   </motion.div>
 */

"use client"

import { useRef } from "react"
import { useInView } from "motion/react"
import { useT, fh, fb } from "@/lib/theme"
import { useCounter } from "@/hooks/useCounter"

export type StudentCardProps = {
  /** Target student count. Default: 80 */
  count?: number
  /** Show "+" suffix after number. Default: true */
  showPlus?: boolean
  /** Primary label below count. Default: "Siswa Aktif" */
  label?: string
  /** Secondary smaller label. Default: "dari Maluku Utara" */
  sublabel?: string
  /** Emoji or icon to right side. Default: graduation cap */
  icon?: string
  /** Card width in px. Default: 180 */
  width?: number
  /** Tilt rotation in degrees. Default: 0 (no tilt). Mockup uses 3. */
  tilt?: number
  /** Disable counter animation, show static number */
  staticNumber?: boolean
  className?: string
  style?: React.CSSProperties
}

export function StudentCard({
  count = 80,
  showPlus = true,
  label = "Siswa Aktif",
  sublabel = "dari Maluku Utara",
  icon = "🎓",
  width = 180,
  tilt = 0,
  staticNumber = false,
  className,
  style,
}: StudentCardProps) {
  const t = useT()
  const isDark = t.m === "dark"

  // Animated counter — only fires when card enters viewport
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, amount: 0.5 })
  const animatedValue = useCounter({
    end: count,
    duration: 1800,
    enabled: !staticNumber && inView,
  })

  const displayValue = staticNumber ? count : animatedValue

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        width,
        background: isDark ? "rgba(20,18,35,0.9)" : t.card,
        borderRadius: 18,
        padding: 14,
        border: `1px solid ${t.cb}`,
        boxShadow: t.cs,
        transform: tilt !== 0 ? `rotate(${tilt}deg)` : undefined,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: fh,
              fontWeight: 800,
              fontSize: 26,
              color: t.tx,
              lineHeight: 1,
            }}
          >
            {displayValue}
            {showPlus && "+"}
          </div>
          <div
            style={{
              fontFamily: fb,
              fontSize: 11,
              color: t.sub,
              fontWeight: 600,
              marginTop: 3,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: fb,
              fontSize: 9,
              color: t.mu,
              marginTop: 1,
            }}
          >
            {sublabel}
          </div>
        </div>
        <span style={{ fontSize: 32 }} aria-hidden="true">
          {icon}
        </span>
      </div>
    </div>
  )
}

export default StudentCard
