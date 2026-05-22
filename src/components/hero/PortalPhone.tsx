/**
 * PortalPhone — Realistic Phone Mockup Portal Orang Tua
 *
 * Mockup ref: lines 365-443 di Hero section (01_edukazia-Landing_Page_Final.jsx)
 *
 * Phone bezel mockup yang menampilkan tampilan portal orang tua EduKazia.
 * Konten dirancang menyerupai dashboard real (Jadwal Hari Ini smart cards,
 * Progress sesi 6/8, Laporan terbaru + bukti foto/video, Bottom nav).
 *
 * Tujuan: visual proof bahwa EduKazia punya LMS real, bukan cuma marketing.
 *
 * Self-contained — tanpa positioning/animation (Hero parent yang handle).
 *
 * Note: Komponen ini relatively static — datanya hardcoded sebagai visual
 * representation. Bukan komponen reusable untuk render data real.
 *
 * @example
 *   <motion.div
 *     style={{ position: "absolute", top: 70, left: -30, zIndex: 4 }}
 *     animate={{ y: [0, -10, 0] }}
 *     transition={{ duration: 7, delay: 1.5, repeat: Infinity }}
 *   >
 *     <PortalPhone />
 *   </motion.div>
 */

"use client"

import { useT, fh, fb } from "@/lib/theme"

// ═══════════════════════════════════════════════════════════
// MOCK DATA — visual representation, bukan data real
// ═══════════════════════════════════════════════════════════

type ScheduleItem = {
  time: string
  subj: string
  tutor: string
  status: "done" | "live"
  colorKey: "p" | "pk" | "g" | "or"
}

const MOCK_SCHEDULE: ScheduleItem[] = [
  { time: "09:00", subj: "English", tutor: "Ms. Sarah", status: "done", colorKey: "p" },
  { time: "14:00", subj: "Matematika", tutor: "Mr. Rafi", status: "live", colorKey: "pk" },
]

const BOTTOM_NAV = [
  { icon: "🏠", label: "Beranda", active: true },
  { icon: "📅", label: "Jadwal", active: false },
  { icon: "📝", label: "Laporan", active: false },
  { icon: "👤", label: "Profil", active: false },
]

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

export type PortalPhoneProps = {
  /** Phone width in px. Default: 175 */
  width?: number
  /** Student name displayed. Default: "Aisyah Putri" */
  studentName?: string
  /** Student subject + package. Default: "English · Paket Reguler" */
  studentInfo?: string
  /** Progress current. Default: 6 */
  progressCurrent?: number
  /** Progress total. Default: 8 */
  progressTotal?: number
  className?: string
  style?: React.CSSProperties
}

