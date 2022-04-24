import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styles from "./App.module.scss"

import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
