"use client";

import Link from "next/link";

import { useState, useEffect, createContext, useContext, ReactNode, CSSProperties } from "react";
import { ADMIN_PHONE, ADMIN_EMAIL, COMPANY } from "@/lib/constants";

// ============ THEME ============
type Theme = {
  bg: string; card: string; cb: string; cs: string; tx: string;
  sub: string; mu: string; p: string; pS: string; nav: string;
  navB: string; footer: string; m: "light" | "dark";
};

const L: Theme = {
  bg: "#FDFCFA", card: "#FFFFFF", cb: "rgba(0,0,0,0.05)",
  cs: "0 2px 20px rgba(0,0,0,0.04)", tx: "#1A1535", sub: "#5E5878",
  mu: "#9D97B5", p: "#5C4FE5", pS: "#EEEDFC",
  nav: "rgba(253,252,250,0.92)", navB: "rgba(0,0,0,0.05)",
  footer: "#1A1535", m: "light",
};

const D: Theme = {
  bg: "#08080E", card: "rgba(255,255,255,0.03)", cb: "rgba(255,255,255,0.07)",
  cs: "0 2px 24px rgba(0,0,0,0.4)", tx: "#F5F4FF", sub: "#A8A4BE",
  mu: "#5D596F", p: "#8B7FF5", pS: "rgba(139,127,245,0.1)",
  nav: "rgba(8,8,14,0.85)", navB: "rgba(255,255,255,0.06)",
  footer: "#050508", m: "dark",
};

const TX = createContext<Theme>(L);
const useT = () => useContext(TX);

const fh = "'Sora', sans-serif";
const fb = "'Plus Jakarta Sans', sans-serif";

// ============ COMPONENTS ============
function W({ children, s = {} }: { children: ReactNode; s?: CSSProperties }) {
  return <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", ...s }}>{children}</div>;
}

