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
    resize: "vertical",
    outline: "none",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
    textAlign: "left",
    border: "none",
    borderRadius: 15,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', \
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', \
    sans-serif;",
    fontSize: 14,
    fontWeight: 500,
    "&::placeholder": {
      color: "#ff6565",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', \
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', \
    sans-serif;",
      fontSize: 14,
      fontWeight: 500,
    },
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
}))

const EditableText = (props) => {
  const classes = useStyles()
  const { inputs, handleInputChange, handleSubmit } = useSubmit()
  var [displayText, setDisplayText] = useState("click here to add notes!")
  var [showBox, setShowBox] = useState(false)
  var [showClickArea, setClickArea] = useState(true)
  const inputBox = (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "row", width: "100%" }}
    >
      <textarea
        type="text"
        name="displayText"
        className={classes.textbox}
        onChange={handleInputChange}
        value={inputs}
        style={{ borderColor: props.border }}
      >
        {inputs}
      </textarea>
      <Button id="editbutton" type="submit" className={classes.button}>
        edit
      </Button>
    </form>
  )

  const toggleEdit = () => {
    showClickArea = !showClickArea
    setClickArea(showClickArea)
    showBox = !showBox
    setShowBox(showBox)
  }

  const clickArea = (
    <div
      style={{ width: "80%", height: "200%", position: "absolute" }}
      onClick={toggleEdit}
    />
  )

  return (
    <div>
      {showClickArea ? clickArea : null}
      <div className={classes.background} style={{ color: props.color }}>
        {inputs}
        <div>{showBox ? inputBox : displayText}</div>
      </div>
    </div>
  )
}

export default EditableText
