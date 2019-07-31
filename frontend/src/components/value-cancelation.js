/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

function ValueCancelation({ value, label }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        flex: "1 1 0"
      }}
    >
      <span
        css={{
          fontSize: 22,
          "@media (min-width: 375px)": {
            fontSize: 24
          }
        }}
      >
        {value}k
      </span>
      <span
        css={{
          fontSize: 9,
          textTransform: "uppercase",
          wordSpacing: 100,
          "@media (min-width: 375px)": {
            fontSize: 11
          }
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default ValueCancelation;
