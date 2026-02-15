import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './Home.module.css'

interface SocialLink {
  name: string
  url: string
  icon: string
}

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

const Home: React.FC = () => {
  const { language, profile, labels } = useLanguage()

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/daichi-koga-84347721b/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/Mac709', icon: '💻' }
  ]

  return (
    <main className={styles.container}>
      {/* Profile */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.profile}</h2>
        <div className={styles.profileCard}>
          <h3>{profile.users[0].name}</h3>
          <p>{profile.users[0].introduction}</p>
        </div>
      </section>

      {/* Career */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.career}</h2>
        {profile.careers.map((career, index: number) => (
          <div key={index} className={styles.item}>
            <span className={styles.term}>{career.term}</span>
            <h3>
              <a href={career.hp} target="_blank" rel="noopener">{career.company}</a>
            </h3>
            <p className={styles.role}>{career.role}</p>
            <p className={styles.detail}>{career.detail}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.education}</h2>
        {profile.education.map((education, index: number) => (
          <div key={index} className={styles.item}>
            <span className={styles.term}>{education.term}</span>
            <h3>{education.university}</h3>
            <p className={styles.role}>{education.role}</p>
            {education.achievement && (
              <div className={styles.achievement}>
                <span className={styles.achievementLabel}>{education.achievement}</span>
                {education.achievementUrl ? (
                  <a href={education.achievementUrl} target="_blank" rel="noopener" className={styles.achievementLink}>
                    {education.achievementTitle}
                  </a>
                ) : (
                  <p>{education.achievementTitle}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Internship */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.internship}</h2>
        {profile.internship.map((internship, index: number) => (
          <div key={index} className={styles.item}>
            <span className={styles.term}>{internship.term}</span>
            <h3>
              <a href={internship.hp} target="_blank" rel="noopener">{internship.company}</a>
            </h3>
            <p className={styles.role}>{internship.role}</p>
            <p className={styles.detail}>{internship.detail}</p>
          </div>
        ))}
      </section>

      {/* Certification */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.certification}</h2>
        <ul className={styles.certList}>
          {profile.certification.map((cert, index: number) => (
            <li key={index}>{cert.title} <span className={styles.certDate}>({cert.date})</span></li>
          ))}
        </ul>
      </section>

      {/* Portfolio */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.portfolio}</h2>
        {[
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
        ].map((item: PortfolioItem, index: number) => (
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

      {/* SNS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.sns}</h2>
        <div className={styles.snsLinks}>
          {socialLinks.map((link: SocialLink, index: number) => (
            <a key={index} href={link.url} target="_blank" rel="noopener" className={styles.snsLink}>
              <span>{link.icon}</span> {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.contact}</h2>
        <p className={styles.contactText}>
          {labels.contactText.split('LinkedIn')[0]}
          <a href="https://www.linkedin.com/in/daichi-koga-84347721b/" target="_blank" rel="noopener">LinkedIn</a>
          {labels.contactText.split('LinkedIn')[1]}
        </p>
        <p className={styles.location}>{labels.location}</p>
      </section>
    </main>
  )
}

export default Home
