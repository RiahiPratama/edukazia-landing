/**
 * Landing Page (Home) — EduKazia
 *
 * Compose semua section ke landing page utuh dengan flat structure.
 * Navbar fixed di top, WAFloat fixed di bottom-right, Footer di bawah.
 *
 * Section order (sesuai mockup):
 *   1. Hero          — Headline animated + visual cluster
 *   2. MarqueeStrip  — Trust strip horizontal scroll
 *   3. Subjects      — 4 mata pelajaran 2x2 + English Superstar banner
 *   4. Fasilitas     — 3 fasilitas LMS (Rekaman, Portal Ortu, Portal Siswa)
 *   5. PrivatSection — Showcase kelas privat 1-on-1 (highest value)
 *   6. OtherClasses  — Reguler & Semi Privat
 *   7. Testimonials  — Cerita keluarga carousel
 *   8. FAQ           — 12 FAQ + Maneki Neko
 *   9. CTA           — Final call to action gradient
 */

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { WAFloat } from "@/components/layout/WAFloat"

import { Hero } from "@/components/sections/Hero"
import { MarqueeStrip } from "@/components/sections/MarqueeStrip"
import { Subjects } from "@/components/sections/Subjects"
import { Fasilitas } from "@/components/sections/Fasilitas"
import { PrivatSection } from "@/components/sections/PrivatSection"
import { OtherClasses } from "@/components/sections/OtherClasses"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip />
        <Subjects />
        <Fasilitas />
        <PrivatSection />
        <OtherClasses />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <WAFloat />
    </>
  )
}
