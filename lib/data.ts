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

export interface Certification {
  id: string
  title: string
  issuer: string
  issuedDate: string
  description?: string
  link?: string
  type: 'certification' | 'award'
}

// ============================================
// YOUR PROFILE INFO
// ============================================
export const profile = {
  name: 'Kaushik Nag Tumu',
  title: 'Software Engineer @ Designed',
  tagline: 'Someone who loves to build',
  summary: `Software Engineer at Designed Wealth Management. I love to build—whether it's full-stack apps, hackathon projects, or tools that make a difference. 3+ years of experience across fintech, research, and education.`,
  email: 'kaushiknag72@outlook.com',
  linkedin: 'https://www.linkedin.com/in/kaushiknagtumu/',
  github: 'https://github.com/404kaushik',
  twitter: 'https://twitter.com/kaushiknag',
  resume: '/resume.pdf',
  location: 'Toronto, Ontario, Canada',
  avatar: '/profilePic.JPG',
}

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: 'taskflow',
    title: 'About Me',
    summary: 'I’m a Computer Science major with specializations in Software Engineering and Data Analytics, recently graduated from Trent University in April 2025. I’m passionate about using technology to simplify work, uncover insights, and build systems that just make sense. Currently, I work as a Software Engineer at Designed Wealth Management, where I help manage and optimize data pipelines that drive financial insights and decision-making. Previously, I supported Junior Achievement (JA) by automating workflows and improving internal systems. I’ve worked with tools like Microsoft 365, Power Automate, SharePoint, and Salesforce to streamline operations and boost team productivity. I enjoy diving into new technologies, solving complex problems, and collaborating across teams to turn ideas into impactful solutions.',
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
    title: 'My Graduation Picture',
    summary: 'I graduated with a BScH in Computer Science with Specializations in Software Engineering and Data Analytics from Trent University in April 2025.',
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
    summary: 'This is a picture of the medal I got at Hack the Hill II, where I placed 3rd in the General Theme category at the University of Ottawa.',
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
    summary: 'Hack the Hill II was my first hackathon, where I collaborated with a team of 4 random people with a participation of over 800+ participants across Ontario to build and ship a project under tight deadlines. Our team placed 3rd in the General Theme category, making the experience especially rewarding. The event strengthened my interest in fast-paced, collaborative software development and real-world problem solving.',
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
    title: 'My team, the 4th guy passed out by the awards ceremony',
    summary: 'Hack the Hill II was my first hackathon, where I collaborated with a team of 4 random people with a participation of over 800+ participants across Ontario to build and ship a project under tight deadlines. Our team placed 3rd in the General Theme category, making the experience especially rewarding. The event strengthened my interest in fast-paced, collaborative software development and real-world problem solving.',
    description: 'An open-source library of well-tested, TypeScript-first React hooks. Includes hooks for local storage, media queries, intersection observer, and more.',
    tags: ['Python', 'Library'],
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
    title: 'HackTrent Team',
    summary: 'My team at HackTrent, where I was the VP Tech, my very first full stack project i built which was used for registration of hackers for the event.',
    description: 'An open-source CLI tool that reads OpenAPI/Swagger specs and generates fully typed TypeScript clients with built-in error handling and request/response validation.',
    tags: ['Python', 'CLI'],
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
    title: 'Stan Hackathon',
    summary: 'A hackathon organized by a startup inviting 60 of the best software engineers in Toronto. My project was placed 6th and did not win anything :(',
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
    title: 'My Current Workplace Team',
    summary: 'This is my team at Designed Wealth Management, where I work as a Software Engineer.',
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
    summary: 'Awarded by my college to students with excellent academic performance and leadership qualities by the president of the college.',
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
    summary: 'Awarded every year of my academic journey for successfully maintaining a GPA of over 85%.',
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
    summary: 'A networking event organized by the International Office of Trent University to appreciate the international students for their academic achievements and contributions to the campus community. I was able to bag a scholarship of $22,000 throughout my academic journey.',
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
    title: 'me lost in toronto',
    summary: 'just a random aesthetic picture of not me but the background skyscrappers of toronto',
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
    title: 'ZENNNN',
    summary: 'Buddhist temple in Khwartha Lakes, Ontario',
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
// EXPERIENCE (aligned with LinkedIn)
// ============================================
export const experience: Experience[] = [
  {
    id: 'designed',
    company: 'Designed Wealth Management',
    role: 'Junior Software Engineer',
    dates: 'Jul 2025 - Present',
    bullets: [
      'Built and managed Azure data pipelines and data warehouses to streamline organization and analysis of financial data.',
      'Developed predictive models using Azure AutoML and Python to forecast asset growth and assess portfolio risks.',
      'Processed and analyzed large-scale transaction datasets in Databricks (PySpark), increasing the speed and accuracy of financial reporting.',
      'Designed and maintained Power BI dashboards with live financial data and predictive insights, enhancing decision-making for advisors.',
      'Automated recurring reports and secure file transfers utilizing Power Automate and WinSCP, improving team efficiency.'
    ],
    tech: ['Azure', 'Databricks', 'PySpark', 'Power BI', 'AutoML', 'Python', 'Power Automate', 'WinSCP', 'Fintech'],
    link: 'https://www.linkedin.com/company/designed-securities-ltd',
  },
  {
    id: 'ja-canada',
    company: 'JA Canada',
    role: 'Research Data Assistant',
    dates: 'May 2025 - Jul 2025',
    bullets: [
      'Maintained and updated JA-NEO and CPD websites using Squarespace, ensuring up-to-date content for stakeholders.',
      'Automated internal workflows by developing solutions using Power Automate and SharePoint, reducing repetitive tasks.',
      'Entered, cleaned, and managed student survey data in Salesforce, ensuring complete and reliable program records.',
      'Assisted in creating and delivering Salesforce training and onboarding materials for staff and program participants.',
      'Worked effectively within a hybrid team environment utilizing Microsoft Teams, SharePoint, and Office 365 tools.'
    ],
    tech: ['Squarespace', 'Salesforce', 'Power Automate', 'SharePoint', 'Microsoft Teams', 'Excel'],
    link: 'https://www.linkedin.com/company/junior-achievement-of-canada',
  },
  {
    id: 'hostelhop',
    company: 'HostelHop',
    role: 'Full-stack Developer Intern',
    dates: 'Mar 2024 - Aug 2024',
    bullets: [
      'Implemented a Python-based data pipeline with web scraping, automating hostel listings and improving data accuracy by 40%.',
      'Deployed scalable backend services on Google Cloud Platform (GCP) using Kubernetes and Cloud Run, handling over 10,000 concurrent requests.',
      'Collaborated in a cross-functional team to optimize application architecture, CI/CD deployment processes, and ensure robust cloud-native solutions.',
      'Gained hands-on experience with best practices in Kubernetes orchestration, cloud-native design, and real-world CI/CD pipelines.'
    ],
    tech: ['Python', 'Web Scraping', 'GCP', 'Kubernetes', 'Cloud Run', 'Full Stack', 'React', 'Node.js'],
    link: 'https://www.linkedin.com/company/hostelhop',
  },
  {
    id: 'trent-ta',
    company: 'Trent University',
    role: 'Teaching Assistant',
    dates: 'Jan 2024 - Apr 2024',
    bullets: [
      'Supported instructors in facilitating computer science coursework, including grading assignments and providing guidance to students.',
      'Conducted labs and tutorials on software engineering and data analysis topics at Durham, Ontario campus.',
      'Fostered a positive and engaging learning environment for students at various skill levels.'
    ],
    tech: ['Teaching', 'Education', 'Computer Science'],
    link: 'https://www.linkedin.com/company/trent-university',
  },
  {
    id: 'easy-fits',
    company: 'Easy Fits',
    role: 'Frontend Developer',
    dates: 'Sep 2023 - Feb 2024',
    bullets: [
      'Designed and helped build a virtual try-on tool using React.js and Canvas API, boosting average user session time by 40%.',
      'Enhanced platform accessibility by implementing ARIA roles and meeting WCAG 2.1 AA standards, supporting users with diverse needs.',
      'Collaborated closely with backend engineers to integrate RESTful APIs for real-time updates and smooth data handling.',
      'Improved frontend performance and debugging processes while deepening skills in teamwork and accessibility best practices.'
    ],
    tech: ['React', 'Canvas API', 'Frontend', 'Accessibility', 'API Integration'],
    link: 'https://www.linkedin.com/company/easy-fits',
  },
  {
    id: 'staples',
    company: 'Staples',
    role: 'Technical Sales Associate',
    dates: 'Jul 2021 - Dec 2021',
    bullets: [
      'Provided technical sales assistance to customers, helping identify tailored solutions to meet their tech needs.',
      'Offered customer support and troubleshooting for a wide range of software and hardware products.',
      'Developed strong communication and problem-solving skills in a fast-paced retail environment.'
    ],
    tech: ['Sales', 'Customer Support', 'Technical Consulting'],
    link: 'https://www.linkedin.com/company/staples-canada',
  },
]

