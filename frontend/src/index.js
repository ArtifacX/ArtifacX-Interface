import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import getLibrary from "./utils/getLibrary";
import { Web3ReactProvider } from "@web3-react/core";
import { ToastProvider } from 'react-toast-notifications';
import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <ToastProvider placement="bottom-right">
          <Provider store={store}>
            <App />
          </Provider>
        </ToastProvider>
      </BrowserRouter>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
