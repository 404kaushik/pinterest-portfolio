'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { PinterestSidebar } from '@/components/pinterest-sidebar'
import { PinterestHeader } from '@/components/pinterest-header'
import { FilterTabs } from '@/components/filter-tabs'
import { PinterestMasonry, PinterestMasonrySkeleton } from '@/components/pinterest-masonry'
import { PinDetailModal } from '@/components/pin-detail-modal'
import { projects, profile } from '@/lib/data'
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

  // Tabs: All and profile name only (Pinterest-style)
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'profile', label: profile.name.split(' ')[0] },
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Sidebar */}
      <PinterestSidebar />

      {/* Main Content - Pinterest-style feed area */}
      <main className="ml-[72px] min-h-screen">
        {/* Header with Search */}
        <Suspense fallback={null}>
          <PinterestHeader />
        </Suspense>

        {/* Filter Tabs - scrollable on mobile like Pinterest */}
        <FilterTabs
          tabs={tabs}
          activeTab={activeFilter}
          onChange={setActiveFilter}
        />

        {/* Masonry Grid - padded feed */}
        <div className="min-h-[60vh] pb-8 pt-1 sm:pb-12">
          {filteredProjects.length > 0 ? (
            <PinterestMasonry
              projects={filteredProjects}
              onPinClick={setSelectedPin}
            />
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 shadow-sm mx-3 sm:mx-4 md:mx-5 lg:mx-6">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#efefef]">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#767676]" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-bold text-[#211922]">No Pins found</h2>
              <p className="mb-6 max-w-sm text-center text-sm text-[#5f5f5f]">Try a different search or filter to find what you’re looking for.</p>
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className="rounded-full bg-[#e60023] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ad081b]"
              >
                Show all
              </button>
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
    <div className="min-h-screen bg-[#f5f5f5]">
      <PinterestSidebar />
      <main className="ml-[72px]">
        <div className="h-[56px]" />
        <div className="flex items-center gap-4 border-b border-[#e2e2e2] bg-white px-4 py-3">
          {['All', 'Kaushik', 'Projects'].map((t) => (
            <div key={t} className="h-7 w-16 shrink-0 rounded bg-[#efefef]" />
          ))}
        </div>
        <div className="min-h-[60vh] pb-8 pt-1 sm:pb-12">
          <PinterestMasonrySkeleton />
        </div>
      </main>
    </div>
  )
}
