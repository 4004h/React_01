import ReactDOM from 'react-dom/client';
import App from './st-12/App'; //가저온 이름
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App/>

  //쓸때이름 같아야함
);

// <React.StrictMode>
//   <BrowserRouter>


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for enpmxample: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
