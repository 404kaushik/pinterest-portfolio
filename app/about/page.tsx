'use client'

import { Suspense, useState } from 'react'
import Image from 'next/image'
import { PinterestSidebar } from '@/components/pinterest-sidebar'
import { PinterestHeader } from '@/components/pinterest-header'
import { profile, experience, skills, education, certifications } from '@/lib/data'
import { cn } from '@/lib/utils'

// Real projects from Devpost
const hackathonProjects = [
  {
    id: 'timetable-sweetie',
    title: 'Timetable Sweetie',
    tagline: 'AI accountability partner with voice',
    summary: 'AI-powered tool that helps you stay on track with real-time voice interaction and personalized encouragement.',
    description: 'Built an intelligent AI companion that listens through voice, helps manage schedules, and provides motivation. Features real-time optimization of daily events, multi-language support, and a clean calendar interface.',
    color: 'from-pink-400 to-rose-500',
    image: '/projects/timetable.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'Express', 'Vite'],
    features: [
      'Real-time voice recognition and interaction',
      'Smart event optimization',
      'Multi-language support',
      'Visual calendar interface',
      'Personalized encouragement system'
    ],
    github: 'https://github.com/anasabushaikha/hth_2024.git',
    devpost: 'https://devpost.com/software/timetable-sweetie',
    youtube: 'https://youtu.be/qsb5jvVwWbk',
    hackathon: 'Hack the Hill II',
    award: 'Winner - General Challenge',
    year: '2024'
  },
  {
    id: 'mydog8it',
    title: 'MyDog8it',
    tagline: 'AI excuse generator',
    summary: 'Generate custom excuses for any situation with adjustable tone and context using AI.',
    description: 'A playful take on the classic "dog ate my homework" excuse. Uses AI to create believable (or funny) excuses on demand with tone selection and image analysis capabilities.',
    color: 'from-amber-400 to-orange-500',
    image: '/projects/mydogateit.jpg',
    icon: '🐶',
    tech: ['React', 'Next.js', 'TypeScript', 'Groq API', 'Tailwind', 'Tesseract.js'],
    features: [
      'Custom tone selection (serious, humorous, desperate)',
      'Context-aware excuse generation',
      'Image upload with OCR analysis',
      'Predefined prompt templates',
      'Social media sharing ready'
    ],
    demo: 'https://resonant-tartufo-926d34.netlify.app/',
    github: 'https://github.com/404kaushik/myDog8iT',
    devpost: 'https://devpost.com/software/mydog8it',
    youtube: 'https://youtu.be/NXJ2cX--v4Q',
    hackathon: 'brainrot jia.seed',
    award: 'Winner - i laughed. (new hackers prize)',
    year: '2024'
  },
  {
    id: 'sdglearn',
    title: 'SDGLearn',
    tagline: 'Making UN goals accessible',
    summary: 'Discover and learn about UN Sustainable Development Goals through AI-generated videos and interactive content.',
    description: 'Platform that makes the 2030 Agenda engaging through AI video generation, progress tracking, and curated educational content. Chat feature provides insights on any SDG topic.',
    color: 'from-emerald-400 to-teal-500',
    image: '/projects/sdglearn.jpg',
    tech: ['React', 'Flask', 'Next.js', 'Tailwind', 'moviepy', 'ElevenLabs', 'mongodb', 'ffmpeg'],
    features: [
      'AI-powered video content generation',
      'Track progress on all 17 SDGs',
      'Interactive chat for insights',
      'Curated educational resources',
      'Share learning progress'
    ],
    demo: 'https://devpost.com/software/sdglearn',
    github: 'https://github.com/404kaushik/tmu-gdg-hacks',
    youtube: 'https://youtu.be/a3t2t5NtjVc',
    devpost: 'https://devpost.com/software/sdglearn',
    hackathon: 'UN SDG Hackathon',
    award: 'Winner',
    year: '2024'
  },
  {
    id: 'supernova',
    title: 'supernova',
    tagline: 'Viral reel creator',
    summary: 'Turn any idea into an engaging viral reel or TikTok video of yourself as an influencer in seconds.',
    description: 'Transform your ideas into viral-ready content instantly. Uses AI to create professional influencer-style videos perfect for TikTok and Instagram Reels.',
    color: 'from-purple-400 to-pink-500',
    image: '/projects/supernova.jpg',
    icon: '🌟',
    tech: ['React', 'AI Video', 'TypeScript', 'Next.js'],
    features: [
      'Instant video generation from ideas',
      'Influencer-style content creation',
      'Ready for TikTok and Instagram',
      'Multiple video styles',
      'Quick export and sharing'
    ],
    demo: 'https://devpost.com/software/supernova-05c6v1',
    youtube: 'https://youtu.be/kPx-YxHjzRY',
    devpost: 'https://devpost.com/software/supernova-05c6v1',
    year: '2024'
  },
  {
    id: 'finvision',
    title: 'FinVision',
    tagline: 'Track with precision, trade with vision',
    summary: 'Smart financial tracking and trading platform with real-time data visualization.',
    description: 'Comprehensive financial tool that helps you track investments and make informed trading decisions with precision analytics and real-time market data.',
    color: 'from-blue-400 to-cyan-500',
    image: '/projects/finvision.jpg',
    icon: '📈',
    tech: ['React', 'Financial APIs', 'Data Visualization', 'Real-time Updates'],
    features: [
      'Real-time market tracking',
      'Portfolio analytics',
      'Trading insights',
      'Performance metrics',
      'Custom alerts and notifications'
    ],
    demo: 'https://devpost.com/software/finvision-5wibfu',
    youtube: 'https://youtu.be/WEGGJGLYSO8',
    devpost: 'https://devpost.com/software/finvision-5wibfu',
    year: '2024'
  }
]

