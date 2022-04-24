import React from "react"
import styles from "./Login.module.scss"

import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"

const Login = () => {
  return <div className={styles.login}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Movies App" width={42} height={42} />
        <h2>Movies App</h2>
      </div>
      <div className={styles.form}>
        <Input placeholder="Введите логин" label="Логин" type="text" />
        <Input placeholder="Введите пароль" label="Пароль" type="password" />
        <Button text="Войти" />
      </div>
    </div>
  </div>
}

export { Login }