import React, { FC } from "react"
import { Route, Switch } from "react-router-dom"
import { Layout } from "../layout/Layout"

export const Routers:FC = () => {
  return (
    <Switch>
      <Route path="/about">
        <div>about</div>
      </Route>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
    )
}