import React from 'react'
import styles from "../HomeSection/HomeSection.module.css"

const HomeSection = () => {
  return (
    <div className={styles.homeBackground}>
      <div className={styles.homeContainer} id="home">
        <h1>
          <span>Evelyn Valles</span>
        </h1>
        <h2>
          <span id={styles.intro}>Hello, I'm a full-stack developer</span>
          </h2>
        <a href="#about" className={styles.arrow}>∇</a>
      </div>
    </div>
  )
}

export default HomeSection