function Nav({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  const t = useT();
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: sc ? t.nav : "transparent",
      backdropFilter: sc ? "blur(20px)" : "none",
      borderBottom: `1px solid ${sc ? t.navB : "transparent"}`,
      transition: "all 0.35s",
    }}>
      <W s={{ maxWidth: 1120, display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 12,
            background: "linear-gradient(135deg,#5C4FE5,#7B6FF0)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: fh, fontWeight: 800, fontSize: 17, color: "#fff" }}>E</span>
          </div>
          <span style={{ fontFamily: fh, fontWeight: 800, fontSize: 19, color: t.tx }}>EduKazia</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={toggle} aria-label="Toggle dark mode" style={{
            width: 36, height: 36, borderRadius: 10, background: t.pS,
            border: `1px solid ${t.cb}`, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {isDark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <Link href="/" style={{
            fontFamily: fh, fontWeight: 700, fontSize: 13, color: "#fff",
            background: "linear-gradient(135deg,#5C4FE5,#7B6FF0)",
            borderRadius: 12, padding: "10px 22px", textDecoration: "none",
          }}>
            Kembali ke Beranda
          </Link>
        </div>
      </W>
    </nav>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  const t = useT();
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{
        fontFamily: fh, fontSize: 20, fontWeight: 700, color: t.tx,
        margin: "0 0 14px", paddingBottom: 10, borderBottom: `1.5px solid ${t.cb}`,
      }}>
        {title}
      </h2>
      <div style={{ fontFamily: fb, fontSize: 14, color: t.sub, lineHeight: 1.85 }}>
        {children}
      </div>
    </div>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer style={{ background: t.footer, padding: "32px 0 16px" }}>
      <W s={{ maxWidth: 1120, textAlign: "center" }}>
        <p style={{ fontFamily: fb, fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          © 2026 {COMPANY.name}. Dibuat dengan ❤️ untuk pelajar Indonesia.
        </p>
      </W>
    </footer>
  );
}

// ============ PAGE ============
export default function PrivasiPage() {
  const [isDark, setIsDark] = useState(false);
  const t: Theme = isDark ? D : L;

  // Sync body background with theme
  useEffect(() => {
    document.body.style.background = t.bg;
    document.body.style.transition = "background 0.3s";
    return () => { document.body.style.background = ""; };
  }, [t.bg]);

  return (
    <TX.Provider value={t}>
      <style>{`
        @media(max-width: 640px) {
          .privasi-hero h1 { font-size: 28px !important; }
          .privasi-section h2 { font-size: 17px !important; }
        }
      `}</style>
      <div style={{ background: t.bg, minHeight: "100vh", transition: "background 0.3s" }}>
        <Nav isDark={isDark} toggle={() => setIsDark((d) => !d)} />

        <div style={{ paddingTop: 120, paddingBottom: 60 }} className="privasi-hero">
          <W>
            <div style={{
              fontFamily: fb, fontSize: 12, fontWeight: 600, color: t.p,
              background: t.pS, padding: "4px 14px", borderRadius: 100,
              display: "inline-block", marginBottom: 16,
            }}>
              Terakhir diperbarui: April 2026
            </div>
            <h1 style={{
              fontFamily: fh, fontSize: 36, fontWeight: 800, color: t.tx,
              margin: "0 0 12px", letterSpacing: -0.5,
            }}>
              Kebijakan Privasi
            </h1>
            <p style={{
              fontFamily: fb, fontSize: 15, color: t.sub, lineHeight: 1.7,
              marginBottom: 48, maxWidth: 560,
            }}>
              EduKazia berkomitmen menjaga privasi data Anda dan anak Anda. Kebijakan ini menjelaskan
              bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi.
            </p>

            <div className="privasi-section">
              <Section title="1. Informasi yang Kami Kumpulkan">
                <p style={{ marginBottom: 12 }}>Saat Anda mendaftar atau menggunakan layanan EduKazia, kami mengumpulkan:</p>
                <p>• Nama lengkap orang tua/wali dan siswa</p>
                <p>• Nomor telepon/WhatsApp</p>
                <p>• Alamat email (jika diberikan)</p>
                <p>• Usia dan jenjang pendidikan siswa</p>
                <p>• Data akademik: hasil Tes Level, laporan tutor, progress belajar</p>
                <p style={{ marginTop: 12 }}>
                  Kami juga mengumpulkan data teknis secara otomatis seperti alamat IP, jenis perangkat,
                  dan data penggunaan platform melalui cookies dan alat analitik.
                </p>
              </Section>

              <Section title="2. Bagaimana Kami Menggunakan Data">
                <p>• Menyediakan dan meningkatkan layanan bimbingan belajar</p>
                <p>• Menentukan level dan kurikulum yang tepat untuk siswa</p>
                <p>• Mengirim informasi jadwal, laporan, dan notifikasi terkait kelas via WhatsApp</p>
                <p>• Menampilkan progress belajar di Portal Orang Tua dan Portal Siswa</p>
                <p>• Menganalisis penggunaan platform untuk peningkatan layanan</p>
                <p>• Mengirim informasi promosi (dengan persetujuan — Anda bisa berhenti kapan saja)</p>
              </Section>

              <Section title="3. Rekaman Kelas">
                <p>Setiap sesi kelas live via Zoom direkam untuk tujuan:</p>
                <p>• Memungkinkan siswa mereview materi yang sudah dipelajari</p>
                <p>• Membantu orang tua memantau proses belajar</p>
                <p>• Evaluasi kualitas pengajaran oleh tim EduKazia</p>
                <p style={{ marginTop: 12 }}>
                  Rekaman hanya dapat diakses oleh siswa, orang tua/wali yang terdaftar, tutor terkait,
                  dan admin EduKazia. Rekaman tidak dibagikan ke pihak ketiga.
                </p>
              </Section>

              <Section title="4. Perlindungan Data Anak">
                <p>EduKazia sangat serius melindungi data anak. Kami tidak pernah:</p>
                <p>• Menjual data anak ke pihak ketiga</p>
                <p>• Menggunakan data anak untuk iklan bertarget</p>
                <p>• Membagikan foto atau rekaman anak tanpa izin orang tua</p>
                <p style={{ marginTop: 12 }}>
                  Foto aktivitas belajar yang ditampilkan di Portal Orang Tua hanya dapat diakses oleh
                  orang tua/wali yang terdaftar di akun tersebut.
                </p>
              </Section>

              <Section title="5. Penyimpanan dan Keamanan Data">
                <p>Data Anda disimpan di server yang dikelola oleh Supabase dengan standar keamanan industri. Kami menerapkan:</p>
                <p>• Enkripsi data saat transmisi (SSL/TLS)</p>
                <p>• Akses database dibatasi berdasarkan peran (Role-Level Security)</p>
                <p>• Backup berkala untuk mencegah kehilangan data</p>
                <p style={{ marginTop: 12 }}>
                  Kami menyimpan data selama akun Anda aktif. Setelah akun dihapus, data akan dihapus dalam 30 hari kerja.
                </p>
              </Section>

              <Section title="6. Cookies dan Analitik">
                <p>Website EduKazia menggunakan cookies dan alat analitik (termasuk Facebook Pixel dan Google Tag Manager) untuk:</p>
                <p>• Mengukur efektivitas kampanye pemasaran</p>
                <p>• Memahami cara pengunjung menggunakan website</p>
                <p>• Meningkatkan pengalaman pengguna</p>
                <p style={{ marginTop: 12 }}>Anda dapat menonaktifkan cookies melalui pengaturan browser.</p>
              </Section>

              <Section title="7. Hak Anda">
                <p>Anda berhak untuk:</p>
                <p>• Mengakses data pribadi Anda yang kami simpan</p>
                <p>• Meminta koreksi data yang tidak akurat</p>
                <p>• Meminta penghapusan data pribadi Anda</p>
                <p>• Menolak pengiriman komunikasi promosi</p>
                <p style={{ marginTop: 12 }}>
                  Untuk menggunakan hak-hak di atas, hubungi kami via WhatsApp di {ADMIN_PHONE.replace(/^62/, "0")} atau email ke {ADMIN_EMAIL}.
                </p>
              </Section>

              <Section title="8. Perubahan Kebijakan">
                <p>
                  Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan diumumkan
                  melalui website dan/atau notifikasi WhatsApp. Tanggal pembaruan terakhir tercantum
                  di bagian atas halaman ini.
                </p>
              </Section>

              <Section title="9. Kontak">
                <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini:</p>
                <p style={{ marginTop: 8 }}>• WhatsApp: {ADMIN_PHONE.replace(/^62/, "0")}</p>
                <p>• Email: {ADMIN_EMAIL}</p>
                <p>• Website: {COMPANY.domain}</p>
              </Section>
            </div>
          </W>
        </div>

        <Footer />
      </div>
    </TX.Provider>
  );
}
