import React from "react";
import styled from "styled-components";
import profile from "../selo.jpg";
import { GitHubLogo } from "../s_logo";

interface PropsType{
    title: string,
    description: string,
    imgUrl: any
}

const StyledProjects = styled.main`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: hsl(216, 50%, 16%);
    width: 320px;
    border-radius: 15px;
    position: relative;
  }
  main > div > img {
    width: 252px;
    border-radius: 20px;
    padding: 13px;
  }
  .imgcontainer {
    position: relative;
    overflow: hidden;
  }
  .imgcontainer:hover > a .svg {
    left: 14px;
    /* right: 14px;*/
  }
  a {
    text-decoration: none;
  }
  .svg {
    position: absolute;
    border-radius: 15px;
    padding: 13px;
    width: 227px;
    top: 14px;
    bottom: 14px;
    left: -100%;
    background: hsl(178, 100%, 50%);
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }
  h1 {
    color: hsl(0, 0%, 100%);
    font-family: Outfit;
    font-weight: 600;
    font-size: 20px;
    padding: 0;
    width: 100%;
    position: absolute;
    left: 15px;
  }
  p {
    color: hsl(215, 51%, 70%);
    font-size: 18px;
    /*text-align: center;*/
    font-family: Outfit;
  }
  main > p {
    margin: 40px 15px 10px 15px;
    width: 90%;
    text-align: left;
    font-weight: 300;
  }
  .detail {
    display: flex;
    flex-direction: row;
  }
  svg {
    align-self: center;
    padding: 6px;
  }
  .subcontainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    width: 90%;
  }
  .subcontainer .detail .teal,
  span {
    color: hsl(178, 100%, 50%);
  }
  .line {
    height: 1px;
    width: 90%;
    background-color: hsl(215, 32%, 27%);
  }
  .attribute {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
  }
  .attribute div img {
    width: 25px;
    border: 2px solid;
    border-color: hsl(0, 0%, 100%);
    border-radius: 50%;
    padding: 0;
  }
  .alighn {
    position: absolute;
    left: 15px;
    right: 10px;
    bottom: 27px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .alighn p {
    margin-left: 10px;
  }
  .attribution {
    position: absolute;
    bottom: 10px;
  }
`;

const Projects:React.FunctionComponent<PropsType> = ({ imgUrl, description , title}) => {
  return (
    <StyledProjects>
      <main className="container">
        <div className="imgcontainer">
          <img src={imgUrl} alt="nft-image" />
          <a href="/">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        </div>
        <a href="/">
          <h1>{title}</h1>
        </a>
        <p>{description}</p>
        <div className="subcontainer">
          <div className="detail">
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <p className="teal">0.041 ETH</p>
          </div>
          <div className="detail">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <p>3 days left</p>
          </div>
        </div>
        {/* <div className="line"></div> */}
      </main>
    </StyledProjects>
  );
}

export default Projects;
