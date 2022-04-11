import { Icon } from "../components/icons";
import styled from "styled-components";

interface Language {
  language: string;
}

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
  .numbered-heading::before {
    position: relative;
    bottom: 0px;
    counter-increment: revert;
    content: "02.";
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
  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);
  a {
    text-decoration: none;
    color: var(--green);
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: var(--green);
      &:hover,
      &:focus,
      &:active {
        color: var(--green);
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: var(--green) !important;
          transition: var(--transition);
        }
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--green);
        transition: var(--transition);
        opacity: 0.5;
      }
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    gap: 20px;
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const ProjectInner: React.FunctionComponent<Language> = (
  /* node */ { language }
) => {
  /* const { frontmatter, html } = node;
    const { github, external, title, tech } = frontmatter; */
  const github = "https://github.com/selehadin-cyber/web3-nft-project";
  const title = "WEB3 nft project";
  const external = "http://web3-nft-project.vercel.app/";
  const tech = ["Reactjs", "Nextjs", "Sanity"];
  const html =
    "a Web3 smart contract project in which everyone can buy premium art work using their metamask wallet.";

  return (
    <StyledProjectsSection id="projects">
      {language === "English" ? (
        <>
          <h2 className="numbered-heading">Somethings I have Built</h2>
          <ul className="projects-grid">
            <StyledProject>
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a href={external} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  </h3>
                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
            <StyledProject>
              <div className="project-inner" id="p2">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href="https://github.com/selehadin-cyber/gokpusu-sitesi"
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href="https://selehadin-cyber.github.io/gokpusu-sitesi/"
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a
                      href="https://selehadin-cyber.github.io/gokpusu-sitesi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Official website of Gökpusu
                    </a>
                  </h3>
                  <div className="project-description">
                    i made the official website for the startup technology team
                    Gökpusu
                  </div>
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
            <StyledProject>
              <div className="project-inner" id="p3">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href="https://github.com/selehadin-cyber/Amana"
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href="https://amanaorg.netlify.app/"
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a
                      href="https://amanaorg.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Amana Association website
                    </a>
                  </h3>
                  <div className="project-description">
                    was contracted to make a website for the Amana Humanitarian
                    Association
                  </div>
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
            <StyledProject>
              <div className="project-inner" id="p4">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href="https://github.com/selehadin-cyber/Javascript-Calculator-with-Dark-mode"
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href="https://selehadin-cyber.github.io/Javascript-Hesap-Makinesi/"
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a
                      href="https://selehadin-cyber.github.io/Javascript-Hesap-Makinesi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Calculator with dark-mode
                    </a>
                  </h3>
                  <div className="project-description">
                    one missing feuture in many of todays calculators is dark
                    mode, so I decided to make it myself
                  </div>
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
          </ul>
        </>
      ) : (
        <>
          <h2 className="numbered-heading">Yaptığım projeler</h2>
          <ul className="projects-grid">
            <StyledProject>
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a href={external} target="_blank" rel="noreferrer">
                      Web3 NFT projesi
                    </a>
                  </h3>
                  <div className="project-description">
                    bu web3 zeki kontract projesinde herkez metamask
                    cuzdanlarını kullanarak premium sanat alabilir
                  </div>
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
            <StyledProject>
              <div className="project-inner" id="p2">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href="https://github.com/selehadin-cyber/gokpusu-sitesi"
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href="https://selehadin-cyber.github.io/gokpusu-sitesi/"
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a
                      href="https://selehadin-cyber.github.io/gokpusu-sitesi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Gökpusu'nun resmi websitesi
                    </a>
                  </h3>
                  <div className="project-description">
                    
                    Gökpusu technoloji İHA takımı için resmi websayfa geliştirdim
                  </div>
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
            <StyledProject>
              <div className="project-inner" id="p3">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href="https://github.com/selehadin-cyber/Amana"
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href="https://amanaorg.netlify.app/"
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a
                      href="https://amanaorg.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Amana insani yardım kuruluşu
                    </a>
                  </h3>
                  <div className="project-description">
                  Amana insani yardım kuruluşunun websitesini geliştirmek için kontrat aldım.
                  </div>
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
            <StyledProject>
              <div className="project-inner" id="p4">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a
                          href="https://github.com/selehadin-cyber/Javascript-Calculator-with-Dark-mode"
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href="https://selehadin-cyber.github.io/Javascript-Hesap-Makinesi/"
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a
                      href="https://selehadin-cyber.github.io/Javascript-Hesap-Makinesi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      karanlık modu olan hesap makinesi
                    </a>
                  </h3>
                  <div className="project-description">
                    bugünün çoğu hesap makinelerinde bulunmayan özelik karanlık modudur, ben de kendim onu eklemeye karar verdim.
                  </div>
                </header>
                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
          </ul>
        </>
      )}
    </StyledProjectsSection>
  );
};

export default ProjectInner;
