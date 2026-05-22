/**
 * Footer — Dark Brand Footer
 *
 * Mockup ref: `Footer` component (line 1051) file 01_edukazia-Landing_Page_Final.jsx
 *
 * Layout:
 *   - Brand column (logo white + tagline) — flex 1 1 240px
 *   - 3 link columns (Kursus, Kelas, Lainnya) — flex 1 1 120px each
 *   - Copyright row di bottom dengan border top
 *
 * Note: Item-item link saat ini render sebagai <div> tidak clickable
 * (mirror mockup). Kalau perlu dijadikan link, kita upgrade jadi <a href>
 * di iterasi berikutnya saat semua route udah ada.
 */

"use client"

import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { Logo } from "@/components/ui/Logo"

// ═══════════════════════════════════════════════════════════
// CONFIG — link columns
// ═══════════════════════════════════════════════════════════

type FooterColumn = {
  title: string
  items: string[]
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Kursus",
    items: ["Bahasa Inggris", "Bahasa Arab", "Mandarin", "Matematika"],
  },
  {
    title: "Kelas",
    items: ["Privat 1-on-1", "Semi Privat", "Reguler"],
  },
  {
    title: "Lainnya",
    items: ["FAQ", "Portal Orang Tua", "Kebijakan Privasi"],
  },
]

const TAGLINE = "Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia."
const COPYRIGHT = "© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia."

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

export function Footer() {
  const t = useT()

  return (
    <footer style={{ background: t.footer, padding: "48px 0 24px" }}>
      <Container>
        <div
          style={{
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            marginBottom: 36,
          }}
        >
          {/* Brand column */}
          <div style={{ flex: "1 1 240px" }}>
            <div style={{ marginBottom: 14 }}>
              <Logo variant="white" size="sm" href="/" />
            </div>
            <p
              style={{
                fontFamily: fb,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                maxWidth: 230,
                margin: 0,
              }}
            >
              {TAGLINE}
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} style={{ flex: "1 1 120px" }}>
              <h4
                style={{
                  fontFamily: fh,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 14,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {col.title}
              </h4>
              {col.items.map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: fb,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 10,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 18,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: fb,
              fontSize: 11,
              color: "rgba(255,255,255,0.2)",
              margin: 0,
            }}
          >
            {COPYRIGHT}
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
