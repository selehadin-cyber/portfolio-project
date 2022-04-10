import React, { useState } from 'react';
import "./Navbar.scss";
import Toggle from './Toggle';
import IconLogo from "../s_logo";


interface ClassProps{
  className: any;
  toggleFunction: Function;
}


const Navbar:React.FunctionComponent<ClassProps> = ({className, toggleFunction}) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    
    const changeNavBackground = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true)
      } else {setHasScrolled(false)}

    }
    window.addEventListener("scroll", changeNavBackground)
  return (
    <>
    <div className="logo">
        <a href="/">
          <IconLogo />
        </a>
      </div>
    <nav className={className}>
        <ul className={hasScrolled ? "active" : undefined}>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
            <a href="#projects">
              <li>Works</li>
            </a>
            <li className='toggle-container' onClick={() => {toggleFunction();console.log("i was clicked")}}>
              EN <Toggle /> TR
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar