import React, { useState } from 'react';
import "./Navbar.scss";
/* import Toggle from './Toggle'; */
import IconLogo from "../s_logo";


interface ClassProps{
  className: any;
}


const Navbar:React.FunctionComponent<ClassProps> = ({className}) => {
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
        <IconLogo />
      </div>
    <nav className={className}>
        <ul className={hasScrolled ? "active" : undefined}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Works</li>
            {/* <Toggle /> */}
        </ul>
    </nav>
    </>
  )
}

export default Navbar