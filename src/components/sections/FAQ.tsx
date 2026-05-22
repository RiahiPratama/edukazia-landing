/**
 * FAQ — Frequently Asked Questions Section
 *
 * Mockup ref: lines 892-1004 (FAQ component + ManekiNeko SVG)
 *
 * 2-column layout (sticky):
 *   - Left: Header "Ada Pertanyaan?" + WA CTA + Maneki Neko SVG illustration
 *           (sticky top: 100px — stays visible while scrolling through FAQs)
 *   - Right: Accordion 12 FAQ items dengan smooth expand/collapse
 *
 * Maneki Neko (招き猫) — Japanese lucky cat figurine, inline SVG dengan banyak
 * animation (twinkle radiating lines, bounce waving paw, float body).
 *
 * Konten: 12 pertanyaan canonical (bisa di-edit di array FAQS).
 */

"use client"

import { useState } from "react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { WAIcon, WA_GREEN, buildWAUrl, EDUKAZIA_WA } from "@/components/ui/WAIcon"

// ═══════════════════════════════════════════════════════════
// FAQ DATA
// ═══════════════════════════════════════════════════════════

type FAQItem = { question: string; answer: string }

const FAQS: FAQItem[] = [
  {
    question: "Kelasnya online atau offline?",
    answer:
      "100% live online via Zoom. Bukan video rekaman, bukan aplikasi belajar sendiri. Tutor dan siswa berinteraksi langsung — real-time. Setiap sesi direkam, jadi siswa bisa review ulang kapan saja. Plus ada Portal Siswa untuk akses materi belajar.",
  },
  {
    question: "Anak saya belum pernah les bahasa, bisa langsung mulai?",
    answer:
      "Bisa. Semua siswa baru mulai dari Tes Level — 30 menit via Zoom. Tutor tentukan level yang pas supaya tidak terlalu mudah dan tidak terlalu sulit.",
  },
  {
    question: "Orang tua bisa pantau progress anak?",
    answer:
      "Bisa. EduKazia punya Portal Orang Tua — Mama bisa lihat jadwal, laporan tutor setiap sesi, foto aktivitas, rekaman kelas, dan sisa sesi paket. Semua transparan.",
  },
  {
    question: "Apakah Tes Level berbayar?",
    answer:
      "Tes Level berbayar, tapi ini investasi penting. Dalam 30 menit, tutor akan evaluasi kemampuan anak dan memberikan laporan lengkap: level sekarang, kekuatan, kelemahan, dan rekomendasi kelas yang tepat.",
  },
  {
    question: "Berapa lama program untuk satu level?",
    answer:
      "Satu level dapat diselesaikan dalam rentang waktu 4–10 bulan. Karena pembelajaran mengikuti kecepatan belajar masing-masing anak, waktu penyelesaian bisa lebih cepat atau lebih lama.",
  },
  {
    question: "Berapa durasi setiap kelas?",
    answer:
      "Kelas Privat Bahasa Inggris = 45 menit. Kelas Privat Bahasa Arab, Mandarin, dan Matematika = 60 menit. Kelas Reguler dan Semi Privat semua pelajaran = 60 menit.",
  },
  {
    question: "Paketnya berapa sesi?",
    answer:
      "Semua paket = 8 sesi live Zoom. Bayar per paket — ringan. Detail harga konsultasi via WhatsApp.",
  },
  {
    question: "Bisa reschedule kalau anak tidak bisa hadir?",
    answer:
      "Kelas Privat bisa reschedule gratis — koordinasi lewat admin minimal 1 hari sebelumnya. Reguler dan Semi Privat mengikuti jadwal yang sudah disepakati.",
  },
  {
    question: "Ada berapa tipe kelas?",
    answer:
      "3 tipe: Reguler (1:8 — seru, biaya ringan), Semi Privat (1:4 — perhatian lebih), dan Privat (1:1 — perhatian 100%, jadwal fleksibel). Semua pakai kurikulum berbasis level.",
  },
  {
    question: "Tutornya siapa?",
    answer:
      "Tutor berpengalaman yang terseleksi — bukan bot, bukan rekaman. Setiap tutor punya spesialisasi di bidangnya dan dilatih untuk mengajar online.",
  },
  {
    question: "Pelajaran apa saja yang tersedia?",
    answer:
      "4 pelajaran: Bahasa Inggris, Bahasa Arab, Mandarin, dan Matematika (Metode Singapura). Plus program unggulan English Superstar — program terstruktur khusus anak & remaja.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Chat WhatsApp → Tes Level → pilih pelajaran & tipe kelas → mulai belajar.",
  },
]

// ═══════════════════════════════════════════════════════════
// MANEKI NEKO — Inline SVG illustration
// ═══════════════════════════════════════════════════════════

