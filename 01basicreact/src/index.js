import React from 'react';                   // Core foundational library which works on to take references 
import ReactDOM from 'react-dom/client';     // It is the implementation on web

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  // it makes self dom which is virtual dom and comapares with the main dom
root.render(
 
    <App />
  
);
