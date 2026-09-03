import type { ColorSwatch } from '../data/types'

export function PaletteSwatches({ palette, size = 'md' }: { palette: ColorSwatch[]; size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'h-6 w-6' : 'h-9 w-9'
  return (
    <div className="flex flex-wrap gap-2">
      {palette.map((color) => (
        <div key={color.hex} className="flex items-center gap-1.5" title={`${color.name} — ${color.hex}`}>
          <span
            className={`${dim} rounded-full border border-white/15 shadow-inner`}
            style={{ backgroundColor: color.hex }}
          />
          {size === 'md' && (
            <span className="text-xs text-white/50">
              {color.name}
              <span className="ml-1 text-white/30">{color.hex}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
