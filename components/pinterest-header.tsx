'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { searchSuggestions, profile } from '@/lib/data'

interface PinterestHeaderProps {
  showSearch?: boolean
}

export function PinterestHeader({ showSearch = true }: PinterestHeaderProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [isFocused, setIsFocused] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchSuggestions.filter(s =>
        s.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filtered.slice(0, 6))
    } else {
      setSuggestions(searchSuggestions.slice(0, 6))
    }
  }, [query])

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push('/')
    }
    setIsFocused(false)
    inputRef.current?.blur()
  }

  return (
    <header className="sticky top-0 z-30 flex h-[60px] items-center gap-2 bg-white px-4">
      {showSearch && (
        <div className="relative flex-1">
          <div
            className={cn(
              'flex h-12 items-center gap-2 rounded-full px-4 transition-all',
              isFocused 
                ? 'bg-white shadow-[0_0_0_4px_#0074e8]' 
                : 'bg-[#e9e9e9]'
            )}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 text-[#767676]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(query)
                }
              }}
              className="flex-1 bg-transparent text-[16px] text-[#111] placeholder:text-[#767676] focus:outline-none"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('')
                  inputRef.current?.focus()
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-[#cdcdcd] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#111]" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            )}
          </div>

          {/* Suggestions Dropdown - Pinterest style */}
          {isFocused && (
            <div className="absolute left-0 right-0 top-14 overflow-hidden rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-[#cdcdcd]">
              {suggestions.length > 0 && (
                <div className="py-2">
                  {suggestions.map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => handleSearch(suggestion)}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-[#e9e9e9] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-[#767676]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      <span className="text-[15px] text-[#111]">{suggestion}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* User Avatar - Pinterest style */}
      <div className="flex items-center gap-0">
        <button className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-[#e9e9e9] transition-colors">
          <div className="relative h-6 w-6 overflow-hidden rounded-full bg-[#e9e9e9]">
            <Image
              src={profile.avatar || "/placeholder.svg"}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#e9e9e9] transition-colors">
          <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#111]" fill="currentColor">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </button>
      </div>
    </header>
  )
}
