import React from "react"
import { Route } from "react-router-dom"

import { Home } from "../pages/Home/Home"

const HomeRoute = () => {
  return <Route path="/" element={<Home />} />
}

export { HomeRoute }