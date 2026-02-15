import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from './WorkExperience.module.css'

const WorkExperience: React.FC = () => {
  const { profile, labels } = useLanguage()

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.career}</h2>
        {profile.careers.map((career, index: number) => (
          <div key={index} className={styles.item}>
            <span className={styles.term}>{career.term}</span>
            <h3>
              <a href={career.hp} target="_blank" rel="noopener">
                {career.company}
              </a>
            </h3>
            <p className={styles.role}>{career.role}</p>
            <p className={styles.detail}>{career.detail}</p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{labels.internship}</h2>
        {profile.internship.map((internship, index: number) => (
          <div key={index} className={styles.item}>
            <span className={styles.term}>{internship.term}</span>
            <h3>
              <a href={internship.hp} target="_blank" rel="noopener">
                {internship.company}
              </a>
            </h3>
            <p className={styles.role}>{internship.role}</p>
            <p className={styles.detail}>{internship.detail}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default WorkExperience
