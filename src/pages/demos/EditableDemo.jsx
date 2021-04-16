import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./../../components/Header"
import EditableText from "./../../components/EditableText"
import Text from "./../../components/Text"
import Warn from "./../../components/Warn"
import Caution from "./../../components/Caution"
import Info from "./../../components/Info"
import Correct from "./../../components/Correct"
import Question from "./../../components/Question"
import Important from "./../../components/Important"
import Code from "./../../components/Code"
import Page from "./../../components/Page"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1581ff",
    marginBottom: -50,
  },
}))

const Editable = (props) => {
  const classes = useStyles()

  return (
    <Page>
      <Caution>Test</Caution>
      <Caution>Test</Caution>
    </Page>
  )
}

export default Editable
