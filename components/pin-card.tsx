'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Bookmark, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/data'
import { useToast } from '@/hooks/use-toast'

interface PinCardProps {
  project: Project
  index?: number
}

export function PinCard({ project, index = 0 }: PinCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const { toast } = useToast()

  // Vary heights for masonry effect
  const heights = ['h-48', 'h-56', 'h-64', 'h-72', 'h-52', 'h-60']
  const heightClass = heights[index % heights.length]

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSaved(!isSaved)
    toast({
      title: isSaved ? 'Removed from saved' : 'Saved to collection',
      description: isSaved
        ? `${project.title} has been removed`
        : `${project.title} has been saved`,
    })
  }

  return (
    <Link href={`/project/${project.id}`}>
      <article
        className="group relative rounded-2xl overflow-hidden bg-card cursor-pointer transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered
            ? '0 20px 40px -15px rgba(0,0,0,0.15)'
            : '0 1px 3px rgba(0,0,0,0.08)',
        }}
      >
        {/* Image / Gradient */}
        <div className={cn('relative w-full overflow-hidden', heightClass)}>
          {/* Skeleton loader */}
          {!isImageLoaded && (
            <div
              className={cn(
                'absolute inset-0 bg-gradient-to-br animate-pulse',
                project.color
              )}
            />
          )}

          {/* Project image or gradient fallback */}
          {project.image ? (
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={cn(
                'w-full h-full object-cover transition-transform duration-500',
                isHovered && 'scale-105'
              )}
              onLoad={() => setIsImageLoaded(true)}
            />
          ) : (
            <div
              className={cn(
                'w-full h-full bg-gradient-to-br transition-transform duration-500 flex items-center justify-center',
                project.color,
                isHovered && 'scale-105'
              )}
            >
              <span className="text-white/80 text-4xl font-bold">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div
            className={cn(
              'absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium flex items-center gap-1.5">
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            className={cn(
              'absolute top-3 right-3 p-2.5 rounded-full transition-all duration-200',
              isHovered || isSaved ? 'opacity-100' : 'opacity-0',
              isSaved
                ? 'bg-primary text-primary-foreground'
                : 'bg-black/60 text-white hover:bg-primary'
            )}
            aria-label={isSaved ? 'Remove from saved' : 'Save project'}
          >
            <Bookmark
              className={cn('w-4 h-4', isSaved && 'fill-current')}
            />
          </button>

          {/* Quick links */}
          <div
            className={cn(
              'absolute bottom-3 right-3 flex gap-2 transition-all duration-200',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-base leading-tight line-clamp-2 mb-1.5 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-muted rounded-full text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-muted/50 border border-border rounded-full text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-0.5 text-xs text-muted-foreground">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
