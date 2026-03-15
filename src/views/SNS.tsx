import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './SNS.module.css'

interface SocialLink {
  name: string
  url: string
  icon: string
  description: string
}

const SNS: React.FC = () => {
  const { labels } = useLanguage()

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/daichi-koga-84347721b/',
      icon: '💼',
      description: 'Professional Network'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Mac709',
      icon: '💻',
      description: 'Code Repository'
    }
  ]

  const contactIntro = 'Feel free to reach out if you have any questions or would like to connect.'

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.contact}</h2>
        <p className={styles.intro}>{contactIntro}</p>
        <div className={styles.linkGrid}>
          {socialLinks.map((link: SocialLink, index: number) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto') ? undefined : 'noopener'}
              className={styles.linkCard}
            >
              <span className={styles.icon}>{link.icon}</span>
              <div>
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </div>
            </a>
          ))}
        </div>
        <p className={styles.location}>{labels.location}</p>
      </section>
    </main>
  )
}

export default SNS
