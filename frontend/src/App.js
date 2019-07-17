/** @jsx jsx */
import emotionReset from "emotion-reset";
import { jsx, Global, css } from "@emotion/core";
import React from "react";
import { Router } from "@reach/router";

import FlightDetails from "./views/flight-details";
import CriticalRatio from "./views/critical-ratio";
import OverbookingNumber from "./views/overbooking-number";
import Cancellations from "./views/cancellations";
import Score from "./views/score";

function App() {
  const cssWrapper = {
    backgroundColor: "lightgray",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <>
      <Global
        styles={css`
          ${emotionReset};
          body {
            font-family: "Roboto", sans-serif;
            line-height: 1.5;
          }
        `}
      />
      <div css={cssWrapper}>
        <div
          css={{
            maxWidth: 678,
            height: "90vh",
            backgroundColor: "white",
            width: "100%",
            padding: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Router>
            <FlightDetails path="/flight-details" />
            <CriticalRatio path="/critical-ratio" />
            <OverbookingNumber path="/overbooking" />
            <Cancellations path="/cancellations" />
            <Score path="/score" />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
