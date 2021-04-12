import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import question from './../assets/question.svg'

const useStyles = makeStyles( () => ({
  background: {
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    textAlign: "left",
    backgroundColor: "#E2D4FF",
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#724CF9",
    color: "#724CF9",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
}))

const Question = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <img src={question} style={{width:"1.5vh", paddingRight: 10,}}/>
      {props.children}
    </div>
  )
}

export default Question