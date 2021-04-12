import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logo from "./../assets/fornotes.svg";

import Header from "./../components/Header";
import Text from "./../components/Text";
import Warn from "./../components/Warn";
import Caution from "./../components/Caution";
import Info from "./../components/Info";
import Correct from "./../components/Correct";
import Question from "./../components/Question";
import Important from "./../components/Important";
import Code from "./../components/Code";

const useStyles = makeStyles(() => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center",
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 25,
    marginTop: 25,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.45)",
  },
}));

const Page = (props) => {
  const classes = useStyles();

  return <div className={classes.page}>{props.children}</div>;
};

export default Page;
