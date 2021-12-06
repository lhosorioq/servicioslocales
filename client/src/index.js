import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from '../src/assets/Styles/GlobalStyles.jsx';

Axios.defaults.baseURL = 'https://servicios-locales.herokuapp.com';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
