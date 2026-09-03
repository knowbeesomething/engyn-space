import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Tool = 'photoshop' | 'canva'

const STORAGE_KEY = 'poster-trends:preferred-tool'

interface ToolPreferenceContextValue {
  tool: Tool
  setTool: (tool: Tool) => void
  hasChosen: boolean
}

const ToolPreferenceContext = createContext<ToolPreferenceContextValue | null>(null)

function readStoredTool(): { tool: Tool; hasChosen: boolean } {
  if (typeof window === 'undefined') return { tool: 'canva', hasChosen: false }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'photoshop' || stored === 'canva') {
      return { tool: stored, hasChosen: true }
    }
  } catch {
    // localStorage unavailable — fall through to default
  }
  return { tool: 'canva', hasChosen: false }
}

export function ToolPreferenceProvider({ children }: { children: ReactNode }) {
  const [{ tool, hasChosen }, setState] = useState(readStoredTool)

  useEffect(() => {
    if (!hasChosen) return
    try {
      window.localStorage.setItem(STORAGE_KEY, tool)
    } catch {
      // ignore write failures (private browsing, storage disabled, etc.)
    }
  }, [tool, hasChosen])

  const setTool = (next: Tool) => setState({ tool: next, hasChosen: true })

  return (
    <ToolPreferenceContext.Provider value={{ tool, setTool, hasChosen }}>
      {children}
    </ToolPreferenceContext.Provider>
  )
}

export function useToolPreference() {
  const ctx = useContext(ToolPreferenceContext)
  if (!ctx) throw new Error('useToolPreference must be used within ToolPreferenceProvider')
  return ctx
}
