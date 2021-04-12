import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logo from "./../assets/fornotes.svg";

import Header from "./../components/Header";
import Subheader from "./../components/Subheader";
import Text from "./../components/Text";
import Image from "./../components/Image";
import Warn from "./../components/Warn";
import Caution from "./../components/Caution";
import Info from "./../components/Info";
import Correct from "./../components/Correct";
import Question from "./../components/Question";
import Important from "./../components/Important";
import Code from "./../components/Code";
import twinnetwork from "./../assets/twin_network.PNG";

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

  function addBlock(contents) {
    return 0;
  }

  return (
    <div className={classes.root}>
      <img
        src={logo}
        style={{ padding: 15, width: "35vh", minWidth: 200, maxWidth: 400 }}
      />
      <div className={classes.page}>
        <Header>Causal Inference: The Soldier Problem</Header>
        <Warn>
          To proceduralize answering those questions, might be tempted to use
          tools @ tirs 1 + 2:
          <br />
          <br />
          <span>P(D = 1 | do(s1 = 0), s1 = 1, D = 1)</span>
          <br />
          <span>
            do(s1 = 0), s1 = 1 is considered a syntaz error; we need new
            vocabulary to discuss CFs
          </span>
        </Warn>
        <Subheader>Proceduralizing CFs - Intuitions</Subheader>
        <Text>
          <span>
            1. <tab />
            <span>
              In a fully specified SCM, if we knew the state of the sources of
              nouse (i.e., the exogenous vars, u), then we could determine the
              state of any ENDOGENOUS variable, V, with certainty.
            </span>
          </span>
          <br />
          <span>
            2. <tab />
            <span>
              Observations of what happened in reality tell us something about
              the state of U
            </span>
          </span>
          <br />
          <span>
            3. <tab />
            <span>
              "Rerunning history" will have the same states of U that were
              observed as they will in the hypothetical "what if" world
            </span>
          </span>
        </Text>
        <Subheader>The Twin Network Model</Subheader>
        <Info>
          The Twin Network Model models a counterfactial query such that
          evidence observed in reality (in OG model M) can be used to inform the
          hypothetical model Mx=x for some counterfactual antecendent X=x.
          <br />
          <br />
          This is done by simply creating a model where all exogenous variables
          are shared between M & Mx=x
        </Info>
        <Question>
          Firing Squad Twin Network CF Theory: "Would the prisoner have died has
          S1 not shot?"
          <br />
          <br />
          <Image>{twinnetwork}</Image>
        </Question>
        <Subheader>CF Notation</Subheader>
        <Text>
          For any 2 variables, x and y, in an SCM, M, let Mx be the mutilated
          submoted wherein Fx {"<--"} x and let U=u be an instantiation of the
          exogenous vars. <br />
          <br />
          Formally, "The value of y and x had x been x" is written:
        </Text>
        <Info>
          Y_x=x = Y_x = Y_Mx (u)
          <br />
          Which is the solution to Y in the hypothetical world Mx for a
          particulat value U = u
          <br />
          Think of this as equal to Y in the hypothetical side of the Twin
          Network.
        </Info>
        <Subheader>Counterfactual Axioms</Subheader>
        <Text>
          <span>
            1.{" "}
            <span>
              Interventional Equivalence: since Y_x=x represents "The value of Y
              had x=x", without any observed evidence for flow of info in the
              twin netweork we have:
            </span>
            <br />
            <br />
            <Info>
              P(Y_x=x) = P(Y|do(x))
              <br />
              where the left is "Tier-3 notation", and the right is "Tier-2
              notation."
            </Info>
            <Caution>
              Note: there is a more general conversion from tier-3 to tier-2
              that we will see on assignment 4: "Counterfactual Backdoor"
            </Caution>
            2.{" "}
            <span>
              Consistency Axiom: whenever the observed value X=x is the same as
              the counterfactual antecedent Y_x=x, then the observed and
              hypothetical words are the same!
            </span>
            <br />
            <br />
            <Info>
              P(Y_x=x | X=x) = P(Y | X=x)
              <br />
              where the left is "Tier-3 notation", and the right is "Tier-1
              notation."
            </Info>
            3.{" "}
            <span>
              "True" Counterfactual: any query in which observed evidence and
              counterfactual antecedent conflict:
            </span>
            <br />
            <br />
            <Info>
              P(Y_x=x | X=x')
              <br />
              where the left is "Tier-3 notation" and x != x'
            </Info>
          </span>
        </Text>
        <Subheader>Firing Squad Example</Subheader>
        <Question>
          In the Firing Squad Example, how would we write our query of "would
          the Prisoner have died had S1 not shot?"
        </Question>
        <Correct>
          P(D_(s1=0) = 1 | s1 = 1) <br />
          <br />
          <Question>But how do we compute this?</Question>
        </Correct>
        <Subheader>Three Step Counterfactuals</Subheader>
        <Text>
          <span>
            1.{" "}
            <span>
              Abduction: takes observed evidence and updates belief about state
              of U:
              <br />
              <br />
            </span>
            <Info>
              P(U) {"<--"} P(U|e)
              <br />
              <br />
              where e is our observed evidence
            </Info>
            <Info>
              Firing Squad Example:
              <br />
              <br />
              U={"{G}"} P(U) = {"{P(G=1)=0.1}"}
              <br />
              e={"{s1=1}"}
              <br />
              Step 1 goal: P(G) {"<--"} P(G|s=1)
              <br />
              P(G|s=1) can be done with standard enumeration inference
            </Info>
            <br />
            In the above example, we can deduce:
            <br />
            <br />
            <Info>
              {"S1 <-- fs(c) = c = 1 =>"} <br />
              {"C <-- fc(G) = G = 1 =>"} <br />
              {"G = 1 => P(G = 1|S = 1) = 1.0"} <br />
              After Step 1, P(G = 1|S = 1) = 1.0 is the new CPT on G
            </Info>
            <br />
            2.{" "}
            <span>
              Action: Modify original model M by removing the structural
              equation for counterfactual antecedent X, and replace with a fixed
              constant X=x
              <br />
              <br />
              <Info>
                Firing Squad Example:
                <br />
                <br />
                Before step 2: {"s1 <-- fs1(c) = c"}
                <br />
                After step 2: {"s1 <-- 0"}
                <br />
              </Info>
              <br />
              3.{" "}
              <span>
                Prediction: In the now modified submodel Mx, and with updated
                P(u|e), solve for query Yx
              </span>
              <br />
              <br />
              <Info>
                Firing Squad Example:
                <br />
                <br />
                solve for D_s=0
                <br />G = 1, {"X <- f_c(G) = G = 1 =>"}
                <br />
                {"S2 <-- f_s2(c) = C = 1 =>"}
                <br />
                {"D <-- f_D(s1, s2) = s1 or s2 = 0 or 1 = 1"}
                <br />
              </Info>
            </span>
          </span>
        </Text>
      </div>
    </div>
  );
};

export default Page;
