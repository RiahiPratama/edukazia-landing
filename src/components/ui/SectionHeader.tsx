/**
 * SectionHeader — Reusable Section Header
 *
 * Mockup ref: `SH` component di line 177 file 01_edukazia-Landing_Page_Final.jsx
 *
 * Struktur 3 layer:
 *   1. Label kecil ATAS — uppercase, letter-spacing, warna brand (default purple)
 *   2. Title BESAR — heading utama section
 *   3. Subtitle (optional) — penjelasan ringkas di bawah title
 *
 * @example
 *   <SectionHeader
 *     label="Pilihan Kelas"
 *     title="Mata Pelajaran Unggulan"
 *     sub="4 mata pelajaran dengan kurikulum terstruktur."
 *   />
 *
 *   // Override warna label per section (mis. mata pelajaran-specific)
 *   <SectionHeader
 *     label="Bahasa Inggris"
 *     title="Belajar English"
 *     color="#10B981"
 *   />
 */

"use client"

import { useT, fh, fb } from "@/lib/theme"

export type SectionHeaderProps = {
  /** Label kapital kecil di atas title (mis. "PILIHAN KELAS") */
  label: string
  /** Title heading besar */
  title: string
  /** Subtitle/deskripsi pendek (optional) */
  sub?: string
  /** Override warna label. Default: theme purple (`t.p`) */
  color?: string
  /** Margin bottom override. Default: 52 */
  marginBottom?: number | string
}

export function SectionHeader({
  label,
  title,
  sub,
  color,
  marginBottom = 52,
}: SectionHeaderProps) {
  const t = useT()

  return (
    <div style={{ textAlign: "center", marginBottom }}>
      <div
        style={{
          fontFamily: fh,
          fontSize: 12,
          fontWeight: 700,
          color: color || t.p,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {label}
      </div>

      <h2
        style={{
          fontFamily: fh,
          fontSize: 40,
          fontWeight: 800,
          color: t.tx,
          margin: 0,
          letterSpacing: -0.8,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      {sub && (
        <p
          style={{
            fontFamily: fb,
            fontSize: 16,
            color: t.sub,
            marginTop: 14,
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
