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
        margin: "0 16px"
      }}
    >
      <span css={{ fontSize: 40 }}>{value}k</span>
      <span>{label}</span>
    </div>
  );
}

export default ValueCancelation;
