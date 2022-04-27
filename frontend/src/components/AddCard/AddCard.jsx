import React from "react"
import styles from "./AddCard.module.scss"

const AddCard = ({ setUser, setModal }) => {
  return (
    <div className={styles.card}>
      <button
        className={styles.button}
        onClick={() => {
          setUser({ name: "", email: "" })
          setModal((prev) => ({ ...prev, state: true }))
        }}
      >
        Добавить
        <br />
        пользователя
      </button>
    </div>
  )
}

export { AddCard }
