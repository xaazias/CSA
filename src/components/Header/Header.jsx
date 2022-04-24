import React from "react"
import styles from "./Header.module.scss"

import Logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Movies App" width={42} height={42} />
      <h2>Movies App</h2>
    </header>
  )
}

export { Header }
