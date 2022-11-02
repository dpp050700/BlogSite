import './App.scss'

import Header from "@/components/header";

function App() {

  return (
    <div className="App">
      <Header />
      <div className='bg-red-400'>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </div>
      <h1>Vite + React</h1>
    </div>
  )
}

export default App
