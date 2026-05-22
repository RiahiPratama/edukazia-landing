/**
 * Container — Max-Width Wrapper
 *
 * Reusable container component yang membungkus konten dengan
 * max-width 1120px + horizontal padding. Dipakai di semua section
 * (Navbar, Footer, Hero, Subjects, dst).
 *
 * Sesuai mockup: `W` component di line 70.
 *
 * @example
 *   <Container>
 *     <h1>Section content</h1>
 *   </Container>
 *
 *   <Container style={{ display: "flex", gap: 40 }}>
 *     ...
 *   </Container>
 *
 *   <Container maxWidth={1280}>
 *     ...wider section
 *   </Container>
 */

import type { CSSProperties, ReactNode } from "react"

export type ContainerProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** Max width in px atau CSS unit. Default: 1120 */
  maxWidth?: number | string
  /** Horizontal padding. Default: 24 */
  paddingX?: number | string
}

export function Container({
  children,
  className,
  style,
  maxWidth = 1120,
  paddingX = 24,
}: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth,
        margin: "0 auto",
        paddingLeft: paddingX,
        paddingRight: paddingX,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Container
