import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

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
    display: "none",
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
  var [displayText, setDisplayText] = useState("click here to add notes!")

  const editText = () => {
    document.getElementById("editbutton").style.display = "flex"
    displayText = (
      <div style={{ width: "100%" }}>
        <textarea
          type="text"
          id="replaceText"
          className={classes.textbox}
          style={{ borderColor: props.border }}
        >
          {displayText === undefined ? "click here to add notes" : displayText}
        </textarea>
      </div>
    )
    setDisplayText(displayText)
    console.log("Ah shit")
  }

  const submitEdit = () => {
    var newText = document.getElementById("replaceText").value
    if (newText === "") {
      displayText = "click here to add notes!"
    } else {
      displayText = newText
    }
    document.getElementById("editbutton").style.display = "none"
    setDisplayText(displayText)
  }

  return (
    <div className={classes.background} style={{ color: props.color }}>
      <div style={{ width: "100%" }} onClick={editText}>
        {displayText}
      </div>
      <Button id="editbutton" className={classes.button} onClick={submitEdit}>
        edit
      </Button>
    </div>
  )
}

export default EditableText
