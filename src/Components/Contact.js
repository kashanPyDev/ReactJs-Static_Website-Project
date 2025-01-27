import React from 'react'
import '../common/Header.css'
import Header from '../common/Header'
import Fotter from '../common/Fotter'

export default function Contact() {
    return (
        <>  
            <Header />
            <section id="contact" className="contact-section">
                <div className="content">
                    <h1>Contact Us</h1>
                    <p>We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
                    <form className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </section>
            <Fotter/>

        </>
    )
}
