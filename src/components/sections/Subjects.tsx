/**
 * Subjects — 4 Mata Pelajaran 2x2 Grid + English Superstar Banner
 *
 * Mockup ref: lines 501-587 (Subjects component)
 *
 * Structure:
 *   1. SectionHeader "4 Pelajaran dalam 1 Platform"
 *   2. 2x2 grid 4 subject cards (English, Arabic, Mandarin, Math)
 *      - Header: colored bg + SubjectIcon + name + Daftar button
 *      - Body: description + highlight badge + level bars
 *      - Hover: lift + glow expand + button scale
 *   3. English Superstar featured banner (dark gradient + gold accent)
 */

"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { SubjectIcon, type SubjectType } from "@/components/ui/SubjectIcon"
import { buildWAUrl, EDUKAZIA_WA } from "@/components/ui/WAIcon"

// ═══════════════════════════════════════════════════════════
// SUBJECT DATA
// ═══════════════════════════════════════════════════════════

type SubjectColorKey = "p" | "g" | "or" | "pk"

type Subject = {
  icon: SubjectType
  name: string
  desc: string
  levels: string[]
  colorKey: SubjectColorKey
  highlight: string
}

const SUBJECTS: Subject[] = [
  {
    icon: "english",
    name: "Bahasa Inggris",
    desc: "Untuk anak, remaja, dewasa — bahkan emak-emak! Pronunciation, speaking, grammar, dari nol hingga Bisa.",
    levels: ["Kids", "Teens", "Adults", "Parents"],
    colorKey: "p",
    highlight: "Untuk semua umur — anak sampai orang tua",
  },
  {
    icon: "arabic",
    name: "Bahasa Arab",
    desc: "Dari anak-anak sampai dewasa. Tajwid, muhadatsah, khat — bukan sekedar hafalan, tapi paham apa yang dibaca.",
    levels: ["Kids", "Teens", "Adults", "Parents"],
    colorKey: "g",
    highlight: "Semua usia — anak, remaja, hingga dewasa",
  },
  {
    icon: "mandarin",
    name: "Mandarin",
    desc: "Memulai dari anak-anak lewat Pinyin, karakter dasar, dan percakapan seru. Langkah pertama menuju HSK.",
    levels: ["Kids Starter", "HSK 1", "HSK 2", "HSK 3+"],
    colorKey: "or",
    highlight: "Dirancang khusus mulai dari anak-anak",
  },
  {
    icon: "math",
    name: "Matematika",
    desc: "Metode Singapura — menitikberatkan logika dan pemahaman konsep, bukan hafalan rumus. Sudah teruji di 70+ negara.",
    levels: ["SD", "SMP", "SMA", "Olimpiade"],
    colorKey: "pk",
    highlight: "Metode Singapura — teruji di 70+ negara",
  },
]

// ═══════════════════════════════════════════════════════════
// SUBJECT CARD
// ═══════════════════════════════════════════════════════════

