import React from "react"
import styles from "./Checkbox.module.scss"

const Checkbox = ({ onChange }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" onChange={onChange} />
      <p>Согласен с пользовательским соглашением</p>
    </label>
  )
}

export { Checkbox }
