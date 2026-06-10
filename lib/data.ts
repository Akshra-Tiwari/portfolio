// ─────────────────────────────────────────────────────────────────────────────
// ALL REAL DATA — extracted from resume + user inputs
// Single source of truth. Every component reads from here.
// ─────────────────────────────────────────────────────────────────────────────

import { Skill } from "@/types"

export const personalInfo = {
  name: 'Akshra Tiwari',
  role: 'Full Stack Developer',
  tagline: 'Building things that actually work.',
  bio: "I'm a CS undergrad at RGPV who got hooked on programming in 2024 and hasn't stopped since. I build full-stack web apps — from fraud detection platforms with ML microservices to real-time environmental monitoring systems. I care about clean code, functional UIs, and shipping things that solve real problems.",
  location: 'Bhopal, India',
  email: 'akshratiwari425@gmail.com',
  phone: '+91-7879585306',
  github: 'https://github.com/Akshra-Tiwari',
  linkedin: 'https://linkedin.com/in/akshra-tiwari',
  twitter: null,
  availability: 'Open to internships',
  college: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
  degree: 'B.Tech in Computer Science Engineering',
  cgpa: '7.6',
  admissionYear: '2023',
  graduationYear: '2027',
  codingStartYear: '2024',
}

export const skills: Skill[] = [
  {
    name: 'React.js',
    icon: '⚛️',
    level: 85,
    category: 'Frontend',
    color: '#61DAFB',
    description: 'Component architecture, hooks, state management, responsive UIs',
  },
  {
    name: 'Next.js',
    icon: '▲',
    level: 80,
    category: 'Frontend',
    color: '#ffffff',
    description: 'App Router, SSR, API routes, full-stack deployment on Vercel',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    level: 82,
    category: 'Backend',
    color: '#68A063',
    description: 'Express.js, REST APIs, JWT authentication, middleware',
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    level: 78,
    category: 'Database',
    color: '#47A248',
    description: 'Schema design, Mongoose ODM, aggregation, CRUD operations',
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    level: 88,
    category: 'Language',
    color: '#F7DF1E',
    description: 'ES6+, async/await, DOM manipulation, event handling',
  },
  {
    name: 'Python',
    icon: '🐍',
    level: 72,
    category: 'Language',
    color: '#3776AB',
    description: 'Flask microservices, Scikit-Learn ML models, data processing',
  },
  {
    name: 'Tailwind CSS',
    icon: '🌊',
    level: 85,
    category: 'Styling',
    color: '#38BDF8',
    description: 'Utility-first CSS, responsive design, dark mode, custom themes',
  },
  {
    name: 'Firebase',
    icon: '🔥',
    level: 74,
    category: 'Backend',
    color: '#FFCA28',
    description: 'Authentication, Firestore, real-time listeners, role-based access',
  },
]

// ─── FEATURED PROJECTS (from resume — real links) ────────────────────────────

