import React from 'react'
import { Link } from "react-router-dom"
import styles from "../NavBar/NavBar.module.css"
import {motion} from "framer-motion"

const NavLinks = (props) => {
const animateFrom = {opacity: 0, y: -40};
const animateTo = {opacity: 1, y: 0};

    return (
        <div>
            <div>
                <ul className={`d-flex align-items-center ${styles.navmenu}`} style={{listStyle: "none"}}>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="#header" style={{textDecoration: "none", color: "#F0EFEB"}} className={styles.link}>Home</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="#about" style={{textDecoration: "none", color: "#F0EFEB"}}>About</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="#portfolio" style={{textDecoration: "none", color: "#F0EFEB"}}>Portfolio</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="#contact" style={{textDecoration: "none", color: "#F0EFEB"}}>Contact</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <Link to="#resume" style={{textDecoration: "none", color: "#F0EFEB"}}>Resume</Link>
                    </motion.li>
                </ul>
            </div>
        </div>
    )
}

export default NavLinks