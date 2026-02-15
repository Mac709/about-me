import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './Portfolio.module.css'

interface AppLink {
  platform: string
  url: string
}

const Portfolio: React.FC = () => {
  const { labels } = useLanguage()

  const appLinks: AppLink[] = [
    { platform: 'iOS', url: 'https://x.gd/IisSK' },
    { platform: 'Android', url: 'https://play.google.com/store/apps/details?id=io.ionic.starter.village' }
  ]

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.portfolio}</h2>
        <div className={styles.portfolioCard}>
          <h3>{labels.portfolioTitle}</h3>
          <p className={styles.portfolioDesc}>{labels.portfolioDesc}</p>
          <p className={styles.tech}>{labels.portfolioTech}</p>
          <div className={styles.appLinks}>
            {appLinks.map((link: AppLink, index: number) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener"
                className={styles.appLink}
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
