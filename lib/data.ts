// ============================================
// PORTFOLIO DATA - Edit this file to customize your content
// ============================================

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  tags: string[]
  stack: string[]
  image: string
  color: string
  links: {
    demo?: string
    github?: string
    caseStudy?: string
  }
  highlights: string[]
  date: string
  type: 'project' | 'experience' | 'opensource' | 'writing'
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  dates: string
  bullets: string[]
  tech: string[]
  logo?: string
  link?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Writing {
  id: string
  title: string
  summary: string
  date: string
  link: string
  tags: string[]
}

// ============================================
// YOUR PROFILE INFO
// ============================================
export const profile = {
  name: 'Kaushik Nag Tumu',
  title: 'Software Engineer',
  tagline: 'Building beautiful, performant web experiences',
  summary: `I'm a new grad software engineer passionate about creating intuitive user interfaces and scalable backend systems. I love turning complex problems into elegant solutions and am always eager to learn new technologies.`,
  email: 'alex.chen@email.com',
  linkedin: 'https://linkedin.com/in/kaushiknagtumu',
  github: 'https://github.com/404kaushik',
  twitter: 'https://twitter.com/alexchen',
  resume: '/resume.pdf',
  location: 'Toronto, ON',
  avatar: '/avatar.jpg',
}

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: 'taskflow',
    title: 'About Me',
    summary: 'A collaborative project management tool with real-time updates and AI-powered task suggestions.',
    description: 'TaskFlow is a modern project management application built for teams. It features real-time collaboration, Kanban boards, timeline views, and AI-powered task prioritization that learns from your workflow patterns.',
    tags: ['Full Stack', 'AI/ML'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'OpenAI'],
    image: '/projects/aboutme.png',
    color: 'from-blue-400 to-indigo-500',
    links: {
      demo: 'https://taskflow-demo.vercel.app',
      github: 'https://github.com/alexchen/taskflow',
      caseStudy: '/projects/taskflow',
    },
    highlights: [
      'Built real-time collaboration features using WebSockets',
      'Implemented AI task suggestions using OpenAI API',
      'Designed responsive Kanban and timeline views',
      'Achieved 95% test coverage with Jest and Cypress',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'devlink',
    title: 'DevLink',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/grad.jpeg',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'medal',
    title: 'Hack The Hill Medal 3rd Place',
    summary: 'An interactive music visualization app with customizable audio-reactive graphics.',
    description: 'SynthWave transforms your music into stunning visuals. Using Web Audio API and WebGL, it creates real-time visualizations that respond to frequency, amplitude, and beat detection.',
    tags: ['Creative', 'WebGL'],
    stack: ['Three.js', 'Web Audio API', 'GLSL', 'React'],
    image: '/projects/hackdehillmedal.jpeg',
    color: 'from-pink-400 to-purple-500',
    links: {
      demo: 'https://synthwave.vercel.app',
      github: 'https://github.com/alexchen/synthwave',
    },
    highlights: [
      'Created custom GLSL shaders for audio visualization',
      'Implemented beat detection algorithm',
      'Built preset system for different visual styles',
      'Optimized for 60fps performance',
    ],
    date: '2024',
    type: 'project',
  },
  {
    id: 'hackdehill',
    title: 'Hack The Hill',
    summary: 'A markdown note-taking app with cloud sync, offline support, and collaborative editing.',
    description: 'CloudNotes is a privacy-focused note-taking application with end-to-end encryption. Features include markdown support, offline-first architecture, and real-time collaborative editing.',
    tags: ['Productivity', 'PWA'],
    stack: ['Vue.js', 'Firebase', 'IndexedDB', 'Markdown'],
    image: '/projects/hackdehill.jpeg',
    color: 'from-amber-400 to-orange-500',
    links: {
      demo: 'https://cloudnotes.app',
      github: 'https://github.com/alexchen/cloudnotes',
    },
    highlights: [
      'Implemented end-to-end encryption',
      'Built offline-first PWA architecture',
      'Created CRDT-based collaborative editing',
      'Designed minimal, distraction-free UI',
    ],
    date: '2024',
    type: 'project',
  },
  {
    id: 'hackthehillteam',
    title: 'Sleeppyyyy',
    summary: 'A collection of 30+ reusable React hooks for common UI patterns and state management.',
    description: 'An open-source library of well-tested, TypeScript-first React hooks. Includes hooks for local storage, media queries, intersection observer, and more.',
    tags: ['Open Source', 'Library'],
    stack: ['React', 'TypeScript', 'Jest', 'Rollup'],
    image: '/projects/hackdehillteam.jpeg',
    color: 'from-cyan-400 to-blue-500',
    links: {
      github: 'https://github.com/alexchen/react-hooks-lib',
    },
    highlights: [
      '500+ GitHub stars',
      '100% TypeScript with full type inference',
      'Comprehensive documentation with examples',
      'Tree-shakeable for optimal bundle size',
    ],
    date: '2024',
    type: 'opensource',
    featured: true,
  },
  {
    id: 'sdglearn',
    title: 'SDGLearn',
    summary: 'Award-winning hackathon project: A carbon footprint tracker with gamification elements.',
    description: 'Built in 36 hours at TreeHacks 2024. EcoTrack helps users track and reduce their carbon footprint through gamification, social challenges, and personalized recommendations.',
    tags: ['Hackathon', 'Mobile'],
    stack: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
    image: '/projects/sdglearn.jpeg',
    color: 'from-green-400 to-emerald-500',
    links: {
      github: 'https://github.com/alexchen/ecotrack',
    },
    highlights: [
      'Won Best Environmental Impact at TreeHacks 2024',
      'Built full app in 36 hours with team of 4',
      'Integrated with carbon calculation APIs',
      'Featured gamification and social features',
    ],
    date: '2024',
    type: 'project',
  },
  {
    id: 'random-toronto',
    title: 'Scaling WebSockets to 1M Connections',
    summary: 'Technical deep-dive into architecting real-time systems at scale.',
    description: 'A comprehensive guide on building scalable WebSocket infrastructure, covering load balancing, message queues, and horizontal scaling strategies.',
    tags: ['Writing', 'Architecture'],
    stack: ['WebSockets', 'Redis', 'Kubernetes'],
    image: '/projects/toronto.jpeg',
    color: 'from-slate-400 to-zinc-500',
    links: {
      demo: 'https://dev.to/alexchen/scaling-websockets',
    },
    highlights: [
      '10K+ views on Dev.to',
      'Featured in JavaScript Weekly',
      'Covers practical scaling patterns',
    ],
    date: '2024',
    type: 'writing',
  },
  {
    id: 'hacktrent',
    title: 'TypeScript API Client Generator',
    summary: 'CLI tool that generates type-safe API clients from OpenAPI specifications.',
    description: 'An open-source CLI tool that reads OpenAPI/Swagger specs and generates fully typed TypeScript clients with built-in error handling and request/response validation.',
    tags: ['Open Source', 'CLI'],
    stack: ['TypeScript', 'Node.js', 'OpenAPI', 'Zod'],
    image: '/projects/hacktrent.jpeg',
    color: 'from-violet-400 to-purple-500',
    links: {
      github: 'https://github.com/alexchen/api-client-gen',
    },
    highlights: [
      'Generates type-safe clients from OpenAPI specs',
      'Supports multiple HTTP client libraries',
      'Includes runtime validation with Zod',
      'Actively maintained with 200+ stars',
    ],
    date: '2025',
    type: 'opensource',
  },
  {
    id: 'stan',
    title: 'DevLink',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/stan.jpeg',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'random3',
    title: 'My Current Workplace',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/random3.jpg',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'spectrum',
    title: 'Spectrum Award',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/spectrum.jpg',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'deans',
    title: 'Deans Honor Roll',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/deans.jpeg',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'trentinternationalscholarship',
    title: 'International Scholarship Appreciation Dinner',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/trentinternatinoal.jpeg',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'random5',
    title: 'International Scholarship Appreciation Dinner',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/random5.png',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  },
  {
    id: 'random4',
    title: 'International Scholarship Appreciation Dinner',
    summary: 'A networking platform for developers with skill matching and project collaboration features.',
    description: 'DevLink connects developers based on complementary skills and interests. The platform features smart matching algorithms, project boards, and integrated chat for seamless collaboration.',
    tags: ['Full Stack', 'Social'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: '/projects/random4.jpg',
    color: 'from-emerald-400 to-teal-500',
    links: {
      demo: 'https://devlink.app',
      github: 'https://github.com/alexchen/devlink',
    },
    highlights: [
      'Implemented skill-based matching algorithm',
      'Built real-time chat with message persistence',
      'Created project collaboration workflows',
      'Optimized for mobile-first experience',
    ],
    date: '2025',
    type: 'project',
    featured: true,
  }
  
]

// ============================================
// EXPERIENCE
// ============================================
export const experience: Experience[] = [
  {
    id: 'stripe-intern',
    company: 'Stripe',
    role: 'Software Engineering Intern',
    dates: 'Jun 2024 - Aug 2024',
    bullets: [
      'Built internal dashboard for payment analytics serving 500+ employees',
      'Implemented real-time data streaming using Apache Kafka',
      'Reduced API latency by 40% through query optimization',
      'Collaborated with design team to improve UX of merchant tools',
    ],
    tech: ['Ruby', 'React', 'GraphQL', 'Kafka', 'PostgreSQL'],
    link: 'https://stripe.com',
  },
  {
    id: 'meta-intern',
    company: 'Meta',
    role: 'Frontend Engineering Intern',
    dates: 'May 2023 - Aug 2023',
    bullets: [
      'Developed accessibility features for Instagram reaching 2B+ users',
      'Built component library used by 50+ engineers',
      'Implemented A/B testing framework for new features',
      'Mentored incoming interns on React best practices',
    ],
    tech: ['React', 'TypeScript', 'GraphQL', 'Relay', 'Jest'],
    link: 'https://meta.com',
  },
  {
    id: 'startup-intern',
    company: 'TechStart',
    role: 'Full Stack Developer Intern',
    dates: 'Jan 2023 - Apr 2023',
    bullets: [
      'Led development of customer-facing analytics dashboard',
      'Architected microservices backend with Node.js and Docker',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Wrote technical documentation and API specifications',
    ],
    tech: ['Node.js', 'Vue.js', 'Docker', 'AWS', 'MongoDB'],
    link: 'https://techstart.io',
  },
]

// ============================================
// SKILLS
// ============================================
export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Go'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Figma'],
  },
]

