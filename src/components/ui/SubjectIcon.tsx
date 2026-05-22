/**
 * SubjectIcon — Typography-Based Subject Icons
 *
 * Mockup ref: lines 504-509 (SubjectIcon inline di Subjects component)
 *
 * Icon yang dibuat dari karakter teks, bukan emoji atau bendera negara
 * (lebih representative dari mata pelajaran-nya):
 *   - English  → "Aa"  (Latin alphabet, Sora sans-serif)
 *   - Arabic   → "ع"   (Arabic letter Ayn, serif)
 *   - Mandarin → "中"  (Chinese character "middle/zhōng", serif)
 *   - Math     → "Σ"   (Greek Sigma summation, Sora sans-serif)
 *
 * @example
 *   <SubjectIcon type="english" color="#5C4FE5" size={44} />
 */

export type SubjectType = "english" | "arabic" | "mandarin" | "math"

export type SubjectIconProps = {
  type: SubjectType
  color: string
  /** Size in px. Default: 28 */
  size?: number
}

export function SubjectIcon({ type, color, size = 28 }: SubjectIconProps) {
  // Common SVG wrapper props
  const svgProps = {
    width: size,
    height: size,
    viewBox: "0 0 52 52",
    fill: "none",
  } as const

  switch (type) {
    case "english":
      return (
        <svg {...svgProps}>
          <text
            x="26"
            y="36"
            textAnchor="middle"
            fontFamily="Sora, sans-serif"
            fontWeight="800"
            fontSize="34"
            fill={color}
          >
            Aa
          </text>
        </svg>
      )

    case "arabic":
      return (
        <svg {...svgProps}>
          <text
            x="26"
            y="40"
            textAnchor="middle"
            fontFamily="serif"
            fontWeight="700"
            fontSize="40"
            fill={color}
          >
            ع
          </text>
        </svg>
      )

    case "mandarin":
      return (
        <svg {...svgProps}>
          <text
            x="26"
            y="40"
            textAnchor="middle"
            fontFamily="serif"
            fontWeight="700"
            fontSize="38"
            fill={color}
          >
            中
          </text>
        </svg>
      )

    case "math":
    default:
      return (
        <svg {...svgProps}>
          <text
            x="26"
            y="40"
            textAnchor="middle"
            fontFamily="Sora, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill={color}
          >
            Σ
          </text>
        </svg>
      )
  }
}

export default SubjectIcon
