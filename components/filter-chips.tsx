'use client'

import { cn } from '@/lib/utils'
import { filterOptions, techFilters } from '@/lib/data'

interface FilterChipsProps {
  activeFilter: string
  activeTech: string[]
  onFilterChange: (filter: string) => void
  onTechToggle: (tech: string) => void
}

export function FilterChips({
  activeFilter,
  activeTech,
  onFilterChange,
  onTechToggle,
}: FilterChipsProps) {
  return (
    <div className="space-y-3">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onFilterChange(option.id)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeFilter === option.id
                ? 'bg-foreground text-background shadow-sm'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Tech Filters */}
      <div className="flex flex-wrap gap-2">
        {techFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => onTechToggle(tech)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border',
              activeTech.includes(tech)
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground'
            )}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  )
}
