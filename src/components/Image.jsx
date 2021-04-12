import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    width: "80%",
    color: "#121212",
    textAlign: "left",
    border: "solid",
    borderWidth: 1,
    borderColor: "#1581ff",
    borderRadius: 10,
    fontWeight: 700,
    margin: 15,
  },
}));

const Image = (props) => {
  const classes = useStyles();

  return (
    <img
      alt="Twin Network"
      src={props.children}
      className={classes.background}
    />
  );
};

export default Image;
