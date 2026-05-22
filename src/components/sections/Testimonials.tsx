/**
 * Testimonials — Family Stories Carousel with SVG Avatars
 *
 * Mockup ref: lines 836-889 (Testimonials component + AvatarFace SVG)
 *
 * Carousel testimoni dengan:
 *   - Auto-rotate setiap 5 detik
 *   - SVG AvatarFace (inline) — illustrated cartoon face, NOT real photos
 *     karena dummy testimoni dulu sebelum production
 *   - Manual selector row dengan mini avatars di bawah
 *   - 4 testimoni terdiri dari 3 subject berbeda + 4 lokasi MalUt
 *
 * Note: Saat real testimoni masuk dari Supabase, swap AvatarFace dengan
 * <img src={avatarUrl} /> + fallback ke AvatarFace.
 */

"use client"

import { useState, useEffect } from "react"
import { useT, fh, fb } from "@/lib/theme"
import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"

// ═══════════════════════════════════════════════════════════
// AVATAR FACE — Inline SVG illustration
// ═══════════════════════════════════════════════════════════

type Gender = "m" | "f" | "fh" // m=male, f=female, fh=female with hijab

function AvatarFace({
  gender,
  color,
  size = 48,
}: {
  gender: Gender
  color: string
  size?: number
}) {
  const t = useT()
  const isDark = t.m === "dark"
  const skin = isDark ? "#D4A574" : "#E8C4A0"
  const hairColor = isDark ? "#4A3728" : "#3D2B1F"
  const hairColorMale = isDark ? "#2D2D2D" : "#1A1A1A"
  const eyeColor = isDark ? "#2D2D2D" : "#1A1A1A"
  const smileColor = isDark ? "#8B6B4A" : "#6B4A2A"

  const isFemale = gender === "f" || gender === "fh"

  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Background circle */}
      <circle cx="24" cy="24" r="24" fill={`${color}18`} />
      {/* Face */}
      <circle cx="24" cy="22" r="14" fill={skin} />

      {/* Hair */}
      {isFemale ? (
        <>
          <path
            d="M10 20 Q10 8 24 6 Q38 8 38 20 L38 16 Q38 6 24 4 Q10 6 10 16Z"
            fill={hairColor}
          />
          <path d="M10 20 L10 28 Q10 24 12 22" fill={hairColor} />
          <path d="M38 20 L38 28 Q38 24 36 22" fill={hairColor} />
        </>
      ) : (
        <path
          d="M12 18 Q12 8 24 6 Q36 8 36 18 L36 14 Q36 6 24 4 Q12 6 12 14Z"
          fill={hairColorMale}
        />
      )}

      {/* Eyes */}
      <circle cx="19" cy="21" r="2" fill={eyeColor} />
      <circle cx="29" cy="21" r="2" fill={eyeColor} />
      <circle cx="19.5" cy="20.5" r="0.7" fill="#fff" />
      <circle cx="29.5" cy="20.5" r="0.7" fill="#fff" />

      {/* Smile */}
      <path
        d="M20 27 Q24 31 28 27"
        stroke={smileColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Cheeks */}
      <circle cx="16" cy="25" r="2.5" fill="#FF9B9B" opacity="0.2" />
      <circle cx="32" cy="25" r="2.5" fill="#FF9B9B" opacity="0.2" />

      {/* Hijab overlay for fh */}
      {gender === "fh" && (
        <path
          d="M8 18 Q8 4 24 2 Q40 4 40 18 Q40 30 32 36 L16 36 Q8 30 8 18Z"
          fill={color}
          opacity="0.2"
        />
      )}
    </svg>
  )
}

// ═══════════════════════════════════════════════════════════
// TESTIMONIAL DATA
// ═══════════════════════════════════════════════════════════

type ColorKey = "p" | "pk" | "g" | "or"

