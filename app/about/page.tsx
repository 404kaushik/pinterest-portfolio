'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PinterestSidebar } from '@/components/pinterest-sidebar'
import { PinterestHeader } from '@/components/pinterest-header'
import { profile, experience, skills, education, projects, writing } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function AboutPage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <div className="min-h-screen bg-card">
      <PinterestSidebar />

      <main className="ml-[72px]">
        <Suspense fallback={null}>
          <PinterestHeader />
        </Suspense>

        <div className="mx-auto max-w-4xl px-6 py-8">
          {/* Profile Header - Pinterest Style */}
          <section className="mb-8 text-center">
            {/* Avatar */}
            <div className="mb-4 flex justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-muted ring-4 ring-card shadow-xl">
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="mb-1 text-3xl font-semibold">{profile.name}</h1>
            <p className="mb-2 text-muted-foreground">{profile.title}</p>
            <p className="mb-2 flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {profile.location}
            </p>

            {/* Bio */}
            <p className="mx-auto mb-6 max-w-xl text-[15px] leading-relaxed">
              {profile.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3">
              <a
                href={profile.resume}
                className="rounded-full bg-primary px-6 py-3 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-secondary px-6 py-3 text-[15px] font-bold text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                Message
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div>
                <span className="font-semibold">{projects.length}</span>
                <span className="ml-1 text-muted-foreground">projects</span>
              </div>
              <div>
                <span className="font-semibold">{experience.length}</span>
                <span className="ml-1 text-muted-foreground">roles</span>
              </div>
              <div>
                <span className="font-semibold">{skills.reduce((acc, s) => acc + s.items.length, 0)}</span>
                <span className="ml-1 text-muted-foreground">skills</span>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Skills & Technologies</h2>
            <div className="space-y-4">
              {skills.map((category) => (
                <div key={category.category}>
                  <h3 className="mb-2 text-sm font-medium text-muted-foreground">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-[15px] text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.dates}</span>
                  </div>
                  <ul className="mb-3 space-y-1.5 text-sm text-muted-foreground">
                    {exp.bullets.slice(0, 2).map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Education</h2>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{education.school}</h3>
                <p className="text-[15px] text-muted-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground">GPA: {education.gpa}</p>
              </div>
              <span className="text-sm text-muted-foreground">{education.dates}</span>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Featured Projects</h2>
              <Link href="/" className="text-sm font-medium text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/?q=${encodeURIComponent(project.title)}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div
                    className={cn(
                      'flex h-28 items-center justify-center bg-gradient-to-br',
                      project.color
                    )}
                  >
                    {project.image ? (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={200}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white/80">
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Writing */}
          {writing.length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-semibold">Writing</h2>
              <div className="space-y-3">
                {writing.map((article) => (
                  <a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                  >
                    <div>
                      <h3 className="font-semibold group-hover:text-primary">{article.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{article.summary}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-2 py-0.5 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