export default function AboutPage() {
  const [selectedProject, setSelectedProject] = useState<typeof hackathonProjects[0] | null>(null)

  const openModal = (project: typeof hackathonProjects[0]) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  const getYoutubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/)
    const id = match ? match[1] : ''
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : ''
  }

  return (
    <div className="min-h-screen">
      <PinterestSidebar />

      <main className="ml-[72px]">
        <Suspense fallback={null}>
          <PinterestHeader />
        </Suspense>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
          {/* Profile Header */}
          <section className="mb-6 sm:mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full bg-white/80 ring-4 ring-white shadow-lg">
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="mb-1 text-2xl sm:text-3xl font-bold text-[#211922]">{profile.name}</h1>
            <p className="mb-2 text-sm sm:text-base text-[#5f5f5f]">{profile.title}</p>
            <p className="mb-2 flex items-center justify-center gap-1 text-xs sm:text-sm text-[#5f5f5f]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {profile.location}
            </p>

            <p className="mx-auto mb-6 max-w-xl text-sm sm:text-[15px] leading-relaxed text-[#211922] px-4">
              {profile.summary}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
              <a
                href={profile.resume}
                className="w-full sm:w-auto rounded-full bg-[#e60023] px-6 py-3 text-sm sm:text-[15px] font-semibold text-white transition-all hover:bg-[#ad081b] active:scale-95"
              >
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-full sm:w-auto rounded-full bg-[#efefef] border border-[#cdcdcd] px-6 py-3 text-sm sm:text-[15px] font-semibold text-[#211922] transition-all hover:bg-[#e2e2e2] active:scale-95"
              >
                Message
              </a>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {[
                { href: profile.github, path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { href: profile.linkedin, path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { href: profile.twitter, path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#e2e2e2] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#211922]" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#211922]">{hackathonProjects.length}</span>
                <span className="ml-1 text-[#5f5f5f]">projects</span>
              </div>
              <div>
                <span className="font-bold text-[#211922]">{experience.length}</span>
                <span className="ml-1 text-[#5f5f5f]">roles</span>
              </div>
              <div>
                <span className="font-bold text-[#211922]">{skills.reduce((acc, s) => acc + s.items.length, 0)}</span>
                <span className="ml-1 text-[#5f5f5f]">skills</span>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-6 sm:mb-8 rounded-2xl bg-white p-5 sm:p-6 shadow-sm">
            <h2 className="mb-4 text-base sm:text-lg font-bold text-[#211922]">Skills & Technologies</h2>
            <div className="space-y-4">
              {skills.map((category) => (
                <div key={category.category}>
                  <h3 className="mb-2 text-xs sm:text-sm font-semibold text-[#5f5f5f]">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#efefef] px-3 py-1.5 text-xs sm:text-sm font-medium text-[#211922]"
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
          <section className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-base sm:text-lg font-bold text-[#211922]">Experience</h2>
            <div className="space-y-3 sm:space-y-4">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-[#211922]">{exp.role}</h3>
                      <p className="text-sm sm:text-[15px] text-[#5f5f5f]">{exp.company}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-[#767676] whitespace-nowrap">{exp.dates}</span>
                  </div>
                  <ul className="mb-3 space-y-1.5 text-xs sm:text-sm text-[#5f5f5f]">
                    {exp.bullets.slice(0, 2).map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e60023]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#efefef] px-2.5 py-0.5 text-xs text-[#211922]"
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
          <section className="mb-6 sm:mb-8 rounded-2xl bg-white p-5 sm:p-6 shadow-sm">
            <h2 className="mb-4 text-base sm:text-lg font-bold text-[#211922]">Education</h2>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="font-bold text-[#211922]">{education.school}</h3>
                <p className="text-sm sm:text-[15px] text-[#5f5f5f]">{education.degree}</p>
                <p className="text-xs sm:text-sm text-[#767676]">GPA: {education.gpa}</p>
              </div>
              <span className="text-xs sm:text-sm text-[#767676] whitespace-nowrap">{education.dates}</span>
            </div>
          </section>

          {/* Hackathon Projects */}
          <section className="mb-6 sm:mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-[#211922]">Hackathon Projects</h2>
              <span className="text-xs sm:text-sm font-semibold text-[#e60023]">
                3x Winner 🏆
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
              {hackathonProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:ring-offset-2 text-left"
                >
                  <div
                    className={cn(
                      'relative h-20 sm:h-28 w-full overflow-hidden',
                      !project.image && 'flex items-center justify-center bg-gradient-to-br',
                      project.color
                    )}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="text-3xl sm:text-4xl">{project.icon}</span>
                    )}
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-bold text-[#211922] line-clamp-1 group-hover:text-[#e60023] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[10px] sm:text-xs text-[#767676] line-clamp-2">
                      {project.tagline}
                    </p>
                    {project.award && (
                      <span className="mt-2 inline-block text-[9px] sm:text-[10px] font-semibold text-[#e60023]">
                        🏆 Winner
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Certifications & Awards — Pinterest-style pin grid */}
          {certifications.length > 0 && (
            <section className="mb-6 sm:mb-8">
              <h2 className="mb-4 text-base sm:text-lg font-bold text-[#211922]">
                Certifications & Awards
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {certifications.map((cert) => (
                  cert.link ? (
                    <a
                      key={cert.id}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:ring-offset-2 text-left"
                    >
                      <div className={cn(
                        'flex h-14 sm:h-16 items-center justify-center px-4',
                        cert.type === 'certification'
                          ? 'bg-gradient-to-br from-[#e60023] to-[#ad081b]'
                          : 'bg-gradient-to-br from-[#efefef] to-[#e2e2e2]'
                      )}>
                        {cert.type === 'certification' ? (
                          <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor" aria-hidden>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ) : (
                          <span className="text-2xl sm:text-3xl" aria-hidden>🏆</span>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-3 sm:p-4">
                        <h3 className="text-sm sm:text-[15px] font-bold text-[#211922] line-clamp-2 group-hover:text-[#e60023] transition-colors">
                          {cert.title}
                        </h3>
                        <p className="mt-1 text-[10px] sm:text-xs font-medium text-[#767676]">
                          {cert.issuer}
                        </p>
                        <p className="mt-0.5 text-[10px] sm:text-xs text-[#5f5f5f]">
                          {cert.issuedDate}
                        </p>
                        {cert.description && (
                          <p className="mt-2 text-[10px] sm:text-xs text-[#5f5f5f] line-clamp-2">
                            {cert.description}
                          </p>
                        )}
                        <span className="mt-2 inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-[#e60023] opacity-0 transition-opacity group-hover:opacity-100">
                          View credential
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={cert.id}
                      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none border border-transparent focus-within:ring-2 focus-within:ring-[#e60023] focus-within:ring-offset-2 text-left"
                    >
                      <div className={cn(
                        'flex h-14 sm:h-16 items-center justify-center px-4',
                        cert.type === 'certification'
                          ? 'bg-gradient-to-br from-[#e60023] to-[#ad081b]'
                          : 'bg-gradient-to-br from-[#efefef] to-[#e2e2e2]'
                      )}>
                        {cert.type === 'certification' ? (
                          <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor" aria-hidden>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ) : (
                          <span className="text-2xl sm:text-3xl" aria-hidden>🏆</span>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-3 sm:p-4">
                        <h3 className="text-sm sm:text-[15px] font-bold text-[#211922] line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="mt-1 text-[10px] sm:text-xs font-medium text-[#767676]">
                          {cert.issuer}
                        </p>
                        <p className="mt-0.5 text-[10px] sm:text-xs text-[#5f5f5f]">
                          {cert.issuedDate}
                        </p>
                        {cert.description && (
                          <p className="mt-2 text-[10px] sm:text-xs text-[#5f5f5f] line-clamp-3">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl my-8 rounded-3xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="sticky top-4 right-4 float-right z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#efefef] hover:bg-[#e2e2e2] transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#211922]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8 pb-6 sm:pb-8">
              {selectedProject.youtube && getYoutubeEmbedUrl(selectedProject.youtube) ? (
                <div className="relative mb-6 w-full overflow-hidden rounded-2xl bg-black" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={getYoutubeEmbedUrl(selectedProject.youtube)}
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              ) : (
                <div className="relative mb-6 h-32 sm:h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br">
                  {selectedProject.image ? (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center text-6xl sm:text-7xl">{selectedProject.icon}</span>
                  )}
                </div>
              )}

              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#211922]">{selectedProject.title}</h2>
                {selectedProject.award && (
                  <span className="rounded-full bg-[#e60023]/10 px-3 py-1 text-xs font-bold text-[#e60023]">
                    🏆 {selectedProject.award}
                  </span>
                )}
              </div>
              
              <p className="text-base sm:text-lg text-[#5f5f5f] mb-1">{selectedProject.tagline}</p>
              
              {selectedProject.hackathon && (
                <p className="text-xs sm:text-sm text-[#767676] mb-6">
                  {selectedProject.hackathon} • {selectedProject.year}
                </p>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#767676]">
                    Overview
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#211922]">{selectedProject.summary}</p>
                </div>

                <div>
                  <h3 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#767676]">
                    What We Built
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#211922]">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#767676]">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#efefef] px-3 py-1.5 text-xs sm:text-sm font-medium text-[#211922]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h3 className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#767676]">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex gap-3">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 shrink-0 text-[#e60023] mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm sm:text-[15px] text-[#211922]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#efefef] px-6 py-3 text-sm font-semibold text-[#211922] transition-all hover:bg-[#e2e2e2] active:scale-95"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e60023] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#ad081b] active:scale-95"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}