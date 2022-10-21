import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
