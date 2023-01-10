import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from 'react'

export default function App() {
  return (
    <div>
      <Router>
        <div>
        <Routes>
          <Route path="/h" element={<Home/>} />
          
        </Routes>
        </div>
      </Router>
    </div>
  )
}

