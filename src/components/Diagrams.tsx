/**
 * Line-art scientific diagrams drawn in the brand palette. They illustrate
 * concepts (tooth structure, mineral layering) — not measured data.
 */

export function ToothCrossSection({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 520" className={className} role="img" aria-labelledby="tooth-title tooth-desc">
      <title id="tooth-title">Cross-section of a tooth</title>
      <desc id="tooth-desc">Diagram labelling enamel as the outer layer, dentine beneath it, the pulp at the centre, and the gumline.</desc>
      <defs>
        <linearGradient id="enamel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EAF6FC" />
        </linearGradient>
        <linearGradient id="dentine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D6ECF7" />
          <stop offset="1" stopColor="#B5DCEF" />
        </linearGradient>
      </defs>
      {/* gum */}
      <path d="M20 300 C 90 280, 150 290, 210 292 S 330 280, 400 300 L 400 520 L 20 520 Z" fill="#102C50" opacity="0.08" />
      {/* enamel crown */}
      <path
        d="M110 70 C 140 30, 180 50, 210 62 C 240 50, 280 30, 310 70 C 340 110, 335 190, 318 260 C 312 290, 300 300, 296 320 L 124 320 C 120 300, 108 290, 102 260 C 85 190, 80 110, 110 70 Z"
        fill="url(#enamel)"
        stroke="#087EAE"
        strokeWidth="2"
      />
      {/* dentine + roots */}
      <path
        d="M128 96 C 150 72, 182 84, 210 92 C 238 84, 270 72, 292 96 C 312 130, 306 200, 292 262 C 284 300, 280 330, 276 380 C 272 430, 262 470, 246 486 C 236 470, 232 420, 222 380 L 198 380 C 188 420, 184 470, 174 486 C 158 470, 148 430, 144 380 C 140 330, 136 300, 128 262 C 114 200, 108 130, 128 96 Z"
        fill="url(#dentine)"
        stroke="#075A91"
        strokeWidth="1.25"
      />
      {/* pulp */}
      <path
        d="M178 140 C 194 128, 226 128, 242 140 C 254 170, 250 230, 240 270 C 236 300, 232 340, 228 380 C 224 410, 220 440, 216 456 L 204 456 C 200 440, 196 410, 192 380 C 188 340, 184 300, 180 270 C 170 230, 166 170, 178 140 Z"
        fill="#D62832"
        opacity="0.18"
        stroke="#D62832"
        strokeOpacity="0.5"
      />
      {/* gumline */}
      <path d="M20 300 C 90 280, 150 290, 210 292 S 330 280, 400 300" fill="none" stroke="#102C50" strokeDasharray="4 5" strokeOpacity="0.5" />
      {/* hydroxyapatite crystals on enamel surface */}
      {Array.from({ length: 16 }).map((_, i) => {
        const t = i / 15
        const x = 112 + t * 196
        const y = 76 + Math.sin(t * Math.PI * 2) * 8 - Math.sin(t * Math.PI) * 18
        return <rect key={i} x={x} y={y} width="6" height="3" rx="1" fill="#087EAE" opacity="0.55" transform={`rotate(${-20 + t * 40} ${x} ${y})`} />
      })}
      {/* labels */}
      <Label x1={300} y1={120} x2={360} y2={60} text="Enamel" />
      <Label x1={270} y1={210} x2={360} y2={200} text="Dentine" />
      <Label x1={220} y1={240} x2={360} y2={340} text="Pulp" />
      <Label x1={120} y1={298} x2={40} y2={250} text="Gumline" anchor="start" />
    </svg>
  )
}

function Label({ x1, y1, x2, y2, text, anchor = 'start' }: { x1: number; y1: number; x2: number; y2: number; text: string; anchor?: 'start' | 'end' }) {
  return (
    <g>
      <circle cx={x1} cy={y1} r="3" fill="#102C50" />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#102C50" strokeWidth="1" />
      <text x={x2 + (anchor === 'start' ? 4 : -4)} y={y2 - 6} textAnchor={anchor} fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" fill="#102C50">
        {text}
      </text>
    </g>
  )
}

/** Before/after concept of a microscopically uneven enamel surface. */
export function EnamelSurface({ className = '' }: { className?: string }) {
  const crystals = (y: number, gaps: boolean) =>
    Array.from({ length: 22 }).map((_, i) => {
      if (gaps && [4, 5, 11, 16, 17].includes(i)) return null
      return <rect key={i} x={12 + i * 13} y={y} width="10" height="26" rx="2" fill="#8BCBEA" stroke="#087EAE" strokeWidth="1" />
    })
  return (
    <svg viewBox="0 0 320 210" className={className} role="img" aria-labelledby="es-title es-desc">
      <title id="es-title">Enamel surface concept</title>
      <desc id="es-desc">Top row shows an enamel surface with microscopic gaps. Bottom row shows the same surface with the gaps filled by mineral.</desc>
      <text x="12" y="22" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" letterSpacing="1.5" fill="#4A5B70">
        MICROSCOPIC IMPERFECTIONS
      </text>
      {crystals(32, true)}
      <text x="12" y="118" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" letterSpacing="1.5" fill="#087EAE">
        MINERAL SUPPORT
      </text>
      {crystals(128, false)}
      {[4, 5, 11, 16, 17].map((i) => (
        <rect key={i} x={12 + i * 13} y={128} width="10" height="26" rx="2" fill="#087EAE" />
      ))}
      <text x="12" y="190" fontFamily="Inter, sans-serif" fontSize="10" fill="#4A5B70">
        Illustrative concept — not to scale.
      </text>
    </svg>
  )
}
