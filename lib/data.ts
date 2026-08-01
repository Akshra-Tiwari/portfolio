// ─────────────────────────────────────────────────────────────────────────────
// ALL REAL DATA — single source of truth
// ─────────────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Akshra Tiwari',
  role: 'Full Stack Developer',
  tagline: 'Building things that actually work.',
  bio: "I'm a CS undergrad at RGPV who got hooked on programming in 2024 and hasn't stopped since. I build full-stack web apps — from developer networking platforms with real-time messaging to fraud detection systems with ML microservices. I care about clean code, functional UIs, and shipping things that solve real problems.",
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

export const skills = [
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
    description: 'Express.js, REST APIs, JWT auth, Socket.io real-time systems',
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    level: 78,
    category: 'Database',
    color: '#47A248',
    description: 'Schema design, Mongoose ODM, aggregation, cursor-based pagination',
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

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
// Order: Synq (pinned #1) → FraudSense (#2) → CampusShare (#3) → learning projects

export const projects = [
  // ── PINNED / MAIN PROJECT ──────────────────────────────────────────────────
  {
    id: 'synq',
    title: 'Synq',
    subtitle: 'Developer Networking Platform',
    description:
      'A production-ready professional network built for developers — with profiles, project showcases, social feeds, real-time messaging, and developer connections. Think LinkedIn, built for engineers.',
    longDescription:
      'My most ambitious project. Full auth stack (JWT refresh rotation, Google OAuth, email verification, multi-device sessions), real-time Socket.io messaging with typing indicators and read receipts, cursor-based infinite scrolling, and Cloudinary media uploads.',
    tech: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Cloudinary', 'JWT'],
    features: [
      'JWT auth with refresh rotation, Google OAuth & email verification',
      'Real-time messaging with typing indicators, read receipts & online presence',
      'Social feeds, project showcases, developer connections & bookmarking',
      'Role-based admin analytics dashboard',
    ],
    demo: 'https://synqq-five.vercel.app',
    github: 'https://github.com/Akshra-Tiwari/synq',
    status: 'Live' as const,
    year: '2025',
    color: '#8b5cf6',
    accentColor: 'rgba(139, 92, 246, 0.12)',
    gradient: 'from-purple-900/20 via-transparent to-transparent',
    featured: true,
    pinned: true,
  },

  // ── FEATURED PROJECTS ──────────────────────────────────────────────────────
  {
    id: 'fraudsense',
    title: 'FraudSense AI',
    subtitle: 'Full-Stack Fraud Detection Platform',
    description:
      'A MERN-stack fraud detection platform with role-based access control, real-time transaction monitoring, and a Python Flask ML microservice that generates live fraud probability scores.',
    longDescription:
      'Built to explore how machine learning integrates into a production web stack. The Flask ML service runs independently and communicates with the Node.js backend via REST, keeping fraud-scoring logic fully decoupled.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'JWT', 'Scikit-Learn'],
    features: [
      'Python Flask ML microservice for real-time fraud probability scoring',
      'Role-based access control with JWT authentication',
      'Interactive analytics dashboard with fraud trend visualisation',
      'Geolocation-based risk mapping for transaction monitoring',
    ],
    demo: 'https://fraudsense-frontend.onrender.com',
    github: 'https://github.com/Akshra-Tiwari/FDS',
    status: 'Live' as const,
    year: '2025',
    color: '#ef4444',
    accentColor: 'rgba(239, 68, 68, 0.12)',
    gradient: 'from-red-900/20 via-transparent to-transparent',
    featured: true,
    pinned: false,
  },
  {
    id: 'campusshare',
    title: 'CampusShare',
    subtitle: 'Academic Resource Sharing Portal',
    description:
      'A centralised academic resource-sharing platform for JNCT Bhopal — students can upload, search, preview, and rate study materials. Google OAuth, PDF preview, and Cloudinary-backed file management.',
    longDescription:
      'Built to solve a real campus problem: scattered study resources. Features Google OAuth, role-based authorization, full-text search, in-browser PDF preview, ratings, and Cloudinary file management.',
    tech: ['React.js', 'Express.js', 'Firebase', 'Tailwind CSS', 'Cloudinary', 'Vercel'],
    features: [
      'Google OAuth authentication with role-based authorization',
      'In-browser PDF preview with ratings and comments',
      'Full-text search and category filtering',
      'Cloudinary-backed file upload and management',
    ],
    demo: 'https://campusshare-u6yz.vercel.app',
    github: 'https://github.com/Akshra-Tiwari/campusshare',
    status: 'Live' as const,
    year: '2025',
    color: '#06b6d4',
    accentColor: 'rgba(6, 182, 212, 0.12)',
    gradient: 'from-cyan-900/20 via-transparent to-transparent',
    featured: true,
    pinned: false,
  },

  // ── EARLIER / LEARNING PROJECTS ───────────────────────────────────────────
  {
    id: 'swan',
    title: 'S.W.A.N. Protocol',
    subtitle: 'Environmental Monitoring Platform',
    description:
      'A full-stack platform for reporting, tracking, and managing pollution incidents. Geolocation reporting, Cloudinary image uploads, severity classification, and AI-powered summarisation.',
    longDescription: '',
    tech: ['Next.js', 'MongoDB', 'Express.js', 'Firebase', 'Cloudinary', 'Node.js'],
    features: [
      'Geolocation-based pollution incident reporting',
      'Image uploads with Cloudinary and severity classification',
      'AI-powered incident summarisation for admin review',
      'Analytics dashboards with environmental insights',
    ],
    demo: 'https://swanprotocol.vercel.app',
    github: 'https://github.com/Akshra-Tiwari/S.W.A.N',
    status: 'Live' as const,
    year: '2024',
    color: '#10b981',
    accentColor: 'rgba(16, 185, 129, 0.12)',
    gradient: 'from-emerald-900/20 via-transparent to-transparent',
    featured: false,
    pinned: false,
  },
  {
    id: 'lost-found',
    title: 'Lost & Found',
    subtitle: 'Campus Item Recovery System',
    description:
      'A full-stack lost and found platform for campus use. Post and search lost/found items by category and location, with match notifications.',
    longDescription: '',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Post and search lost/found item listings',
      'Category and location-based filtering',
      'Item match notifications',
      'Separate client and server architecture',
    ],
    demo: 'https://lost-found-client-1.onrender.com',
    github: 'https://github.com/Akshra-Tiwari/lost-found-client',
    status: 'Live' as const,
    year: '2024',
    color: '#f59e0b',
    accentColor: 'rgba(245, 158, 11, 0.12)',
    gradient: 'from-amber-900/20 via-transparent to-transparent',
    featured: false,
    pinned: false,
  },
  {
    id: 'chatify',
    title: 'Chatify',
    subtitle: 'Real-Time Chat Application',
    description:
      'A real-time chat app with Socket.io — my first experience with WebSockets and bidirectional data flow.',
    longDescription: '',
    tech: ['React.js', 'Node.js', 'Socket.io'],
    features: [
      'Real-time messaging with WebSockets',
      'Multi-user chat rooms',
      'Live online user list',
    ],
    demo: 'https://akshraschatify.netlify.app',
    github: 'https://github.com/Akshra-Tiwari/chat-app-backend',
    status: 'Live' as const,
    year: '2024',
    color: '#ec4899',
    accentColor: 'rgba(236, 72, 153, 0.12)',
    gradient: 'from-pink-900/20 via-transparent to-transparent',
    featured: false,
    pinned: false,
  },
  {
    id: 'bubblepop',
    title: 'Bubble Pop',
    subtitle: 'Browser Mini-Game',
    description:
      'My very first deployed project — a vanilla JS browser game. Where it all started.',
    longDescription: '',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Timed bubble-popping gameplay',
      'Score tracking',
      'Pure vanilla JS — no frameworks',
    ],
    demo: 'https://bubblepopbyakshra.netlify.app',
    github: 'https://github.com/Akshra-Tiwari/bubble',
    status: 'Live' as const,
    year: '2024',
    color: '#6366f1',
    accentColor: 'rgba(99, 102, 241, 0.12)',
    gradient: 'from-indigo-900/20 via-transparent to-transparent',
    featured: false,
    pinned: false,
  },
]

