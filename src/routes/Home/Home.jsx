import React from "react"
import styles from "./Home.module.scss"
import { useSelector } from "react-redux"

import { isAuthenticated } from "../../utils/auth"

import { CardsContainer } from "../../components/CardsContainer/CardsContainer"
import { Header } from "../../components/Header/Header"

const Home = () => {
  const user = useSelector(state => state.user)

  return (
    <div className={styles.home}>
      <Header isLogged={isAuthenticated(user)} />
      <CardsContainer />
    </div>
  )
}

export { Home }
