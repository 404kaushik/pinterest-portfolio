import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Kaushik Nag | Software Engineer',
  description: 'New grad software engineer passionate about building beautiful, performant web experiences. View my projects, experience, and get in touch.',
  generator: 'v0.app',
  keywords: ['software engineer', 'web developer', 'portfolio', 'new grad', 'React', 'Next.js'],
  authors: [{ name: 'Kaushik Nag Tumu' }],  
}

export const viewport: Viewport = {
  themeColor: '#e60023',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
