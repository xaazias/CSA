import React from "react"
import styles from "./Home.module.scss"

import { CardsContainer } from "../../components/CardsContainer/CardsContainer"
import { Header } from "../../components/Header/Header"

const Home = () => {
  return (
    <div className={styles.home}>
      <Header isLogged={false} />
      <CardsContainer />
    </div>
  )
}

export { Home }
