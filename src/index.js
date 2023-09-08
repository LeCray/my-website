import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "@fontsource/montserrat"; // Defaults to weight 400.


render((	
  <BrowserRouter>
    <App />
  </BrowserRouter>  
), document.getElementById('root'));
