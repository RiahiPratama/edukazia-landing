/**
 * ThemeProvider — Theme Context Provider with localStorage Persist
 *
 * Wraps the app and provides theme context via `<ThemeContext.Provider>`.
 * Components yang pakai `useT()` / `useTheme()` harus berada DI DALAM provider ini.
 *
 * Features:
 *   - Initial mode dari localStorage (key: "edukazia-theme")
 *   - Persist setiap perubahan mode ke localStorage
 *   - Toggle `body.dark` class untuk CSS-based dark mode (smooth transition)
 *   - SSR-safe: default ke "light" sebelum hydration, lalu sync ke localStorage di useEffect
 *
 * Anti-FOUC (Flash of Unstyled Content) handled by inline script di `layout.tsx`
 * yang set `body.dark` class SEBELUM React hydration.
 *
 * @example
 *   // app/layout.tsx
 *   <body>
 *     <ThemeProvider>
 *       {children}
 *     </ThemeProvider>
 *   </body>
 */

"use client"

import { useState, useEffect, useCallback } from "react"
import type { ReactNode } from "react"
import { ThemeContext, themes, type ThemeMode } from "@/lib/theme"

const STORAGE_KEY = "edukazia-theme"

export type ThemeProviderProps = {
  children: ReactNode
  /** Default mode kalau tidak ada nilai di localStorage. Default: "light" */
  defaultMode?: ThemeMode
}

export function ThemeProvider({
  children,
  defaultMode = "light",
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode)
  const [mounted, setMounted] = useState(false)

  // ─── Initial sync dari localStorage (sekali doang setelah mount) ───
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "light" || stored === "dark") {
        setModeState(stored)
      } else {
        // First-time visitor — cek system preference
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
        setModeState(prefersDark ? "dark" : defaultMode)
      }
    } catch {
      // localStorage diblokir (private mode, dll) — silent fallback
    }
    setMounted(true)
  }, [defaultMode])

  // ─── Persist + sync body class on mode change ───
  useEffect(() => {
    if (!mounted) return // jangan persist sebelum initial sync selesai

    try {
      window.localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      // silent
    }

    // Toggle body class untuk CSS-based dark mode
    document.body.classList.toggle("dark", mode === "dark")
  }, [mode, mounted])

  // ─── Handlers ───
  const setMode = useCallback((m: ThemeMode) => setModeState(m), [])
  const toggle = useCallback(
    () => setModeState((prev) => (prev === "light" ? "dark" : "light")),
    []
  )

  const t = themes[mode]

  return (
    <ThemeContext.Provider value={{ t, mode, toggle, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
