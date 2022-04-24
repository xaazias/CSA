import React from "react"
import styles from "./MovieCard.module.scss"

const MovieCard = () => {
  return <div className={styles.card}>
    <div className={styles.rating}><p>7.0</p></div>
    <div className={styles.background}></div>
  </div>
}

export { MovieCard }
