import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../config";
import sr from "../utils/sr";
import profile from "../selo.jpg";

interface Language {
  language: string;
}

const StyledAboutSection = styled.section`
  max-width: 900px;
  padding: 100px 0px;
  width: 100%;
  .numbered-heading::before {
    position: relative;
    bottom: 0px;
    counter-increment: revert;
    content: "01.";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
  }
  .numbered-heading::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
    width: 300px;
  }
  div p {
    color: var(--lightest-slate);
  }
  p > a:hover,
  p > a:focus,
  p > a:active {
    color: var(--green);
    outline: currentcolor none 0px;
  }
  p > a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
  }
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    gap: 0px 10px;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    justify-content: start;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  img {
    width: inherit;
  }
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .numbered-heading {
    display: flex;
    -moz-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
  }
  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About: React.FunctionComponent<Language> = ({ language }) => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Bootstrap",
    "Nextjs",
    "Node.js",
    "SCSS",
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">
        {language === "English" ? "About Me" : "Hakkımda"}
      </h2>

      <div className="inner">
        <StyledText>
          <div>
            {language === "English" ? (
              <>
                <p>
                  Hello! My name is Selehadin and I enjoy creating things that
                  live on the internet. My interest in web development started
                  back in 2020
                </p>

                <p>
                  Fast-forward to today, and I've had the privilege of working
                  at{" "}
                  <a href="https://www.erbakir.com.tr/">
                    a cable manufacturing company
                  </a>{" "}
                  and <a href="https://gokpusu.com">a start-up</a>, . My main
                  focus these days is building accessible, inclusive products
                  and digital experiences at{" "}
                  <a href="https://gokpusu.com">Gökpusu</a> for a variety of
                  clients.
                </p>

                <p>
                  Here are a few technologies I've been working with recently:
                </p>
              </>
            ) : (
              <>
                <p>
                  Merhaba! benim adım Selehadin. internette yaşayan şeyleri
                  geliştirmeyi severim. geliştirmeye olan ilgim 2020 yılında
                  başladı.
                </p>

                <p>
                bugüne geldiğimizde{" "}
                  <a href="https://www.erbakir.com.tr/">
                    kablo üretici firmada
                  </a>{" "}
                  ve <a href="https://gokpusu.com">bir start-upda</a> çalışma
                  fırsatım oldu. Bugünlerde Önceliğim engelsiz, ileri ve dijital tecrübeleri {" "}
                  <a href="https://gokpusu.com">Gökpusu</a> da geliştirmektır.
                </p>

                <p>
                  yakın zamanda çalışırken kolandığım teknolojiler:
                </p>
              </>
            )}
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img src={profile} alt="profile" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
