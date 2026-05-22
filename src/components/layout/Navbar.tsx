/**
 * Navbar — Fixed Top Navigation
 *
 * Mockup ref: `Nav` component (line 180) file 01_edukazia-Landing_Page_Final.jsx
 *
 * Features:
 *   - Fixed position di top, transparan di awal, semi-transparan + blur saat scroll
 *   - 2 dropdown menu di desktop (Untuk Siapa, Pelajaran) — hover-triggered
 *   - StickyBadge muncul di sebelah logo saat scroll >50px
 *   - Theme toggle (sun/moon SVG)
 *   - CTA "Login ke Portal" → app.edukazia.com
 *   - Mobile: Login compact + toggle + hamburger drawer
 *   - Escape key untuk close mobile drawer
 *
 * Requires:
 *   - <ThemeProvider> wrapping app (untuk useTheme hook)
 *   - CSS classes `.desktop-menu`, `.mobile-menu-btn`, `.hide-mobile` di globals.css
 */

"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme, fb, fh } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { Logo } from "@/components/ui/Logo"
import { StickyBadge } from "./StickyBadge"

// ═══════════════════════════════════════════════════════════
// CONFIG
// ═══════════════════════════════════════════════════════════

const PORTAL_URL = "https://app.edukazia.com"
const SUPERSTAR_URL = "/kursus/bahasa-inggris/superstar"

type DropdownItem = { text: string; href: string }
type DropdownMenu = { label: string; items: DropdownItem[] }

