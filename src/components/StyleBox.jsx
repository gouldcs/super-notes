import React, { useState, setState } from "react"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"

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
import StyleBox from "./StyleBox"

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
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
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

  clearButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 4,
    right: 4,
    fontSize: 8,
    border: "solid",
    borderWidth: 1.5,
    borderColor: theme.uigrey,
    borderRadius: 50,
    outline: "none",
    boxShadow: "0px 0px 5px 1px rgba(0.2, 0.2, 0.2, 0.2)",
  },
}))

const Important = (props) => {
  const classes = useStyles()
  var [components, setComponents] = useState([])
  var [displayButton, setDisplayButton] = useState(false)
  var [editButton, setEditButton] = useState(props.editMode)
  var [isClear, setIsClear] = useState(false)
  var [clearLabel, setClearLabel] = useState("Hide Buttons")

  const toggleButton = () => {
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const toggleIsClear = () => {
    isClear = !isClear
    setIsClear(isClear)
    if (isClear === true) {
      clearLabel = "<"
      setClearLabel(clearLabel)
    } else {
      clearLabel = "Hide Buttons"
      setClearLabel(clearLabel)
    }
  }

  const addHeader = () => {
    setComponents(
      components.concat(
        <StyleBox
          key={props.key}
          editMode={props.editMode}
          color={props.color}
          size={36}
          weight={700}
          border={"none"}
          background={"none"}
          icon={"none"}
        />
      )
    )
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addText = () => {
    setComponents(
      components.concat(
        <StyleBox
          key={props.key}
          editMode={props.editMode}
          color={props.color}
          space="none"
          border={"none"}
          background={"none"}
          icon={"none"}
        />
      )
    )
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addWarn = () => {
    setComponents(
      components.concat(
        <StyleBox
          key={props.key}
          editMode={props.editMode}
          color={theme.warn}
          border={theme.warn}
          background={theme.warnbg}
          icon={warning}
        />
      )
    )
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addCaution = () => {
    setComponents(
      components.concat(
        <StyleBox
          key={props.key}
          editMode={props.editMode}
          color={theme.caution}
          border={theme.caution}
          background={theme.cautionbg}
          icon={caution}
        />
      )
    )
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  const addImportant = () => {
    setComponents(
      components.concat(
        <StyleBox
          key={props.key}
          editMode={props.editMode}
          color={theme.important}
          border={theme.important}
          background={theme.importantbg}
          icon={imp}
        />
      )
    )
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
      <img alt="header" src={head} />
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
      <img alt="text" style={{ display: "flex", height: 10 }} src={text} />
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
      <img
        alt="caution"
        style={{ display: "flex", height: 18 }}
        src={caution}
      />
    </button>
  )
  const warnbutton = (
    <button
      className={classes.addButton}
      style={{
        borderColor: theme.warn,
        background: theme.warnbg,
      }}
      onClick={addWarn}
    >
      <img alt="warn" style={{ display: "flex", height: 18 }} src={warning} />
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
      <img alt="important" style={{ display: "flex", height: 16 }} src={imp} />
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

  function setIcon() {
    if (props.icon === "none") {
      return null
    } else {
      return <img alt="icon" src={props.icon} style={{ width: 30 }} />
    }
  }

  function checkEdit() {
    if (isClear === true) {
      return null
    } else {
      return displayButton ? exitbutton : addbutton
    }
  }

  return (
    <div
      className={classes.background}
      style={{
        borderWidth: props.border === "none" ? 0 : 1,
        borderColor: props.border,
        color: props.color,
        backgroundColor: props.background,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {setIcon()}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <EditableText
            color={props.color}
            size={props.size}
            weight={props.weight}
          />
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
        {checkEdit()}
        {displayButton ? headerbutton : null}
        {displayButton ? textbutton : null}
        {displayButton ? cautionbutton : null}
        {displayButton ? importantbutton : null}
        {displayButton ? warnbutton : null}
      </div>
      <button className={classes.clearButton} onClick={toggleIsClear}>
        {clearLabel}
      </button>
    </div>
  )

  // componentDidMount() {
  //   var interval = setInterval() =>
  // }
}

export default Important
