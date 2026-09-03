import { Link, Navigate, useParams } from 'react-router-dom'
import { PaletteSwatches } from '../components/PaletteSwatches'
import { ThemeCard } from '../components/ThemeCard'
import { ToolToggle } from '../components/ToolToggle'
import { TrendBadge } from '../components/TrendBadge'
import { useToolPreference } from '../context/ToolPreference'
import { themes } from '../data/themes'

export function ThemeDetail() {
  const { id } = useParams()
  const theme = themes.find((t) => t.id === id)
  const { tool } = useToolPreference()

  if (!theme) return <Navigate to="/" replace />

  const steps = tool === 'photoshop' ? theme.photoshopSteps : theme.canvaSteps
  const related = themes.filter((t) => t.id !== theme.id && t.category === theme.category).slice(0, 3)

  return (
    <div>
      <div className={`h-56 w-full bg-gradient-to-br ${theme.gradient} relative sm:h-72`}>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <div className="-mt-10 rounded-2xl border border-white/10 bg-[#121218] p-6 shadow-xl sm:p-8">
          <Link to="/" className="text-sm text-white/40 hover:text-white/70">
            ← All themes
          </Link>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-violet-300/80">{theme.category}</p>
              <h1 className="mt-1 text-3xl font-bold text-white">{theme.name}</h1>
              <p className="mt-1 text-white/60">{theme.tagline}</p>
            </div>
            <TrendBadge trend={theme.trend} />
          </div>

          <p className="mt-5 max-w-2xl text-white/70">{theme.description}</p>
          <p className="mt-2 text-xs text-white/35">
            {theme.trend.note} · Updated {theme.updatedAt}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-white/80">Palette</h2>
              <PaletteSwatches palette={theme.palette} />
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-white/80">Typography</h2>
              <p className="text-sm text-white/60">
                <span className="text-white/40">Heading — </span>
                {theme.fonts.heading}
              </p>
              <p className="text-sm text-white/60">
                <span className="text-white/40">Body — </span>
                {theme.fonts.body}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {theme.moodTags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/50">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="py-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Step-by-step guide</h2>
              <p className="text-sm text-white/50">
                Showing the {tool === 'photoshop' ? 'Photoshop' : 'Canva'} version — switch anytime.
              </p>
            </div>
            <ToolToggle />
          </div>

          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5"
              >
                <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {related.length > 0 && (
          <section className="pb-16">
            <h2 className="mb-6 text-xl font-semibold text-white">More {theme.category} themes</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <ThemeCard key={t.id} theme={t} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
