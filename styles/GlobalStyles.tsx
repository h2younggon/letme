import {css, Global} from "@emotion/react";

export const globalStyles = (
    <Global styles={css`
      html,
      body,
      #root {
        height: 100%;
      }
      html {
        box-sizing: border-box;
        * {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
        }
      }
      a {
        text-decoration: none;
      }
      button {
        border: none;
        outline: none;
        cursor: pointer;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `} />
)
