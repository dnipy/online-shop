import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateLayer from './States'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateLayer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
