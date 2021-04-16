import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import question from "./../assets/question.svg"

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    textAlign: "left",
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
}))

const Section = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.children}
      </div>
    </div>
  )
}

export default Section