// ─── TIMELINE ─────────────────────────────────────────────────────────────────

export const timeline = [
  {
    year: '2025',
    title: 'Synq — Developer Networking Platform',
    subtitle: 'Next.js · TypeScript · Socket.io · MongoDB',
    description:
      'Built my most ambitious project — a full developer networking platform with real-time messaging, JWT refresh rotation, Google OAuth, social feeds, and admin analytics. First time working with TypeScript end-to-end in a production-scale app.',
    type: 'project',
    icon: '🚀',
  },
  {
    year: '2025',
    title: 'FraudSense AI + CampusShare',
    subtitle: 'MERN + ML · React + Firebase',
    description:
      'Shipped two more production apps back-to-back. FraudSense integrated a Python Flask ML microservice into a MERN stack. CampusShare solved a real campus problem with OAuth, PDF preview, and file management.',
    type: 'project',
    icon: '⚡',
  },
  {
    year: '2024',
    title: 'S.W.A.N. Protocol',
    subtitle: 'Next.js · Firebase · Cloudinary',
    description:
      'Moved beyond basic CRUD. Built a real environmental monitoring platform with geolocation, image uploads, analytics dashboards, and AI-powered summarisation. First time with Cloudinary and cloud services at scale.',
    type: 'project',
    icon: '🌊',
  },
  {
    year: '2024',
    title: 'First Deployments',
    subtitle: 'Lost & Found · Chatify · Bubble Pop',
    description:
      'Shipped my first deployed applications. Lost & Found was my first full MERN project. Chatify introduced real-time comms with Socket.io. Bubble Pop was the very first thing I ever put live.',
    type: 'milestone',
    icon: '💻',
  },
  {
    year: '2024',
    title: 'Started Coding',
    subtitle: 'JavaScript → React → Node.js',
    description:
      'Picked up JavaScript in early 2024. Within months I was building React frontends, Node backends, and deploying to Vercel and Render. Went from zero to full-stack in under a year.',
    type: 'learning',
    icon: '✨',
  },
  {
    year: '2023',
    title: 'B.Tech Computer Science',
    subtitle: 'RGPV University, Bhopal — CGPA 7.6',
    description:
      'Enrolled in Computer Science Engineering at Rajiv Gandhi Proudyogiki Vishwavidyalaya. Built the academic foundation — DSA, OS, DBMS — while starting to code independently on the side.',
    type: 'education',
    icon: '🎓',
  },
]

// ─── DSA STATS ────────────────────────────────────────────────────────────────

export const dsaStats = {
  leetcode: {
    username: 'akshratiwari425',
    solved: 250,
    easy: 100,
    medium: 125,
    hard: 25,
    streak: null,
    rank: null,
    url: 'https://leetcode.com/u/akshratiwari425/',
  },
  gfg: null,
  codeforces: null,
  topics: [
    { name: 'Arrays & Strings',    count: 80, color: '#8b5cf6' },
    { name: 'Linked Lists',        count: 45, color: '#06b6d4' },
    { name: 'Trees & Recursion',   count: 55, color: '#10b981' },
    { name: 'Stacks & Queues',     count: 35, color: '#f59e0b' },
    { name: 'Dynamic Programming', count: 35, color: '#ec4899' },
  ],
}
