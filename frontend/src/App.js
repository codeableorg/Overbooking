/** @jsx jsx */
import emotionReset from "emotion-reset";
import { jsx, Global, css } from "@emotion/core";
import React from "react";
import { Router } from "@reach/router";

import UiComponents from "./views/ui-components";
import Instructions from "./views/instructions";
import FlightDetails from "./views/flight-details";
import CriticalRatio from "./views/critical-ratio";
import OverbookingNumber from "./views/overbooking-number";
import Cancellations from "./views/cancellations";
import Score from "./views/score";

function App() {
  const cssWrapper = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  };

  return (
    <>
      <Global
        styles={css`
          ${emotionReset};
          body {
            font-family: "Rubik", sans-serif;
            line-height: 1.25;
          }
        `}
      />
      <div css={cssWrapper}>
        <Router
          css={{
            width: 375,
            height: 667,
            padding: 16,
            boxSizing: "border-box",
            position: "relative",
            background: "linear-gradient(180deg, #F8FAFB 0%, #E7EAF1 100%)"
          }}
        >
          <UiComponents path="/" />
          <Instructions path="/instructions" />
          <FlightDetails path="/flight-details" />
          <CriticalRatio path="/critical-ratio" />
          <OverbookingNumber path="/overbooking" />
          <Cancellations path="/cancellations" />
          <Score path="/score" />
        </Router>
      </div>
    </>
  );
}

export default App;
