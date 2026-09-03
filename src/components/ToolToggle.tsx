import { useToolPreference, type Tool } from '../context/ToolPreference'

const OPTIONS: { id: Tool; label: string }[] = [
  { id: 'canva', label: 'Canva' },
  { id: 'photoshop', label: 'Photoshop' },
]

export function ToolToggle({ compact = false }: { compact?: boolean }) {
  const { tool, setTool } = useToolPreference()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 ${compact ? 'text-xs' : 'text-sm'}`}
      role="group"
      aria-label="Preferred design tool"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => setTool(opt.id)}
          className={`rounded-full px-3.5 py-1.5 font-medium transition-colors ${
            tool === opt.id
              ? 'bg-violet-500 text-white shadow'
              : 'text-white/60 hover:text-white'
          }`}
          aria-pressed={tool === opt.id}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