// ============================================
// SKILLS (aligned with LinkedIn)
// ============================================
export const skills: Skill[] = [
  {
    category: 'Engineering',
    items: ['Software Engineering', 'Big Data', 'Data Analytics', 'Data Engineering'],
  },
  {
    category: 'Full Stack, Data Analysis, Frontend Proficient',
    items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Python', 'SQL', 'NoSQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Kafka', 'RabbitMQ'],
  },
  {
    category: 'Other',
    items: ['Risk', 'Research', 'Teaching', 'Sales', 'Accounting', 'Finance', 'Investment', 'Management', 'Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Critical Thinking', 'Creativity', 'Innovation', 'Adaptability', 'Flexibility', 'Time Management', 'Organization', 'Proactivity'],
  },
]

// ============================================
// EDUCATION (aligned with LinkedIn)
// ============================================
export const education = {
  school: 'Trent University',
  degree: 'Computer Science with Specialisation in Data Analysis and Software Engineering',
  dates: '2021 - 2025',
  gpa: '3.9',
  coursework: [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Data Analysis',
  ],
  activities: [
    'Vice President Tech @ Trent Business Students\' Association',
    'Web Dev Team Lead @ HackTrent',
    'Peer Note Taker',
  ],
}

// ============================================
// WRITING (kept for other pages that may use it)
// ============================================
export const writing: Writing[] = []

