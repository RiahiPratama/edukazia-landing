/**
 * StickyBadge — Tagline Badge yang Muncul di Navbar on Scroll
 *
 * Mockup ref: line 205 di Nav component — `{sc && <span>...</span>}`
 *
 * Saat user scroll lebih dari 50px, badge tagline muncul di sebelah logo
 * di navbar. Di mobile, badge ini disembunyikan (responsive).
 *
 * Komponen ini dipakai INSIDE Navbar — `visible` di-pass dari Navbar's
 * scroll state.
 *
 * @example
 *   <StickyBadge visible={scrolled} />
 *
 *   // Custom text
 *   <StickyBadge visible={scrolled}>Promo Akhir Tahun!</StickyBadge>
 */

"use client"

import { useT, fb } from "@/lib/theme"

export type StickyBadgeProps = {
  /** Whether badge is visible (tied to parent scroll state) */
  visible: boolean
  /** Hide on mobile via CSS class `.hide-mobile`. Default: true */
  hideOnMobile?: boolean
  /** Badge text content. Default: EduKazia tagline */
  children?: string
}

const DEFAULT_TEXT = "Bimbel dari Maluku Utara yang punya LMS Keren!"

export function StickyBadge({
  visible,
  hideOnMobile = true,
  children = DEFAULT_TEXT,
}: StickyBadgeProps) {
  const t = useT()

  if (!visible) return null

  return (
    <span
      className={hideOnMobile ? "hide-mobile" : undefined}
      style={{
        fontFamily: fb,
        fontSize: 11,
        fontWeight: 600,
        color: t.p,
        background: t.pS,
        padding: "4px 12px",
        borderRadius: 100,
        marginLeft: 8,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  )
}

export default StickyBadge
