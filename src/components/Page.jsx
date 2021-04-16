import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import logo from "./../assets/fornotes.svg"

import Header from "./../components/Header"
import Text from "./../components/Text"
import Warn from "./../components/Warn"
import Caution from "./../components/Caution"
import Info from "./../components/Info"
import Correct from "./../components/Correct"
import Question from "./../components/Question"
import Important from "./../components/Important"
import Code from "./../components/Code"

import Button from "@material-ui/core/Button"

const useStyles = makeStyles(() => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center",
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 25,
    marginTop: 25,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.45)",
  },
}))

const Page = (props) => {
  const classes = useStyles()
  var [components, setComponents] = useState([])

  const displayops = () => {
    document.getElementById("options").style.display = "flex"
  }

  const addCaution = () => {
    setComponents(components.concat(<Caution />))
    document.getElementById("options").style.display = "none"
  }

  const addImportant = () => {
    setComponents(components.concat(<Important />))
    document.getElementById("options").style.display = "none"
  }

  return (
    <div className={classes.page}>
      {components}
      <div id="options" style={{ display: "none" }}>
        <Button onClick={addCaution}>caution</Button>
        <Button onClick={addImportant}>important</Button>
      </div>
      <Button onClick={displayops}>+</Button>
    </div>
  )
}

export default Page