function ManekiNeko() {
  const t = useT()
  const isDark = t.m === "dark"
  const catBody = isDark ? "#e0e0e0" : "white"
  const catBorder = isDark ? "#d0b0a0" : "#F0C0B0"
  const catBelly = isDark ? "#f5f5f5" : "#FFF9F7"
  const earsInner = isDark ? "#fcc" : "#FFD6D6"
  const noseColor = isDark ? "#faa" : "#FF9999"
  const whiskerColor = isDark ? "#ccc" : "#ddd"

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Speech bubble */}
      <div
        style={{
          position: "absolute",
          top: -28,
          left: 70,
          background: t.pS,
          borderRadius: "12px 12px 12px 4px",
          padding: "6px 12px",
          border: `1px solid ${t.p}15`,
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        <span
          style={{ fontFamily: fb, fontSize: 10, fontWeight: 600, color: t.p }}
        >
          Masih bingung? Chat aja!
        </span>
      </div>

      <svg width="100" height="140" viewBox="0 0 180 260" style={{ overflow: "visible" }}>
        {/* Radiating gold lines behind head */}
        <g>
          <line x1="90" y1="62" x2="90" y2="44" stroke={t.gold} strokeWidth="2.5" strokeLinecap="round" style={{ animation: "twinkle 1.6s ease-in-out infinite" }} />
          <line x1="118" y1="70" x2="132" y2="58" stroke={t.gold} strokeWidth="2" strokeLinecap="round" style={{ animation: "twinkle 1.6s ease-in-out infinite 0.2s" }} />
          <line x1="132" y1="100" x2="150" y2="96" stroke={t.gold} strokeWidth="2" strokeLinecap="round" style={{ animation: "twinkle 1.6s ease-in-out infinite 0.4s" }} />
          <line x1="62" y1="70" x2="48" y2="58" stroke={t.gold} strokeWidth="2" strokeLinecap="round" style={{ animation: "twinkle 1.6s ease-in-out infinite 0.6s" }} />
          <line x1="48" y1="100" x2="30" y2="96" stroke={t.gold} strokeWidth="2" strokeLinecap="round" style={{ animation: "twinkle 1.6s ease-in-out infinite 0.8s" }} />
          <line x1="110" y1="64" x2="120" y2="50" stroke={t.gold} strokeWidth="1.5" strokeLinecap="round" style={{ animation: "radiate 2s ease-in-out infinite 0.3s" }} />
          <line x1="70" y1="64" x2="60" y2="50" stroke={t.gold} strokeWidth="1.5" strokeLinecap="round" style={{ animation: "radiate 2s ease-in-out infinite 0.7s" }} />
        </g>

        {/* Body group with float animation */}
        <g style={{ animation: "float 3s ease-in-out infinite" }}>
          {/* Shadow */}
          <ellipse cx="90" cy="248" rx="42" ry="7" fill="rgba(0,0,0,0.08)" />

          {/* Tail */}
          <path d="M 58 210 Q 28 230 36 200 Q 44 172 62 185" fill="none" stroke={isDark ? "#F5C4B3" : "#F0C0B0"} strokeWidth="10" strokeLinecap="round" />
          <path d="M 58 210 Q 28 230 36 200 Q 44 172 62 185" fill="none" stroke={catBody} strokeWidth="5" strokeLinecap="round" />

          {/* Body */}
          <ellipse cx="90" cy="195" rx="46" ry="50" fill={catBody} stroke={catBorder} strokeWidth="1.5" />
          {/* Belly */}
          <ellipse cx="90" cy="205" rx="28" ry="33" fill={catBelly} />

          {/* Collar */}
          <ellipse cx="90" cy="163" rx="14" ry="5" fill="#E05050" />
          <rect x="84" y="163" width="12" height="10" rx="3" fill="#E05050" />
          <ellipse cx="90" cy="173" rx="5" ry="4" fill="#CC3030" />

          {/* Feet */}
          <ellipse cx="68" cy="240" rx="12" ry="8" fill={catBody} stroke={catBorder} strokeWidth="1.2" />
          <ellipse cx="112" cy="240" rx="12" ry="8" fill={catBody} stroke={catBorder} strokeWidth="1.2" />

          {/* Left paw (static) */}
          <ellipse cx="48" cy="192" rx="9" ry="12" fill={catBody} stroke={catBorder} strokeWidth="1.2" />

          {/* Right paw (waving — bounce animation) */}
          <g style={{ transformOrigin: "132px 168px", animation: "bounce 1.2s ease-in-out infinite" }}>
            <ellipse cx="132" cy="152" rx="9" ry="18" fill={catBody} stroke={catBorder} strokeWidth="1.2" transform="rotate(-15 132 152)" />
            <ellipse cx="130" cy="136" rx="7" ry="5" fill={earsInner} transform="rotate(-15 130 136)" />
          </g>

          {/* Head */}
          <ellipse cx="90" cy="110" rx="44" ry="40" fill={catBody} stroke={catBorder} strokeWidth="1.5" />

          {/* Ears */}
          <path d="M 54 82 L 48 50 L 72 74 Z" fill={catBody} stroke={catBorder} strokeWidth="1.5" />
          <path d="M 126 82 L 132 50 L 108 74 Z" fill={catBody} stroke={catBorder} strokeWidth="1.5" />
          <path d="M 57 80 L 52 58 L 70 76 Z" fill={earsInner} />
          <path d="M 123 80 L 128 58 L 110 76 Z" fill={earsInner} />

          {/* Eyes */}
          <g>
            <ellipse cx="76" cy="108" rx="5" ry="6" fill="#2D2560" />
            <circle cx="74" cy="106" r="1.5" fill="white" />
          </g>
          <g>
            <ellipse cx="104" cy="108" rx="5" ry="6" fill="#2D2560" />
            <circle cx="102" cy="106" r="1.5" fill="white" />
          </g>

          {/* Nose */}
          <ellipse cx="90" cy="118" rx="3" ry="2" fill={noseColor} />

          {/* Mouth */}
          <path d="M 84 122 Q 90 128 96 122" stroke={catBorder} strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Whiskers */}
          <line x1="60" y1="112" x2="40" y2="108" stroke={whiskerColor} strokeWidth="1" strokeLinecap="round" />
          <line x1="60" y1="118" x2="38" y2="120" stroke={whiskerColor} strokeWidth="1" strokeLinecap="round" />
          <line x1="120" y1="112" x2="140" y2="108" stroke={whiskerColor} strokeWidth="1" strokeLinecap="round" />
          <line x1="120" y1="118" x2="142" y2="120" stroke={whiskerColor} strokeWidth="1" strokeLinecap="round" />

          {/* Blush cheeks */}
          <ellipse cx="68" cy="120" rx="6" ry="3" fill={earsInner} opacity="0.6" />
          <ellipse cx="112" cy="120" rx="6" ry="3" fill={earsInner} opacity="0.6" />
        </g>
      </svg>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function FAQ() {
  const t = useT()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      id="faq"
      style={{ background: t.bg, padding: "88px 0", position: "relative" }}
    >
      <Container>
        <div
          className="faq-flex"
          style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "flex-start" }}
        >
          {/* LEFT — Sticky header + Maneki Neko */}
          <div
            style={{
              flex: "1 1 300px",
              position: "sticky",
              top: 100,
              alignSelf: "flex-start",
              height: "fit-content",
            }}
          >
            <RevealOnScroll>
              <div
                style={{
                  fontFamily: fh,
                  fontSize: 12,
                  fontWeight: 700,
                  color: t.p,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                FAQ
              </div>
              <h2
                style={{
                  fontFamily: fh,
                  fontSize: 36,
                  fontWeight: 800,
                  color: t.tx,
                  margin: "0 0 16px",
                  letterSpacing: -0.5,
                  lineHeight: 1.2,
                }}
              >
                Ada Pertanyaan?
              </h2>
              <p
                style={{
                  fontFamily: fb,
                  fontSize: 15,
                  color: t.sub,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Belum ketemu jawabannya? Langsung tanya.
              </p>
              <a
                href={buildWAUrl(EDUKAZIA_WA, "Halo EduKazia, saya ingin tanya seputar kursus")}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: fh,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                  background: WA_GREEN,
                  borderRadius: 14,
                  padding: "14px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <WAIcon size={16} color="#fff" decorative />
                Chat WhatsApp
              </a>

              {/* Maneki Neko — hide on mobile */}
              <div style={{ marginTop: 32 }} className="hide-mobile">
                <ManekiNeko />
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT — Accordion */}
          <div style={{ flex: "1 1 400px" }}>
            <RevealOnScroll delay={0.1}>
              {FAQS.map(({ question, answer }, i) => {
                const isOpen = openIdx === i
                return (
                  <div
                    key={i}
                    style={{
                      background: isOpen ? t.pS : t.card,
                      borderRadius: 16,
                      marginBottom: 10,
                      border: `1.5px solid ${isOpen ? t.p + "30" : t.cb}`,
                      overflow: "hidden",
                      transition: "all 0.3s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 18px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: 14,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: fh,
                          fontSize: 14,
                          fontWeight: isOpen ? 700 : 600,
                          color: isOpen ? t.tx : t.sub,
                          flex: 1,
                          transition: "all 0.2s",
                        }}
                      >
                        {question}
                      </span>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          flexShrink: 0,
                          background: isOpen ? t.p : `${t.p}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                          transform: isOpen ? "rotate(45deg)" : "none",
                          boxShadow: isOpen ? `0 4px 12px ${t.p}30` : "none",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M7 3v8M3 7h8"
                            stroke={isOpen ? "#fff" : t.p}
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? 200 : 0,
                        transition: "max-height 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: fb,
                          fontSize: 14,
                          color: t.sub,
                          lineHeight: 1.75,
                          padding: "0 18px 18px 18px",
                          margin: 0,
                        }}
                      >
                        {answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQ
