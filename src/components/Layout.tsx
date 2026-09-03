import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ToolToggle } from './ToolToggle'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0b10]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-400 to-fuchsia-500 text-sm font-bold text-white">
              P
            </span>
            <span className="text-base font-semibold tracking-tight text-white">Poster Trends</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <Link to="/" className="hover:text-white">
              Trending
            </Link>
            <a
              href="https://www.adobe.com/products/photoshop.html"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Photoshop
            </a>
            <a href="https://www.canva.com" target="_blank" rel="noreferrer" className="hover:text-white">
              Canva
            </a>
          </nav>
          <ToolToggle compact />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/40">
          <p>
            Poster Trends curates poster design directions and refreshes trend scores from design-community
            signals. Every guide works whether you design in Photoshop or Canva — pick your tool up top.
          </p>
        </div>
      </footer>
    </div>
  )
}
