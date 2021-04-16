import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import caution from "./../assets/caution.svg"
import EditableText from "./EditableText"

const useStyles = makeStyles(() => ({
  background: {
    position: "relative",
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    textAlign: "left",
    backgroundColor: "#FFD4D4",
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FF1515",
    color: "#FF1515",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },

  textbox: {
    resize: "vertical",
    outline: "none",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
    textAlign: "left",
    backgroundColor: "#eeeeee",
    border: "solid",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#FF1515",
    color: "#FF1515",
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

  button: {
    display: "none",
    backgroundColor: "#ff6666",
    margin: 15,
    textTransform: "none",
    borderRadius: 30,
  },

  exit: {
    display: "none",
    position: "absolute",
    right: 0,
    top: 0,
    border: "none",
    color: "#ff6666",
    fontWeight: 800,
    margin: 0,
    padding: 0,
    width: 0,
    textTransform: "none",
    borderRadius: 30,
  },

  submitButton: {
    display: "flex",
    backgroundColor: "#ff6666",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    textTransform: "none",
    borderRadius: 30,
  },
}))

const Caution = (props) => {
  const classes = useStyles()
  const uniqueTag = Math.random()

  return (
    <div className={classes.background}>
      <img
        alt="caution"
        src={caution}
        style={{ width: "3vh", maxWidth: 25, paddingRight: 10 }}
      />
      <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <EditableText color="#FF1515" border="#FF1515" tag={uniqueTag} />
      </div>
    </div>
  )
}

export default Caution
