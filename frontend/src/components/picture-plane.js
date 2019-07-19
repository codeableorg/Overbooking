/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import planeImage from "./../images/plane.png";

function PicturePlane({ styles = {} }) {
  return (
    <div css={{ ...styles }}>
      <img
        src={planeImage}
        width="140"
        height="140"
        alt="airplane"
        css={{ display: "block", margin: "auto" }}
      />
    </div>
  );
}

export default PicturePlane;
