import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import theme from "./../hooks/theme"

import logo from "./../assets/fornotes.svg"
import plus from "./../assets/plus.svg"
import head from "./../assets/header.svg"
import text from "./../assets/text.svg"
import warning from "./../assets/warn.svg"
import caution from "./../assets/caution.svg"
import imp from "./../assets/important.svg"
import cancel from "./../assets/cancel.svg"

import Header from "./../components/Header"
import Text from "./../components/Text"
import Warn from "./../components/Warn"
import Caution from "./../components/Caution"
import Info from "./../components/Info"
import Correct from "./../components/Correct"
import Question from "./../components/Question"
import Important from "./../components/Important"
import Code from "./../components/Code"
import StyleBox from "./../components/StyleBox"

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
      paddingTop: 45,
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
      outline: "none",
      boxShadow: "0px 0px 5px 1px rgba(0.2, 0.2, 0.2, 0.2)",
    },

    editButton: {
      fontWeight: 600,
      color: theme.textgrey,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 120,
      right: "8%",
      boxShadow: "0px 0px 15px 1px white",
      border: "solid",
      borderWidth: 1.5,
      borderColor: theme.textgrey,
      borderRadius: 50,
      padding: 10,
      outline: "none",
    },
  }),
  { name: "Page" }
)

const Page = (props) => {
  const classes = useStyles()
  var [components, setComponents] = useState([])
  var [buttonVisible, setButtonVisible] = useState(true)
  var [displayButton, setDisplayButton] = useState(false)
  var [buttonText, setButtonText] = useState("Edit mode enabled")

  const toggleVisible = () => {
    buttonVisible = !buttonVisible
    setButtonVisible(buttonVisible)
    if (buttonText === "Edit mode enabled") {
      buttonText = "Edit mode disabled"
    } else {
      buttonText = "Edit mode enabled"
    }
    setButtonText(buttonText)
  }

  const toggleButton = () => {
    displayButton = !displayButton
    setDisplayButton(displayButton)
  }

  function updateEdit() {
    this.setState({ editMode: buttonVisible })
  }

  const addHeader = () => {
    setComponents(
      components.concat(
        <StyleBox
          onUpdate={updateEdit}
          key={buttonVisible}
          editMode={buttonVisible}
          color={theme.black}
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
          onUpdate={updateEdit}
          key={buttonVisible}
          editMode={buttonVisible}
          color={theme.textgrey}
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
          onUpdate={updateEdit}
          key={buttonVisible}
          editMode={buttonVisible}
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
          onUpdate={updateEdit}
          key={buttonVisible}
          editMode={buttonVisible}
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
          onUpdate={updateEdit}
          key={buttonVisible}
          editMode={buttonVisible}
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
      style={{ borderColor: "#000000", background: "#fafafa" }}
      onClick={addHeader}
    >
      <img alt="plus" src={head} />
    </button>
  )
  const textbutton = (
    <button
      className={classes.addButton}
      style={{ borderColor: "#5E5E5E", background: "#fafafa" }}
      onClick={addText}
    >
      <img alt="plus" style={{ display: "flex", height: 10 }} src={text} />
    </button>
  )
  const cautionbutton = (
    <button
      className={classes.addButton}
      style={{ borderColor: "#ff1515", background: "#FFD4D4" }}
      onClick={addCaution}
    >
      <img alt="plus" style={{ display: "flex", height: 18 }} src={caution} />
    </button>
  )
  const importantbutton = (
    <button
      className={classes.addButton}
      style={{ borderColor: "#15C7FF", background: "#D4F0FF" }}
      onClick={addImportant}
    >
      <img alt="plus" style={{ display: "flex", height: 16 }} src={imp} />
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

  const addbutton = (
    <button
      className={classes.addButton}
      style={{ borderColor: "#C6C6C6", background: "#fafafa" }}
      onClick={toggleButton}
    >
      <img alt="plus" src={plus} />
    </button>
  )

  const exitbutton = (
    <button
      className={classes.addButton}
      style={{ borderColor: "#ff1515", background: "#FFD4D4" }}
      onClick={toggleButton}
    >
      <img alt="plus" src={cancel} />
    </button>
  )

  function visibilityCheck() {
    if (buttonVisible === true) {
      return displayButton ? exitbutton : addbutton
    } else {
      return null
    }
  }

  return (
    <div className={classes.page}>
      {components}
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {visibilityCheck()}
        {displayButton ? headerbutton : null}
        {displayButton ? textbutton : null}
        {displayButton ? cautionbutton : null}
        {displayButton ? importantbutton : null}
        {displayButton ? warnbutton : null}
      </div>
      {/* <button className={classes.editButton} onClick={toggleVisible}>
        {buttonText}
      </button> */}
    </div>
  )
}

export default Page
