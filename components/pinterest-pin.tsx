'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/data'

interface PinterestPinProps {
  project: Project
  onClick?: () => void
}

export function PinterestPin({ project, onClick }: PinterestPinProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  // Generate a random-ish height for masonry effect based on project id
  const heights = [240, 280, 320, 360, 400, 300, 340]
  const heightIndex = project.id.charCodeAt(0) % heights.length
  const cardHeight = heights[heightIndex]

  return (
    <div
      className="group relative w-full cursor-zoom-in transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container - Pinterest uses 16px radius */}
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-[#e9e9e9] shadow-sm transition-shadow duration-200 group-hover:shadow-lg"
        style={{ height: cardHeight }}
      >
        {project.image ? (
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className={cn(
            'absolute inset-0 bg-gradient-to-br',
            project.color || 'from-gray-400 to-gray-600'
          )}>
            <div className="flex h-full items-center justify-center p-4">
              <h3 className="text-center text-lg font-bold text-white drop-shadow-lg leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
        )}

        {/* Hover Overlay - subtle like Pinterest */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 bg-black/40 transition-opacity duration-150',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Save Button - top right, Pinterest style */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsSaved(!isSaved)
          }}
          className={cn(
            'absolute right-3 top-3 rounded-full px-4 py-2 text-[15px] font-bold shadow-sm transition-all duration-150',
            isSaved
              ? 'bg-[#111] text-white'
              : 'bg-[#e60023] text-white hover:bg-[#ad081b]',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>

        {/* Board Select - top left (optional, hidden for simplicity) */}

        {/* Bottom Right Actions - Pinterest style */}
        <div
          className={cn(
            'absolute bottom-3 right-3 flex items-center gap-2 transition-opacity duration-150',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#111]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </Link>
          )}
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#111]" fill="currentColor">
              <circle cx="12" cy="12" r="2" />
              <circle cx="6" cy="12" r="2" />
              <circle cx="18" cy="12" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Three Dots Menu - Bottom right outside card, like Pinterest */}
      <div className="absolute -bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => e.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#e9e9e9] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#767676]" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Skeleton loader for pins
export function PinterestPinSkeleton() {
  const heights = [240, 280, 320, 360, 400]
  const randomHeight = heights[Math.floor(Math.random() * heights.length)]

  return (
    <div className="w-full">
      <div
        className="animate-pulse rounded-2xl bg-[#e9e9e9] shadow-sm"
        style={{ height: randomHeight }}
      />
    </div>
  )
}
