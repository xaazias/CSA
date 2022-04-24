import React from "react"
import styles from "./App.module.scss"

import { Provider } from "react-redux"
import { createStore } from "redux"

import { Agreement } from "./components/Agreement/Agreement"

/** Redux **/
const reducer = (state = { agreement: false }, action) => {
  switch (action.type) {
    case "CHECK_AGREEMENT":
      return { ...state, agreement: !state.agreement }
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Agreement />
      </div>
    </Provider>
  )
}

export default App
