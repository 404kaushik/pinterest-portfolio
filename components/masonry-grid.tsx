'use client'

import { useEffect, useState } from 'react'
import { PinCard } from './pin-card'
import type { Project } from '@/lib/data'
import { cn } from '@/lib/utils'

interface MasonryGridProps {
  projects: Project[]
  className?: string
}

export function MasonryGrid({ projects, className }: MasonryGridProps) {
  const [columns, setColumns] = useState(4)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width < 640) setColumns(2)
      else if (width < 768) setColumns(2)
      else if (width < 1024) setColumns(3)
      else if (width < 1280) setColumns(4)
      else setColumns(5)
    }

    updateColumns()
    setIsLoaded(true)
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  // Distribute items into columns for true masonry effect
  const columnArrays: Project[][] = Array.from({ length: columns }, () => [])
  
  projects.forEach((project, index) => {
    const columnIndex = index % columns
    columnArrays[columnIndex].push(project)
  })

  if (!isLoaded) {
    return (
      <div className={cn('grid gap-4', className)} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-muted rounded-2xl animate-pulse"
            style={{ height: `${Math.random() * 100 + 200}px` }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn('flex gap-4', className)}
      style={{ alignItems: 'flex-start' }}
    >
      {columnArrays.map((columnProjects, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-col gap-4 flex-1"
        >
          {columnProjects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${(colIndex * columnProjects.length + projectIndex) * 50}ms`,
                animationFillMode: 'backwards',
              }}
            >
              <PinCard
                project={project}
                index={colIndex * columnProjects.length + projectIndex}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
