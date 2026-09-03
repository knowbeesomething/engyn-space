import type { Trend } from '../data/types'

const DIRECTION_STYLE: Record<Trend['direction'], { label: string; className: string }> = {
  rising: { label: '↑ Rising', className: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
  steady: { label: '→ Steady', className: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  cooling: { label: '↓ Cooling', className: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
}

export function TrendBadge({ trend }: { trend: Trend }) {
  const style = DIRECTION_STYLE[trend.direction]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${style.className}`}
      title={trend.note}
    >
      {style.label}
      <span className="text-white/40">·</span>
      <span>{trend.score}</span>
    </span>
  )
}
