'use client'

import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Experience } from '@/lib/data'

interface ExperienceCardProps {
  experience: Experience
  className?: string
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-card rounded-2xl p-6 border border-border hover:border-border/80 transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {experience.role}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-muted-foreground">{experience.company}</span>
            {experience.link && (
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Visit ${experience.company} website`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {experience.dates}
        </span>
      </div>

      {/* Bullets */}
      <ul className="space-y-2 mb-4">
        {experience.bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary mt-1.5 flex-shrink-0">
              <span className="block w-1.5 h-1.5 rounded-full bg-current" />
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
