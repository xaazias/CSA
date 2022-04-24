import React from "react"
import { Route } from "react-router-dom"

import { Login } from "../pages/Login/Login"

const LoginRoute = () => {
  return <Route path="/login" element={<Login />} />
}

export { LoginRoute }