import React, { createContext, useContext } from 'react'
import type { Profile } from '../types/profile'
import profileEn from '../assets/json/profileEn.json'

interface Labels {
  profile: string
  career: string
  education: string
  internship: string
  certification: string
  portfolio: string
  portfolioTitle: string
  portfolioDesc: string
  portfolioTech: string
  sns: string
  contact: string
  contactText: string
  location: string
  tabs: {
    home: string
    work: string
    sns: string
    contact: string
  }
}

interface LanguageContextType {
  profile: Profile
  labels: Labels
}

const labels: Labels = {
  profile: 'Profile',
  career: 'Career',
  education: 'Education',
  internship: 'Internship',
  certification: 'Certification',
  portfolio: 'Portfolio',
  portfolioTitle: 'Agriculture SNS App',
  portfolioDesc: 'Social networking application for agriculture industry',
  portfolioTech: 'Tech: Vue, Ionic, Firebase, Stripe',
  sns: 'SNS',
  contact: 'Contact',
  contactText: 'Feel free to reach out via LinkedIn.',
  location: 'Based in Tokyo, Japan',
  tabs: {
    home: 'Home',
    work: 'Work Experience',
    sns: 'SNS',
    contact: 'Contact'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const profile = profileEn as Profile

  return (
    <LanguageContext.Provider value={{ profile, labels }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
