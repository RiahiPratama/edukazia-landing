/**
 * Root Layout — EduKazia Landing Page
 *
 * Setup global untuk seluruh app:
 *   - next/font/google: Sora (heading), Plus Jakarta Sans (body), Nunito 900 (logo)
 *   - SEO Metadata: title, description, OG tags
 *   - Anti-FOUC inline script: set body.dark sebelum React hydrate
 *   - ThemeProvider wrap: context untuk useT() / useTheme() di komponen
 *   - GTM/Pixel placeholder: aktifkan kalau env vars di-set
 *
 * Font variables:
 *   --font-sora    → Sora 400/600/700/800
 *   --font-jakarta → Plus Jakarta Sans 400/500/600/700/800
 *   --font-nunito  → Nunito 900 (untuk Logo wordmark)
 *
 * Referenced di theme.ts: `fh`, `fb`, `fLogo` constants.
 */

import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Sora, Plus_Jakarta_Sans, Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"

// ═══════════════════════════════════════════════════════════
// FONTS — next/font/google
// ═══════════════════════════════════════════════════════════

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-nunito",
  display: "swap",
})

// ═══════════════════════════════════════════════════════════
// METADATA — SEO
// ═══════════════════════════════════════════════════════════

export const metadata: Metadata = {
  metadataBase: new URL("https://edukazia.com"),
  title: {
    default: "EduKazia — Bimbel Online Live via Zoom",
    template: "%s | EduKazia",
  },
  description:
    "Bimbel online dari Maluku Utara. Bahasa Inggris, Arab, Mandarin & Matematika. Kelas live via Zoom dengan portal orang tua real-time. Tutor berpengalaman, kurikulum terstruktur.",
  keywords: [
    "bimbel online",
    "kursus bahasa inggris online",
    "les online anak",
    "bimbel zoom",
    "kursus bahasa arab",
    "les mandarin",
    "matematika online",
    "Maluku Utara",
    "Ternate",
    "Sofifi",
    "kursus online live",
    "portal orang tua",
  ],
  authors: [{ name: "EduKazia", url: "https://edukazia.com" }],
  creator: "EduKazia",
  publisher: "EduKazia",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://edukazia.com",
    siteName: "EduKazia",
    title: "EduKazia — Bimbel Online Live via Zoom",
    description:
      "Bimbel online dari Maluku Utara. 4 mata pelajaran, portal orang tua real-time, rekaman kelas tersedia. Tutor berpengalaman + kurikulum terstruktur.",
    // TODO: Tambahkan og-image.png ke /public/ — 1200x630
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EduKazia" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "EduKazia — Bimbel Online Live via Zoom",
    description:
      "Bimbel online dari Maluku Utara. 4 mata pelajaran, portal orang tua, rekaman kelas.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://edukazia.com",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFCFA" },
    { media: "(prefers-color-scheme: dark)", color: "#08080E" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// ═══════════════════════════════════════════════════════════
// ANTI-FOUC SCRIPT
// ═══════════════════════════════════════════════════════════
// Inline script yang jalan SEBELUM React hydrate.
// Tujuan: kalau user pernah pilih dark mode (saved di localStorage),
// body.dark di-set IMMEDIATELY → no flash of light theme.

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('edukazia-theme');
    if (stored === 'dark') {
      document.body.classList.add('dark');
    } else if (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
    }
  } catch (e) {}
})();
`

// ═══════════════════════════════════════════════════════════
// ROOT LAYOUT
// ═══════════════════════════════════════════════════════════

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ENV vars untuk GTM & FB Pixel (aktif kalau ada nilai)
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

  return (
    <html
      lang="id"
      className={`${sora.variable} ${jakarta.variable} ${nunito.variable}`}
    >
      <head>
        {/* Google Tag Manager — aktif kalau NEXT_PUBLIC_GTM_ID di-set di Vercel env */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}

        {/* Meta (Facebook) Pixel — aktif kalau NEXT_PUBLIC_FB_PIXEL_ID di-set */}
        {FB_PIXEL_ID && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');`}
          </Script>
        )}
      </head>
      <body suppressHydrationWarning>
        {/* Anti-FOUC: set theme class sebelum React hydrate */}
        {/* suppressHydrationWarning: handles browser extensions yang inject attribute
            ke body (Notion Web Clipper, Grammarly, Dark Reader, dll) sebelum React hydrate.
            Standard Next.js practice, hanya suppress warning di body level — tidak affect
            child elements. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        {/* GTM noscript fallback (kalau JS disabled) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
