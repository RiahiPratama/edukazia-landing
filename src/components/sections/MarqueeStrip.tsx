/**
 * MarqueeStrip — Brand-Style Horizontal Scrolling Strip
 *
 * Mockup ref: lines 469-497 (MarqueeStrip component)
 *
 * Horizontal scrolling strip dengan teks varying sizes & icon Lucide.
 * Pakai CSS animation (bukan Framer Motion) karena infinite translate
 * lebih smooth dengan keyframes daripada motion library.
 *
 * Animation `marquee` di-define di globals.css.
 * Strip di-duplikat 2x supaya looping seamless.
 */

"use client"

import { Star, BookOpen, Users, Smartphone, Video, RefreshCw } from "lucide-react"
import { useT, fh } from "@/lib/theme"
import type { ReactNode } from "react"

// ═══════════════════════════════════════════════════════════
// ITEM COMPONENT — text + icon, customizable size
// ═══════════════════════════════════════════════════════════

function Item({ size, children }: { size: number; children: ReactNode }) {
  return (
    <span
      style={{
        fontFamily: fh,
        fontWeight: 800,
        fontSize: size,
        color: "#fff",
        whiteSpace: "nowrap",
        padding: "0 22px",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
    </span>
  )
}

// ═══════════════════════════════════════════════════════════
// STRIP CONTENT — repeating row
// ═══════════════════════════════════════════════════════════

function StripContent() {
  return (
    <>
      <Item size={14}>
        <Star size={14} fill="#E6B800" color="#E6B800" />
        Dipercaya Orang Tua
      </Item>
      <Item size={22}>
        <BookOpen size={18} color="#fff" />
        150+ Siswa Aktif dari Maluku Utara
      </Item>
      <Item size={16}>
        <BookOpen size={14} color="#fff" />
        4 Pelajaran
      </Item>
      <Item size={20}>
        <Users size={16} color="#fff" />
        Tutor Berpengalaman
      </Item>
      <Item size={14}>
        <Smartphone size={14} color="#fff" />
        Portal LMS
      </Item>
      <Item size={18}>
        <Video size={16} color="#fff" />
        Live Zoom & Rekaman Belajar
      </Item>
      <Item size={15}>
        <RefreshCw size={14} color="#fff" />
        Reschedule Gratis
      </Item>
    </>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function MarqueeStrip() {
  const t = useT()
  const bg = t.m === "dark" ? "#0F0E1A" : "#1A1535"

  return (
    <section
      className="marquee-strip"
      style={{
        background: bg,
        padding: 0,
        overflow: "hidden",
        position: "relative",
      }}
      aria-hidden="true"
    >
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 60,
          height: "100%",
          background: `linear-gradient(90deg, ${bg}, transparent)`,
          zIndex: 2,
        }}
      />

      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 60,
          height: "100%",
          background: `linear-gradient(270deg, ${bg}, transparent)`,
          zIndex: 2,
        }}
      />

      {/* Scrolling content — duplicated for seamless loop */}
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          animation: "marquee 35s linear infinite",
          width: "max-content",
          padding: "16px 0",
        }}
      >
        <StripContent />
        <StripContent />
      </div>
    </section>
  )
}

export default MarqueeStrip
