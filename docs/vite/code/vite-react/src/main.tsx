import React from 'react'
import ReactDOM from 'react-dom/client'
import {name} from '../package.json'
console.log((name))

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
