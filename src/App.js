import React from "react"
import "./output.css"
import { FormBuilder } from "./components/FormBuilder"
import { FormAccepter } from "./components/FormAccepter"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="container px-4">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FormBuilder />} />
          <Route path="/formaccepter" element={<FormAccepter />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
