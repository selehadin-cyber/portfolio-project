import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../components/icons";

interface Language {
  language: string;
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer: React.FunctionComponent<Language> = ({ language }) => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: 20,
    forks: 1000,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/selehadin-cyber/portfolio-project")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/selehadin-a-7bb11116b/"
              aria-label="linkedin"
            >
              <Icon name={"Linkedin"} />
            </a>
          </li>
          <li>
            <a href="https://github.com/selehadin-cyber" aria-label="github">
              <Icon name={"GitHub"} />
            </a>
          </li>
        </ul>
      </StyledSocialLinks>

      <StyledCredit>
        <a href="https://github.com/bchiang7/v4">
          {language === "English" ? (
            <div>Designed by Brittany Chiang coded by Selehadin Abdurahman</div>
          ) : (
            <div>Brittany Chiang tarafından tasarlandı, kodlanan Selehadin Abdurahman</div>
          )}

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
