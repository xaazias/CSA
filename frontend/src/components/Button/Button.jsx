import React from "react"
import styles from "./Button.module.scss"

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[type] : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export { Button }
