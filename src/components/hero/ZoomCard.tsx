/**
 * ZoomCard — Mockup Zoom Meeting Visual
 *
 * Mockup ref: lines 333-350 di Hero section (01_edukazia-Landing_Page_Final.jsx)
 *
 * Visual chunk yang menampilkan mockup tampilan Zoom dengan:
 *   - Header: 3 traffic light dots (Mac style) + "Zoom — EduKazia" label + LIVE badge gold
 *   - Body: 2x2 grid 4 participant avatar dengan initial + nama + role
 *
 * Dipakai di Hero section sebagai salah satu visual stacked cards.
 * Self-contained — tanpa positioning/animation (Hero parent yang handle).
 *
 * @example
 *   // Dalam Hero section dengan absolute positioning
 *   <motion.div
 *     style={{ position: "absolute", top: 20, left: 10, zIndex: 2 }}
 *     animate={{ y: [0, -10, 0] }}
 *     transition={{ duration: 8, repeat: Infinity }}
 *   >
 *     <ZoomCard />
 *   </motion.div>
 */

"use client"

import { useT, fh, fb } from "@/lib/theme"

// ═══════════════════════════════════════════════════════════
// PARTICIPANT DATA — bisa di-override via prop
// ═══════════════════════════════════════════════════════════

export type ZoomParticipant = {
  initials: string
  name: string
  role: string
  /** Color key to pick from theme */
  colorKey: "pk" | "p" | "g" | "or"
}

const DEFAULT_PARTICIPANTS: ZoomParticipant[] = [
  { initials: "AR", name: "Ahmad R.", role: "Siswa", colorKey: "pk" },
  { initials: "MS", name: "Ms. Sarah", role: "Tutor", colorKey: "p" },
  { initials: "SN", name: "Siti N.", role: "Siswa", colorKey: "g" },
  { initials: "RF", name: "Reza F.", role: "Siswa", colorKey: "or" },
]

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

export type ZoomCardProps = {
  /** Card width in px. Default: 300 */
  width?: number
  /** Override participant list (default 4) */
  participants?: ZoomParticipant[]
  /** Show LIVE badge? Default: true */
  showLiveBadge?: boolean
  /** Top-bar label. Default: "Zoom — EduKazia" */
  appLabel?: string
  className?: string
  style?: React.CSSProperties
}

const TRAFFIC_LIGHTS = ["#FF5F57", "#FFBD2E", "#28C840"]

export function ZoomCard({
  width = 300,
  participants = DEFAULT_PARTICIPANTS,
  showLiveBadge = true,
  appLabel = "Zoom — EduKazia",
  className,
  style,
}: ZoomCardProps) {
  const t = useT()
  const isDark = t.m === "dark"

  // Background per colorKey untuk participant cell
  const colorBgMap = { pk: t.pkS, p: t.pS, g: t.gS, or: t.orS }
  const colorMap = { pk: t.pk, p: t.p, g: t.g, or: t.or }

  return (
    <div
      className={className}
      style={{
        width,
        background: isDark ? "rgba(20,18,35,0.95)" : t.card,
        borderRadius: 24,
        padding: 20,
        border: `1px solid ${t.cb}`,
        boxShadow: t.ch,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        ...style,
      }}
    >
      {/* Top bar — traffic lights + label + LIVE badge */}
      <div style={{ display: "flex", gap: 6, marginBottom: 12, alignItems: "center" }}>
        {TRAFFIC_LIGHTS.map((c) => (
          <div
            key={c}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
        <span
          style={{
            fontFamily: fb,
            fontSize: 9,
            color: t.mu,
            marginLeft: 8,
            flex: 1,
          }}
        >
          {appLabel}
        </span>
        {showLiveBadge && (
          <span
            style={{
              background: t.gold,
              color: t.goldT,
              fontFamily: fh,
              fontWeight: 800,
              fontSize: 9,
              padding: "4px 10px",
              borderRadius: 6,
            }}
          >
            LIVE ⚡
          </span>
        )}
      </div>

      {/* Participant grid 2x2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {participants.map((p) => (
          <div
            key={p.name}
            style={{
              background: colorBgMap[p.colorKey],
              borderRadius: 12,
              aspectRatio: "4/3",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: colorMap[p.colorKey],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: fh,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: 0.5,
                }}
              >
                {p.initials}
              </span>
            </div>
            <span
              style={{
                fontFamily: fb,
                fontSize: 9,
                fontWeight: 600,
                color: t.tx,
              }}
            >
              {p.name}
            </span>
            <span style={{ fontFamily: fb, fontSize: 7, color: t.mu }}>
              {p.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ZoomCard
