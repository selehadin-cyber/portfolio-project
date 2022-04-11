import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig, email } from "../config";
import sr from "../utils/sr";


interface Language {
  language: string;
}

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  padding-block: 100px;
  .numbered-heading::before {
    position: relative;
    bottom: 4px;
    content: "03.";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
  }
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  p {
    color: var(--lightest-slate);
  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    display: inline-block;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
    margin-top: 50px;
  }
`;

const Contact: React.FunctionComponent<Language> = ({ language }) => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      {language === "English" ? (
        <>
          <h2 className="numbered-heading overline">What’s Next?</h2>

          <h2 className="title">Get In Touch</h2>

          <p>
            my inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>

          <a className="email-link" href={`mailto:${email}`}>
            Say Hello
          </a>
        </>
      ) : (
        <>
          <h2 className="numbered-heading overline">sonraki aşama?</h2>

          <h2 className="title">İletişime geç</h2>

          <p>
            gelen kutum her zaman açıktır. Soru sormak için olsun yada sadece merhaba
            demek için, size geri dönüş yapmak için ellimden geleni yaparım!
          </p>

          <a className="email-link" href={`mailto:${email}`}>
            Merhaba de
          </a>
        </>
      )}
    </StyledContactSection>
  );
};

export default Contact;
