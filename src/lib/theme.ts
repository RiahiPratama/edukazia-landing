/**
 * EduKazia Brand Theme — Light (L) & Dark (D)
 *
 * Reference: mockup 01_edukazia-Landing_Page_Final.jsx (theme L & D objects)
 * Design philosophy: "Playful Premium"
 *   - Light = soft cream/purple-tinted, crisp white cards
 *   - Dark  = Stitch-inspired deep black with glass cards & colored glows
 *
 * UPDATE (batch 2): added nav, cta, footer, hero gradients, all color variants
 * sesuai mockup. Sebelumnya tokenset terlalu minim, akibatnya Navbar/Footer/
 * WAFloat akan reference undefined token.
 */

"use client"

import { createContext, useContext } from "react"

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

export type ThemeMode = "light" | "dark"

export type Theme = {
  /** Mode identifier */
  m: ThemeMode

  // ─── Surfaces — multi-tone backgrounds ──────────────────
  bg: string    // main page bg
  bgW: string   // warm cream alt (English-related sections)
  bgC: string   // cool purple alt (Arabic / privat)
  bgM: string   // mint alt
  bgP: string   // pink alt

  // ─── Cards ──────────────────────────────────────────────
  card: string  // card surface
  cb: string    // card border
  cs: string    // card shadow (default state)
  ch: string    // card shadow (hover state)

  // ─── Typography ─────────────────────────────────────────
  tx: string    // primary text
  sub: string   // secondary text
  mu: string    // muted/tertiary text

  // ─── Brand: Purple (primary) ────────────────────────────
  p: string
  pS: string    // purple soft / tint

  // ─── Accents: Green (English) ───────────────────────────
  g: string
  gS: string

  // ─── Accents: Gold (Arabic + Semi Privat) ───────────────
  gold: string
  goldS: string
  goldT: string // text color on gold bg (light: dark, dark: dark)

  // ─── Accents: Pink (Matematika) ─────────────────────────
  pk: string
  pkS: string

  // ─── Accents: Orange (Mandarin) ─────────────────────────
  or: string
  orS: string

  // ─── Accents: Blue (utility, mis. info badges) ──────────
  bl: string
  blS: string

  // ─── Accents: Coral (utility, mis. alert/heat) ──────────
  coral: string

  // ─── Layout: Navbar ─────────────────────────────────────
  nav: string   // navbar bg (semi-transparent, pairs with backdrop-blur)
  navB: string  // navbar bottom border

  // ─── Layout: Footer ─────────────────────────────────────
  footer: string

  // ─── Decorations: Gradients ─────────────────────────────
  hero: string  // hero section gradient
  cta: string   // primary CTA button gradient
}

// ═══════════════════════════════════════════════════════════
// LIGHT THEME — default
// ═══════════════════════════════════════════════════════════
export const light: Theme = {
  m: "light",

  // Surfaces
  bg: "#FDFCFA",
  bgW: "#FFF8F0",
  bgC: "#F0EDFF",
  bgM: "#EDFDF5",
  bgP: "#FFF0F6",

  // Cards
  card: "#FFFFFF",
  cb: "rgba(0,0,0,0.05)",
  cs: "0 2px 20px rgba(0,0,0,0.04)",
  ch: "0 12px 40px rgba(92,79,229,0.1)",

  // Typography
  tx: "#1A1535",
  sub: "#5E5878",
  mu: "#9D97B5",

  // Brand
  p: "#5C4FE5",
  pS: "#EEEDFC",

  // Accents
  g: "#10B981",
  gS: "#ECFDF5",

  gold: "#E6B800",
  goldS: "#FFF9E0",
  goldT: "#1A1535",

  pk: "#EC4899",
  pkS: "#FDF2F8",
  or: "#F59E0B",
  orS: "#FFFBEB",
  bl: "#3B82F6",
  blS: "#EFF6FF",
  coral: "#FF6B6B",

  // Layout
  nav: "rgba(253,252,250,0.92)",
  navB: "rgba(0,0,0,0.05)",
  footer: "#1A1535",

  // Decorations
  hero: "linear-gradient(160deg,#F0EDFF 0%,#FFF8F0 40%,#EDFDF5 100%)",
  cta: "linear-gradient(135deg,#5C4FE5,#7B6FF0)",
}

