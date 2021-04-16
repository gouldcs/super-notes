import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import logo from "./../assets/fornotes.svg"
import Home from "./Home"
import AllTypes from "./demos/AllTypes"
import CausalInference from "./demos/CausalInference"
import Interactive from "./demos/Interactive"
import Editable from "./demos/EditableDemo"

import Header from "./../components/Header"
import Text from "./../components/Text"
import Warn from "./../components/Warn"
import Caution from "./../components/Caution"
import Info from "./../components/Info"
import Correct from "./../components/Correct"
import Question from "./../components/Question"
import Important from "./../components/Important"
import Code from "./../components/Code"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1581ff",
    marginBottom: -50,
  },
}))

const PageLayout = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        alt="fornotes logo"
        src={logo}
        style={{ padding: 15, width: "35vh", minWidth: 200, maxWidth: 400 }}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/alltypes">
            <AllTypes />
          </Route>
          <Route exact path="/realnotes">
            <CausalInference />
          </Route>
          <Route exact path="/interactive">
            <Interactive />
          </Route>
          <Route exact path="/test">
            <Editable />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default PageLayout
