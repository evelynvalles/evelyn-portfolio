import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Projects from './Projects'

const PortfolioMobile = (props) => {


  return (
    <div className={styles.PortfolioMobile}>
        <div className={styles.portfolio}>
          <div className={styles.mobileTabs}>
            <div className={`${styles.tabs} ${styles.hvrShrink} ${props.toggleState === 1 && styles.activeTab}`}
                  onClick={() => props.toggleTab(1)}>Travel.com</div>
                  <div className={`${styles.tabs} ${styles.hvrShrink} ${props.toggleState === 2 && styles.activeTab}`}
                  onClick={() => props.toggleTab(2)}>SneakerHead</div>
                  <div className={`${styles.tabs} ${styles.hvrShrink} ${props.toggleState === 3 && styles.activeTab}`}
                  onClick={() => props.toggleTab(3)}>CodeLifter</div>
            </div>
            <div className={`${styles.box}`}>
              <Projects toggleState={props.toggleState}/>
            </div>
        </div>
    </div>
  )
}

export default PortfolioMobile