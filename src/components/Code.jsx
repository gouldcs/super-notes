import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import warn from './../assets/warn.svg'

const useStyles = makeStyles( () => ({
  background: {
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    textAlign: "left",
    backgroundColor: "#FFD4F3",
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FF15F6",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
}))

const Code = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <pre class="prettyprint">
        <code>
          {props.children}
        </code>
      </pre>
    </div>
  )
}

export default Code