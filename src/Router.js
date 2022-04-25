import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { isAuthenticated } from "./utils/auth"
// import { mockUser } from "./utils/mockdata"

import { Home } from "./routes/Home/Home"
import { Login } from "./routes/Login/Login"

const Router = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    /** Mock data -> GET /authorize -> response -> user **/
    // const userResponse = mockUser

    /** Authenticated **/
    // dispatch({ type: "AUTHORIZE", user: userResponse })

    /** Unauthenticated **/
    dispatch({ type: "AUTHORIZE", user: null })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated(user) ? <Home /> : <Login />}
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
