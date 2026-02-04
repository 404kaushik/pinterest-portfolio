'use client'

import { cn } from '@/lib/utils'
import type { Skill } from '@/lib/data'

interface SkillChipsProps {
  skills: Skill[]
  compact?: boolean
  className?: string
}

export function SkillChips({ skills, compact, className }: SkillChipsProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {skills.map((skillGroup) => (
        <div key={skillGroup.category}>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">
            {skillGroup.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span
                key={skill}
                className={cn(
                  'rounded-full font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-default',
                  compact
                    ? 'px-3 py-1 text-xs bg-muted text-muted-foreground'
                    : 'px-4 py-2 text-sm bg-muted text-foreground'
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

interface TechStackProps {
  stack: string[]
  className?: string
}

export function TechStack({ stack, className }: TechStackProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {stack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
