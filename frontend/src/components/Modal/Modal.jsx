import React, { useState, useEffect } from "react"
import styles from "./Modal.module.scss"

import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

const Modal = ({ show, handleClose, user, type, setUsers }) => {
  const [name, setName] = useState(user.name)
  const [mail, setMail] = useState(user.email)

  useEffect(() => {
    setName(user.name)
    setMail(user.email)
  }, [user])

  const updateUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, email: mail })
    }).then((res) => {
      if (res.status === 200) {
        setUsers((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, name: name, email: mail } : item
          )
        )
        handleClose()
      }
    })
  }

  const addUser = () => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, email: mail })
    })
      .then((res) => res.json())
      .then((data) => {
        const [temp] = data
        setUsers((prev) => [
          ...prev,
          { id: temp.id, name: temp.name, email: temp.email }
        ])
        handleClose()
      })
  }

  return show ? (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Input
          placeholder="Name"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="Email"
          label="Email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <div className={styles.actions}>
          <Button text="Отмена" type="cancel" onClick={handleClose} />
          {type === "edit" ? (
            <Button text="Сохранить" onClick={() => updateUser(user.id)} />
          ) : (
            <Button text="Добавить" onClick={() => addUser()} />
          )}
        </div>
      </div>
    </div>
  ) : null
}

export { Modal }
