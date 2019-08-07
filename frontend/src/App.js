/** @jsx jsx */
import emotionReset from "emotion-reset";
import { jsx, Global, css } from "@emotion/core";
import React from "react";
import { Router } from "@reach/router";

import Instructions from "./views/instructions";
import FlightDetails from "./views/flight-details";
import CriticalRatio from "./views/critical-ratio";
import OverbookingNumber from "./views/overbooking-number";
import Cancellations from "./views/cancellations";
import Score from "./views/score";
import Ranking from "./views/ranking";
import Home from "./views/home";

function App() {
  const cssWrapper = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
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
            height: "100vh",
            overflow: "hidden",
            padding: 16,
            boxSizing: "border-box",
            position: "relative",
            background: "linear-gradient(180deg, #F8FAFB 0%, #E7EAF1 100%)",
            width: "100%",
            overflow: "hidden",
            "@media screen and (min-width: 768px)": {
              borderRadius: 8,
              maxWidth: 375,
              maxHeight: 812
            }
          }}
        >
          <Home path="/" />
          <Instructions path="/instructions" />
          <FlightDetails path="/flight-details" />
          <CriticalRatio path="/critical-ratio" />
          <OverbookingNumber path="/overbooking" />
          <Cancellations path="/cancellations" />
          <Score path="/score" />
          <Ranking path="/ranking" />
          <Ranking path="/ranking/:id" />
        </Router>
      </div>
    </>
  );
}

export default App;