const DROPDOWNS: DropdownMenu[] = [
  {
    label: "Untuk Siapa",
    items: [
      { text: "Anak (7–13 thn)", href: "/untuk-anak" },
      { text: "Remaja SMP–SMA (13–18 thn)", href: "/untuk-remaja" },
      { text: "Mama Yang Mau Belajar", href: "/untuk-orang-tua" },
      { text: "Kelas Privat 1-on-1", href: "/kursus/privat" },
    ],
  },
  {
    label: "Pelajaran",
    items: [
      { text: "Bahasa Inggris", href: "/kursus/bahasa-inggris" },
      { text: "Bahasa Arab", href: "/kursus/bahasa-arab" },
      { text: "Mandarin", href: "/kursus/bahasa-mandarin" },
      { text: "Matematika", href: "/kursus/matematika" },
    ],
  },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function Navbar() {
  const { t, mode, toggle } = useTheme()
  const isDark = mode === "dark"

  const [scrolled, setScrolled] = useState(false)
  const [openDD, setOpenDD] = useState<number | null>(null)
  const [mobOpen, setMobOpen] = useState(false)

  // Detect scroll for navbar bg + sticky badge
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll() // initial check (penting kalau user refresh di scroll position)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Escape key closes mobile drawer
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  // Body scroll lock saat mobile drawer terbuka
  useEffect(() => {
    if (mobOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobOpen])

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? t.nav : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${t.navB}` : "none",
          transition: "all 0.35s",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo + Sticky Badge */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo variant={isDark ? "white" : "default"} size="md" href="/" />
            <StickyBadge visible={scrolled} />
          </div>

          {/* Desktop menu */}
          <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {DROPDOWNS.map((dd, di) => (
              <div
                key={di}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenDD(di)}
                onMouseLeave={() => setOpenDD(null)}
              >
                <button
                  type="button"
                  style={{
                    fontFamily: fb,
                    fontSize: 13,
                    fontWeight: 600,
                    color: t.sub,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    transition: "color 0.2s",
                  }}
                  aria-expanded={openDD === di}
                  aria-haspopup="true"
                >
                  {dd.label}
                  <ChevronDown size={10} />
                </button>

                {openDD === di && (
                  <div
                    role="menu"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: t.card,
                      borderRadius: 14,
                      border: `1px solid ${t.cb}`,
                      boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                      padding: 6,
                      minWidth: 200,
                      zIndex: 100,
                    }}
                  >
                    {dd.items.map((item, ii) => (
                      <a
                        key={ii}
                        href={item.href}
                        role="menuitem"
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          borderRadius: 10,
                          textDecoration: "none",
                          fontFamily: fb,
                          fontSize: 13,
                          fontWeight: 600,
                          color: t.tx,
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = t.pS)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Standalone — English Superstar (premium positioning) */}
            <a
              href={SUPERSTAR_URL}
              style={{
                fontFamily: fb,
                fontSize: 13,
                fontWeight: 700,
                color: t.tx,
                background: "transparent",
                border: `1px solid ${t.cb}`,
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: 10,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginLeft: 4,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(230,184,0,0.08)"
                e.currentTarget.style.borderColor = "rgba(230,184,0,0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = t.cb
              }}
            >
              <span aria-hidden="true">⭐</span>
              English Superstar
            </a>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggle}
              title={isDark ? "Mode Terang" : "Mode Gelap"}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: t.m === "dark" ? "rgba(255,255,255,0.06)" : "rgba(92,79,229,0.08)",
                border: `1.5px solid ${t.m === "dark" ? "rgba(255,255,255,0.18)" : "rgba(92,79,229,0.28)"}`,
                boxShadow: t.m === "dark" ? "0 2px 6px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.08)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 8,
              }}
            >
              {isDark ? <Sun size={16} color={t.tx} /> : <Moon size={16} color={t.tx} />}
            </button>

            {/* Portal CTA */}
            <a
              href={PORTAL_URL}
              style={{
                fontFamily: fh,
                fontWeight: 700,
                fontSize: 13,
                color: "#fff",
                background: t.cta,
                borderRadius: 12,
                padding: "10px 22px",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(92,79,229,0.2)",
                marginLeft: 8,
              }}
            >
              Login ke Portal
            </a>
          </div>

          {/* Mobile: login compact + toggle + hamburger */}
          <div className="mobile-menu-btn" style={{ display: "none", alignItems: "center", gap: 8 }}>
            <a
              href={PORTAL_URL}
              style={{
                fontFamily: fh,
                fontWeight: 700,
                fontSize: 11,
                color: "#fff",
                background: t.cta,
                borderRadius: 10,
                padding: "8px 14px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Login ke Portal
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: t.m === "dark" ? "rgba(255,255,255,0.06)" : "rgba(92,79,229,0.08)",
                border: `1.5px solid ${t.m === "dark" ? "rgba(255,255,255,0.18)" : "rgba(92,79,229,0.28)"}`,
                boxShadow: t.m === "dark" ? "0 2px 6px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.08)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isDark ? <Sun size={16} color={t.tx} /> : <Moon size={16} color={t.tx} />}
            </button>
            <button
              type="button"
              onClick={() => setMobOpen((m) => !m)}
              aria-label={mobOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobOpen}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: t.m === "dark" ? "rgba(255,255,255,0.06)" : "rgba(92,79,229,0.08)",
                border: `1.5px solid ${t.m === "dark" ? "rgba(255,255,255,0.18)" : "rgba(92,79,229,0.28)"}`,
                boxShadow: t.m === "dark" ? "0 2px 6px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.08)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mobOpen ? <X size={18} color={t.tx} /> : <Menu size={18} color={t.tx} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile drawer */}
      {mobOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          onClick={() => setMobOpen(false)}
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            background: t.card,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 999,
            padding: 24,
            overflowY: "auto",
          }}
        >
          <div
            style={{
              fontFamily: fb,
              fontSize: 11,
              fontWeight: 600,
              color: t.p,
              background: t.pS,
              padding: "6px 14px",
              borderRadius: 100,
              display: "inline-block",
              marginBottom: 20,
            }}
          >
            Bimbel dari Maluku Utara yang punya LMS Keren!
          </div>

          {DROPDOWNS.map((dd, di) => (
            <div key={di} style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontFamily: fh,
                  fontSize: 14,
                  fontWeight: 700,
                  color: t.tx,
                  marginBottom: 8,
                }}
              >
                {dd.label}
              </div>
              {dd.items.map((item, ii) => (
                <a
                  key={ii}
                  href={item.href}
                  onClick={() => setMobOpen(false)}
                  style={{
                    display: "block",
                    padding: "10px 14px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontFamily: fb,
                    fontSize: 14,
                    fontWeight: 500,
                    color: t.sub,
                    borderBottom: `1px solid ${t.cb}`,
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
          ))}

          {/* Standalone — English Superstar (premium positioning) */}
          <a
            href={SUPERSTAR_URL}
            onClick={() => setMobOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 16px",
              borderRadius: 12,
              textDecoration: "none",
              fontFamily: fh,
              fontSize: 15,
              fontWeight: 700,
              color: t.tx,
              background: "rgba(230,184,0,0.08)",
              border: "1px solid rgba(230,184,0,0.3)",
              marginBottom: 20,
            }}
          >
            <span aria-hidden="true">⭐</span>
            English Superstar
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
