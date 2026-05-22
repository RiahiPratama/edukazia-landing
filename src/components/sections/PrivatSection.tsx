/**
 * PrivatSection — Kelas Privat 1-on-1 Hero-Level Showcase
 *
 * Mockup ref: lines 657-740 (PrivatSection component)
 *
 * 2-column layout:
 *   - Left: Badge "Pilihan Terbaik" + headline "Kelas Privat 1-on-1" + 5 benefits + CTA
 *   - Right: Visual card dengan video Zoom mockup (Pexels) + included list
 *
 * Note: Video element pakai source dari Pexels — kalau Vercel block / video
 * gagal load, fallback ke gradient kosong. Optional: ganti dengan video lokal
 * lain atau placeholder image di future iteration.
 */

"use client"

import { Target, Calendar, FileText, ChartColumn, RefreshCw } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { WAIcon, buildWAUrl, EDUKAZIA_WA } from "@/components/ui/WAIcon"

// ═══════════════════════════════════════════════════════════
// BENEFITS DATA (results, not features)
// ═══════════════════════════════════════════════════════════

type Benefit = {
  Icon: LucideIcon
  text: string
}

const BENEFITS: Benefit[] = [
  { Icon: Target, text: "Progress 3x lebih cepat dari kelas reguler" },
  { Icon: Calendar, text: "Jadwal 100% disesuaikan — pagi, siang, atau malam" },
  { Icon: FileText, text: "Kurikulum terstruktur sesuai kelemahan & kekuatan anak" },
  { Icon: ChartColumn, text: "Laporan detail setiap sesi — orang tua selalu tahu" },
  { Icon: RefreshCw, text: "Reschedule kapan saja tanpa biaya tambahan" },
]

// ═══════════════════════════════════════════════════════════
// INCLUDED FEATURES (di paket privat)
// ═══════════════════════════════════════════════════════════

const INCLUDED = [
  "8 sesi live Zoom eksklusif",
  "Kurikulum terstruktur sesuai level",
  "Foto bukti belajar tiap sesi",
  "Laporan detail untuk orang tua",
  "Reschedule fleksibel tanpa biaya",
]

const PEXELS_VIDEO_URL =
  "https://videos.pexels.com/video-files/5483077/5483077-uhd_2560_1440_25fps.mp4"

