import React from 'react'
import { Link, useLocation } from "react-router-dom"
import styles from "../NavBar/NavBar.module.css"
import {motion} from "framer-motion"

const NavLinks = (props) => {
const animateFrom = {opacity: 0, y: -40};
const animateTo = {opacity: 1, y: 0};
const location = useLocation();

    return (
        <div>
            <div>
                {
                    location.pathname === '/' ?
                <ul className={`d-flex align-items-center ${styles.navmenu}`} style={{listStyle: "none"}}>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <a href="/#home" style={{textDecoration: "none", color: "#F0EFEB"}} className={styles.link}>Home</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <a href="/#about" style={{textDecoration: "none", color: "#F0EFEB"}}>About</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <a href="/#portfolio" style={{textDecoration: "none", color: "#F0EFEB"}}>Portfolio</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <a href="/#contact" style={{textDecoration: "none", color: "#F0EFEB"}}>Contact</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="/resume" style={{textDecoration: "none", color: "#F0EFEB"}}>Resume</Link>
                    </motion.li>
                </ul>
                :
                <ul className={`d-flex align-items-center ${styles.navmenu}`} style={{listStyle: "none"}}>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="/" style={{textDecoration: "none", color: "#F0EFEB"}} className={styles.link}>Home</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="/resume" style={{textDecoration: "none", color: "#F0EFEB"}}>Resume</Link>
                    </motion.li>
                </ul>
            }
            </div>
        </div>
    )
}

export default NavLinks