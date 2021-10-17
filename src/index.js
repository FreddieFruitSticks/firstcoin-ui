import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstcoinStateProvider from "../src/context/context-provider"
import './styles/theme.css'

ReactDOM.render(
  <FirstcoinStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirstcoinStateProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
