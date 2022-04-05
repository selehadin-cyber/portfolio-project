import React, { useState } from 'react';
import "./Navbar.scss";
import Toggle from './Toggle';


function Navbar({className}) {
    const [hasScrolled, setHasScrolled] = useState(false);
    
    const changeNavBackground = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true)
      } else {setHasScrolled(false)}

    }
    window.addEventListener("scroll", changeNavBackground)
  return (
    <>
    <nav className={className}>
        <ul className={hasScrolled ? "active" : undefined}>
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