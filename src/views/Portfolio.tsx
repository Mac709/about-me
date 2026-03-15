import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './Portfolio.module.css'

interface AppLink {
  platform: string
  url: string
}

interface PortfolioItem {
  title: string
  desc: string
  tech: string
  links: AppLink[]
}

const Portfolio: React.FC = () => {
  const { labels } = useLanguage()

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Agriculture SNS App',
      desc: 'Social networking application for agriculture industry',
      tech: 'Vue, Ionic, Firebase, Stripe',
      links: [
        { platform: 'iOS', url: 'https://x.gd/IisSK' },
        { platform: 'Android', url: 'https://play.google.com/store/apps/details?id=io.ionic.starter.village' }
      ]
    },
    {
      title: 'Yield Daily',
      desc: 'Daily yield calculation tool',
      tech: 'GitHub Project',
      links: [
        { platform: 'GitHub', url: 'https://github.com/Mac709/yield_daily' }
      ]
    },
    {
      title: 'HRDev Scout AI',
      desc: 'AI-powered HR scouting tool',
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
            <h3>{item.title}</h3>
            <p className={styles.portfolioDesc}>{item.desc}</p>
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
