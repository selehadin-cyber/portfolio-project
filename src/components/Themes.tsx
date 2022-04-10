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
`;