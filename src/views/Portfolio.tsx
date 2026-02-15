import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './Portfolio.module.css'

interface AppLink {
  platform: string
  url: string
}

interface PortfolioItem {
  titleJa: string
  titleEn: string
  descJa: string
  descEn: string
  tech: string
  links: AppLink[]
}

const Portfolio: React.FC = () => {
  const { language, labels } = useLanguage()

  const portfolioItems: PortfolioItem[] = [
    {
      titleJa: '農業向けSNSアプリ',
      titleEn: 'Agriculture SNS App',
      descJa: '農業業界向けソーシャルネットワーキングアプリケーション',
      descEn: 'Social networking application for agriculture industry',
      tech: 'Vue, Ionic, Firebase, Stripe',
      links: [
        { platform: 'iOS', url: 'https://x.gd/IisSK' },
        { platform: 'Android', url: 'https://play.google.com/store/apps/details?id=io.ionic.starter.village' }
      ]
    },
    {
      titleJa: 'Yield Daily',
      titleEn: 'Yield Daily',
      descJa: '日次利回り計算ツール',
      descEn: 'Daily yield calculation tool',
      tech: 'GitHub Project',
      links: [
        { platform: 'GitHub', url: 'https://github.com/Mac709/yield_daily' }
      ]
    },
    {
      titleJa: 'HRDev Scout AI',
      titleEn: 'HRDev Scout AI',
      descJa: 'AI搭載の人材スカウトツール',
      descEn: 'AI-powered HR scouting tool',
      tech: 'GitHub Project',
      links: [
        { platform: 'GitHub', url: 'https://github.com/Mac709/hrdev-scout-ai' }
      ]
    }
  ]

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.portfolio}</h2>
        {portfolioItems.map((item: PortfolioItem, index: number) => (
          <div key={index} className={styles.portfolioCard}>
            <h3>{language === 'ja' ? item.titleJa : item.titleEn}</h3>
            <p className={styles.portfolioDesc}>{language === 'ja' ? item.descJa : item.descEn}</p>
            <p className={styles.tech}>{item.tech}</p>
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
