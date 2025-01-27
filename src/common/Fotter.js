import React from 'react'
import '../common/Header.css'


export default function Fotter() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-about">
                        <h3>About Us</h3>
                        <p>
                            We are committed to delivering exceptional content and services. Follow us for updates and insights!
                        </p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" /></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" /></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174876.png" alt="Twitter" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 MyWebsite. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}