// ============================================
// CERTIFICATIONS & AWARDS (from LinkedIn)
// ============================================
export const certifications: Certification[] = [
  {
    id: 'udemy-dsa',
    title: 'Data Structures and Algorithms: In-depth using C#',
    issuer: 'Udemy',
    issuedDate: 'Aug 2023',
    type: 'certification',
    link: 'https://udemy.com/certificate/UC-898eca51-763e-44af-ac60-0200bf3bd4da/',
  },
  {
    id: 'ifc-csi',
    title: 'Investment Funds In Canada',
    issuer: 'Canadian Securities Institute (CSI)',
    issuedDate: 'Jan 2026',
    type: 'certification',
    link: 'https://www.credly.com/badges/fd3bdfc4-51ff-4997-a1d8-5f8f3f7d84fa/linked_in_profile',
  },
  {
    id: 'solutions-hack',
    title: 'Solutions Hack Winner',
    issuer: 'Major League Hacking',
    issuedDate: 'Jul 2025',
    description: 'Best Use of Gemini AI at TMU Google Developer Group hackathon',
    type: 'award',
  },
  {
    id: 'presidents-honor-roll',
    title: "President's Honor Roll",
    issuer: 'Trent University',
    issuedDate: 'Apr 2025',
    description: 'Awarded for maintaining a GPA of over 80% all four academic years',
    type: 'award',
  },
  {
    id: 'spectrum-award',
    title: 'Spectrum Award',
    issuer: 'Champlain College - Trent University',
    issuedDate: 'Mar 2025',
    description: 'Outstanding involvement and exceptional contributions to community and extracurricular initiatives',
    type: 'award',
  },
  {
    id: 'hack-the-hill',
    title: 'Hack The Hill Winner',
    issuer: 'University of Ottawa',
    issuedDate: 'Oct 2024',
    type: 'award',
  },
  {
    id: 'deans-24-25',
    title: "Dean's Honor Roll (2024-2025)",
    issuer: 'Trent University',
    issuedDate: 'Mar 2025',
    description: 'GPA > 80% for the academic year',
    type: 'award',
  },
  {
    id: 'deans-23-24',
    title: "Dean's Honour Roll (2023-2024)",
    issuer: 'Trent University',
    issuedDate: 'Apr 2024',
    description: 'GPA > 80% for the academic year',
    type: 'award',
  },
  {
    id: 'deans-22-23',
    title: "Dean's Honour Roll (2022-2023)",
    issuer: 'Trent University',
    issuedDate: 'Apr 2023',
    description: 'GPA > 80% during the academic year',
    type: 'award',
  },
  {
    id: 'deans-21-22',
    title: "Dean's Honour Roll (2021-2022)",
    issuer: 'Trent University',
    issuedDate: 'Sep 2021',
    description: 'GPA > 80% during the academic year',
    type: 'award',
  },
  {
    id: 'trent-scholarship',
    title: 'Trent International Scholarship',
    issuer: 'Trent University',
    issuedDate: 'Jul 2021',
    description: 'Excellent academic achievements and active community involvement ($30,000)',
    type: 'award',
  },
]

// ============================================
// FILTER OPTIONS
// ============================================
export const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'project', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'opensource', label: 'Python' },
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
  'Python',
  'Stripe internship',
  'TypeScript',
  'Real-time apps',
  'AI/ML projects',
  'Mobile development',
]
