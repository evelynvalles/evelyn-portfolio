import React from 'react'
import styles from "../Contact/Contact.module.css"
import ContactForm from './ContactForm'
import headShot from "../../../assets/evelyn.jpg"

const Contact = () => {

    return (
        <div id="contact">
            <section className={styles.contactSec}>
                <h1 className={`text-center ${styles.header}`}>Contact Me</h1>
                <p className={`text-center ${styles.contactP}`}>Feel free to contact me by submitting the form below and I will get back to you as 
                soon as possible!</p>
                <div className={`${styles.contactBox}`}>
                    <div className={`${styles.colOne} ${styles.headShotBox}`}>
                        <img src={headShot} alt="Evelyn Valles" className={styles.headShot}/>
                    </div>
                    <div className={`${styles.colOne}`}>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact