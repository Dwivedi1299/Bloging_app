import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <h4 className='nav'>Write a Bolg!</h4>
    <App />
  </React.StrictMode>
);


