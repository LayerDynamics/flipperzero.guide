import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	@font-face {
		font-family: 'Born2bSportyV2';
    src: url('/fonts/Born2bSportyV2.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
	}


  :root, html, body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #ffffff;
    font-synthesis: none;
		height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: #5c5c5c;
    text-decoration: inherit;
  }
  a:hover {
    color: #fb810f;
  }



  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #626265;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #ffffff;
      background-color: #ffffff;
    }
    a:hover {
      color: #5d5d67;
    }
    button {
      background-color: #818181;
    }
  }
`;



export default GlobalStyles;
