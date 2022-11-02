import React, { useRef } from 'react'
import styles from "../Contact/Contact.module.css"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID_API_KEY, process.env.REACT_APP_TEMPLATE_ID_API_KEY, form.current, process.env.REACT_APP_EMAILJS_API_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div className={`${styles.contactFormContainer}`}>
            <form onSubmit={sendEmail} className={styles.contactForm} ref={form}>
                <div className={`${styles.contactFormField}`}>
                    <label className={`${styles.contactFormLabel}`} htmlFor="user_name">Name</label>
                    <input required placeholder='Enter Your Name' type="text" 
                    className={`${styles.contactFormInput}`} name="user_name" />
                </div>
                <div className={`${styles.contactFormField}`}>
                    <label className={`${styles.contactFormLabel}`} htmlFor="user_email">Email</label>
                    <input required placeholder='Enter Your Email' type="email" 
                    className={`${styles.contactFormInput}`} name="user_email" />
                </div>
                <div className={`${styles.contactFormField}`}>
                    <label className={`${styles.contactFormLabel}`} htmlFor="message">Message</label>
                    <textarea required placeholder='Enter Your Message' cols="30" rows="8"
                    className={`${styles.contactFormInput}`} name="message" />
                </div>
                <button type="submit" className={`${styles.btn} ${styles.contactBtn} ${styles.hvrForward}`}>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm