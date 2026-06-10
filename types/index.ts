export interface Skill {
  name: string
  icon: string
  level: number
  category: 'Frontend' | 'Backend' | 'Language' | 'Database' | 'Styling'
  color: string
  description: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  tech: string[]
  features: string[]
  demo: string
  github: string
  githubServer?: string
  status: 'Live' | 'In Progress' | 'Archived'
  year: string
  color: string
  accentColor: string
  gradient: string
  featured: boolean
}

export interface TimelineEntry {
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'project' | 'learning' | 'milestone'
  icon: string
}

export interface DSAStats {
  leetcode: {
    username: string
    solved: number
    easy: number
    medium: number
    hard: number
    streak: number | null
    rank: string | null
    url: string
  }
  gfg: null
  codeforces: null
  topics: { name: string; count: number; color: string }[]
}

export interface PersonalInfo {
  name: string
  role: string
  tagline: string
  bio: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  twitter: null
  availability: string
  college: string
  degree: string
  cgpa: string
  admissionYear: string
  graduationYear: string
  codingStartYear: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface NavLink {
  href: string
  label: string
}
