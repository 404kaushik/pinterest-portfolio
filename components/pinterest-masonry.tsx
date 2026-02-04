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
  onPinClick,
}: PinterestMasonryProps) {
  const columnedItems = useMemo(() => projects, [projects])

  return (
    <div className="mx-auto w-full max-w-[1600px] px-3 py-2 sm:px-4 sm:py-3 md:px-5 lg:px-6">
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 md:columns-4 md:gap-5 lg:columns-5 xl:columns-6 [column-fill:balance]">
        {columnedItems.map((project) => (
          <div key={project.id} className="break-inside-avoid mb-3 sm:mb-4">
            <PinterestPin
              project={project}
              onClick={() => onPinClick?.(project)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PinterestMasonrySkeleton({ count = 20 }: { count?: number }) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-3 py-2 sm:px-4 md:px-5 lg:px-6">
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 md:columns-4 md:gap-5 lg:columns-5 xl:columns-6 [column-fill:balance]">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="break-inside-avoid mb-3 sm:mb-4">
            <PinterestPinSkeleton />
          </div>
        ))}
      </div>
    </div>
  )
}
