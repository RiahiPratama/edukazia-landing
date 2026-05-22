/**
 * OtherClasses — Reguler & Semi Privat Class Cards
 *
 * Mockup ref: lines 743-803 (OtherClasses component)
 *
 * 2 card berdampingan:
 *   - Reguler: purple-tinted card (#F0EDFF light / #1a1740 dark)
 *   - Semi Privat: gold-tinted card (#FFF8E0 light / #1f1a0e dark)
 *
 * Setiap card: header dengan name + tagline badge + 8/4 student avatar stack +
 * "+" overflow indicator. Body: description + 4 feature checkmarks + WA CTA outline.
 *
 * Note: SECARA SENGAJA cards punya colored background (bukan plain t.card)
 * untuk membedakan visual dari Subjects section dan menonjolkan jenis kelas.
 */

"use client"

import { useState } from "react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { WAIcon, buildWAUrl, EDUKAZIA_WA } from "@/components/ui/WAIcon"

// ═══════════════════════════════════════════════════════════
// CLASS DATA
// ═══════════════════════════════════════════════════════════

type StudentAvatar = { initials: string; color: string }

type ClassType = {
  name: string
  max: string
  desc: string
  tagline: string
  features: string[]
  /** Header background tint (colored swatch) */
  headerBgKey: "pS" | "goldS"
  /** Card body background — light: tint, dark: darker version */
  cardBgLight: string
  cardBgDark: string
  /** Primary color key */
  colorKey: "p" | "gold"
  students: StudentAvatar[]
}

const CLASSES: ClassType[] = [
  {
    name: "Reguler",
    max: "Maks. 8 siswa",
    desc: "Belajar bareng, diskusi hidup. Opsi paling hemat tapi tetap interaktif.",
    tagline: "Hemat & Interaktif",
    features: [
      "8 sesi per paket",
      "Link Zoom eksklusif",
      "Laporan tutor tiap sesi",
      "Rekaman kelas tersedia",
    ],
    headerBgKey: "pS",
    cardBgLight: "#F0EDFF",
    cardBgDark: "#1a1740",
    colorKey: "p",
    students: [
      { initials: "AR", color: "#5C4FE5" },
      { initials: "SN", color: "#10B981" },
      { initials: "RF", color: "#F59E0B" },
      { initials: "NP", color: "#EC4899" },
      { initials: "DK", color: "#3B82F6" },
      { initials: "MA", color: "#8B5CF6" },
      { initials: "FS", color: "#EF4444" },
      { initials: "YR", color: "#06B6D4" },
    ],
  },
  {
    name: "Semi Privat",
    max: "Maks. 4 siswa",
    desc: "Perhatian lebih, kelas intim. Balance terbaik antara harga dan kualitas.",
    tagline: "Balance Terbaik",
    features: [
      "8 sesi per paket",
      "Perhatian personal",
      "Foto bukti belajar",
      "Rekaman kelas tersedia",
    ],
    headerBgKey: "goldS",
    cardBgLight: "#FFF8E0",
    cardBgDark: "#1f1a0e",
    colorKey: "gold",
    students: [
      { initials: "ZF", color: "#E6B800" },
      { initials: "RM", color: "#F59E0B" },
      { initials: "AH", color: "#D97706" },
      { initials: "LK", color: "#92400E" },
    ],
  },
]

// ═══════════════════════════════════════════════════════════
// CLASS CARD
// ═══════════════════════════════════════════════════════════

