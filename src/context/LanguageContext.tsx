import React, { createContext, useContext, useState, useCallback } from 'react'
import type { Profile } from '../types/profile'
import profileJa from '../assets/json/profileJa.json'
import profileEn from '../assets/json/profileEn.json'

type Language = 'ja' | 'en'

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
  language: Language
  toggleLanguage: () => void
  profile: Profile
  labels: Labels
}

const labelsJa: Labels = {
  profile: 'Profile',
  career: 'Career',
  education: 'Education',
  internship: 'Internship',
  certification: 'Certification',
  portfolio: 'Portfolio',
  portfolioTitle: '農業向けSNSアプリ',
  portfolioDesc: '農業業界向けソーシャルネットワーキングアプリケーション',
  portfolioTech: '使用技術: Vue, Ionic, Firebase, Stripe',
  sns: 'SNS',
  contact: 'Contact',
  contactText: 'お気軽にLinkedInまたはメールでご連絡ください。',
  location: '所在地: 東京',
  tabs: {
    home: 'Home',
    work: 'Work Experience',
    sns: 'SNS',
    contact: 'Contact'
  }
}

const labelsEn: Labels = {
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
  contactText: 'Feel free to reach out via LinkedIn or Email.',
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
  const [language, setLanguage] = useState<Language>('ja')

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'ja' ? 'en' : 'ja')
  }, [])

  const profile = (language === 'ja' ? profileJa : profileEn) as Profile
  const labels = language === 'ja' ? labelsJa : labelsEn

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, profile, labels }}>
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
