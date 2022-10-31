import React from 'react'
import styles from "../Footer/Footer.module.css"
import mailIcon from "../../../assets/mail.png"

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.mainContainer}>
                <div className={styles.footerUpper}>
                    <div className={`${styles.footerRow} ${styles.footerRowOne}`}>
                        <h2 className={`${styles.headingSm}`}>
                            <span>Social</span>
                        </h2>
                        <div className={styles.footerSocial}>
                            <a target="_blank" href="https://www.linkedin.com/in/evelynvalles/" rel="noopener noreferrer">
                                <img className={styles.footerIcon} src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                                alt="Evelyn Valles LinkedIn Profile" />
                            </a>
                            <a target="_blank" href="https://github.com/evelynvalles" rel="noopener noreferrer">
                                <img className={styles.footerIcon} src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                                alt="Evelyn Valles GitHub Profile" />
                            </a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCWePcbYceA8VamTBjYhYyAw" rel="noopener noreferrer">
                                <img className={styles.footerIcon} src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png"
                                alt="Evelyn Valles YouTube Channel" />
                            </a>
                            <a target="_blank" href="mailto:evelynvalles7@gmail.com" rel="noopener noreferrer">
                                <img className={styles.footerIcon} src={mailIcon} id={styles.mailIcon}
                                alt="Evelyn Valles Direct Email Message" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerRowTwo}>
                        <h2 className={`${styles.headingTwo}`}>Evelyn Valles</h2>
                    </div>
                </div>
            <div className={styles.footerLower}>
                " © Copyright 2022. Made by Evelyn Valles "
            </div>
            </div>
        </footer>
    )
}

export default Footer