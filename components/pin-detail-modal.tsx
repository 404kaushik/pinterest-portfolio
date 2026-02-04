'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/data'
import { profile, projects } from '@/lib/data'
import { PinterestPin } from './pinterest-pin'

interface PinDetailModalProps {
  project: Project
  onClose: () => void
  onPinClick?: (project: Project) => void
}

// Fake comments data
const fakeComments = [
  { id: 1, user: 'Sarah M.', avatar: '', text: 'This is amazing work! Love the attention to detail.', time: '2d' },
  { id: 2, user: 'Dev_Mike', avatar: '', text: 'Great project! How long did this take to build?', time: '1w' },
]

export function PinDetailModal({ project, onClose, onPinClick }: PinDetailModalProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 500) + 50)
  const [showComments, setShowComments] = useState(true)
  const [comment, setComment] = useState('')

  const relatedProjects = projects.filter(p => 
    p.id !== project.id && 
    (p.tags.some(t => project.tags.includes(t)) || 
     p.stack.some(s => project.stack.includes(s)))
  ).slice(0, 8)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const heights = [400, 450, 500, 550, 600]
  const imageHeight = heights[project.id.charCodeAt(0) % heights.length]

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 pt-8 pb-8">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative flex w-full max-w-[1016px] flex-col overflow-hidden rounded-[32px] bg-card shadow-2xl lg:flex-row">
        {/* Close Button (Back Arrow) */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-md transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Left Side - Image */}
        <div className="relative flex-1 bg-secondary lg:max-w-[508px]">
          <div 
            className="relative w-full h-full"
            style={{ minHeight: imageHeight }}
          >
            {project.image ? (
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover max-h-full"
                priority
              />
            ) : (
              <div className={cn(
                'absolute inset-0 bg-gradient-to-br',
                project.color || 'from-gray-400 to-gray-600'
              )}>
                <div className="flex h-full items-center justify-center p-8">
                  <h2 className="text-center text-3xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h2>
                </div>
              </div>
            )}

            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm shadow-md transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm shadow-md transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:max-w-[508px]">
          {/* Top Actions Bar */}
          <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card px-6 py-4">
            <div className="flex items-center gap-4">
              {/* Like */}
              <button
                onClick={handleLike}
                className="flex items-center gap-1"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className={cn('h-6 w-6', isLiked && 'text-primary')} 
                  fill={isLiked ? 'currentColor' : 'none'} 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className="text-[15px] font-semibold">{likesCount}</span>
              </button>

              {/* Comment */}
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>

              {/* Share */}
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>

              {/* More */}
              <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="6" cy="12" r="1.5" />
                  <circle cx="18" cy="12" r="1.5" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Board Dropdown */}
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-secondary">
                <span className="text-[15px] font-semibold">Portfolio</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>

              {/* Save Button */}
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={cn(
                  'rounded-full px-6 py-3 text-[15px] font-bold transition-colors',
                  isSaved
                    ? 'bg-foreground text-card'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                )}
              >
                {isSaved ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {/* Title */}
            <h1 className="mb-2 text-[28px] font-semibold leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="mb-4 text-[15px] leading-relaxed text-foreground">
              {project.summary}
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  className="ml-1 text-primary hover:underline"
                >
                  @{profile.name.toLowerCase().replace(' ', '')}...
                </Link>
              )}
              <button className="ml-2 font-semibold hover:underline">... more</button>
            </p>

            {/* Tech Stack Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="mb-6 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.title}</p>
              </div>
            </div>

            {/* Links */}
            {(project.links.demo || project.links.github) && (
              <div className="mb-6 flex gap-3">
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary/80"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Live Demo
                  </Link>
                )}
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary/80"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </Link>
                )}
              </div>
            )}

            {/* Comments Section */}
            <div className="border-t border-border pt-4">
              <button
                onClick={() => setShowComments(!showComments)}
                className="mb-4 flex w-full items-center justify-between"
              >
                <span className="text-[15px] font-semibold">{fakeComments.length} Comments</span>
                <svg
                  viewBox="0 0 24 24"
                  className={cn('h-5 w-5 transition-transform', showComments && 'rotate-180')}
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>

              {showComments && (
                <div className="space-y-4">
                  {fakeComments.map((c) => (
                    <div key={c.id} className="flex gap-3">
                      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">{c.user}</span>{' '}
                          <span>{c.text}</span>
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{c.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Comment Input */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
              <input
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 bg-transparent text-[15px] placeholder:text-muted-foreground focus:outline-none"
              />
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" />
                    <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" />
                  </svg>
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Like This Section */}
      {relatedProjects.length > 0 && (
        <div className="relative mt-8 w-full max-w-[1400px]">
          <h2 className="mb-4 px-4 text-xl font-semibold text-white">More like this</h2>
          <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4">
            {relatedProjects.map((p) => (
              <PinterestPin
                key={p.id}
                project={p}
                onClick={() => onPinClick?.(p)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
