import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  background: {
    display: "flex",
    width: "80%",
    color: "#121212",
    textAlign: "left",
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 15
  }
}))

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      {props.children}
    </div>
  )
}

export default Header