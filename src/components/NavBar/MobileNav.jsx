import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styles from "../NavBar/NavBar.module.css"
import { CgMenu, CgClose } from "react-icons/cg"
import NavLinks from './NavLinks'

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className={styles.hamburger}
                            size="40px" color="#333"
                            onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className={styles.hamburger}
                            size="40px" color="#333"
                            onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false);

    return (
        <div className={styles.MobileNav}>
            <div className={`d-flex align-items-center justify-content-between ${styles.fixedTop} ${styles.header}`} id="header">
                <div>
                    <Link to="/" className={styles.logo}>Evelyn Valles</Link>
                </div>
                <div>
                    {open ? closeIcon : hamburgerIcon}
                    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
                </div>
            </div>
        </div>
    )
}

export default MobileNav