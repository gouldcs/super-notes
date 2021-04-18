import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import theme from "./../hooks/theme.js"

import Button from "@material-ui/core/Button"
import caution from "./../assets/caution.svg"
import plus from "./../assets/plus.svg"
import head from "./../assets/header.svg"
import text from "./../assets/text.svg"
import warning from "./../assets/warn.svg"
import imp from "./../assets/important.svg"
import cancel from "./../assets/cancel.svg"
import EditableText from "./EditableText"
import EditableTest from "./EditableTest"

import Header from "./../components/Header"
import Text from "./../components/Text"
import Warn from "./../components/Warn"
import Info from "./../components/Info"
import Correct from "./../components/Correct"
import Question from "./../components/Question"
import Caution from "./../components/Caution"
import Code from "./../components/Code"

const useStyles = makeStyles(() => ({
  background: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    textAlign: "left",
    backgroundColor: theme.importantbg,
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.important,
    color: theme.important,
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 15,
    paddingLeft: 15,
  },

  addButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    border: "solid",
    borderWidth: 1.5,
    borderColor: theme.uigrey,
    borderRadius: 50,
    marginRight: 10,
    outline: "none",
    boxShadow: "0px 0px 5px 1px rgba(0.2, 0.2, 0.2, 0.2)",
  },
}))

const Important = (props) => {
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

  const headerbutton = (
    <button
      className={classes.addButton}
      style={{
        borderColor: theme.black,
        background: theme.white,
      }}
      onClick={addHeader}
    >
      <img alt="plus" src={head} />
    </button>
  )
  const textbutton = (
    <button
      className={classes.addButton}
      style={{
        borderColor: theme.textgrey,
        background: theme.white,
      }}
      onClick={addText}
    >
      <img alt="plus" style={{ display: "flex", height: 10 }} src={text} />
    </button>
  )
  const cautionbutton = (
    <button
      className={classes.addButton}
      style={{
        borderColor: theme.caution,
        background: theme.cautionbg,
      }}
      onClick={addCaution}
    >
      <img alt="plus" style={{ display: "flex", height: 18 }} src={caution} />
    </button>
  )
  const importantbutton = (
    <button
      className={classes.addButton}
      style={{
        borderColor: theme.important,
        background: theme.importantbg,
      }}
      onClick={addImportant}
    >
      <img alt="plus" style={{ display: "flex", height: 16 }} src={imp} />
    </button>
  )

  const addbutton = (
    <button
      className={classes.addButton}
      style={{
        borderColor: theme.uigrey,
        background: theme.white,
      }}
      onClick={toggleButton}
    >
      <img alt="plus" src={plus} />
    </button>
  )

  const exitbutton = (
    <button
      className={classes.addButton}
      style={{
        borderColor: theme.caution,
        background: theme.cautionbg,
      }}
      onClick={toggleButton}
    >
      <img alt="plus" src={cancel} />
    </button>
  )

  return (
    <div className={classes.background}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          alt="caution"
          src={imp}
          style={{ width: "3vh", maxWidth: 25, paddingRight: 10 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <EditableText color={theme.important} border={theme.important} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {components}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: 10,
        }}
      >
        {displayButton ? exitbutton : addbutton}
        {displayButton ? headerbutton : null}
        {displayButton ? textbutton : null}
        {displayButton ? cautionbutton : null}
        {displayButton ? importantbutton : null}
      </div>
    </div>
  )
}

export default Important
