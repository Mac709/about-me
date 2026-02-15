import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import styles from './TabNav.module.css'

interface Tab {
  path: string
  labelJa: string
  labelEn: string
  end?: boolean
}

const TabNav: React.FC = () => {
  const { language } = useLanguage()

  const tabs: Tab[] = [
    { path: '/', labelJa: 'Home', labelEn: 'Home', end: true },
    { path: '/work', labelJa: 'Career', labelEn: 'Career' },
    { path: '/education', labelJa: 'Education', labelEn: 'Education' },
    { path: '/portfolio', labelJa: 'Portfolio', labelEn: 'Portfolio' },
    { path: '/sns', labelJa: 'Contact', labelEn: 'Contact' }
  ]

  return (
    <nav className={styles.tabNav}>
      {tabs.map((tab: Tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          end={tab.end}
          className={({ isActive }: { isActive: boolean }): string =>
            `${styles.tab} ${isActive ? styles.active : ''}`
          }
        >
          {language === 'ja' ? tab.labelJa : tab.labelEn}
        </NavLink>
      ))}
    </nav>
  )
}

export default TabNav
