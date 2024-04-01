import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './styles/GlobalStyles'; // Adjust the import path according to your file structure
import { GravityBold8, Haxrcorp4089, Born2bSportyV2, GravityRegular5} from './styles/FontStyles';
// Use the non-null assertion operator (!) to assert that the element exists.
const rootElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
		<GravityBold8 />
    <Haxrcorp4089 />
		<GravityRegular5 />
    <Born2bSportyV2 />
    <App />
  </React.StrictMode>,
);
