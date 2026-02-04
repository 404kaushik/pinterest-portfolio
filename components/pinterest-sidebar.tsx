'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function PinterestSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-[72px] flex-col items-center bg-white py-5 border-r shadow-">
      {/* Pinterest Logo - exact Pinterest red */}
      <Link href="/" className="mb-2 flex h-12 w-12 items-center justify-center rounded-full hover:bg-[#e9e9e9] transition-colors">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-12"
          fill="#e60023"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-5 mt-4">
        {/* Home - filled when active */}
        <Link
          href="/"
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
            pathname === '/' ? 'bg-[#111] text-white' : 'hover:bg-[#e9e9e9] text-[#111]'
          )}
          title="Home"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" />
          </svg>
        </Link>

        {/* Explore */}
        <Link
          href="/explore"
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
            pathname === '/explore' ? 'bg-[#111] text-white' : 'hover:bg-[#e9e9e9] text-[#111]'
          )}
          title="Explore"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <rect x="8" y="8" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
            <rect x="13" y="8" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
            <rect x="8" y="13" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
            <rect x="13" y="13" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
          </svg>
        </Link>

        {/* Create */}
        <Link
          href="/contact"
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
            pathname === '/contact' ? 'bg-[#111] text-white' : 'hover:bg-[#e9e9e9] text-[#111]'
          )}
          title="Create"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </Link>

        {/* Notifications with badge */}
        <button
          className="relative flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-[#e9e9e9] text-[#111]"
          title="Notifications"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {/* Red notification badge */}
          <span className="absolute right-0.5 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#e60023] px-1 text-[10px] font-bold text-white">
            99+
          </span>
        </button>

        {/* Messages / About */}
        <Link
          href="/about"
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
            pathname === '/about' ? 'bg-[#111] text-white' : 'hover:bg-[#e9e9e9] text-[#111]'
          )}
          title="Messages"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </Link>
      </nav>

      {/* Settings at bottom */}
      <div className="mt-auto">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-[#e9e9e9] text-[#111]"
          title="Settings"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </aside>
  )
}
