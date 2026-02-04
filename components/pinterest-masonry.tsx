'use client'

import { useMemo } from 'react'
import type { Project } from '@/lib/data'
import { PinterestPin, PinterestPinSkeleton } from './pinterest-pin'

interface PinterestMasonryProps {
  projects: Project[]
  onPinClick?: (project: Project) => void
}

export function PinterestMasonry({ 
  projects, 
  onPinClick
}: PinterestMasonryProps) {
  // Distribute items into columns for true masonry - responsive columns
  const columnedItems = useMemo(() => {
    // We'll render the grid using CSS columns for true masonry
    // But we still want to distribute evenly
    return projects
  }, [projects])

  return (
    <div 
      className="px-4"
      style={{
        columnCount: 6,
        columnGap: '16px',
      }}
    >
      <style jsx>{`
        @media (max-width: 1400px) {
          div { column-count: 5 !important; }
        }
        @media (max-width: 1200px) {
          div { column-count: 4 !important; }
        }
        @media (max-width: 900px) {
          div { column-count: 3 !important; }
        }
        @media (max-width: 640px) {
          div { column-count: 2 !important; }
        }
      `}</style>
      {columnedItems.map((project) => (
        <div key={project.id} className="break-inside-avoid">
          <PinterestPin
            project={project}
            onClick={() => onPinClick?.(project)}
          />
        </div>
      ))}
    </div>
  )
}

export function PinterestMasonrySkeleton({ count = 20 }: { count?: number }) {
  return (
    <div 
      className="px-4"
      style={{
        columnCount: 6,
        columnGap: '16px',
      }}
    >
      <style jsx>{`
        @media (max-width: 1400px) {
          div { column-count: 5 !important; }
        }
        @media (max-width: 1200px) {
          div { column-count: 4 !important; }
        }
        @media (max-width: 900px) {
          div { column-count: 3 !important; }
        }
        @media (max-width: 640px) {
          div { column-count: 2 !important; }
        }
      `}</style>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="break-inside-avoid">
          <PinterestPinSkeleton />
        </div>
      ))}
    </div>
  )
}
