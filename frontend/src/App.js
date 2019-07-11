/** @jsx jsx */
import emotionReset from "emotion-reset";
import { jsx, Global, css } from "@emotion/core";
import React from "react";
import FlightDetails from "./views/flight-details";
import CriticalRatio from "./views/critical-ratio";
import { Provider } from "react-redux";
import store from "./store";

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
          <Provider store={store}>
            <CriticalRatio />
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
