'use client'

import { cn } from '@/lib/utils'

interface FilterTabsProps {
  tabs: { id: string; label: string }[]
  activeTab: string
  onChange: (tab: string) => void
}

export function FilterTabs({ tabs, activeTab, onChange }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'relative pb-1 text-[15px] font-semibold transition-colors',
            activeTab === tab.id
              ? 'text-foreground'
              : 'text-foreground hover:text-foreground/70'
          )}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-foreground" />
          )}
        </button>
      ))}
    </div>
  )
}
