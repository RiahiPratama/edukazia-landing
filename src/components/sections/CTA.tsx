/**
 * CTA — Final Call-to-Action Section
 *
 * Mockup ref: lines 1007-1048 (CTA component)
 *
 * Full-width gradient card dengan 2-column:
 *   - Left: Zap icon bouncing + headline "Siap Mulai..." + description + WA CTA (gold)
 *   - Right: Trust proof column dengan 5 alasan kenapa pilih EduKazia
 *
 * Background: t.cta gradient (purple). Card kontras dari section bg (t.bgW = warm cream).
 */

"use client"

import { Zap, Users, Smartphone, Gift, FileText, Video } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { WAIcon, buildWAUrl, EDUKAZIA_WA } from "@/components/ui/WAIcon"

// ═══════════════════════════════════════════════════════════
// TRUST PROOFS
// ═══════════════════════════════════════════════════════════

type TrustProof = {
  Icon: LucideIcon
  text: string
}

const TRUST_PROOFS: TrustProof[] = [
  { Icon: Users, text: "Diajar langsung oleh tutor berpengalaman" },
  { Icon: Smartphone, text: "Portal orang tua pantau progress real-time" },
  { Icon: Gift, text: "Tes Level tentukan kelas yang tepat" },
  { Icon: FileText, text: "Laporan tutor setiap sesi — Mama selalu tahu" },
  { Icon: Video, text: "Rekaman kelas tersedia untuk semua tipe" },
]

const WA_CTA_MESSAGE =
  "Halo EduKazia, saya ingin konsultasi untuk anak saya"

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function CTA() {
  const t = useT()

  return (
    <section style={{ background: t.bgW, padding: "88px 0" }}>
      <Container>
        <RevealOnScroll>
          <div
            style={{
              background: t.cta,
              borderRadius: 32,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Decorative shapes */}
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -60,
                left: -30,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "30%",
                right: "10%",
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                transform: "rotate(30deg)",
                animation: "floatSlow 6s ease-in-out infinite",
              }}
            />

            <div
              className="cta-flex"
              style={{
                display: "flex",
                alignItems: "stretch",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* LEFT — Main CTA */}
              <div style={{ flex: "1 1 400px", padding: "52px 48px" }}>
                {/* Bouncing zap icon */}
                <div
                  style={{
                    marginBottom: 12,
                    animation: "bounce 2s ease infinite",
                    display: "flex",
                  }}
                >
                  <Zap
                    size={36}
                    color="rgba(255,255,255,0.85)"
                    strokeWidth={2}
                  />
                </div>

                <h2
                  style={{
                    fontFamily: fh,
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#fff",
                    margin: "0 0 12px",
                    lineHeight: 1.2,
                  }}
                >
                  Siap Mulai Perjalanan
                  <br />
                  Belajar Anak?
                </h2>
                <p
                  style={{
                    fontFamily: fb,
                    fontSize: 15,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                    maxWidth: 380,
                  }}
                >
                  Konsultasi via WhatsApp, lalu Tes Level untuk tentukan kursus, tipe
                  kelas, dan jadwal yang pas untuk anak Anda.
                </p>

                {/* Gold CTA */}
                <a
                  href={buildWAUrl(EDUKAZIA_WA, WA_CTA_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: fh,
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#1A1535",
                    background: "#E6B800",
                    borderRadius: 16,
                    padding: "18px 36px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 6px 24px rgba(230,184,0,0.3)",
                    transition: "transform 0.2s",
                  }}
                >
                  <WAIcon size={16} color="#1A1535" decorative />
                  Chat WhatsApp Sekarang
                </a>
                <p
                  style={{
                    fontFamily: fb,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 14,
                    marginBottom: 0,
                  }}
                >
                  Tanpa kontrak · Tanpa biaya tersembunyi
                </p>
              </div>

              {/* RIGHT — Trust proof column */}
              <div
                style={{
                  flex: "0 0 320px",
                  padding: "48px 36px",
                  background: "rgba(255,255,255,0.04)",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 16,
                }}
                className="cta-trust"
              >
                <div
                  style={{
                    fontFamily: fh,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: 4,
                  }}
                >
                  Kenapa orang tua memilih EduKazia:
                </div>

                {TRUST_PROOFS.map(({ Icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 12px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color="#E6B800" strokeWidth={2} />
                    </span>
                    <span
                      style={{
                        fontFamily: fb,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.75)",
                        fontWeight: 500,
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

export default CTA
