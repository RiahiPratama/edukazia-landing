/**
 * TutorCard — Stat Card "Tutor Terseleksi" dengan Progress Bars
 *
 * Mockup ref: lines 446-460 di Hero section (01_edukazia-Landing_Page_Final.jsx)
 *
 * Stat card showcasing tutor qualifications dengan 3 visual progress bar
 * (Berpengalaman, Perhatian, Profesional). Pakai animasi bar fill saat
 * masuk viewport.
 *
 * Self-contained — tanpa positioning/rotation/animation (Hero parent yang handle).
 *
 * @example
 *   <motion.div
 *     style={{ position: "absolute", bottom: 20, right: 10, zIndex: 3 }}
 *     animate={{ y: [0, -8, 0] }}
 *     transition={{ duration: 6, delay: 0.5, repeat: Infinity }}
 *   >
 *     <TutorCard tilt={-2} />
 *   </motion.div>
 */

"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { useT, fh, fb } from "@/lib/theme"

export type TutorTrait = {
  label: string
  /** Color key from theme */
  colorKey: "g" | "p" | "or" | "pk" | "bl"
  /** Bar fill percentage (0-100). Default: 85 */
  fillPercent?: number
}

const DEFAULT_TRAITS: TutorTrait[] = [
  { label: "Berpengalaman", colorKey: "g" },
  { label: "Perhatian", colorKey: "p" },
  { label: "Profesional", colorKey: "or" },
]

export type TutorCardProps = {
  /** Title text. Default: "Tutor Terseleksi" */
  title?: string
  /** Icon/emoji next to title. Default: woman teacher */
  icon?: string
  /** Override traits list */
  traits?: TutorTrait[]
  /** Card width in px. Default: 200 */
  width?: number
  /** Tilt rotation in degrees. Default: 0. Mockup uses -2. */
  tilt?: number
  className?: string
  style?: React.CSSProperties
}

export function TutorCard({
  title = "Tutor Terseleksi",
  icon = "👩‍🏫",
  traits = DEFAULT_TRAITS,
  width = 200,
  tilt = 0,
  className,
  style,
}: TutorCardProps) {
  const t = useT()
  const isDark = t.m === "dark"

  // Trigger bar animation when card enters viewport
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, amount: 0.5 })

  // Map colorKey → actual theme color
  const colorMap = {
    g: t.g,
    p: t.p,
    or: t.or,
    pk: t.pk,
    bl: t.bl,
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        width,
        background: isDark ? "rgba(20,18,35,0.9)" : t.card,
        borderRadius: 18,
        padding: 16,
        border: `1px solid ${t.cb}`,
        boxShadow: t.cs,
        transform: tilt !== 0 ? `rotate(${tilt}deg)` : undefined,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        ...style,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: t.pS,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          <span aria-hidden="true">{icon}</span>
        </div>
        <div
          style={{
            fontFamily: fh,
            fontSize: 13,
            fontWeight: 700,
            color: t.tx,
          }}
        >
          {title}
        </div>
      </div>

      {/* Trait bars */}
      {traits.map((trait, i) => {
        const color = colorMap[trait.colorKey]
        const fillPercent = trait.fillPercent ?? 85

        return (
          <div
            key={trait.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: color,
              }}
            />
            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                background: `${color}20`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${fillPercent}%` } : { width: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  borderRadius: 3,
                  background: color,
                  opacity: 0.6,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: fb,
                fontSize: 9,
                color: t.mu,
                minWidth: 70,
              }}
            >
              {trait.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default TutorCard
