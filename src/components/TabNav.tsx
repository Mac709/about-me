import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TabNav.module.css'

interface Tab {
  path: string
  label: string
  end?: boolean
}

const tabs: Tab[] = [
  { path: '/', label: 'Home', end: true },
  { path: '/work', label: 'Career' },
  { path: '/education', label: 'Education' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/sns', label: 'Contact' }
]

const TabNav: React.FC = () => {
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
          {tab.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default TabNav
