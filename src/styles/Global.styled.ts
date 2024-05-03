
import { createGlobalStyle } from "styled-components";
import { thema } from "./Thema";

export const GlobalStyled = createGlobalStyle`
  /* Сброс стилей */
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color:${thema.colors.font}
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Сброс подчеркивания для ссылок */
  a {
    text-decoration: none;
  }

  /* Удаление маркеров списка */
  ul {
    list-style-type: none;
  }

  /* Сброс стилей для элемента bottom */
  bottom {
    background-color: unset;
    border: none;
  }

  /* Стили для нечетных секций */
  section:nth-of-type(odd) {
  background-color: ${thema.colors.primaryBg}  /* стили для нечетных секций */
  }


/* Стили для четных секций */

section:nth-of-type(even) {
    background-color: ${thema.colors.secondaryBg}  /* стили для нечетных секций */
    }
  `