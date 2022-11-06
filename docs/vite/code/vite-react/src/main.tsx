import React from 'react';
import ReactDOM from 'react-dom/client';
import { debounce } from 'lodash-es';

function add() {
  console.log(1111);
}

const debounceAdd = debounce(add, 1000);

debounceAdd();

import App from './App';
import './index.css';
import 'virtual:windi.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
