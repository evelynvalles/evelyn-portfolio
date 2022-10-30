import React from 'react'
import styles from "../Contact/Contact.module.css"

const ContactForm = () => {
    return (
        <div className={`${styles.contactFormContainer}`}>
            <form action='#' method='POST' className={styles.contactForm}>
                <div className={`${styles.contactFormField}`}>
                    <label className={`${styles.contactFormLabel}`} for="name">Name</label>
                    <input required placeholder='Enter Your Name' type="text" 
                    className={`${styles.contactFormInput}`} name="name" />
                </div>
                <div className={`${styles.contactFormField}`}>
                    <label className={`${styles.contactFormLabel}`} for="email">Email</label>
                    <input required placeholder='Enter Your Email' type="text" 
                    className={`${styles.contactFormInput}`} name="email" />
                </div>
                <div className={`${styles.contactFormField}`}>
                    <label className={`${styles.contactFormLabel}`} for="message">Message</label>
                    <textarea required placeholder='Enter Your Message' cols="30" rows="8"
                    className={`${styles.contactFormInput}`} name="message" />
                </div>
                <button type="submit" className={`${styles.btn} ${styles.contactBtn} ${styles.hvrForward}`}>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm