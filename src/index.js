import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Bootstrap for react
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import MyRouter from './component/MyRouter'
import { HashRouter } from 'react-router-dom'
ReactDOM.render(
  <HashRouter>
    <MyRouter />
  </HashRouter>,

  document.getElementById('root'));
