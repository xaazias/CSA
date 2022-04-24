import React from "react"
import { MovieCard } from "../MovieCard/MovieCard"
import styles from "./CardsContainer.module.scss"

const CardsContainer = () => {
  return (
    <div className={styles.container}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}

export { CardsContainer }
