import { Link } from 'react-router-dom'
import type { Theme } from '../data/types'
import { PaletteSwatches } from './PaletteSwatches'
import { TrendBadge } from './TrendBadge'

export function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Link
      to={`/theme/${theme.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
    >
      <div className={`h-36 w-full bg-gradient-to-br ${theme.gradient} relative`}>
        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0" />
        <div className="absolute right-3 top-3">
          <TrendBadge trend={theme.trend} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-violet-300/80">{theme.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{theme.name}</h3>
          <p className="mt-1 text-sm text-white/60">{theme.tagline}</p>
        </div>
        <PaletteSwatches palette={theme.palette} size="sm" />
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {theme.moodTags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-white/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
