import React from "react"
import { BrowserRouter, Routes } from "react-router-dom"
import styles from "./App.module.scss"

import { HomeRoute } from "./routes/HomeRoute"
import { LoginRoute } from "./routes/LoginRoute"

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <HomeRoute />
          <LoginRoute />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
