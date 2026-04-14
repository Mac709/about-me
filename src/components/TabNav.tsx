import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import styles from './TabNav.module.css'

interface Tab {
  path: string
  labelEn: string
  labelJa: string
  end?: boolean
}

const tabs: Tab[] = [
  { path: '/', labelEn: 'Home', labelJa: 'Home', end: true },
  { path: '/work', labelEn: 'Career', labelJa: '職歴' },
  { path: '/education', labelEn: 'Education', labelJa: '学歴' },
  { path: '/portfolio', labelEn: 'Portfolio', labelJa: 'Portfolio' },
  { path: '/sns', labelEn: 'Contact', labelJa: 'Contact' }
]

const TabNav: React.FC = () => {
  const { language, basePath } = useLanguage()

  return (
    <nav className={styles.tabNav}>
      {tabs.map((tab: Tab) => (
        <NavLink
          key={tab.path}
          to={`${basePath}${tab.path}`}
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
