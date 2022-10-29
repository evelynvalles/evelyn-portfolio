import React, { useState } from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import PortfolioWeb from './PortfolioWeb';
import PortfolioMobile from './PortfolioMobile';

const Portfolio = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div id="portfolio" className={styles.Portfolio}>
            <div style={{height: "20px"}}></div>
            <h1 className={`text-center ${styles.header}`}>My Portfolio</h1>
            <section className={`${styles.portfolioSec}`}>
                <PortfolioWeb toggleState={toggleState} toggleTab={toggleTab}/>
                <PortfolioMobile toggleState={toggleState} toggleTab={toggleTab}/>
            </section>
        </div>
    )
}

export default Portfolio