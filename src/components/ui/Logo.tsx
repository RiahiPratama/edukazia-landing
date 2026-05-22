/**
 * Logo — EduKazia Brand Mark + Wordmark
 *
 * Komponen logo terdiri dari:
 *   1. Mark: 3 rectangles bertumpuk (kuning, ungu, ungu-muda)
 *   2. Wordmark: "edu" (ungu) + "kazia" (kuning) dalam Nunito 900
 *
 * Dipakai di Navbar (variant ikut theme) dan Footer (variant="white").
 *
 * @example
 *   // Default — auto color (untuk light bg)
 *   <Logo size="md" />
 *
 *   // White — untuk dark bg (mis. footer)
 *   <Logo variant="white" size="sm" />
 *
 *   // Tanpa anchor (inline only)
 *   <Logo href={null} />
 *
 *   // Custom href (mis. landing page lain)
 *   <Logo href="/landing" />
 */

import type { CSSProperties } from "react"
import { fLogo } from "@/lib/theme"

// ═══════════════════════════════════════════════════════════
// TYPES & CONFIG
// ═══════════════════════════════════════════════════════════

export type LogoVariant = "default" | "white"
export type LogoSize = "sm" | "md" | "lg"

type SizeConfig = { w: number; h: number; fs: number; gap: number }
type ColorConfig = { b1: string; b2: string; b3: string; edu: string; kazia: string }

const SIZES: Record<LogoSize, SizeConfig> = {
  sm: { w: 36, h: 29, fs: 21, gap: 8 },
  md: { w: 44, h: 36, fs: 26, gap: 10 },
  lg: { w: 56, h: 46, fs: 32, gap: 12 },
}

const VARIANTS: Record<LogoVariant, ColorConfig> = {
  default: {
    b1: "#E6B800",
    b2: "#5C4FE5",
    b3: "#8070F0",
    edu: "#5C4FE5",
    kazia: "#E6B800",
  },
  white: {
    b1: "#E6B800",
    b2: "rgba(255,255,255,0.90)",
    b3: "rgba(255,255,255,0.45)",
    edu: "rgba(255,255,255,0.92)",
    kazia: "#E6B800",
  },
}

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

export type LogoProps = {
  /** Color variant. Default: "default" */
  variant?: LogoVariant
  /** Size preset. Default: "md" */
  size?: LogoSize
  /** Link target. `null` = render tanpa <a>. Default: "/" */
  href?: string | null
  className?: string
  style?: CSSProperties
}

export function Logo({
  variant = "default",
  size = "md",
  href = "/",
  className,
  style,
}: LogoProps) {
  const sv = SIZES[size]
  const vr = VARIANTS[variant]

  const mark = (
    <svg
      width={sv.w}
      height={sv.h}
      viewBox="0 0 88 72"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x="0" y="0" width="84" height="18" rx="9" fill={vr.b1} />
      <rect x="0" y="27" width="59" height="18" rx="9" fill={vr.b2} />
      <rect x="0" y="54" width="34" height="18" rx="9" fill={vr.b3} />
    </svg>
  )

  const wordmark = (
    <span
      style={{
        fontFamily: fLogo,
        fontWeight: 900,
        fontSize: sv.fs,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      <span style={{ color: vr.edu }}>edu</span>
      <span style={{ color: vr.kazia }}>kazia</span>
    </span>
  )

  const inner = (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: sv.gap,
        ...style,
      }}
    >
      {mark}
      {wordmark}
    </span>
  )

  // Tanpa anchor — sekadar render inline
  if (href === null) return inner

  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
      }}
      aria-label="EduKazia — Halaman Utama"
    >
      {inner}
    </a>
  )
}

export default Logo