export function PortalPhone({
  width = 175,
  studentName = "Aisyah Putri",
  studentInfo = "English · Paket Reguler",
  progressCurrent = 6,
  progressTotal = 8,
  className,
  style,
}: PortalPhoneProps) {
  const t = useT()
  const isDark = t.m === "dark"

  const colorMap = { p: t.p, pk: t.pk, g: t.g, or: t.or }
  const progressPercent = (progressCurrent / progressTotal) * 100
  const remaining = progressTotal - progressCurrent

  return (
    <div
      className={className}
      style={{
        width,
        ...style,
      }}
    >
      {/* Phone bezel */}
      <div
        style={{
          background: isDark ? "#1a1a2e" : "#1A1535",
          borderRadius: 24,
          padding: "6px 5px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* Notch */}
        <div
          style={{
            width: 48,
            height: 5,
            borderRadius: 3,
            background: isDark ? "#2a2a40" : "#2a2a4a",
            margin: "2px auto 5px",
          }}
        />

        {/* Screen */}
        <div
          style={{
            background: isDark ? "rgba(20,18,35,0.95)" : "#F7F6FF",
            borderRadius: 18,
            padding: 8,
            minHeight: 240,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* App header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px 4px 6px",
              borderBottom: `1px solid ${t.cb}`,
              marginBottom: 6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  background: t.cta,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 6, color: "#fff", fontWeight: 800 }}>E</span>
              </div>
              <span
                style={{
                  fontFamily: fh,
                  fontSize: 6,
                  fontWeight: 700,
                  color: t.tx,
                }}
              >
                Portal Orang Tua
              </span>
            </div>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: t.pS,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 7 }} aria-hidden="true">
                🔔
              </span>
            </div>
          </div>

          {/* Student selector */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "5px 6px",
              background: isDark ? "rgba(92,79,229,0.08)" : t.pS,
              borderRadius: 8,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: t.p,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
              }}
              aria-hidden="true"
            >
              👧
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: fh,
                  fontSize: 7,
                  fontWeight: 700,
                  color: t.tx,
                }}
              >
                {studentName}
              </div>
              <div style={{ fontFamily: fb, fontSize: 5, color: t.mu }}>
                {studentInfo}
              </div>
            </div>
            <svg width="6" height="6" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 3.5L5 6.5L8 3.5"
                stroke={t.mu}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Jadwal Hari Ini — Smart Card */}
          <div
            style={{
              background: isDark ? "rgba(255,255,255,0.03)" : t.card,
              borderRadius: 8,
              padding: 6,
              marginBottom: 6,
              border: `1px solid ${t.cb}`,
            }}
          >
            <div
              style={{
                fontFamily: fh,
                fontSize: 6,
                fontWeight: 700,
                color: t.tx,
                marginBottom: 5,
              }}
            >
              📅 Jadwal Hari Ini
            </div>
            {MOCK_SCHEDULE.map((item) => {
              const c = colorMap[item.colorKey]
              const isLive = item.status === "live"
              return (
                <div
                  key={item.time}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "4px 5px",
                    background: isLive
                      ? `${c}10`
                      : isDark
                      ? "rgba(255,255,255,0.02)"
                      : t.bg,
                    borderRadius: 6,
                    marginBottom: 3,
                    border: isLive ? `1px solid ${c}20` : `1px solid ${t.cb}`,
                  }}
                >
                  <div
                    style={{
                      width: 3,
                      height: 20,
                      borderRadius: 2,
                      background: c,
                      opacity: item.status === "done" ? 0.3 : 1,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: fh,
                          fontSize: 6,
                          fontWeight: 700,
                          color: t.tx,
                        }}
                      >
                        {item.subj}
                      </span>
                      <span
                        style={{
                          fontFamily: fb,
                          fontSize: 5,
                          fontWeight: 700,
                          color: isLive ? c : t.g,
                          background: isLive ? `${c}15` : `${t.g}15`,
                          padding: "1px 4px",
                          borderRadius: 3,
                        }}
                      >
                        {isLive ? "● LIVE" : "✓ Selesai"}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: fb,
                        fontSize: 5,
                        color: t.mu,
                        marginTop: 1,
                      }}
                    >
                      {item.time} WIT · {item.tutor}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progress Sesi */}
          <div
            style={{
              background: isDark ? "rgba(255,255,255,0.03)" : t.card,
              borderRadius: 8,
              padding: 6,
              marginBottom: 6,
              border: `1px solid ${t.cb}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontFamily: fh,
                  fontSize: 6,
                  fontWeight: 700,
                  color: t.tx,
                }}
              >
                📊 Progress
              </span>
              <span
                style={{
                  fontFamily: fh,
                  fontSize: 7,
                  fontWeight: 800,
                  color: t.g,
                }}
              >
                {progressCurrent}/{progressTotal}
              </span>
            </div>
            <div
              style={{
                height: 4,
                borderRadius: 2,
                background: `${t.g}15`,
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: "100%",
                  borderRadius: 2,
                  background: t.g,
                  transition: "width 1s",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: fb,
                fontSize: 5,
                color: t.mu,
                marginTop: 3,
              }}
            >
              Sisa {remaining} sesi lagi
            </div>
          </div>

          {/* Laporan Terbaru */}
          <div
            style={{
              background: t.gS,
              borderRadius: 8,
              padding: 6,
              border: `1px solid ${t.g}15`,
            }}
          >
            <div
              style={{
                fontFamily: fh,
                fontSize: 6,
                fontWeight: 700,
                color: t.g,
                marginBottom: 3,
              }}
            >
              📝 Laporan Terbaru
            </div>
            <div
              style={{
                fontFamily: fb,
                fontSize: 5,
                color: t.sub,
                lineHeight: 1.4,
              }}
            >
              Speaking practice — pronunciation makin bagus! Tutor: Ms. Sarah
            </div>
            <div style={{ display: "flex", gap: 3, marginTop: 4 }}>
              <div
                style={{
                  width: 18,
                  height: 14,
                  borderRadius: 3,
                  background: `${t.p}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 6 }} aria-hidden="true">
                  📷
                </span>
              </div>
              <div
                style={{
                  width: 18,
                  height: 14,
                  borderRadius: 3,
                  background: `${t.p}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 6 }} aria-hidden="true">
                  🎥
                </span>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "auto",
              paddingTop: 6,
              borderTop: `1px solid ${t.cb}`,
            }}
          >
            {BOTTOM_NAV.map((n) => (
              <div
                key={n.label}
                style={{ textAlign: "center", opacity: n.active ? 1 : 0.4 }}
              >
                <span style={{ fontSize: 8, display: "block" }} aria-hidden="true">
                  {n.icon}
                </span>
                <span
                  style={{
                    fontFamily: fb,
                    fontSize: 4,
                    fontWeight: 600,
                    color: n.active ? t.p : t.mu,
                  }}
                >
                  {n.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator bar */}
        <div
          style={{
            width: 40,
            height: 4,
            borderRadius: 2,
            background: isDark ? "#333" : "#3a3a5a",
            margin: "5px auto 2px",
          }}
        />
      </div>
    </div>
  )
}

export default PortalPhone
