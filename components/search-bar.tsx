'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, TrendingUp, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects, searchSuggestions } from '@/lib/data'

interface SearchBarProps {
  onSelect?: () => void
  autoFocus?: boolean
}

export function SearchBar({ onSelect, autoFocus }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  const filteredProjects = query.trim()
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.summary.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
          p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()))
      )
    : []

  const filteredSuggestions = query.trim()
    ? searchSuggestions.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return

    const newRecent = [
      searchQuery,
      ...recentSearches.filter((s) => s !== searchQuery),
    ].slice(0, 5)
    setRecentSearches(newRecent)
    localStorage.setItem('recentSearches', JSON.stringify(newRecent))

    router.push(`/?search=${encodeURIComponent(searchQuery)}`)
    setQuery('')
    setIsFocused(false)
    onSelect?.()
  }

  const handleProjectClick = (projectId: string) => {
    router.push(`/project/${projectId}`)
    setQuery('')
    setIsFocused(false)
    onSelect?.()
  }

  const showDropdown = isFocused && (query.trim() || recentSearches.length > 0)

  return (
    <div className="relative w-full">
      <div
        className={cn(
          'flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted transition-all duration-200',
          isFocused && 'ring-2 ring-primary/20 bg-background shadow-sm'
        )}
      >
        <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(query)
            }
          }}
          placeholder="Search projects, skills, companies..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="p-1 rounded-full hover:bg-border transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl shadow-xl border border-border overflow-hidden z-50">
          {/* Search Results */}
          {query.trim() && filteredProjects.length > 0 && (
            <div className="p-2">
              <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Projects
              </p>
              {filteredProjects.slice(0, 4).map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-left"
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-lg bg-gradient-to-br flex-shrink-0',
                      project.color
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {project.tags.join(' / ')}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Suggestions */}
          {query.trim() && filteredSuggestions.length > 0 && (
            <div className="p-2 border-t border-border">
              <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Suggestions
              </p>
              {filteredSuggestions.slice(0, 3).map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSearch(suggestion)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-left"
                >
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{suggestion}</span>
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {!query.trim() && recentSearches.length > 0 && (
            <div className="p-2">
              <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Recent
              </p>
              {recentSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-left"
                >
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {query.trim() &&
            filteredProjects.length === 0 &&
            filteredSuggestions.length === 0 && (
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  No results for "{query}"
                </p>
              </div>
            )}
        </div>
      )}
    </div>
  )
}
