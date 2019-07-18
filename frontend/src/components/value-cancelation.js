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
      <span css={{ fontSize: 24 }}>{value}k</span>
      <span
        css={{
          fontSize: 11,
          textTransform: "uppercase",
          wordSpacing: 100
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default ValueCancelation;
