import React from 'react'
import styles from "../About/AboutMe.module.css"
import developer from "../../../assets/developer.png"
import problemSolver from "../../../assets/problem-solving.png"
import teamPlayer from "../../../assets/teamwork.png"

const AboutMe = () => {

    return (
        <div id="about">
            <div style={{height: "10px"}}></div>
            <section className={`${styles.aboutSec}`}>
                <h1 className={`text-center ${styles.header}`}>About Me</h1>
                <div className={`${styles.aboutContent}`}>
                    <div className={`${styles.aboutContentMain}`}>
                        <h2 className={styles.contentTitle}>Get to know me!</h2>
                        <p className={`${styles.bio}`}>Hello World! My name is Evelyn Valles, 
                        and I am a full-stack developer from Oklahoma City. I have a passion for building websites 
                        and solving real-world challenges. My goal as a full-stack developer is to produce
                        innovative, safe, and clean code to any I projects participate in or create. As a result, I continously
                        work on learning something new every day. Outside of work, I am either traveling, playing video games,
                        or exploring the beauty of our fascinating planet.
                        </p>
                        <p className={`${styles.bio}`}>
                        I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then 
                        don't hesitate to contact me.
                        </p>
                    </div>
                    <div className={`${styles.aboutContentSkills}`}>
                        <h2 className={styles.contentTitle}>My Skills</h2>
                        <div className={styles.skills}>
                            <div className={styles.skillsBtn}>HTML</div>
                            <div className={styles.skillsBtn}>CSS</div>
                            <div className={styles.skillsBtn}>JavaScript</div>
                            <div className={styles.skillsBtn}>Python</div>
                            <div className={styles.skillsBtn}>React.js</div>
                            <div className={styles.skillsBtn}>Java</div>
                            <div className={styles.skillsBtn}>Flask</div>
                            <div className={styles.skillsBtn}>Express</div>
                            <div className={styles.skillsBtn}>Node.js</div>
                            <div className={styles.skillsBtn}>Spring Boot</div>
                            <div className={styles.skillsBtn}>Spring Security</div>
                            <div className={styles.skillsBtn}>Bcrypt</div>
                            <div className={styles.skillsBtn}>Bootstrap</div>
                            <div className={styles.skillsBtn}>Material-UI</div>
                            <div className={styles.skillsBtn}>MongoDB</div>
                            <div className={styles.skillsBtn}>MySQL</div>
                            <div className={styles.skillsBtn}>Mongoose</div>
                            <div className={styles.skillsBtn}>Jinja</div>
                            <div className={styles.skillsBtn}>Rest APIs</div>
                            <div className={styles.skillsBtn}>AJAX</div>
                            <div className={styles.skillsBtn}>OOP</div>
                            <div className={styles.skillsBtn}>AWS</div>
                            <div className={styles.skillsBtn}>GIT</div>
                            <div className={styles.skillsBtn}>GitHub</div>
                            <div className={styles.skillsBtn}>VS Code</div>
                        </div>
                    </div>
                </div>
                <h1 className={`text-center ${styles.header}`}>What I Do</h1>
                <div className={`${styles.row}`}>
                    <div className={styles.imgBox}>
                        <img src={developer} alt="developer" className={styles.aboutImg}/>
                        <h2>Development</h2>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={problemSolver} alt="problem solver" className={styles.aboutImg}/>
                        <h2>Problem Solving</h2>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={teamPlayer} alt="team player" className={styles.aboutImg}/>
                        <h2>Collaboration</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe