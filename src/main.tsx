import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './styles/GlobalStyles'; // Adjust the import path according to your file structure

// Use the non-null assertion operator (!) to assert that the element exists.
const rootElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
