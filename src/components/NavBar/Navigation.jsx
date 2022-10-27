import React from 'react'
import { Link } from "react-router-dom"
import styles from "../NavBar/NavBar.module.css"
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
        <div className={`d-flex align-items-center justify-content-between ${styles.fixedTop} ${styles.header}`} id="header">
            <div>
                <Link to="/" className={styles.logo}>Evelyn Valles</Link>
            </div>
            <NavLinks />
        </div>
    </div>
  )
}

export default Navigation