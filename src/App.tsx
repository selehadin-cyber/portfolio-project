import React, { useState } from "react";
import logo from "./bitmassssp.png";
import "./App.css";
import Navbar from "./components/Navbar";
import SocialList from "./components/Social";
import Email from "./components/Email";
import Humburger from "./components/Humburger";

function App() {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="App">
      <Navbar className={navActive ? "active": undefined}/>
      
      <div className="side">
      <SocialList />
      </div>
      <div className="sideright">
        <Email />
      </div>
      <div onClick={() => setNavActive(!navActive)}>
        <Humburger />
      </div>
      <main className="fullheight">
        <h2>Hi, my name is</h2>
        <h1 className="big-heading">Selehadin Abdurahman A.</h1>
        <h3 className="big-heading">i build meaning-full websites</h3>
        <p className="hero-ptext">
          i am graduate from University of Pamukkale.i enjoy making cool and
          awesome sites and also making meaningfull and value delivering apps
        </p>
        <a href="/" className="cta">Get in touch</a>
      </main>
    </div>
  );
}

export default App;
