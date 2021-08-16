import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Worker from './test.worker.ts';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const worker = new Worker();
worker.postMessage({ hello: 'world' });
