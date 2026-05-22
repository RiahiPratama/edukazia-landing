/**
 * Fasilitas — LMS & Backend Features
 *
 * Mockup ref: lines 590-654 (Fasilitas component)
 *
 * 3 fasilitas LMS dengan alternating layout (zigzag visual-content):
 *   1. Rekaman Belajar (purple) — left visual, right content
 *   2. Portal Orang Tua (green) — right visual, left content
 *   3. Portal Siswa (orange) — left visual, right content
 *
 * Setiap card: visual panel dengan colored bg + icon floating + checkmarks list,
 * content panel dengan badge + headline emotional + description.
 */

"use client"

import { Video, Smartphone, BookOpen } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"

// ═══════════════════════════════════════════════════════════
// FASILITAS DATA
// ═══════════════════════════════════════════════════════════

type ColorKey = "p" | "g" | "or"

type Fasilitas = {
  Icon: LucideIcon
  title: string
  headline: string
  desc: string
  colorKey: ColorKey
  details: string[]
}

const ITEMS: Fasilitas[] = [
  {
    Icon: Video,
    title: "Rekaman Belajar",
    headline: "Tidak Hadir? Rekaman Tersedia.",
    desc: "Setiap sesi kelas direkam dan bisa ditonton ulang kapan saja. Anak yang ketinggalan atau mau review materi tinggal putar ulang — tidak perlu minta tutor mengulang.",
    colorKey: "p",
    details: [
      "Tersedia untuk semua tipe kelas",
      "Bisa ditonton berkali-kali",
      "Otomatis tersimpan di portal",
    ],
  },
  {
    Icon: Smartphone,
    title: "Portal Orang Tua",
    headline: "Orang Tua Tidak Perlu Menebak-nebak Lagi.",
    desc: "Orang tua punya dashboard sendiri. Lihat jadwal kelas, baca laporan tutor setelah setiap sesi, cek sisa kuota, dan pantau foto aktivitas belajar anak — semua dari HP.",
    colorKey: "g",
    details: [
      "Jadwal & sisa sesi real-time",
      "Laporan tutor tiap pertemuan",
      "Foto bukti aktivitas belajar",
    ],
  },
  {
    Icon: BookOpen,
    title: "Portal Siswa",
    headline: "Belajar Tidak Berhenti Setelah Zoom Ditutup.",
    desc: "Anak punya portal sendiri untuk membaca materi interaktif — bacaan klik-kata, kosakata dengan audio native speaker, dan latihan CEFR bertahap. Belajar tidak berhenti di Zoom.",
    colorKey: "or",
    details: [
      "Bacaan interaktif klik-kata",
      "Audio pengucapan native speaker",
      "Latihan CEFR sesuai level",
    ],
  },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function Fasilitas() {
  const t = useT()
  const colorMap = { p: t.p, g: t.g, or: t.or }
  const bgMap = { p: t.pS, g: t.gS, or: t.orS }

  return (
    <section
      style={{
        background: t.bgW,
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: t.pS,
          filter: "blur(60px)",
          opacity: 0.4,
        }}
      />

      <Container>
        <RevealOnScroll>
          <SectionHeader
            label="🛠️ FASILITAS LMS"
            title="Bukan Cuma Kelas — Ini Ekosistem Belajar"
            sub="Platform yang dibangun khusus agar proses belajar tidak berhenti setelah Zoom ditutup."
          />
        </RevealOnScroll>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
            zIndex: 1,
          }}
        >
          {ITEMS.map((item, i) => {
            const c = colorMap[item.colorKey]
            const bg = bgMap[item.colorKey]
            const isReversed = i % 2 === 1
            const Icon = item.Icon

            return (
              <RevealOnScroll key={item.title} delay={0.1 * (i + 1)}>
                <div
                  className="fasilitas-card"
                  style={{
                    display: "flex",
                    gap: 0,
                    borderRadius: 24,
                    overflow: "hidden",
                    background: t.card,
                    border: `1px solid ${t.cb}`,
                    boxShadow: t.cs,
                    flexDirection: isReversed ? "row-reverse" : "row",
                  }}
                >
                  {/* Visual panel */}
                  <div
                    style={{
                      width: 280,
                      minWidth: 240,
                      background: bg,
                      padding: "36px 32px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 16,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Background glow */}
                    <div
                      style={{
                        position: "absolute",
                        top: -20,
                        right: -20,
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        background: c,
                        opacity: 0.06,
                      }}
                    />

                    {/* Floating icon — pakai CSS animation floatSlow (defined in globals.css) */}
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: 22,
                        background: t.card,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                        animation: "floatSlow 6s ease-in-out infinite",
                      }}
                    >
                      <Icon size={32} color={c} strokeWidth={2} />
                    </div>

                    <div
                      style={{
                        fontFamily: fh,
                        fontSize: 18,
                        fontWeight: 800,
                        color: t.tx,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </div>

                    {/* Feature checkmarks */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        width: "100%",
                      }}
                    >
                      {item.details.map((d, di) => (
                        <div
                          key={di}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 10px",
                            background: t.card,
                            borderRadius: 8,
                            border: `1px solid ${t.cb}`,
                          }}
                        >
                          <div
                            style={{
                              width: 16,
                              height: 16,
                              borderRadius: 5,
                              background: `${t.g}15`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <span
                              style={{ color: t.g, fontSize: 8, fontWeight: 800 }}
                            >
                              ✓
                            </span>
                          </div>
                          <span
                            style={{
                              fontFamily: fb,
                              fontSize: 11,
                              color: t.sub,
                              fontWeight: 500,
                            }}
                          >
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content panel */}
                  <div
                    style={{
                      flex: 1,
                      padding: "44px 40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: bg,
                        padding: "5px 14px",
                        borderRadius: 8,
                        marginBottom: 14,
                        alignSelf: "flex-start",
                      }}
                    >
                      <Icon size={14} color={c} strokeWidth={2} />
                      <span
                        style={{
                          fontFamily: fb,
                          fontSize: 11,
                          fontWeight: 700,
                          color: c,
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: fh,
                        fontSize: 24,
                        fontWeight: 800,
                        color: t.tx,
                        margin: "0 0 14px",
                        lineHeight: 1.25,
                      }}
                    >
                      {item.headline}
                    </h3>
                    <p
                      style={{
                        fontFamily: fb,
                        fontSize: 15,
                        color: t.sub,
                        lineHeight: 1.8,
                        margin: 0,
                        maxWidth: 420,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Fasilitas
