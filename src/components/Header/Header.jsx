import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

import Logo from "../../assets/logo.svg"

const Header = ({ isLogged }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Movies App" width={42} height={42} />
        <h2>Movies App</h2>
      </div>
      {isLogged ? (
        <Link to="/leave" className={styles.auth}>
          Выйти
        </Link>
      ) : (
        <Link to="/login" className={styles.auth}>
          Войти
        </Link>
      )}
    </header>
  )
}

export { Header }
