import React, { useRef, useState } from "react";
/* import logo from "./bitmassssp.png"; */
import "./App.css";
import Navbar from "./components/Navbar";
import SocialList from "./components/Social";
import Email from "./components/Email";
import Humburger from "./components/Humburger";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectInner from "./components/TestProject";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";
import { EnglishTheme, GlobalStyles, TurkishTheme } from "./components/Themes";
import Hero from "./components/Hero";
import { useOnClickOutside } from "./hooks";

function App() {
  
  const [language, setLanguage] = useState("English");


  const toggleFunction = () => {
    language === "English" ? setLanguage("Turkish") : setLanguage("English");
  };
  return (
    <ThemeProvider theme={language === "English" ? EnglishTheme : TurkishTheme}>
      <div className="App">
      <GlobalStyles />
      
        <Navbar
          toggleFunction={toggleFunction}
          language={language}        
        />

        <div className="side">
          <SocialList />
        </div>
        <div className="sideright">
          <Email />
        </div>
        {/* <div onClick={() => setNavActive(!navActive)}>
          <Humburger />
        </div> */}
        <main className="fillheight">
        <Hero />
          {/* <h2>
            {language === "English" ? "Hi, my name is" : "Merhaba, benim adım"}
          </h2>
          <h1 className="big-heading">Selehadin Abdurahman A.</h1>
          <h3 className="big-heading">
            {language === "English"
              ? "I build meaningfull websites"
              : "değer katan websiteler geliştiriyorum"}
          </h3>
          <p className="hero-ptext">
            {language === "English" ? (
              <span>
                I am graduate from University of Pamukkale. I enjoy making cool
                and awesome sites and also making meaningfull and value
                delivering apps"
              </span>
            ) : (
              <span>
                Pamukkale Üniversitesi mezunuyum. cazip ve şahane websitelere
                geliştirmeyi seviyorum, aynı zamanda anlamlı ve hayat
                kolaylaştıran uygulamaları geliştiriyorum
              </span>
            )}
          </p>
          <a href="mailto:sele4416@gmail.com" className="cta">
            {language === "English" ? ("Get in touch") : ("iletişime geçin")}
          </a> */}
          <About language={language} />
          {/* <Projects title={"web3 project"} description={"lorem ipsum dolor amit"} imgUrl={profile}/> */}
          <ProjectInner language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} />
      </div>
    </ThemeProvider>
  );
}

export default App;
