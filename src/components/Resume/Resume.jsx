import React from 'react'
import styles from "../Resume/Resume.module.css"

const Resume = () => {

    return (
        <>
        <section className={styles.resumeSec}>
            <div className={styles.container}>
                <div className={`${styles.row}`}>
                    <div>
                        <article>
                            <h1 className={styles.header}>Resume</h1>
                            <p className={styles.top}>
                                Reach out to me via my <a target="_blank" href="https://www.linkedin.com/in/evelynvalles/" rel="noopener noreferrer">
                                        LinkedIn</a>! <a target="_blank" href="https://drive.google.com/file/d/1cGlgQHpdBsA1v7bWoDas6lVJ9H0zeSNs/view?usp=sharing" rel="noopener noreferrer">
                                    view
                                </a> or <a href="https://drive.google.com/uc?id=1cGlgQHpdBsA1v7bWoDas6lVJ9H0zeSNs&export=download">
                                    download
                                </a> the resume.
                            </p>
                        </article>
                        <iframe src="https://drive.google.com/file/d/1cGlgQHpdBsA1v7bWoDas6lVJ9H0zeSNs/preview" className={styles.resumeDoc} allow="autoplay" title="Evelyn's Resume 2022"></iframe>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Resume