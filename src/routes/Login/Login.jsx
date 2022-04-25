import React, { useEffect } from "react"
import styles from "./Login.module.scss"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import logo from "../../assets/logo.svg"

import { mockUser } from "../../utils/mockdata"

import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"

const Login = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.get("leave")) {
      dispatch({ type: "AUTHORIZE", user: null })
      setSearchParams({})
    }
  }, [searchParams, dispatch, setSearchParams])

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Movies App" width={42} height={42} />
          <h2>Movies App</h2>
        </div>
        <div className={styles.form}>
          <Input
            placeholder="Введите логин"
            label="Логин"
            type="text"
            name="username"
          />
          <Input
            placeholder="Введите пароль"
            label="Пароль"
            type="password"
            name="password"
          />
          <Button
            text="Войти"
            onClick={() => {
              dispatch({ type: "AUTHORIZE", user: mockUser })
              history("/")
            }}
          />
        </div>
      </div>
    </div>
  )
}

export { Login }
