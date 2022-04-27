import React, { useEffect, useState } from "react"
import styles from "./App.module.scss"
import { AddCard } from "./components/AddCard/AddCard"
import { Modal } from "./components/Modal/Modal"
import { UserCard } from "./components/UserCard/UserCard"

function App() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState({ state: false, type: "add" })
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {users.map((item) => (
          <UserCard
            key={item.id}
            id={item.id}
            mail={item.email}
            name={item.name}
            setUser={setUser}
            setModal={setModal}
            setUsers={setUsers}
          />
        ))}
        <AddCard setUser={setUser} setUsers={setUsers} setModal={setModal} />
      </div>
      <Modal
          show={modal.state}
          type={modal.type}
          handleClose={() => setModal((prev) => ({ ...prev, state: false }))}
          user={user}
          setUsers={setUsers}
        />
    </div>
  )
}

export default App
