import React from 'react'
import styles from "../About/AboutMe.module.css"
import developer from "../../../assets/developer.png"
import problemSolver from "../../../assets/problem-solving.png"
import teamPlayer from "../../../assets/teamwork.png"

const AboutMe = () => {

    return (
        <div id="about">
            <div style={{height: "10px"}}></div>
            <h1 className={`text-center ${styles.header}`}>About Me</h1>
            <section className={`${styles.aboutSec}`}>
                <p className={`mt-5 text-center ${styles.bio}`}>Hello World! My name is Evelyn Valles, 
                and I am a full-stack developer from Oklahoma City. I have a passion for building websites 
                and solving real-world challenges. My goal as a full-stack developer is to produce
                innovative, safe, and clean code to any I projects participate in or create. As a result, I continously
                work on learning something new every day. Outside of work, I am either traveling, playing video games,
                or exploring the beauty of our fascinating planet.
                </p>
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
                        <h2>Collaborator</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe