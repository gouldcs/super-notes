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
    fontSize: 12,
    textTransform: "none",
    backgroundColor: "#eeeeee",
    color: "#343434",
    height: "20",
    borderRadius: 20,
    height: 20,
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
    background: "none",
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
}))

const EditableText = (props) => {
  const classes = useStyles()
  var [displayText, setDisplayText] = useState("click here to add notes!")
  var [edit, setEdit] = useState(false)
  var [showEdit, setShowEdit] = useState(true)

  const handleChange = () => {
    showEdit = !showEdit
    edit = !edit
    setEdit(edit)
    setShowEdit(showEdit)
  }

  const saveChange = () => {
    showEdit = true
    edit = false
    setEdit(edit)
    setShowEdit(showEdit)
  }

  function setEditButton() {
    if (showEdit === true) {
      return (
        <Button className={classes.button} onClick={handleChange}>
          edit
        </Button>
      )
    } else {
      return null
    }
  }

  function setDisplayState() {
    if (edit === false) {
      return <div className={classes.notes}>{displayText}</div>
    } else {
      return (
        <div>
          <textarea
            className={classes.textbox}
            value={displayText}
            onChange={(e) => {
              displayText = e.target.value
              setDisplayText(displayText)
            }}
          />
          <Button className={classes.button} onClick={saveChange}>
            save
          </Button>
        </div>
      )
    }
  }

  return (
    <div>
      <div className={classes.background} style={{ color: props.color }}>
        <div style={{ padding: 20 }}>{setDisplayState()}</div>
        {setEditButton()}
      </div>
    </div>
  )
}

export default EditableText
