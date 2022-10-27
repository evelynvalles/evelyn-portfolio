import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styles from "../NavBar/NavBar.module.css"
import NavLinks from './NavLinks'

const Navigation = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 735) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  return (
    <div className={styles.Navigation}>
        <div className={`${styles.fixedTop} ${color ? styles.headerTwo : styles.header}`} id="header">
            <div>
                <Link to="/" className={styles.logo}>Evelyn Valles</Link>
            </div>
            <NavLinks />
        </div>
    </div>
  )
}

export default Navigation