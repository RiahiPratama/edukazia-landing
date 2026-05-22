/**
 * Hero — Landing Page Hero Section
 *
 * Mockup ref: lines 270-466 (Hero component)
 *
 * Layout:
 *   - Left: Tagline badge + animated headline (rotating 4 subjects every 6s)
 *           + subtitle + slide dots + checkmarks + description + 2 CTAs
 *   - Right: Stacked visual composition (ZoomCard + StudentCard + PortalPhone + TutorCard)
 *           dengan absolute positioning + floating animations
 *
 * Slide rotation: 4 subject (English, Arabic, Mandarin, Matematika) ganti tiap 6 detik
 */

"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { WAIcon, buildWAUrl, EDUKAZIA_WA } from "@/components/ui/WAIcon"
import { ZoomCard } from "@/components/hero/ZoomCard"
import { StudentCard } from "@/components/hero/StudentCard"
import { TutorCard } from "@/components/hero/TutorCard"
import { PortalPhone } from "@/components/hero/PortalPhone"

// ═══════════════════════════════════════════════════════════
// SLIDE DATA — 4 subject rotation
// ═══════════════════════════════════════════════════════════

type SlideColorKey = "p" | "g" | "or" | "pk"

type Slide = {
  word: string
  script: string | null
  colorKey: SlideColorKey
  sub: string
}

const SLIDES: Slide[] = [
  {
    word: "English",
    script: null,
    colorKey: "p",
    sub: "Anak berani ngomong, bukan cuma hafal grammar.",
  },
  {
    word: "Arabic",
    script: "العربية",
    colorKey: "g",
    sub: "Anak paham apa yang dibaca — bukan sekedar hafal. Lebih percaya diri.",
  },
  {
    word: "Mandarin",
    script: "中文",
    colorKey: "or",
    sub: "Dimulai dari Pinyin, step by step.",
  },
  {
    word: "Matematika",
    script: null,
    colorKey: "pk",
    sub: "Tidak lagi menakutkan. Metode Singapura — logika, bukan hafalan. Teruji di 70+ negara!",
  },
]

const ROTATION_INTERVAL_MS = 6000

const WA_HERO_MESSAGE = "Halo EduKazia, saya tertarik dengan kursus"

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

