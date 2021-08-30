import React from 'react';
import ReactDOM from 'react-dom';
import "animate.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { BreadProvider } from 'react-dynamic-breadcrumb';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-dynamic-breadcrumb/dist/index.css"; 
AOS.init({
  delay: 50
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BreadProvider>
        <App />
      </BreadProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
