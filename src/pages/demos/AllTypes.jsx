import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./../../components/Header";
import Text from "./../../components/Text";
import Warn from "./../../components/Warn";
import Caution from "./../../components/Caution";
import Info from "./../../components/Info";
import Correct from "./../../components/Correct";
import Question from "./../../components/Question";
import Important from "./../../components/Important";
import Code from "./../../components/Code";
import Page from "./../../components/Page";

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

const AllTypes = (props) => {
  const classes = useStyles();

  function addBlock(contents) {
    return 0;
  }

  return (
    <Page>
      <Header>Welcome to Fornotes!</Header>
      <Text>
        A notes page based on your favorite professor's online notes? Ummmm...
        YES PLEASE! I've always been looking for a better way to write notes,
        and no editor has ever been good enough. So... why not write my own? But
        then, why keep it to myself? Wouldn't be very... noteworthy... get it?
      </Text>
      <Warn>
        This is a warning! You can use warning text to give a heads up about
        tricky concepts that may stump some people when reading the notes.
      </Warn>
      <Caution>
        This is a caution! I want to test something. What if this text gets
        entirely too long? I want to wrap it. Dang.
      </Caution>
      <Info>
        This is an info segment! I want to test something. What if this text
        gets entirely too long? I want to wrap it. Dang. well, let's just make
        it longer... just in case.
      </Info>
      <Correct>
        This is a correct answer! I want to test something. What if this text
        gets entirely too long? I want to wrap it. Dang. well, let's just make
        it longer... just in case.
      </Correct>
      <Question>
        This is a question! I want to test something. What if this text gets
        entirely too long? I want to wrap it. Dang. well, let's just make it
        longer... just in case.
      </Question>
      <Important>
        This is important! I want to test something. What if this text gets
        entirely too long? I want to wrap it. Dang. well, let's just make it
        longer... just in case.
      </Important>
      <Code label="Here is the code segment:">
        //This is a code Segment. function main() return 0
      </Code>
      <Important>AVERY HAS A THICCUMS ASS ITS SO JUICY OMG</Important>
    </Page>
  );
};

export default AllTypes;
