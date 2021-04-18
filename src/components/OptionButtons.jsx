import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import logo from "./../assets/fornotes.svg"
import plus from "./../assets/plus.svg"
import head from "./../assets/header.svg"
import text from "./../assets/text.svg"
import warning from "./../assets/warn.svg"
import caution from "./../assets/caution.svg"
import imp from "./../assets/important.svg"

import theme from "./../hooks/theme.js"

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

const useStyles = makeStyles(
  () => ({
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

    addButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30px",
      height: "30px",
      border: "solid",
      borderWidth: 1.5,
      borderColor: "#C6C6C6",
      borderRadius: 50,
      marginRight: 10,
    },
  }),
  { name: "Page" }
)

const Page = (props) => {
  const classes = useStyles()
  var [components, setComponents] = useState([])
  var [displayButton, setDisplayButton] = useState(false)

  const toggleButton = () => {
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addHeader = () => {
    setComponents(components.concat(<Header />))
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addText = () => {
    setComponents(components.concat(<Text />))
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addCaution = () => {
    setComponents(components.concat(<Caution />))
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addImportant = () => {
    setComponents(components.concat(<Important />))
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  return (
    <div style={{ diplay: "flex", justifyContent: "row", width: "100%" }}>
      <button
        className={classes.addButton}
        style={{ borderColor: "#000000", background: "#fafafa" }}
        onClick={addHeader}
      >
        <img alt="plus" src={head} />
      </button>
      <button
        className={classes.addButton}
        style={{ borderColor: "#C6C6C6", background: "#fafafa" }}
        onClick={addText}
      >
        <img alt="plus" style={{ display: "flex", height: 10 }} src={text} />
      </button>
      <button
        className={classes.addButton}
        style={{ borderColor: "#5E5E5E", background: theme.cautionbg }}
        onClick={addCaution}
      >
        <img alt="plus" style={{ display: "flex", height: 18 }} src={caution} />
      </button>
      <button
        className={classes.addButton}
        style={{ borderColor: "#15C7FF", background: "#D4F0FF" }}
        onClick={addImportant}
      >
        <img alt="plus" style={{ display: "flex", height: 16 }} src={imp} />
      </button>
    </div>
  )
}

export default OptionButtons
