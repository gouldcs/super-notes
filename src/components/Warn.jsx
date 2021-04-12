import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import warn from "./../assets/warn.svg";

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    color: "#121212",
    textAlign: "left",
    backgroundColor: "#FFF4D4",
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFC215",
    color: "#FFC215",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const Warn = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <img
        src={warn}
        style={{ width: "3vh", maxWidth: 25, paddingRight: 10 }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.children}
      </div>
    </div>
  );
};

export default Warn;
