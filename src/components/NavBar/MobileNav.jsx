import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import styles from "../NavBar/NavBar.module.css"
import { CgMenu, CgClose } from "react-icons/cg"
import NavLinks from './NavLinks'

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(false);
    const location = useLocation();

    const hamburgerIcon = <CgMenu className={styles.hamburger}
                            size="40px" color="#333"
                            onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className={styles.hamburger}
                            size="40px" color="#333"
                            onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false);

    const changeColor = () => {
        if (window.scrollY >= 843) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    
    window.addEventListener("scroll", changeColor)

    return (
        <div className={styles.MobileNav}>
            <div className={`${styles.fixedTop} ${color ? styles.headerTwo : styles.header} ${location.pathname === '/resume' && styles.headerTwo}`} 
            id="header">
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