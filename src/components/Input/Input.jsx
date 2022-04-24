import React from "react"
import styles from "./Input.module.scss"

const Input = ({ type, label, placeholder }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        className={styles.input}
      />
    </div>
  )
}

export { Input }
