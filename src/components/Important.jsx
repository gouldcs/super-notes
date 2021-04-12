import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import important from "./../assets/important.svg";

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    textAlign: "left",
    backgroundColor: "#D4F0FF",
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#15C7FF",
    color: "#15C7FF",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const Important = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <img
        src={important}
        style={{ width: "3vh", maxWidth: 25, paddingRight: 10 }}
      />
      {props.children}
    </div>
  );
};

export default Important;
