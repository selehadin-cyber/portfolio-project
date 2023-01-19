import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import Toggle from "./Toggle";
import IconLogo from "../s_logo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navLinks } from "../config";
import { navDelay, loaderDelay } from "../utils";
import { useOnClickOutside, usePrefersReducedMotion } from "../hooks";
import Humburger from "./Humburger";

interface ClassProps {
  toggleFunction: Function;
  language: string;
}

const Navbar: React.FunctionComponent<ClassProps> = ({
  toggleFunction,
  language,
}) => {
  const [navActive, setNavActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  console.log(`nav focus ${navActive}`);
  const ref = useRef();

  useOnClickOutside(ref, () => setNavActive(false));

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const changeNavBackground = () => {
    if (window.scrollY > 80) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavBackground);
  return (
    <>
      <div className="logo">
        <a href="/">
          <IconLogo />
        </a>
      </div>
      <nav className={navActive ? "active" : ""} ref={ref as any}>
        {language === "English" ? (
          <ul className={hasScrolled ? "active" : undefined}>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames="fadedown" timeout={2000}>
                    <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                      <a href={url}>{name}</a>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
            {navActive ? null : (
              <div onClick={() => setNavActive(!navActive)}>
                <Humburger />
              </div>
            )}
          </ul>
        ) : (
          <ul className={hasScrolled ? "active" : undefined}>
            <a href="/">
              <li>Anasayfa</li>
            </a>
            <a href="#about">
              <li>Hakkımda</li>
            </a>
            <a href="#contact">
              <li>İletişim</li>
            </a>
            <a href="#projects">
              <li>Projeler</li>
            </a>
            <li
              className="toggle-container"
              onClick={() => {
                toggleFunction();
                console.log("i was clicked");
              }}
            >
              EN <Toggle /> TR
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
