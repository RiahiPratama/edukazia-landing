/**
 * useCounter — Animated Number Counter Hook
 *
 * Counts smoothly from `start` to `end` over `duration` ms using
 * `requestAnimationFrame`. Designed to pair with Framer Motion's
 * `useInView` for scroll-triggered stats.
 *
 * Pattern penggunaan:
 *   import { useRef } from "react"
 *   import { useInView } from "motion/react"
 *   import { useCounter } from "@/hooks/useCounter"
 *
 *   const ref = useRef<HTMLDivElement>(null)
 *   const inView = useInView(ref, { once: true, amount: 0.5 })
 *   const value = useCounter({ end: 150, enabled: inView })
 *
 *   <div ref={ref}>{value}+ Siswa</div>
 *
 * Features:
 *   - Respects `prefers-reduced-motion` (jumps to end value, no animation)
 *   - Cancels animation on unmount (no memory leak)
 *   - Multiple easing presets included
 *   - SSR-safe (window check)
 */

"use client"

import { useState, useEffect, useRef } from "react"

// ═══════════════════════════════════════════════════════════
// EASING FUNCTIONS
// ═══════════════════════════════════════════════════════════

export type EaseFn = (t: number) => number

/** Linear — no easing. Counter feels mechanical. */
export const easeLinear: EaseFn = (t) => t

/** Cubic ease-out — DEFAULT. Fast start, smooth deceleration. Natural feel. */
export const easeOutCubic: EaseFn = (t) => 1 - Math.pow(1 - t, 3)

/** Quartic ease-out — sharper deceleration than cubic. */
export const easeOutQuart: EaseFn = (t) => 1 - Math.pow(1 - t, 4)

/** Exponential ease-out — very fast start, lingering finish. Dramatic. */
export const easeOutExpo: EaseFn = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

// ═══════════════════════════════════════════════════════════
// HOOK OPTIONS
// ═══════════════════════════════════════════════════════════

export type UseCounterOptions = {
  /** Target value to count to. Required. */
  end: number
  /** Starting value. Default: 0 */
  start?: number
  /** Animation duration in milliseconds. Default: 1500 */
  duration?: number
  /** When false, counter stays at `start` and won't animate.
   *  Set this to the inView state from `useInView` for scroll-trigger. */
  enabled?: boolean
  /** Easing function. Default: easeOutCubic */
  easing?: EaseFn
}

// ═══════════════════════════════════════════════════════════
// MAIN HOOK
// ═══════════════════════════════════════════════════════════

export function useCounter(options: UseCounterOptions): number {
  const {
    end,
    start = 0,
    duration = 1500,
    enabled = true,
    easing = easeOutCubic,
  } = options

  const [value, setValue] = useState<number>(start)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // ─── Disabled — reset to start, no animation ─────────
    if (!enabled) {
      setValue(start)
      return
    }

    // ─── Respect prefers-reduced-motion ──────────────────
    // Accessibility: kalau user OS-nya set "reduce motion",
    // langsung jump ke end value tanpa animasi.
    if (typeof window !== "undefined") {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduce) {
        setValue(end)
        return
      }
    }

    // ─── Reset & start fresh animation ───────────────────
    startTimeRef.current = null

    const tick = (now: number) => {
      // First frame — capture start timestamp
      if (startTimeRef.current === null) {
        startTimeRef.current = now
      }

      const elapsed = now - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = easing(progress)
      const next = Math.round(start + (end - start) * eased)

      setValue(next)

      // Continue until progress hits 1
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    // ─── Cleanup on unmount or deps change ───────────────
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [end, start, duration, enabled, easing])

  return value
}
