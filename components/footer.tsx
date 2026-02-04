import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { profile } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: profile.github, icon: Github, label: 'GitHub' },
    { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: profile.twitter, icon: Twitter, label: 'Twitter' },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  ]

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">
                  {profile.name.charAt(0)}
                </span>
              </div>
              <span>{profile.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {profile.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
