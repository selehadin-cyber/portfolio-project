import React, { useState } from 'react';
import "./Navbar.css";
import Toggle from './Toggle';

function Navbar() {
    const [hasScrolled, setHasScrolled] = useState(false);
    
  return (
    <>
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Works</li>
            <Toggle />
        </ul>
    </nav>
    </>
  )
}

export default Navbar