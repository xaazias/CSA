import React from "react"
import styles from "./ContentContainer.module.scss"

import { CardsContainer } from "../CardsContainer/CardsContainer"

const ContentContainer = () => {
  return (
    <div className={styles.content}>
      <CardsContainer />
    </div>
  )
}

export { ContentContainer }
