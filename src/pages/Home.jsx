import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

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
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ color: "white" }}>Demos</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button style={{ margin: 10 }} variant="contained" href="/alltypes">
          All Types
        </Button>
        <Button style={{ margin: 10 }} variant="contained" href="/realnotes">
          Real Notes
        </Button>
        <Button style={{ margin: 10 }} variant="contained" href="/interactive">
          Interactive Demo
        </Button>
      </div>
    </div>
  );
};

export default Home;
