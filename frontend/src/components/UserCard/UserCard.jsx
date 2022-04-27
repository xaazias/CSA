import React from "react"
import { Button } from "../Button/Button"
import styles from "./UserCard.module.scss"

const UserCard = ({ id, name, mail, setUser, setModal, setUsers }) => {
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE"
    }).then((res) => {
      if (res.status === 200)
        setUsers((prev) => prev.filter((item) => item.id !== id))
    })
  }

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.id}>ID: {id}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.mail}>{mail}</p>
      </div>
      <div className={styles.actions}>
        <Button text="Удалить" type="delete" onClick={() => deleteUser(id)} />
        <Button
          text="Редактировать"
          onClick={() => {
            setUser({ id: id, name: name, email: mail })
            setModal({ type: "edit", state: true })
          }}
        />
      </div>
    </div>
  )
}

export { UserCard }
