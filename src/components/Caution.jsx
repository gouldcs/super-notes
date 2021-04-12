import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
import caution from './../assets/caution.svg'

const useStyles = makeStyles( () => ({
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
    paddingBottom: 10
  },

  textbox: {
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    textAlign: "left",
    backgroundColor: "#eeeeee",
    border: "solid",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#FF1515",
    color: "#FF1515",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', \
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', \
    sans-serif;",
    fontSize: 14,
    fontWeight: 500,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
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
    border: "solid",
    borderWidth: 1,
    borderColor: "#ff6666",
    color: "#ff6666",
    margin: 15,
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
  }

}))

const Caution = (props) => {
  const classes = useStyles();
  var [textContents, setTextContents] = useState("")
  var [displayText, setDisplayText] = useState("")
  var [hasButton, setButton] = useState(false)
  var [hasText, setHasText] = useState(false) 
  var [justClicked, setJustClicked] = useState(false)
  var [dialogueOpen, setDialogueOpen] = useState(false)

  const clearText =() => {
    textContents = ""
    setTextContents(textContents)
  }

  const openText = () => {
    textContents = ""
    setTextContents(textContents)
    dialogueOpen = true
    setDialogueOpen(dialogueOpen)
    document.getElementById("button").style.display='none'
    document.getElementById("editbutton").style.display='none'
    textContents = (
      <div>
        <textarea type="text" id="newText" className={classes.textbox}>{textContents}</textarea>
        <div style={{display:"flex", flexDirection:"row"}}>
          <Button variant="outlined" className={classes.submitButton} onClick={addText}>add note</Button>
          <Button variant="outlined" className={classes.submitButton} onClick={editText}>edit</Button>
        </div>
      </div>
    )
    setTextContents(textContents)
  }

  const editText = () => {
    dialogueOpen = true
    setDialogueOpen(dialogueOpen)
    document.getElementById("button").style.display='none'
    document.getElementById("editbutton").style.display='none'
    textContents = (
      <div>
        <textarea type="text" id="replaceText" className={classes.textbox}>
          {displayText}
        </textarea>
        <div style={{display:"flex", flexDirection:"row"}}>
          <Button id="button" variant="outlined" className={classes.submitButton} onClick={replaceText}>update</Button>
          <Button id="button" variant="outlined" className={classes.submitButton} onClick={clearText}>cancel</Button>
        </div>
      </div>
    )
    setTextContents(textContents)
  }

  const replaceText = () => {
    var newText = document.getElementById("replaceText").value
    displayText = newText
    setDisplayText(displayText)
    textContents = ""
    setTextContents("")
    dialogueOpen = false
    setDialogueOpen(dialogueOpen)
  }

  const addText = () => {
    var newText = document.getElementById("newText").value
    displayText += "\n" + newText
    setDisplayText(displayText)
    if (hasText === false) {
      hasText = true
      setHasText(hasText)
    }
    textContents = ""
    setTextContents("")
    dialogueOpen = false
    setDialogueOpen(dialogueOpen)
  }

  const toggleButton = () => {
    if (dialogueOpen === false || justClicked === false) {
      if (hasButton === false && hasText === true) {
        document.getElementById("button").style.display='flex'
        document.getElementById("editbutton").style.display='flex'
        document.getElementById("exit").style.display='flex'
        hasButton = true
        setButton(hasButton)
      } else if (hasButton === false) {
        document.getElementById("button").style.display='flex'
        document.getElementById("exit").style.display='flex'
        hasButton = true
        setButton(hasButton)
      } else if (hasText === false) {
        document.getElementById("editbutton").style.display='flex'
        document.getElementById("exit").style.display='flex'
      }
    }
    else {
      justClicked = false
      setJustClicked(justClicked)
    }
  }

  const hideButtons = () => {
    if (hasButton === true || hasText === true) {
      document.getElementById("button").style.display='none'
      document.getElementById("editbutton").style.display='none'
      document.getElementById("exit").style.display='none'
      hasButton = false
      setButton(hasButton)
      justClicked = true
      setJustClicked(justClicked)
    }
  }

  return (
    <div className={classes.background} onClick={toggleButton}>
      <Button id="exit" variant="outlined" className={classes.exit} onClick={hideButtons}>x</Button>
      <img src={caution} style={{width:"3vh", paddingRight: 10,}}/>
      <div style={{display: "flex", flexDirection:"column"}}>
        {displayText}
        <div style={{display:"flex", flexDirection:"row"}}>
          <Button id="button" variant="outlined" className={classes.button} onClick={openText}>add</Button>
          <Button id="editbutton" variant="outlined" className={classes.button} onClick={editText}>edit</Button>
        </div>
        {textContents}
      </div>
    </div>
  )
}

export default Caution