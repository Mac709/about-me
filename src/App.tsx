import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TabNav from './components/TabNav'
import Home from './views/Home'
import WorkExperience from './views/WorkExperience'
import Education from './views/Education'
import Portfolio from './views/Portfolio'
import SNS from './views/SNS'
import styles from './App.module.css'
import logo from './assets/D-character.png'

const App: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <img alt="D" className={styles.logo} src={logo} />
        <h1 className={styles.name}>Daichi Koga</h1>
        <p className={styles.title}>Software Engineer</p>
      </header>
      <TabNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sns" element={<SNS />} />
      </Routes>
    </>
  )
}

export default App
