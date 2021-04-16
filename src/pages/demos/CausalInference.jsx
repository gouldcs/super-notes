import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Header from "../../components/Header"
import Subheader from "../../components/Subheader"
import Text from "../../components/Text"
import Image from "../../components/Image"
import Warn from "../../components/Warn"
import Caution from "../../components/Caution"
import Info from "../../components/Info"
import Correct from "../../components/Correct"
import Question from "../../components/Question"
import Page from "./../../components/Page"
import Section from "./../../components/Section"
import Important from "../../components/Important"
import Code from "../../components/Code"
import twinnetwork from "./../../assets/twin_network.PNG"
import twin2 from "./../../assets/twin2.PNG"
import twin3 from "./../../assets/twin3.PNG"
import cpt from "./../../assets/cpt.PNG"
import findprob from "./../../assets/findprob.PNG"
import prelim from "./../../assets/prelim.PNG"
import prelim2 from "./../../assets/prelim2.PNG"
import prelim3 from "./../../assets/prelim3.PNG"

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
}))

const CausalInference = (props) => {
  const classes = useStyles()

  return (
    <Page>
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
            Observations of what happened in reality tell us something about the
            state of U
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
        The Twin Network Model models a counterfactial query such that evidence
        observed in reality (in OG model M) can be used to inform the
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
        Which is the solution to Y in the hypothetical world Mx for a particulat
        value U = u
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
            had x=x", without any observed evidence for flow of info in the twin
            netweork we have:
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
            Note: there is a more general conversion from tier-3 to tier-2 that
            we will see on assignment 4: "Counterfactual Backdoor"
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
        In the Firing Squad Example, how would we write our query of "would the
        Prisoner have died had S1 not shot?"
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
            Abduction: takes observed evidence and updates belief about state of
            U:
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
            Action: Modify original model M by removing the structural equation
            for counterfactual antecedent X, and replace with a fixed constant
            X=x
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
      <Header>New Variables</Header>
      <Section>
        <Question>
          What if the model was modified such that S1 had a parent, N (nerves),
          which changed our structural equations?
          <br />
          <br />
          {"u = {G, N}\n"}
          <br />
          {"v = {c, s1, s2, D}\n"}
          <br />
          {"P(u) = {P(G = 0) = 0.8, P(N=0) = 0.6}\n"}
          <br />
          {
            "F = {\nc <- fc(G) = g;\ns1<-fs1(c)=c;\ns2<-fs2(c) = c;\nD<-fD(s1, s2)=s1 or s2; }\n"
          }
          <br />
          <br />
          <Info>
            Example: "What's the likelihood the prisoner dies if S1 doesn't
            shot, given that he did?"
            <br />
            P(D_(s1=0) = 1 | s1 = 1)
          </Info>
        </Question>
        <Important>Reminder: Think about the twin network!</Important>
        <Text>
          Let's take a look at the twin network model, based on the observed and
          inteventional models. Keep in mind that we are still looking at where
          soldier 1 does not shoot, while the observational model is still
          non-determinate.
        </Text>
        <Image>{twin2}</Image>
        <Important>
          Remember that N cannot influence the actions of the intervened model's
          soldier 1! The relationship is severed.
        </Important>
        <Subheader>Step 1: Abduction ({"P(u) <- P(u|e)"})</Subheader>
        <Section>
          <Warn>
            We only need to update P(G) for this query because N is independent
            from Mx.
            <br />
            Therefore: {"P(G) <- P(G|S1 = 1)"}
          </Warn>
          <Question>
            The obvious first step in the process is to find P(G|S1=1), but how
            do we find that?
            <br />
            <br />
            <Correct>
              A tier 1 query! We can use enumeration inference to compute, BUT
              that requires us to have CPTs.
              <br />
              THANKFULLY, they can be derived from the structural equations and
              the probable distributions of U:
              <Image>{cpt}</Image>
            </Correct>
          </Question>
        </Section>
        <Subheader>Solving P(G|S1=1)</Subheader>
        <Section>
          <Info>
            1. Label: {"Q = {G}, e = {S1 = 1}, Y={C, N}"}
            <Section>
              1. Find P(G, S=1)
              <br />
              <Image>{findprob}</Image>
              <br />
              2. P(S=1) = P(G=0, S=1) + P(G=1,S=1) = 0.52 <br />
              3. {"Model of (G, P(G|S1=1) { (0, 0.62), (1, 0.38)"}
            </Section>
            2. Action: Switch to interventional model
            <Section>
              {"fs1<-0: replace SE of s with hypothetical constant"}
            </Section>
            3. Prediction: Solve for P(D_(s=0) = 1) ion interventional model and
            with updated P(u|e)
            <Section>{"P(D_(s1=0) = 1 | s1 = 1) = 0.38"}</Section>
          </Info>
        </Section>
        <Subheader>Data-Driven Counterfactuals</Subheader>
        <Section>
          <Text>
            Some reasons we may not be able to perform the 3-step CF
            computation:
            <Section>
              <Text>
                1. For cf Yx, we may not be able to identify the effect of the
                antecedent x on query y given only observational data
              </Text>
              <Text>
                2. We don't have a fully-specified SCM (don't know structural
                equations, F)
              </Text>
            </Section>
          </Text>
          <Info>
            Example: Drug trials with treatments X: {"{0, 1}"}, and patient
            recovery Y: {"{0, 1}"}, and in practice, doctors prescribe Xi with
            different confounding criteria.
            <br />
            <br />X -> Y and Y {"< - - >"} X <br />
            <br />
            <Question>
              Lacking F anx x,y are confounded, could we answer a counterfactual
              asking about a patient's chance of recovery if they were treated
              differently than they were?
            </Question>
            WLOG: P(Y_(x=1) = 1 | x=0)
            <Warn>
              Notice that x = 1 on the left, and x = 0 on the right! So why do
              this?
            </Warn>
            <Important>
              This is an important query to answer, because it informs doctors
              as to the optimality of their treatment! What is the probability
              that a patient recovers with drug 1, given drug 0?
            </Important>
            Now let's look at the twin network:
            <Image>{twin3}</Image>
            <Info>
              Idea: we can still get info about Yx from the observed x through
              clever combination of both observational AND interventional data
              -- NO STRUCTURAL EQUATIONS REQUIRED!
            </Info>
            <Important>
              Our goal is to try to find tier-3 P(Y_(x=1)|X=0) from tier 1 and
              tier 2 expressions alone
            </Important>
            <Warn>
              Preliminaries:
              <Image>{prelim}</Image>
              <Image>{prelim2}</Image>
              <Image>{prelim3}</Image>
            </Warn>
          </Info>
        </Section>
      </Section>
    </Page>
  )
}

export default CausalInference