function ClassCard({ cls }: { cls: ClassType }) {
  const t = useT()
  const [hov, setHov] = useState(false)

  const c = cls.colorKey === "p" ? t.p : t.gold
  const headerBg = cls.headerBgKey === "pS" ? t.pS : t.goldS
  const cardBg = t.m === "dark" ? cls.cardBgDark : cls.cardBgLight

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: cardBg,
        borderRadius: 24,
        border: `1px solid ${hov ? c + "30" : c + "12"}`,
        boxShadow: hov ? t.ch : t.cs,
        transition: "all 0.35s",
        overflow: "hidden",
        transform: hov ? "translateY(-4px)" : "none",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: headerBg,
          padding: "24px 26px 20px",
          borderBottom: `1px solid ${c}10`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -15,
            right: -15,
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: c,
            opacity: 0.05,
            transition: "transform 0.5s",
            transform: hov ? "scale(2.5)" : "scale(1)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: fh,
                fontSize: 22,
                fontWeight: 800,
                color: t.tx,
                margin: "0 0 4px",
              }}
            >
              {cls.name}
            </h3>
            <span
              style={{ fontFamily: fb, fontSize: 12, fontWeight: 700, color: c }}
            >
              {cls.max}
            </span>
          </div>
          <div
            style={{
              background: `${c}15`,
              padding: "6px 12px",
              borderRadius: 8,
            }}
          >
            <span style={{ fontFamily: fb, fontSize: 10, fontWeight: 700, color: c }}>
              {cls.tagline}
            </span>
          </div>
        </div>

        {/* Student avatar stack */}
        <div style={{ display: "flex", gap: 0, marginTop: 14 }}>
          {cls.students.map((s, si) => (
            <div
              key={si}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: s.color,
                border: `2px solid ${headerBg}`,
                marginLeft: si > 0 ? -8 : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s",
                transitionDelay: `${si * 0.05}s`,
                transform: hov ? "translateY(-3px)" : "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                zIndex: cls.students.length - si,
              }}
            >
              <span
                style={{
                  fontFamily: fh,
                  fontSize: 8,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: 0.3,
                }}
              >
                {s.initials}
              </span>
            </div>
          ))}
          {/* Overflow indicator */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: c,
              marginLeft: -8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fb,
              fontSize: 9,
              fontWeight: 700,
              color: "#fff",
              zIndex: 0,
            }}
          >
            +
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 26px 24px" }}>
        <p
          style={{
            fontFamily: fb,
            fontSize: 14,
            color: t.sub,
            lineHeight: 1.7,
            margin: "0 0 16px",
          }}
        >
          {cls.desc}
        </p>

        {/* Features grid 2x2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginBottom: 18,
          }}
        >
          {cls.features.map((f, fi) => (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 10px",
                background: t.card,
                borderRadius: 10,
                border: `1px solid ${t.cb}`,
                transition: "all 0.2s",
                transitionDelay: `${fi * 0.05}s`,
                transform: hov ? "translateX(3px)" : "none",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 5,
                  background: `${t.g}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: t.g, fontSize: 8, fontWeight: 800 }}>✓</span>
              </div>
              <span
                style={{
                  fontFamily: fb,
                  fontSize: 11,
                  color: t.sub,
                  fontWeight: 500,
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={buildWAUrl(EDUKAZIA_WA, `Halo, info Kelas ${cls.name}`)}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            fontFamily: fh,
            fontWeight: 700,
            fontSize: 13,
            color: c,
            border: `2px solid ${hov ? c : t.cb}`,
            borderRadius: 14,
            padding: "13px",
            textDecoration: "none",
            transition: "all 0.25s",
            background: t.card,
            boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
          }}
        >
          <WAIcon size={14} color={c} decorative />
          Tanya Info{" "}
          <span
            style={{
              transition: "transform 0.2s",
              transform: hov ? "translateX(4px)" : "none",
            }}
          >
            →
          </span>
        </a>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function OtherClasses() {
  const t = useT()

  return (
    <section id="kelas" style={{ background: t.bg, padding: "68px 0" }}>
      <Container>
        {/* Header (custom, not using SectionHeader because of different sizing) */}
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div
              style={{
                fontFamily: fh,
                fontSize: 12,
                fontWeight: 700,
                color: t.p,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              JUGA TERSEDIA
            </div>
            <h2
              style={{
                fontFamily: fh,
                fontSize: 32,
                fontWeight: 800,
                color: t.tx,
                margin: "0 0 8px",
              }}
            >
              Kelas Reguler & Semi Privat
            </h2>
            <p
              style={{
                fontFamily: fb,
                fontSize: 15,
                color: t.sub,
                maxWidth: 440,
                margin: "0 auto",
              }}
            >
              Lebih suka belajar bareng teman? Pilih format yang sesuai.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <div
            className="other-classes-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {CLASSES.map((cls) => (
              <ClassCard key={cls.name} cls={cls} />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

export default OtherClasses
