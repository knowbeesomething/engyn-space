import { useMemo, useState } from 'react'
import { ThemeCard } from '../components/ThemeCard'
import { ToolToggle } from '../components/ToolToggle'
import { useToolPreference } from '../context/ToolPreference'
import { allMoodTags, categories, themes } from '../data/themes'

const latestUpdate = themes.reduce((latest, t) => (t.updatedAt > latest ? t.updatedAt : latest), themes[0].updatedAt)

export function Home() {
  const { hasChosen } = useToolPreference()
  const [category, setCategory] = useState<string | null>(null)
  const [mood, setMood] = useState<string | null>(null)

  const sorted = useMemo(() => [...themes].sort((a, b) => b.trend.score - a.trend.score), [])
  const filtered = useMemo(
    () =>
      sorted.filter(
        (t) => (!category || t.category === category) && (!mood || t.moodTags.includes(mood)),
      ),
    [sorted, category, mood],
  )
  const topTrending = sorted.slice(0, 3)

  return (
    <div>
      <section className="border-b border-white/10 bg-gradient-to-b from-violet-500/10 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-300">
            Trend-tracked poster design
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find your poster's design direction, then build it step by step.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            Browse design themes ranked by how much they're trending right now, and follow a guide written
            specifically for the tool you actually use — Photoshop or Canva.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ToolToggle />
            <span className="text-sm text-white/40">
              {hasChosen ? 'Guides below default to your pick.' : 'Choose a tool — guides adapt to it.'}
            </span>
          </div>
          <p className="mt-6 text-xs text-white/35">Trend scores last refreshed {latestUpdate}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-white">Trending this season</h2>
          <span className="text-xs text-white/40">Ranked by design-community trend score</span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topTrending.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-white">All themes</h2>
          <div className="flex flex-wrap gap-2">
            <FilterSelect
              label="Category"
              value={category}
              options={categories}
              onChange={setCategory}
            />
            <FilterSelect label="Mood" value={mood} options={allMoodTags} onChange={setMood} />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center text-white/50">
            No themes match those filters yet — try clearing one.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string | null
  options: string[]
  onChange: (v: string | null) => void
}) {
  return (
    <select
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value || null)}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 outline-none focus:border-violet-400"
    >
      <option value="">All {label.toLowerCase()}s</option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-[#16161d]">
          {opt}
        </option>
      ))}
    </select>
  )
}
