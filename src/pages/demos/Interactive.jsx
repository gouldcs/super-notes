import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./../../components/Header";
import Subheader from "./../../components/Subheader";
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
      <Header>Interactive UI Demo</Header>
      <Text>
        This is a test page for the interactive components in Fornotes. Keep in
        mind that it is buggy as all hell, and there is no backend to save any
        of what you type. So have at it.
      </Text>
      <Caution />
      <Subheader>Expected Functionality</Subheader>
      <Text>
        Click on the box to have the buttons appear, as well as an 'x' in the
        top right. An edit button should only appear if text exists within the
        box. When you click "add" it should open a text area for you to type in,
        with two buttons under it, "add note" and "edit" (this will be replaced
        with cancel). Adding will add whatever is in the textbox to the notes,
        and then collapse the text area and remove the "add" and "cancel"
        buttons from view. Clicking the 'x' would ideally remove any dialogue
        besides the currently-entered notes. Right now it only removes the "add"
        and "edit" buttons from view. Long story short: it's a mess
      </Text>
    </Page>
  );
};

export default AllTypes;
