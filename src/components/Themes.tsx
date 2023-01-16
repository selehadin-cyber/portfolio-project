import { createGlobalStyle } from "styled-components";

export const EnglishTheme = { color: "black", background: "white", left: "1px" };
export const TurkishTheme = { color: "white", background: "black", left: "30px" };

export interface ThemeType {
    color: string;
    background: string;
}



export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  body {
    background: ${(props) => props.theme.background};
  }
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillheight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }
`;