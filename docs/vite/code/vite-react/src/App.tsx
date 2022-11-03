import React from 'react';
import './App.scss';

import Header from '@/components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </div>
      <h1>Vite + React</h1>
    </div>
  );
}

export default App;
