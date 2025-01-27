import React from 'react'
import '../common/Header.css'
import Header from '../common/Header'
import Fotter from '../common/Fotter'


export default function About() {
    return (
        <>
            <Header />
            <section id="about" className="about-section">
                <div className="content">
                    <h1>About Us</h1>
                    <p>
                        We are passionate about delivering high-quality content and exceptional services to our users.
                        Our team is dedicated to providing innovative solutions and creating meaningful connections.
                    </p>
                    <a href="#contact" className="btn">Learn More</a>
                </div>
            </section>
            <Fotter/>

        </>
    )
}
