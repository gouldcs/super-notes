import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import correct from "./../assets/correct.svg";

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    flexDirecton: "row",
    width: "95%",
    textAlign: "left",
    backgroundColor: "#D4FFE3",
    border: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#00D9C0",
    color: "#00D9C0",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const Correct = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <img
        src={correct}
        style={{ width: "3vh", maxWidth: 25, paddingRight: 10 }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.children}
      </div>
    </div>
  );
};

export default Correct;
