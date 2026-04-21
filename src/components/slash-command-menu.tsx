'use client'

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import type { Ref } from 'react'

import { useAutocompleteFilter } from '@/components/ui/autocomplete'
import { Command, CommandItem, CommandList } from '@/components/ui/command'
<<<<<<< HEAD
import { t } from '@/lib/i18n'
=======
>>>>>>> upstream/main
import { cn } from '@/lib/utils'

type SlashCommandDefinition = {
  command: string
  description: string
}

type SlashCommandMenuProps = {
  open: boolean
  query: string
  onSelect: (command: SlashCommandDefinition) => void
}

type SlashCommandMenuHandle = {
  moveSelection: (step: number) => void
  selectActive: () => boolean
}

<<<<<<< HEAD
const useSlashCommands = (): Array<SlashCommandDefinition> => {
  return useMemo(
    () => [
      { command: '/new', description: t('commands.new') },
      { command: '/clear', description: t('commands.clear') },
      { command: '/model', description: t('commands.model') },
      { command: '/save', description: t('commands.save') },
      { command: '/skills', description: t('commands.skills') },
      { command: '/skin', description: t('commands.skin') },
      { command: '/help', description: t('commands.help') },
      { command: '/personality', description: t('commands.personality') },
      { command: '/statusbar', description: t('commands.statusbar') },
      { command: '/sb', description: t('commands.statusbar') },
      { command: '/toolsets', description: t('commands.toolsets') },
      { command: '/tools', description: t('commands.tools') },
      { command: '/plugins', description: t('commands.plugins') },
    ],
    [],
  )
}
=======
const SLASH_COMMANDS: Array<SlashCommandDefinition> = [
  { command: '/new', description: 'Start new session' },
  { command: '/clear', description: 'Clear screen and start fresh' },
  { command: '/model', description: 'Show or change the current model' },
  { command: '/save', description: 'Save the current conversation' },
  { command: '/skills', description: 'Browse and manage skills' },
  { command: '/skin', description: 'Change the display theme' },
  { command: '/help', description: 'Show available commands' },
]
>>>>>>> upstream/main

const SlashCommandMenu = forwardRef(function SlashCommandMenu(
  { open, query, onSelect }: SlashCommandMenuProps,
  ref: Ref<SlashCommandMenuHandle>,
) {
  const [activeIndex, setActiveIndex] = useState(0)
  const filter = useAutocompleteFilter({ sensitivity: 'base' })
<<<<<<< HEAD
  const slashCommands = useSlashCommands()

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim()
    if (!normalizedQuery) return slashCommands

    return slashCommands.filter((item) =>
=======

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim()
    if (!normalizedQuery) return SLASH_COMMANDS

    return SLASH_COMMANDS.filter((item) =>
>>>>>>> upstream/main
      filter.contains(
        item,
        normalizedQuery,
        (target) => `${target.command} ${target.description}`,
      ),
    )
<<<<<<< HEAD
  }, [filter, query, slashCommands])
=======
  }, [filter, query])
>>>>>>> upstream/main

  useEffect(() => {
    setActiveIndex(0)
  }, [open, query])

  useEffect(() => {
    if (filteredCommands.length === 0) {
      setActiveIndex(0)
      return
    }
    setActiveIndex((previous) =>
      Math.max(0, Math.min(previous, filteredCommands.length - 1)),
    )
  }, [filteredCommands.length])

  useImperativeHandle(
    ref,
    () => ({
      moveSelection(step: number) {
        if (!open || filteredCommands.length === 0) return
        const direction = step >= 0 ? 1 : -1
        setActiveIndex((previous) => {
          const next = previous + direction
          if (next < 0) return filteredCommands.length - 1
          if (next >= filteredCommands.length) return 0
          return next
        })
      },
      selectActive() {
        if (!open || filteredCommands.length === 0) return false
        const selected = filteredCommands[activeIndex]
        if (!selected) return false
        onSelect(selected)
        return true
      },
    }),
    [activeIndex, filteredCommands, onSelect, open],
  )

  if (!open) return null

  return (
    <div className="pointer-events-none absolute inset-x-2 bottom-[calc(100%+0.5rem)] z-[70]">
      <div
        className="pointer-events-auto overflow-hidden rounded-xl border border-primary-200 shadow-lg"
        style={{
          background: 'var(--color-surface, var(--theme-card, #1a1f2e))',
        }}
      >
        <Command
          items={filteredCommands}
          value={query}
          onValueChange={() => {}}
          mode="none"
          autoHighlight={false}
          keepHighlight={false}
        >
          {filteredCommands.length === 0 ? (
            <div className="px-3 py-2 text-sm text-primary-600">
              No commands found
            </div>
          ) : (
            <CommandList className="max-h-60 min-h-0">
              {filteredCommands.map((item, index) => (
                <CommandItem
                  key={item.command}
                  value={item.command}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseMove={() => setActiveIndex(index)}
                  onClick={() => onSelect(item)}
                  className={cn(
                    'flex flex-col items-start gap-0.5 rounded-md px-3 py-2',
                    index === activeIndex && 'bg-primary-100 text-primary-900',
                  )}
                >
                  <span className="text-sm font-semibold">{item.command}</span>
                  <span className="text-xs text-primary-600">
                    {item.description}
                  </span>
                </CommandItem>
              ))}
            </CommandList>
          )}
        </Command>
      </div>
    </div>
  )
})

export {
  SlashCommandMenu,
  type SlashCommandDefinition,
  type SlashCommandMenuHandle,
}
