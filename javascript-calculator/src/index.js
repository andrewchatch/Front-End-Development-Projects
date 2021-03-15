import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/store/store";
import './index.css';
import Calculator from '../src/js/components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
//import $ from "jquery";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Calculator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('calculator')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