type Testimonial = {
  text: string
  name: string
  role: string
  subject: string
  location: string
  gender: Gender
  colorKey: ColorKey
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Anak saya sekarang berani presentasi bahasa Inggris di depan kelas. Padahal dulu malu banget. Guru di sekolah sampai kaget lihat perubahannya!",
    name: "Ibu Sari Rahayu",
    role: "Orang tua · Kelas 5 SD",
    subject: "Bahasa Inggris",
    location: "Ternate",
    gender: "f",
    colorKey: "p",
  },
  {
    text: "Foto belajar tiap sesi bikin saya percaya. Bisa lihat langsung anak beneran belajar, bukan main HP. Portal orang tua-nya sangat membantu.",
    name: "Bapak Rian Firdaus",
    role: "Orang tua · Kelas 8 SMP",
    subject: "Matematika",
    location: "Sofifi",
    gender: "m",
    colorKey: "pk",
  },
  {
    text: "Pengajarnya sabar banget ngajarin tajwid. Anak saya sekarang bisa baca Al-Quran lebih lancar dan percaya diri. Alhamdulillah nemu EduKazia.",
    name: "Ibu Nurhayati",
    role: "Orang tua · Kelas 11 SMA",
    subject: "Bahasa Arab",
    location: "Tobelo",
    gender: "fh",
    colorKey: "g",
  },
  {
    text: "Awalnya cuma coba Tes Level, tidak nyangka anak langsung suka dan minta lanjut. Sekarang 3 bulan berjalan, Mandarinnya makin lancar!",
    name: "Ibu Dewi Lestari",
    role: "Orang tua · Kelas 4 SD",
    subject: "Mandarin",
    location: "Ternate",
    gender: "f",
    colorKey: "or",
  },
]

const ROTATION_INTERVAL_MS = 5000

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function Testimonials() {
  const t = useT()
  const [activeIdx, setActiveIdx] = useState(0)
  const colorMap = { p: t.p, pk: t.pk, g: t.g, or: t.or }

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(
      () => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length),
      ROTATION_INTERVAL_MS
    )
    return () => clearInterval(interval)
  }, [])

  const item = TESTIMONIALS[activeIdx]
  const c = colorMap[item.colorKey]

  return (
    <section
      id="cerita"
      style={{
        background: t.bgM,
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: t.gS,
          filter: "blur(60px)",
          opacity: 0.5,
        }}
      />

      <Container>
        <RevealOnScroll>
          <SectionHeader
            label="💬 CERITA KELUARGA"
            title="Bukan Janji — Ini Hasil Nyata"
            color={t.g}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                background: t.card,
                borderRadius: 28,
                border: `1px solid ${t.cb}`,
                boxShadow: t.ch,
                overflow: "hidden",
                padding: "48px 44px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 44,
                  flexWrap: "wrap",
                }}
              >
                {/* LEFT — Avatar + info */}
                <div
                  style={{
                    flex: "0 0 200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <AvatarFace gender={item.gender} color={c} size={96} />
                  </div>
                  <div
                    style={{
                      fontFamily: fh,
                      fontSize: 16,
                      fontWeight: 700,
                      color: t.tx,
                      marginBottom: 2,
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontFamily: fb,
                      fontSize: 12,
                      color: t.sub,
                      marginBottom: 4,
                    }}
                  >
                    {item.role}
                  </div>
                  <div
                    style={{
                      fontFamily: fb,
                      fontSize: 11,
                      color: t.mu,
                      marginBottom: 10,
                    }}
                  >
                    📍 {item.location}
                  </div>
                  <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        style={{ color: t.gold, fontSize: 16 }}
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: fb,
                      fontSize: 11,
                      fontWeight: 700,
                      color: c,
                      background: `${c}12`,
                      padding: "4px 14px",
                      borderRadius: 6,
                    }}
                  >
                    {item.subject}
                  </span>
                </div>

                {/* RIGHT — Quote */}
                <div style={{ flex: 1, minWidth: 280 }}>
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 56,
                      color: c,
                      opacity: 0.15,
                      lineHeight: 0.8,
                      display: "block",
                      marginBottom: 8,
                    }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p
                    key={activeIdx}
                    style={{
                      fontFamily: fb,
                      fontSize: 20,
                      color: t.tx,
                      lineHeight: 1.85,
                      margin: 0,
                      fontStyle: "italic",
                      opacity: 0.9,
                    }}
                  >
                    {item.text}
                  </p>
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 56,
                      color: c,
                      opacity: 0.15,
                      lineHeight: 0.8,
                      display: "block",
                      textAlign: "right",
                      marginTop: 8,
                    }}
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>
                </div>
              </div>

              {/* Mini avatar selector row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: `1px solid ${t.cb}`,
                }}
              >
                {TESTIMONIALS.map((it, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Show testimonial from ${it.name}`}
                    style={{
                      cursor: "pointer",
                      opacity: activeIdx === i ? 1 : 0.35,
                      transition: "all 0.3s",
                      transform: activeIdx === i ? "scale(1.2)" : "scale(1)",
                      filter: activeIdx === i ? "none" : "grayscale(0.5)",
                      border: "none",
                      background: "none",
                      padding: 0,
                    }}
                  >
                    <AvatarFace
                      gender={it.gender}
                      color={colorMap[it.colorKey]}
                      size={44}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

export default Testimonials
