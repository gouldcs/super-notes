import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import useSubmit from "../hooks/useSubmit"

import Button from "@material-ui/core/Button"

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 15,
  },

  button: {
    alignSelf: "center",
    width: "2vh",
    textTransform: "none",
    backgroundColor: "#eeeeee",
    color: "#343434",
    height: "20",
    borderRadius: 20,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 35,
  },

  textbox: {
    display: "block",
    boxSizing: "padding-box",
    overflow: "hidden",
    padding: 10,
    width: "100%",
    fontSize: 14,
    border: 0,
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
}))

const EditableText = (props) => {
  const classes = useStyles()
  var { inputs, handleInputChange } = useSubmit()
  var [displayText, setDisplayText] = useState("click here to add notes!")
  var [showBox, setShowBox] = useState(false)
  var [showClickArea, setClickArea] = useState(true)

  const toggleEdit = () => {
    showClickArea = !showClickArea
    setClickArea(showClickArea)
    showBox = !showBox
    setShowBox(showBox)
  }

  const clickArea = (
    <div
      style={{ width: "80%", height: "100%", position: "absolute" }}
      onClick={toggleEdit}
    />
  )

  function getScrollHeight(elm) {
    var savedValue = elm.value
    elm.value = ""
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
  }

  function onExpandableTextareaInput({ target: elm }) {
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    if (!elm.classList.contains("autoExpand") || !elm.nodeName === "TEXTAREA")
      return

    var minRows = elm.getAttribute("data-min-rows") | 0,
      rows
    !elm._baseScrollHeight && getScrollHeight(elm)

    elm.rows = minRows
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
    elm.rows = minRows + rows
  }

  // global delegated event listener
  document.addEventListener("input", onExpandableTextareaInput)

  return (
    <div>
      {showClickArea ? clickArea : null}
      <div
        type="text"
        className={classes.background}
        style={{ color: props.color }}
      >
        <textarea
          name="displayText"
          className={classes.textbox}
          placeholder="click here to add notes!"
          style={{ borderColor: props.border, width: "100%" }}
        >
          {displayText}
        </textarea>
      </div>
    </div>
  )
}

export default EditableText
