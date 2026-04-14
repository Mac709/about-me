import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { portfolioItems } from '../data/portfolio'
import type { PortfolioItem, AppLink } from '../data/portfolio'
import styles from './Portfolio.module.css'

const Portfolio: React.FC = () => {
  const { language, labels } = useLanguage()

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.portfolio}</h2>
        {portfolioItems.map((item: PortfolioItem, index: number) => (
          <div key={index} className={styles.portfolioCard}>
            <h3>{language === 'ja' ? item.titleJa : item.titleEn}</h3>
            <p className={styles.portfolioDesc}>{language === 'ja' ? item.descJa : item.descEn}</p>
            <div className={styles.techTags}>
              {item.tech.map((t: string, i: number) => (
                <span key={i} className={styles.techTag}>{t}</span>
              ))}
            </div>
            <div className={styles.appLinks}>
              {item.links.map((link: AppLink, linkIndex: number) => (
                <a
                  key={linkIndex}
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
        ))}
      </section>
    </main>
  )
}

export default Portfolio
