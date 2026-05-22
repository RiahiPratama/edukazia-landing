/**
 * WAFloat — Floating WhatsApp Button
 *
 * Mockup ref: `WAFloat` component (line 1059) file 01_edukazia-Landing_Page_Final.jsx
 *
 * Fixed di pojok kanan bawah viewport dengan pulse animation.
 * Click → buka WhatsApp chat dengan pre-filled message konsultasi.
 *
 * Animation `waPulse` di-define di globals.css (akan dibuat nanti):
 *   @keyframes waPulse {
 *     0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.3); }
 *     70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
 *     100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
 *   }
 *
 * Note: Komponen ini Server Component-friendly (no "use client").
 * URL & message ter-resolve di build time, jadi nggak perlu hydration.
 */

import { WAIcon, buildWAUrl, EDUKAZIA_WA, WA_GREEN } from "@/components/ui/WAIcon"

export type WAFloatProps = {
  /** Pre-filled message. Default: konsultasi message generic */
  message?: string
  /** Distance from viewport edge in px. Default: 22 */
  offset?: number
  /** Button size in px (lebar = tinggi). Default: 56 */
  size?: number
  /** Border radius in px. Default: 16 (rounded square) */
  borderRadius?: number
  /** Disable pulse animation (untuk reduce-motion preference) */
  disablePulse?: boolean
}

const DEFAULT_MESSAGE = "Halo EduKazia, saya ingin konsultasi tentang kursus"

export function WAFloat({
  message = DEFAULT_MESSAGE,
  offset = 22,
  size = 56,
  borderRadius = 16,
  disablePulse = false,
}: WAFloatProps) {
  const url = buildWAUrl(EDUKAZIA_WA, message)

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      style={{
        position: "fixed",
        bottom: offset,
        right: offset,
        width: size,
        height: size,
        borderRadius,
        background: WA_GREEN,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        animation: disablePulse ? undefined : "waPulse 2s ease-in-out infinite",
        zIndex: 999,
        boxShadow: "0 6px 20px rgba(37,211,102,0.25)",
      }}
    >
      <WAIcon size={Math.round(size * 0.46)} color="#fff" decorative />
    </a>
  )
}

export default WAFloat