// ============================================
// EDUCATION
// ============================================
export const education = {
  school: 'Stanford University',
  degree: 'B.S. Computer Science',
  dates: '2021 - 2025',
  gpa: '3.8',
  coursework: [
    'Data Structures & Algorithms',
    'Systems Programming',
    'Machine Learning',
    'Database Systems',
    'Computer Networks',
    'Human-Computer Interaction',
  ],
  activities: [
    'Teaching Assistant for CS 101',
    'Stanford ACM Chapter',
    'Hackathon Organizer',
  ],
}

// ============================================
// WRITING
// ============================================
export const writing: Writing[] = [
  {
    id: 'scaling-websockets',
    title: 'Scaling WebSockets to 1M Connections',
    summary: 'A deep dive into building real-time infrastructure at scale',
    date: 'Dec 2024',
    link: 'https://dev.to/alexchen/scaling-websockets',
    tags: ['Architecture', 'WebSockets'],
  },
  {
    id: 'typescript-tips',
    title: '10 TypeScript Tips I Wish I Knew Earlier',
    summary: 'Practical TypeScript patterns for cleaner, safer code',
    date: 'Oct 2024',
    link: 'https://dev.to/alexchen/typescript-tips',
    tags: ['TypeScript', 'Tips'],
  },
]

// ============================================
// FILTER OPTIONS
// ============================================
export const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'project', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'opensource', label: 'Open Source' },
  { id: 'writing', label: 'Writing' },
]

export const techFilters = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'AWS',
  'GraphQL',
]

// ============================================
// SEARCH SUGGESTIONS
// ============================================
export const searchSuggestions = [
  'React projects',
  'Full stack',
  'Open source',
  'Stripe internship',
  'TypeScript',
  'Real-time apps',
  'AI/ML projects',
  'Mobile development',
]