function SubjectCard({ subject }: { subject: Subject }) {
  const t = useT()
  const [hov, setHov] = useState(false)

  const colorMap = { p: t.p, g: t.g, or: t.or, pk: t.pk }
  const bgMap = { p: t.pS, g: t.gS, or: t.orS, pk: t.pkS }
  const c = colorMap[subject.colorKey]
  const bg = bgMap[subject.colorKey]

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: t.card,
        borderRadius: 22,
        border: `1px solid ${hov ? c + "30" : t.cb}`,
        boxShadow: hov ? t.ch : t.cs,
        transition: "all 0.35s",
        overflow: "hidden",
        transform: hov ? "translateY(-4px)" : "none",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: bg,
          padding: "22px 26px 18px",
          borderBottom: `1px solid ${c}10`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: c,
            opacity: 0.06,
            transition: "transform 0.5s",
            transform: hov ? "scale(2)" : "scale(1)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: t.card,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "transform 0.4s",
                transform: hov ? "scale(1.1) rotate(5deg)" : "none",
              }}
            >
              <SubjectIcon type={subject.icon} color={c} size={44} />
            </div>
            <h3
              style={{
                fontFamily: fh,
                fontSize: 18,
                fontWeight: 800,
                color: t.tx,
                margin: 0,
              }}
            >
              {subject.name}
            </h3>
          </div>
          <a
            href={buildWAUrl(EDUKAZIA_WA, `Halo, saya tertarik ${subject.name}`)}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: fh,
              fontWeight: 700,
              fontSize: 11,
              color: "#fff",
              background: c,
              borderRadius: 10,
              padding: "9px 18px",
              textDecoration: "none",
              transition: "all 0.2s",
              transform: hov ? "scale(1.05)" : "none",
              boxShadow: hov ? `0 4px 12px ${c}30` : "none",
            }}
          >
            Daftar →
          </a>
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
            margin: "0 0 14px",
          }}
        >
          {subject.desc}
        </p>

        {/* Highlight badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: bg,
            padding: "5px 12px",
            borderRadius: 8,
            marginBottom: 14,
          }}
        >
          <span style={{ fontSize: 12 }} aria-hidden="true">
            ✨
          </span>
          <span style={{ fontFamily: fb, fontSize: 11, fontWeight: 700, color: c }}>
            {subject.highlight}
          </span>
        </div>

        {/* Level bars */}
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <span style={{ fontFamily: fb, fontSize: 10, fontWeight: 600, color: t.mu }}>
              Level tersedia
            </span>
            <span style={{ fontFamily: fb, fontSize: 10, fontWeight: 700, color: c }}>
              {subject.levels.length} level
            </span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {subject.levels.map((lv, li) => (
              <div key={li} style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    height: 4,
                    borderRadius: 2,
                    background: c,
                    opacity: 0.15 + li * 0.2,
                    marginBottom: 4,
                    transition: "opacity 0.3s",
                  }}
                />
                <span
                  style={{ fontFamily: fb, fontSize: 9, fontWeight: 600, color: c }}
                >
                  {lv}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// ENGLISH SUPERSTAR BANNER
// ═══════════════════════════════════════════════════════════

function EnglishSuperstarBanner() {
  return (
    <div
      style={{
        marginTop: 28,
        background: "linear-gradient(135deg,#1A1535,#2D2560,#2A1C0E)",
        borderRadius: 22,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative stars */}
      <Star
        size={20}
        fill="#E6B800"
        color="#E6B800"
        style={{ position: "absolute", top: 12, right: 16, opacity: 0.15 }}
      />
      <Star
        size={12}
        fill="#E6B800"
        color="#E6B800"
        style={{ position: "absolute", top: 28, right: 44, opacity: 0.08 }}
      />

      {/* Purple glow */}
      <div
        style={{
          position: "absolute",
          top: -20,
          left: -20,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "#5C4FE5",
          opacity: 0.06,
          filter: "blur(40px)",
        }}
      />

      <div
        className="story-flex"
        style={{
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* Gold icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "linear-gradient(135deg,#E6B800,#FFD700)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 4px 16px rgba(230,184,0,0.2)",
          }}
        >
          <Star size={28} fill="#1A1535" color="#1A1535" />
        </div>

        {/* Text content */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <div
            style={{
              fontFamily: fb,
              fontSize: 10,
              fontWeight: 700,
              color: "#E6B800",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: 4,
            }}
          >
            Program Unggulan
          </div>
          <h3
            style={{
              fontFamily: fh,
              fontSize: 22,
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 6px",
              lineHeight: 1.2,
            }}
          >
            English <span style={{ color: "#E6B800" }}>Superstar</span>
          </h3>
          <p
            style={{
              fontFamily: fb,
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 400,
            }}
          >
            Program Bahasa Inggris terstruktur untuk anak & remaja. Phonemic Awareness →
            Phonics → 7 level Speaking. Bukan les biasa.
          </p>
        </div>

        {/* CTA */}
        <a
          href="/english-superstar"
          style={{
            fontFamily: fh,
            fontWeight: 700,
            fontSize: 13,
            color: "#1A1535",
            background: "#E6B800",
            borderRadius: 12,
            padding: "12px 24px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            boxShadow: "0 4px 16px rgba(230,184,0,0.2)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Lihat Program →
        </a>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function Subjects() {
  const t = useT()

  return (
    <section id="kursus" style={{ background: t.bg, padding: "88px 0" }}>
      <Container>
        <RevealOnScroll>
          <SectionHeader
            label="📚 KURSUS"
            title="4 Pelajaran dalam 1 Platform"
            sub="Semua diajarkan live oleh tutor berpengalaman — bukan video, bukan robot."
          />
        </RevealOnScroll>

        {/* Subject grid 2x2 */}
        <div
          className="subject-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {SUBJECTS.map((s, i) => (
            <RevealOnScroll key={s.name} delay={0.08 * (i + 1)}>
              <SubjectCard subject={s} />
            </RevealOnScroll>
          ))}
        </div>

        {/* English Superstar featured banner */}
        <RevealOnScroll delay={0.4}>
          <EnglishSuperstarBanner />
        </RevealOnScroll>
      </Container>
    </section>
  )
}

export default Subjects