// ═══════════════════════════════════════════════════════════
// DARK THEME — Stitch-inspired deep black + glass
// ═══════════════════════════════════════════════════════════
export const dark: Theme = {
  m: "dark",

  // Surfaces — deep black with subtle tones
  bg: "#08080E",
  bgW: "#0A0A12",
  bgC: "#0B0A14",
  bgM: "#080E0B",
  bgP: "#0E0A12",

  // Cards — glass effect
  card: "rgba(255,255,255,0.03)",
  cb: "rgba(255,255,255,0.07)",
  cs: "0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
  ch: "0 16px 48px rgba(92,79,229,0.12), 0 0 0 1px rgba(255,255,255,0.08)",

  // Typography
  tx: "#F5F4FF",
  sub: "#A8A4BE",
  mu: "#5D596F",

  // Brand
  p: "#8B7FF5",
  pS: "rgba(139,127,245,0.1)",

  // Accents
  g: "#4ADE9A",
  gS: "rgba(74,222,154,0.08)",

  gold: "#F0C830",
  goldS: "rgba(240,200,48,0.08)",
  goldT: "#08080E",

  pk: "#F78DC2",
  pkS: "rgba(247,141,194,0.08)",
  or: "#FFB84D",
  orS: "rgba(255,184,77,0.08)",
  bl: "#70AEFF",
  blS: "rgba(112,174,255,0.08)",
  coral: "#FF8A8A",

  // Layout
  nav: "rgba(8,8,14,0.8)",
  navB: "rgba(255,255,255,0.06)",
  footer: "#050508",

  // Decorations
  hero: "linear-gradient(160deg,#0C0B18 0%,#08080E 40%,#080E0B 100%)",
  cta: "linear-gradient(135deg,#5C4FE5,#8B7FF5)",
}

// ═══════════════════════════════════════════════════════════
// REGISTRY & HELPERS
// ═══════════════════════════════════════════════════════════

export const themes: Record<ThemeMode, Theme> = { light, dark }

export const getTheme = (mode: ThemeMode): Theme => themes[mode]

// ═══════════════════════════════════════════════════════════
// CONTEXT — buat akses theme di Client Components
// ═══════════════════════════════════════════════════════════

type ThemeContextValue = {
  t: Theme
  mode: ThemeMode
  toggle: () => void
  setMode: (m: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * useT — Hook ringkas: hanya theme object aktif.
 *
 * @example
 *   const t = useT()
 *   <div style={{ background: t.bg, color: t.tx }} />
 */
export const useT = (): Theme => {
  const ctx = useContext(ThemeContext)
  return ctx?.t ?? light // fallback ke light kalau di luar provider
}

/**
 * useTheme — Hook lengkap: theme + mode + toggle + setMode.
 * Buat komponen yang butuh kontrol theme (mis. tombol toggle navbar).
 */
export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    return {
      t: light,
      mode: "light",
      toggle: () => {},
      setMode: () => {},
    }
  }
  return ctx
}

// ═══════════════════════════════════════════════════════════
// FONT FAMILY STACKS
// ═══════════════════════════════════════════════════════════
// Setup via next/font/google di layout.tsx:
//   const sora = Sora({ variable: "--font-sora", ... })
//   const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", ... })
//   const nunito = Nunito({ variable: "--font-nunito", weight: "900", ... })

/** Heading — Sora (geometric sans) */
export const fh = "var(--font-sora), system-ui, -apple-system, sans-serif"

/** Body — Plus Jakarta Sans (humanist sans) */
export const fb = "var(--font-jakarta), system-ui, -apple-system, sans-serif"

/** Logo wordmark — Nunito 900 (chunky, friendly) */
export const fLogo = "var(--font-nunito), system-ui, -apple-system, sans-serif"
