'use client'

import { cn } from '@/lib/utils'

interface FilterTabsProps {
  tabs: { id: string; label: string }[]
  activeTab: string
  onChange: (tab: string) => void
}

export function FilterTabs({ tabs, activeTab, onChange }: FilterTabsProps) {
  return (
    <div className="border-b border-[#e2e2e2] bg-white px-3 py-2 sm:px-4">
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative shrink-0 whitespace-nowrap pb-3 pt-1 text-[15px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e60023] focus-visible:ring-offset-1',
              activeTab === tab.id
                ? 'text-[#111]'
                : 'text-[#5f5f5f] hover:text-[#111]'
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#111]" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
