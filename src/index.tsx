import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.ts';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const worker = new Worker();
worker.postMessage({ hello: 'world' });
