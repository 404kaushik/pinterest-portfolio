'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { PinterestSidebar } from '@/components/pinterest-sidebar'
import { PinterestHeader } from '@/components/pinterest-header'
import { FilterTabs } from '@/components/filter-tabs'
import { PinterestMasonry, PinterestMasonrySkeleton } from '@/components/pinterest-masonry'
import { PinDetailModal } from '@/components/pin-detail-modal'
import { projects, filterOptions, profile } from '@/lib/data'
import type { Project } from '@/lib/data'

function HomeContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedPin, setSelectedPin] = useState<Project | null>(null)

  // Filter projects based on search and filter
  const filteredProjects = useMemo(() => {
    let result = projects

    // Apply type filter
    if (activeFilter !== 'all' && activeFilter !== 'profile') {
      result = result.filter(p => p.type === activeFilter)
    }

    // Apply search
    if (query) {
      const q = query.toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.stack.some(s => s.toLowerCase().includes(q))
      )
    }

    return result
  }, [activeFilter, query])

  // Custom tabs including profile name like Pinterest
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'profile', label: profile.name.split(' ')[0] },
    ...filterOptions.slice(1)
  ]

  return (
    <div className="min-h-screen bg-card">
      {/* Sidebar */}
      <PinterestSidebar />

      {/* Main Content */}
      <main className="ml-[72px]">
        {/* Header with Search */}
        <Suspense fallback={null}>
          <PinterestHeader />
        </Suspense>

        {/* Filter Tabs */}
        <FilterTabs
          tabs={tabs}
          activeTab={activeFilter}
          onChange={setActiveFilter}
        />

        {/* Masonry Grid */}
        <div className="py-4">
          {filteredProjects.length > 0 ? (
            <PinterestMasonry
              projects={filteredProjects}
              onPinClick={setSelectedPin}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="mb-4">
                <svg viewBox="0 0 24 24" className="h-16 w-16 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold">No results found</h2>
              <p className="text-muted-foreground">Try a different search term or filter</p>
            </div>
          )}
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

export default function HomePage() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomeContent />
    </Suspense>
  )
}

function HomePageSkeleton() {
  return (
    <div className="min-h-screen bg-card">
      <PinterestSidebar />
      <main className="ml-[72px]">
        <div className="h-[56px]" />
        <div className="flex items-center gap-4 px-4 py-2">
          {['All', 'Kaushik', 'Projects'].map((t) => (
            <div key={t} className="h-6 w-16 rounded bg-secondary" />
          ))}
        </div>
        <div className="py-4">
          <PinterestMasonrySkeleton />
        </div>
      </main>
    </div>
  )
}
