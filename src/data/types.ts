export interface ColorSwatch {
  name: string
  hex: string
}

export interface GuideStep {
  title: string
  detail: string
}

export type ThemeCategory =
  | 'Event'
  | 'Music & Film'
  | 'Brand & Product'
  | 'Typography'
  | 'Motivational'
  | 'Editorial'

export type TrendDirection = 'rising' | 'steady' | 'cooling'

export interface Trend {
  score: number // 0-100 popularity score
  direction: TrendDirection
  season: string // e.g. "Fall 2026"
  note: string // short human-readable signal explaining the score
}

export interface Theme {
  id: string
  name: string
  tagline: string
  description: string
  category: ThemeCategory
  moodTags: string[]
  trend: Trend
  palette: ColorSwatch[]
  fonts: {
    heading: string
    body: string
  }
  gradient: string // tailwind gradient classes used for the card/hero preview
  photoshopSteps: GuideStep[]
  canvaSteps: GuideStep[]
  updatedAt: string // ISO date the theme entry was last refreshed
}
