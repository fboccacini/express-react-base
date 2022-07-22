import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";

import MainContextProvider from './contexts/MainContext'
axios.defaults.withCredentials = true;
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <MainContextProvider>
        <App />
      </MainContextProvider>
  </React.StrictMode>
);