export function Hero() {
  const t = useT()
  const [visible, setVisible] = useState(false)
  const [slideIdx, setSlideIdx] = useState(0)

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Subject rotation
  useEffect(() => {
    const interval = setInterval(
      () => setSlideIdx((prev) => (prev + 1) % SLIDES.length),
      ROTATION_INTERVAL_MS
    )
    return () => clearInterval(interval)
  }, [])

  const slide = SLIDES[slideIdx]
  const colorMap = { p: t.p, g: t.g, or: t.or, pk: t.pk }
  const slideColor = colorMap[slide.colorKey]

  return (
    <section
      className="hero-section"
      style={{
        background: t.hero,
        paddingTop: 130,
        paddingBottom: 70,
        minHeight: "94vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating background shapes */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [12, 14, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "68%",
          left: "22%",
          width: 60,
          height: 60,
          borderRadius: 16,
          background: t.pS,
        }}
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "15%",
          right: "12%",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: t.goldS,
        }}
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: 50,
          height: 50,
          borderRadius: 14,
          background: t.gS,
        }}
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "30%",
          right: "8%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: t.pkS,
        }}
      />

      {/* Dot pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${t.mu}15 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <Container
        style={{
          display: "flex",
          gap: 40,
          alignItems: "flex-start",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT — Copy + CTAs */}
        <div
          style={{
            flex: "1 1 440px",
            paddingTop: 20,
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(28px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
            minHeight: 420,
          }}
        >
          {/* Tagline badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: t.pS,
              border: `1px solid ${t.p}20`,
              borderRadius: 100,
              padding: "8px 20px",
              marginBottom: 24,
            }}
          >
            <span style={{ fontFamily: fb, fontSize: 12, fontWeight: 700, color: t.p }}>
              Bimbel dari Maluku Utara yang punya LMS Keren!
            </span>
          </div>

          {/* Animated headline — line 1 */}
          <h1
            style={{
              fontFamily: fh,
              fontSize: 28,
              fontWeight: 700,
              color: t.sub,
              lineHeight: 1,
              margin: "0 0 4px",
              letterSpacing: -0.5,
              minHeight: 32,
            }}
          >
            Belajar
            {slide.script && (
              <span
                style={{
                  color: slideColor,
                  transition: "color 0.5s",
                  marginLeft: 8,
                  fontSize: 26,
                }}
              >
                {slide.script}
              </span>
            )}
          </h1>

          {/* Animated headline — line 2 (BIG) */}
          <h1
            style={{
              fontFamily: fh,
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 10px",
              letterSpacing: -1.5,
              color: slideColor,
              transition: "color 0.5s",
              minHeight: 60,
            }}
          >
            {slide.word}
          </h1>

          {/* Subtitle */}
          <p
            key={slideIdx + "s"}
            style={{
              fontFamily: fh,
              fontSize: 20,
              fontWeight: 700,
              color: t.sub,
              lineHeight: 1.4,
              margin: "0 0 14px",
              maxWidth: 480,
              minHeight: 84,
            }}
          >
            {slide.sub}
          </p>

          {/* Slide dots */}
          <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
            {SLIDES.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIdx(i)}
                aria-label={`Show slide ${i + 1}: ${s.word}`}
                style={{
                  width: slideIdx === i ? 32 : 8,
                  height: 8,
                  borderRadius: 100,
                  background: slideIdx === i ? colorMap[s.colorKey] : `${t.mu}30`,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.35s",
                }}
              />
            ))}
          </div>

          {/* Checkmarks — color dynamic */}
          <p
            style={{
              fontFamily: fb,
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 4,
              color: slideColor,
              transition: "color 0.5s",
            }}
          >
            ✓ Kelas LIVE via Zoom &nbsp; ✓ Tutor Berpengalaman
          </p>
          <p
            style={{
              fontFamily: fb,
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 20,
              color: slideColor,
              transition: "color 0.5s",
            }}
          >
            ✓ Portal Orang Tua & Siswa
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: fb,
              fontSize: 17,
              color: t.sub,
              lineHeight: 1.8,
              margin: "0 0 32px",
              maxWidth: 420,
            }}
          >
            Anak belajar dengan cara yang seru. Orang tua tenang karena bisa pantau setiap
            progress — langsung dari genggaman.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <a
              href={buildWAUrl(EDUKAZIA_WA, WA_HERO_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: fh,
                fontWeight: 700,
                fontSize: 15,
                color: "#fff",
                background: t.cta,
                borderRadius: 16,
                padding: "17px 34px",
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(92,79,229,0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <WAIcon size={16} color="#fff" decorative />
              Daftar Sekarang
            </a>
            <a
              href="#kursus"
              style={{
                fontFamily: fh,
                fontWeight: 600,
                fontSize: 15,
                color: t.sub,
                borderRadius: 16,
                padding: "17px 28px",
                textDecoration: "none",
                border: `2px solid ${t.cb}`,
                background: t.card,
                transition: "all 0.2s",
              }}
            >
              Lihat Kursus ↓
            </a>
          </div>
        </div>

        {/* RIGHT — Stacked visual cluster (hidden di mobile via .hero-visual class) */}
        <div
          className="hero-visual"
          style={{
            flex: "1 1 360px",
            display: "flex",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.2s",
            position: "relative",
            top: 0,
            alignSelf: "flex-end",
            paddingTop: 20,
          }}
        >
          <div style={{ position: "relative", width: 360, height: 420 }}>
            {/* Zoom Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 20,
                left: 10,
                zIndex: 2,
              }}
            >
              <ZoomCard />
            </motion.div>

            {/* Student Stat Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: -24,
                right: -10,
                zIndex: 1,
              }}
            >
              <StudentCard tilt={3} />
            </motion.div>

            {/* Portal Phone */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: 1.5,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: 70,
                left: -30,
                zIndex: 4,
              }}
            >
              <PortalPhone />
            </motion.div>

            {/* Tutor Stat Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                bottom: 20,
                right: 10,
                zIndex: 3,
              }}
            >
              <TutorCard tilt={-2} />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
