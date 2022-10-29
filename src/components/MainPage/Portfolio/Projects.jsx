import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"

const Projects = (props) => {
    
    return (
        <div>
            <div className={props.toggleState === 1 ? styles.activeContent : styles.portfolioContent}>
                <h2>Travel.com</h2>
                <p>As a full-stack developer with a tremendous passion of traveling and front-end design, I programmed this travel website to find real-time 
                hotel availablity at the world's most popular tourist attractions. Additionally, Travel.com is a full-stack Python website that features
                the option for users to register and login and to book their dream vacation. While designing Travel.com, I took much 
                care into the front-end design in order to provide users with a modern and attractice booking website and stand out 
                from others.</p>
                <h3>Programmed With:</h3>
                <p className={styles.techNames}>
                Python - Flask - MySQL - Flask's Smtplib Mail Sender - Jinja - Bycrpt - Hotel's API - JSON - JavaScript - CSS - HTML
                </p>
            </div>

            <div className={props.toggleState === 2 ? styles.activeContent : styles.portfolioContent}>
                <h2>SneakerHead</h2>
                <p>A full-stack MERN e-commerce website allowing users to browse, shop, and checkout their favorite sneakers.
                The inspiration behind this project was behind my love for shopping, admiration for modern e-commerce 
                websites using single-page software and tools, and love for shoes like Jordan and Nike.</p>
                <h3>Programmed With:</h3>
                <p className={styles.techNames}>
                React.js - Commerce.js - Stripe API - React-hook-form - Material-UI - CSS - JSX - JavaScript - Node.js
                </p>
            </div>

            <div className={props.toggleState === 3 ? styles.activeContent : styles.portfolioContent}>
                    <h2>CodeLifter</h2>
                    <p>This project was created in a one-week sprint with another software developer. The inspiration behind this project 
                    came from the idea that we wanted to create a sense of community for people who are trying to break into software 
                    development from non-traditional backgrounds. Therefore, a platform was established where website visitors can share
                    experiences and exchanging ideas via forming/joining study groups, creating/commenting on posts regarding jobs, 
                    interview preparation, lifestyle, and success stories.</p>
                    <h3>Programmed With:</h3>
                    <p className={styles.techNames}>
                    Java - Spring - Spring Boot - Spring Security - Bycrpt - JSP - MySQL - Spring Data JPA - Java Mail Sender - CSS
                    </p>
            </div>
        </div>
    )
}

export default Projects