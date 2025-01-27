import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about-us">About</Link></li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
