import React from 'react'
import Header from '../common/Header'
import Fotter from '../common/Fotter'
import '../common/Header.css'


export default function Home() {
    return (
        <>
            <Header />
            <section id="home" className="home-section">
                <div className="content">
                    <h1>Welcome to My Website</h1>
                    <p>
                        Discover amazing content, explore new ideas, and connect with us for an incredible journey.
                        Your satisfaction is our priority.
                    </p>
                    <a href="#contact" className="btn">Get in Touch</a>
                </div>
            </section>
            <Fotter/>

        </>
    )
}
