
import { createGlobalStyle } from "styled-components";
import { thema } from "./Thema";

export const GlobalStyled = createGlobalStyle`
  /* Reset styles */
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${thema.colors.font};
    line-height: 1.2;
  }

/* Remove underline for links */
a {
    text-decoration: none;
  }


  /* Remove list markers */
  ul {
    list-style: none;
  }

  code {
    font-family: 'source-code-pro', Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Remove styles for button element */
  button {
    background-color: unset;
    border: none;
  }

  /* Styles for odd sections */
  section:nth-of-type(odd) {
    background-color: ${thema.colors.primaryBg};
  }

  /* Styles for even sections */
  section:nth-of-type(even) {
    background-color: ${thema.colors.secondaryBg};
  }
`;
