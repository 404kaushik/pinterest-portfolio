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
    <div className="min-h-screen bg-[#f5f5f5]">
      <PinterestSidebar />

      <main className="ml-[72px] min-h-screen">
        <Suspense fallback={null}>
          <PinterestHeader />
        </Suspense>

        {/* Categories / Tech Filter - Pinterest style, scrollable on mobile */}
        <div className="border-b border-[#e2e2e2] bg-white px-3 py-4 sm:px-4">
          <h1 className="mb-4 text-xl font-bold text-[#111] sm:text-2xl">Explore</h1>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 sm:flex-wrap">
            <button
              onClick={() => setSelectedTech(null)}
              className={cn(
                'shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e60023] focus-visible:ring-offset-1',
                !selectedTech
                  ? 'bg-[#111] text-white hover:bg-[#333]'
                  : 'bg-[#efefef] text-[#111] hover:bg-[#e2e2e2]'
              )}
            >
              All
            </button>
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                className={cn(
                  'shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e60023] focus-visible:ring-offset-1',
                  selectedTech === tech
                    ? 'bg-[#111] text-white hover:bg-[#333]'
                    : 'bg-[#efefef] text-[#111] hover:bg-[#e2e2e2]'
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="min-h-[60vh] pb-8 pt-1 sm:pb-12">
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
