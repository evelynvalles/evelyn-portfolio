import React from 'react'
import styles from "../HomeSection/HomeSection.module.css"
import { Link } from "react-router-dom"

const HomeSection = () => {
  return (
    <div className={styles.homeBackground}>
      <div className={styles.homeContainer}>
        <h1>
          <span>Evelyn Valles</span>
        </h1>
        <h2>
          <span id={styles.intro}>Hello, I'm a full-stack developer</span>
          </h2>
        <Link to="#about" className={styles.arrow}>∇</Link>
      </div>
    </div>
  )
}

export default HomeSection