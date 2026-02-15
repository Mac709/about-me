export interface User {
  name: string
  introduction: string
}

export interface Career {
  hp: string
  term: string
  company: string
  role: string
  detail: string
}

export interface Education {
  term: string
  university: string
  role: string
  achievement?: string
  achievementTitle?: string
  achievementUrl?: string
}

export interface Internship {
  hp: string
  term: string
  company: string
  role: string
  detail: string
}

export interface Certification {
  title: string
  date: string
}

export interface Profile {
  users: User[]
  careers: Career[]
  education: Education[]
  internship: Internship[]
  certification: Certification[]
}