export const projects = [
  {
    id: 'fraudsense',
    title: 'FraudSense AI',
    subtitle: 'Full-Stack Fraud Detection Platform',
    description:
      'A MERN-stack fraud detection platform with role-based access control, real-time transaction monitoring, and an ML microservice that generates fraud probability scores for suspicious activity.',
    longDescription:
      'Built to explore how machine learning can be integrated into a production web stack. The Python Flask ML service runs independently and communicates with the Node.js backend via REST, keeping the fraud scoring logic decoupled from the main application.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'JWT', 'Scikit-Learn'],
    features: [
      'ML microservice generating real-time fraud probability scores',
      'Role-based access control with JWT authentication',
      'Interactive analytics dashboard with fraud trend visualization',
      'Geolocation-based risk visualization for transaction monitoring',
    ],
    demo: 'https://fraudsense-frontend.onrender.com',
    github: 'https://github.com/Akshra-Tiwari/FDS',
    status: 'Live' as const,
    year: '2025',
    color: '#8b5cf6',
    accentColor: 'rgba(139, 92, 246, 0.12)',
    gradient: 'from-purple-900/20 via-transparent to-transparent',
    featured: true,
  },
  {
    id: 'swan',
    title: 'S.W.A.N. Protocol',
    subtitle: 'Environmental Monitoring Platform',
    description:
      'A full-stack platform for reporting, tracking, and managing pollution incidents. Features geolocation-based reporting, image uploads, severity classification, and AI-powered incident summarization.',
    longDescription:
      'Built as a civic-tech tool for environmental monitoring. Users can report pollution incidents from their location, upload photos via Cloudinary, and track incident lifecycle. Admins get an analytics dashboard with environmental insights.',
    tech: ['Next.js', 'MongoDB', 'Express.js', 'Firebase', 'Cloudinary', 'Node.js'],
    features: [
      'Geolocation-based pollution incident reporting',
      'Image uploads with Cloudinary and severity classification',
      'AI-powered incident summarization for admin review',
      'Analytics dashboards with environmental insights and incident tracking',
    ],
    demo: 'https://swanprotocol.vercel.app',
    github: 'https://github.com/Akshra-Tiwari/S.W.A.N',
    status: 'Live' as const,
    year: '2024',
    color: '#06b6d4',
    accentColor: 'rgba(6, 182, 212, 0.12)',
    gradient: 'from-cyan-900/20 via-transparent to-transparent',
    featured: true,
  },
  {
    id: 'lost-found',
    title: 'Lost & Found',
    subtitle: 'Campus Item Recovery System',
    description:
      'A full-stack lost and found platform for campus use. Students can report lost or found items, search by category and location, and get notified when a match is found.',
    longDescription:
      'One of my earlier learning projects, built to get comfortable with full-stack MERN development. Separate client and server repos, deployed on Render.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Post and search lost/found item listings',
      'Category and location-based filtering',
      'Item match notifications',
      'Separate client and server architecture',
    ],
    demo: 'https://lost-found-client-1.onrender.com',
    github: 'https://github.com/Akshra-Tiwari/lost-found-client',
    githubServer: 'https://github.com/Akshra-Tiwari/lost-found-server',
    status: 'Live' as const,
    year: '2024',
    color: '#10b981',
    accentColor: 'rgba(16, 185, 129, 0.12)',
    gradient: 'from-emerald-900/20 via-transparent to-transparent',
    featured: false,
  },
  {
    id: 'chatify',
    title: 'Chatify',
    subtitle: 'Real-Time Chat Application',
    description:
      'A real-time chat application built with React and a Node.js backend. Supports multiple users, live messaging, and a clean minimal interface.',
    longDescription:
      'Built while learning WebSockets and real-time communication patterns. Good first experience with bidirectional data flow between client and server.',
    tech: ['React.js', 'Node.js', 'Socket.io'],
    features: [
      'Real-time messaging with WebSockets',
      'Multi-user chat rooms',
      'Live online user list',
      'Clean, minimal chat interface',
    ],
    demo: 'https://akshraschatify.netlify.app',
    github: 'https://github.com/Akshra-Tiwari/chat-app-backend',
    status: 'Live' as const,
    year: '2024',
    color: '#f59e0b',
    accentColor: 'rgba(245, 158, 11, 0.12)',
    gradient: 'from-amber-900/20 via-transparent to-transparent',
    featured: false,
  },
  {
    id: 'bubblepop',
    title: 'Bubble Pop',
    subtitle: 'Browser Mini-Game',
    description:
      'A fun browser-based bubble popping game built with vanilla JavaScript. My first deployed project — where it all started.',
    longDescription:
      'The first thing I ever deployed. Simple game logic, DOM manipulation, and the realization that you can build interactive things with just HTML, CSS and JS.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Timed bubble-popping gameplay',
      'Score tracking and high score',
      'Responsive canvas layout',
      'Pure vanilla JS — no frameworks',
    ],
    demo: 'https://bubblepopbyakshra.netlify.app',
    github: 'https://github.com/Akshra-Tiwari/bubble',
    status: 'Live' as const,
    year: '2024',
    color: '#ec4899',
    accentColor: 'rgba(236, 72, 153, 0.12)',
    gradient: 'from-pink-900/20 via-transparent to-transparent',
    featured: false,
  },
]

// ─── TIMELINE ────────────────────────────────────────────────────────────────

export const timeline = [
  {
    year: '2025',
    title: 'FraudSense AI',
    subtitle: 'MERN + ML microservice',
    description:
      'Built my most complex project yet — a fraud detection platform with a Python Flask ML service integrated into a full MERN stack. First time combining machine learning with a production web application.',
    type: 'project',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'S.W.A.N. Protocol',
    subtitle: 'Next.js + Firebase + Cloudinary',
    description:
      'Moved beyond basic CRUD. Built a real environmental monitoring platform with geolocation, image uploads, analytics dashboards, and AI-powered summarization.',
    type: 'project',
    icon: '🌊',
  },
  {
    year: '2024',
    title: 'First Full-Stack Projects',
    subtitle: 'Lost & Found, Chatify, Bubble Pop',
    description:
      'Shipped my first deployed applications. Lost & Found taught me full MERN architecture. Chatify introduced real-time communication with Socket.io. Bubble Pop was the very first thing I ever put live.',
    type: 'milestone',
    icon: '💻',
  },
  {
    year: '2024',
    title: 'Started Coding',
    subtitle: 'JavaScript → React → Node.js',
    description:
      'Picked up JavaScript in early 2024. Within months I was building React frontends, Node backends, and deploying to Vercel and Render. Fast learner by necessity.',
    type: 'learning',
    icon: '✨',
  },
  {
    year: '2023',
    title: 'B.Tech Computer Science',
    subtitle: 'RGPV University, Bhopal — CGPA 7.6',
    description:
      'Enrolled in Computer Science Engineering at Rajiv Gandhi Proudyogiki Vishwavidyalaya. Built the academic foundation — data structures, algorithms, OS, DBMS — while starting to code independently on the side.',
    type: 'education',
    icon: '🎓',
  },
]

// ─── DSA STATS ───────────────────────────────────────────────────────────────

export const dsaStats = {
  leetcode: {
    username: 'akshratiwari425',
    solved: 250,
    // User said "250+" — split is approximate, update when exact numbers available
    easy: 100,
    medium: 125,
    hard: 25,
    streak: null,   // unknown — not provided
    rank: null,     // unknown — not provided
    url: 'https://leetcode.com/u/akshratiwari425/',
  },
  gfg: null,
  codeforces: null,
  topics: [
    { name: 'Arrays & Strings',           count: 80,  color: '#8b5cf6' },
    { name: 'Linked Lists',               count: 45,  color: '#06b6d4' },
    { name: 'Trees & Recursion',          count: 55,  color: '#10b981' },
    { name: 'Stacks & Queues',            count: 35,  color: '#f59e0b' },
    { name: 'Dynamic Programming',        count: 35,  color: '#ec4899' },
  ],
}
