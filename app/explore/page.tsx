'use client'

import { useState, Suspense } from 'react'
import { PinterestSidebar } from '@/components/pinterest-sidebar'
import { PinterestHeader } from '@/components/pinterest-header'
import { PinterestMasonry } from '@/components/pinterest-masonry'
import { PinDetailModal } from '@/components/pin-detail-modal'
import { projects, techFilters } from '@/lib/data'
import type { Project } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function ExplorePage() {
  const [selectedPin, setSelectedPin] = useState<Project | null>(null)
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const filteredProjects = selectedTech
    ? projects.filter(p => p.stack.some(s => s.toLowerCase() === selectedTech.toLowerCase()))
    : projects

  return (
    <div className="min-h-screen bg-card">
      <PinterestSidebar />

      <main className="ml-[72px]">
        <Suspense fallback={null}>
          <PinterestHeader />
        </Suspense>

        {/* Categories / Tech Filter */}
        <div className="border-b border-border px-4 py-4">
          <h1 className="mb-4 text-2xl font-semibold">Explore</h1>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                !selectedTech
                  ? 'bg-foreground text-card'
                  : 'bg-secondary hover:bg-secondary/80'
              )}
            >
              All
            </button>
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  selectedTech === tech
                    ? 'bg-foreground text-card'
                    : 'bg-secondary hover:bg-secondary/80'
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="py-4">
          <PinterestMasonry
            projects={filteredProjects}
            onPinClick={setSelectedPin}
          />
        </div>
      </main>

      {/* Pin Detail Modal */}
      {selectedPin && (
        <PinDetailModal
          project={selectedPin}
          onClose={() => setSelectedPin(null)}
          onPinClick={setSelectedPin}
        />
      )}
    </div>
  )
}
