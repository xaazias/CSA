import React from "react"
import styles from "./App.module.scss"
import { createStore } from "redux"
import { Provider } from "react-redux"

import { Router } from "./Router"

function App() {
  const defaultState = {
    user: null
  }

  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "AUTHORIZE":
        return {
          ...state,
          user: action.user
        }
      default:
        return state
    }
  }

  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Router />
      </div>
    </Provider>
  )
}

export default App
