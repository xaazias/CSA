import React from "react"
import styles from "./App.module.scss"

import { ContentContainer } from "./components/ContentContainer/ContentContainer"
import { Header } from "./components/Header/Header"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ContentContainer />
    </div>
  )
}

export default App
