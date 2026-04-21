export type ThemeId =
<<<<<<< HEAD
=======
  | 'hermes-nous'
  | 'hermes-nous-light'
>>>>>>> upstream/main
  | 'hermes-official'
  | 'hermes-official-light'
  | 'hermes-classic'
  | 'hermes-classic-light'
  | 'hermes-slate'
  | 'hermes-slate-light'
<<<<<<< HEAD
  | 'hermes-mono'
  | 'hermes-mono-light'
=======
>>>>>>> upstream/main

export const THEMES: Array<{
  id: ThemeId
  label: string
  description: string
  icon: string
}> = [
  {
<<<<<<< HEAD
=======
    id: 'hermes-nous',
    label: 'Hermes Nous',
    description: 'Deep teal background, cream accent — matches Nous Research chrome',
    icon: '◱',
  },
  {
    id: 'hermes-nous-light',
    label: 'Hermes Nous Light',
    description: 'Cold paper white with restrained cobalt framing',
    icon: '◲',
  },
  {
>>>>>>> upstream/main
    id: 'hermes-official',
    label: 'Hermes Official',
    description: 'Navy and indigo flagship theme',
    icon: '⚕',
  },
  {
    id: 'hermes-official-light',
    label: 'Hermes Official Light',
<<<<<<< HEAD
    description: 'Soft indigo light palette',
=======
    description: 'Editorial paper white with muted cobalt accents',
>>>>>>> upstream/main
    icon: '⚕',
  },
  {
    id: 'hermes-classic',
    label: 'Hermes Classic',
    description: 'Bronze accents on dark charcoal',
    icon: '🔶',
  },
  {
    id: 'hermes-classic-light',
    label: 'Classic Light',
    description: 'Warm parchment with bronze accents',
    icon: '🔶',
  },
  {
    id: 'hermes-slate',
    label: 'Slate',
    description: 'Cool blue developer theme',
    icon: '🔷',
  },
  {
    id: 'hermes-slate-light',
    label: 'Slate Light',
    description: 'GitHub-light palette with blue accents',
    icon: '🔷',
  },
<<<<<<< HEAD
  {
    id: 'hermes-mono',
    label: 'Mono',
    description: 'Clean monochrome grayscale',
    icon: '◐',
  },
  {
    id: 'hermes-mono-light',
    label: 'Mono Light',
    description: 'Bright monochrome grayscale',
    icon: '◐',
  },
]

const STORAGE_KEY = 'hermes-theme'
const DEFAULT_THEME: ThemeId = 'hermes-official'
=======
]

const STORAGE_KEY = 'hermes-theme'
const DEFAULT_THEME: ThemeId = 'hermes-nous'
>>>>>>> upstream/main
const THEME_SET = new Set<ThemeId>(THEMES.map((theme) => theme.id))
const LIGHT_THEME_MAP: Record<
  Exclude<ThemeId, `${string}-light`>,
  Extract<ThemeId, `${string}-light`>
> = {
<<<<<<< HEAD
  'hermes-official': 'hermes-official-light',
  'hermes-classic': 'hermes-classic-light',
  'hermes-slate': 'hermes-slate-light',
  'hermes-mono': 'hermes-mono-light',
=======
  'hermes-nous': 'hermes-nous-light',
  'hermes-official': 'hermes-official-light',
  'hermes-classic': 'hermes-classic-light',
  'hermes-slate': 'hermes-slate-light',
>>>>>>> upstream/main
}
const DARK_THEME_MAP: Record<
  Extract<ThemeId, `${string}-light`>,
  Exclude<ThemeId, `${string}-light`>
> = {
<<<<<<< HEAD
  'hermes-official-light': 'hermes-official',
  'hermes-classic-light': 'hermes-classic',
  'hermes-slate-light': 'hermes-slate',
  'hermes-mono-light': 'hermes-mono',
}

const LIGHT_THEMES = new Set<ThemeId>([
  'hermes-official-light',
  'hermes-classic-light',
  'hermes-slate-light',
  'hermes-mono-light',
=======
  'hermes-nous-light': 'hermes-nous',
  'hermes-official-light': 'hermes-official',
  'hermes-classic-light': 'hermes-classic',
  'hermes-slate-light': 'hermes-slate',
}

const LIGHT_THEMES = new Set<ThemeId>([
  'hermes-nous-light',
  'hermes-official-light',
  'hermes-classic-light',
  'hermes-slate-light',
>>>>>>> upstream/main
])

export function isValidTheme(
  value: string | null | undefined,
): value is ThemeId {
  return typeof value === 'string' && THEME_SET.has(value as ThemeId)
}

export function isDarkTheme(theme: ThemeId): boolean {
  return !LIGHT_THEMES.has(theme)
}

export function getThemeVariant(
  theme: ThemeId,
  mode: 'light' | 'dark',
): ThemeId {
  if (mode === 'light') {
    return isDarkTheme(theme)
      ? LIGHT_THEME_MAP[theme as keyof typeof LIGHT_THEME_MAP]
      : theme
  }

  return isDarkTheme(theme)
    ? theme
    : DARK_THEME_MAP[theme as keyof typeof DARK_THEME_MAP]
}

export function getTheme(): ThemeId {
  if (typeof window === 'undefined') return DEFAULT_THEME
  const stored = localStorage.getItem(STORAGE_KEY)
  return isValidTheme(stored) ? stored : DEFAULT_THEME
}

export function setTheme(theme: ThemeId): void {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.classList.remove('light', 'dark', 'system')
  const nextMode = isDarkTheme(theme) ? 'dark' : 'light'
  root.classList.add(nextMode)
  root.style.setProperty('color-scheme', nextMode)
  localStorage.setItem(STORAGE_KEY, theme)
}
