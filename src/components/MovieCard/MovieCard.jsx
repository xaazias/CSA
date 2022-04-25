import React from "react"
import { Link } from "react-router-dom"
import styles from "./MovieCard.module.scss"

const MovieCard = ({ id, rating, poster }) => {
  const backgroundImage = poster
    ? { background: `center / cover url(${poster})` }
    : { display: "none" }

  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.card} style={backgroundImage}>
        <div className={styles.rating}>
          <p>{rating ? rating : "NONE"}</p>
        </div>
        <div className={styles.background}></div>
      </div>
    </Link>
  )
}

export { MovieCard }
