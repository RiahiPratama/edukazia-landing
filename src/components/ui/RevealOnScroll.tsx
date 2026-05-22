/**
 * RevealOnScroll — Scroll-Triggered Reveal Animation
 *
 * Mockup ref: `Rv` component di line 171 file 01_edukazia-Landing_Page_Final.jsx
 * Mockup pakai IntersectionObserver custom — kita upgrade ke Framer Motion
 * `whileInView` yang lebih declarative + performant + reduced-motion aware.
 *
 * Wrap konten yang mau muncul dengan fade + slide saat scroll ke viewport.
 *
 * @example
 *   <RevealOnScroll>
 *     <h2>This fades up when scrolled into view</h2>
 *   </RevealOnScroll>
 *
 *   // Stagger anak-anak dengan delay berbeda
 *   {items.map((item, i) => (
 *     <RevealOnScroll key={i} delay={i * 0.1}>
 *       <Card />
 *     </RevealOnScroll>
 *   ))}
 *
 *   // Slide dari samping
 *   <RevealOnScroll direction="right">...</RevealOnScroll>
 *
 *   // Re-trigger setiap kali masuk viewport (default sekali doang)
 *   <RevealOnScroll once={false}>...</RevealOnScroll>
 */

"use client"

import { motion } from "motion/react"
import type { ReactNode, CSSProperties } from "react"

export type RevealDirection = "up" | "down" | "left" | "right" | "none"

export type RevealOnScrollProps = {
  children: ReactNode
  /** Animation delay in seconds. Default: 0 */
  delay?: number
  /** Slide direction. Default: "up" */
  direction?: RevealDirection
  /** Animation duration in seconds. Default: 0.8 */
  duration?: number
  /** Distance to travel in px before reveal. Default: 30 */
  distance?: number
  /** Trigger only once. Default: true */
  once?: boolean
  /** Fraction of element visible to trigger (0-1). Default: 0.1 */
  amount?: number
  className?: string
  style?: CSSProperties
}

// Map direction → initial offset {x, y}
const getInitialOffset = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance, x: 0 }
    case "down":
      return { y: -distance, x: 0 }
    case "right":
      return { y: 0, x: -distance } // slide IN from left → ends at x:0
    case "left":
      return { y: 0, x: distance } // slide IN from right
    case "none":
    default:
      return { y: 0, x: 0 }
  }
}

export function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 30,
  once = true,
  amount = 0.1,
  className,
  style,
}: RevealOnScrollProps) {
  const offset = getInitialOffset(direction, distance)

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier mirip mockup
      }}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