const WA_PRIVAT_MESSAGE = "Halo, saya ingin daftar Kelas Privat 1-on-1"

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function PrivatSection() {
  const t = useT()

  return (
    <section
      id="privat"
      style={{
        background: t.bgC,
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: t.pS,
          filter: "blur(60px)",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: t.goldS,
          filter: "blur(50px)",
          opacity: 0.5,
        }}
      />

      <Container>
        <RevealOnScroll>
          <div
            style={{
              display: "flex",
              gap: 48,
              alignItems: "center",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* LEFT — Emotional pitch */}
            <div style={{ flex: "1 1 480px" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: t.goldS,
                  border: `1px solid ${t.gold}20`,
                  borderRadius: 100,
                  padding: "8px 18px",
                  marginBottom: 20,
                }}
              >
                <span aria-hidden="true">🔥</span>
                <span
                  style={{
                    fontFamily: fb,
                    fontSize: 12,
                    fontWeight: 700,
                    color: t.gold,
                  }}
                >
                  Pilihan Terbaik untuk Hasil Maksimal
                </span>
              </div>

              <h2
                style={{
                  fontFamily: fh,
                  fontSize: 42,
                  fontWeight: 800,
                  color: t.tx,
                  lineHeight: 1.12,
                  margin: "0 0 8px",
                  letterSpacing: -1,
                }}
              >
                Kelas Privat 1-on-1
              </h2>
              <p
                style={{
                  fontFamily: fh,
                  fontSize: 20,
                  fontWeight: 600,
                  color: t.p,
                  margin: "0 0 20px",
                }}
              >
                Perhatian penuh. Kurikulum sesuai level. Jadwal fleksibel.
              </p>
              <p
                style={{
                  fontFamily: fb,
                  fontSize: 16,
                  color: t.sub,
                  lineHeight: 1.8,
                  margin: "0 0 28px",
                  maxWidth: 440,
                }}
              >
                Bayangkan anak belajar dengan tutor yang 100% fokus ke dia saja. Tidak
                berbagi perhatian dengan siswa lain. Kurikulum terstruktur sesuai level
                anak. Ini bukan les biasa — ini investasi untuk masa depan mereka.
              </p>

              {/* Benefits list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {BENEFITS.map(({ Icon, text }, i) => (
                  <RevealOnScroll key={text} delay={0.08 * (i + 1)} direction="right">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 16px",
                        background: t.card,
                        borderRadius: 14,
                        border: `1px solid ${t.cb}`,
                        boxShadow: t.cs,
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={t.p} strokeWidth={2} />
                      </span>
                      <span
                        style={{
                          fontFamily: fb,
                          fontSize: 14,
                          fontWeight: 600,
                          color: t.tx,
                        }}
                      >
                        {text}
                      </span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              {/* CTA */}
              <a
                href={buildWAUrl(EDUKAZIA_WA, WA_PRIVAT_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: fh,
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                  background: t.cta,
                  borderRadius: 16,
                  padding: "18px 40px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  boxShadow: "0 8px 32px rgba(92,79,229,0.25)",
                  transition: "all 0.3s",
                }}
              >
                <WAIcon size={16} color="#fff" decorative />
                Daftar Kelas Privat
              </a>
            </div>

            {/* RIGHT — Visual proof card */}
            <div style={{ flex: "1 1 360px" }}>
              <div
                style={{
                  background: t.card,
                  borderRadius: 28,
                  border: `2px solid ${t.p}30`,
                  padding: 32,
                  boxShadow: t.ch,
                }}
              >
                {/* Privat simulation */}
                <div
                  style={{
                    background: t.pS,
                    borderRadius: 18,
                    padding: 24,
                    marginBottom: 20,
                    position: "relative",
                  }}
                >
                  {/* Traffic lights */}
                  <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                    {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                      <div
                        key={c}
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: c,
                        }}
                      />
                    ))}
                  </div>

                  {/* Video frame */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 14,
                      overflow: "hidden",
                      aspectRatio: "16/9",
                    }}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    >
                      <source src={PEXELS_VIDEO_URL} type="video/mp4" />
                    </video>
                    {/* Gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(92,79,229,0.55) 0%, transparent 60%)",
                      }}
                    />
                    {/* Bottom info */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 12,
                        right: 12,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: fh,
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#fff",
                          }}
                        >
                          Sesi Live via Zoom
                        </div>
                        <div
                          style={{
                            fontFamily: fb,
                            fontSize: 9,
                            color: "rgba(255,255,255,0.75)",
                          }}
                        >
                          1-on-1 · Fokus Penuh
                        </div>
                      </div>
                      <div
                        style={{
                          background: "#E6B800",
                          borderRadius: 6,
                          padding: "3px 8px",
                          fontFamily: fh,
                          fontWeight: 800,
                          fontSize: 9,
                          color: "#1A1535",
                        }}
                      >
                        LIVE ⚡
                      </div>
                    </div>
                  </div>

                  {/* 1-on-1 badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 12,
                      background: t.gold,
                      color: t.goldT,
                      fontFamily: fh,
                      fontWeight: 800,
                      fontSize: 9,
                      padding: "5px 10px",
                      borderRadius: 8,
                    }}
                  >
                    1-on-1
                  </div>
                </div>

                {/* Included list */}
                <div
                  style={{
                    fontFamily: fh,
                    fontSize: 13,
                    fontWeight: 700,
                    color: t.tx,
                    marginBottom: 12,
                  }}
                >
                  Termasuk dalam Paket Privat:
                </div>
                {INCLUDED.map((feat, i) => (
                  <div
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 0",
                      borderBottom: i < INCLUDED.length - 1 ? `1px solid ${t.cb}` : "none",
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: t.gS,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: t.g, fontSize: 10, fontWeight: 800 }}>
                        ✓
                      </span>
                    </div>
                    <span style={{ fontFamily: fb, fontSize: 13, color: t.sub }}>
                      {feat}
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

export default PrivatSection
