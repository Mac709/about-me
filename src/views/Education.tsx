import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './Education.module.css'

const Education: React.FC = () => {
  const { profile, labels } = useLanguage()

  return (
    <main className={styles.container}>
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
    </main>
  )
}

export default Education
