/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import planeImage from "./../images/plane.png";

function PicturePlane({ styles = {} }) {
  return (
    <div css={{ ...styles }}>
      <img
        src={planeImage}
        alt="airplane"
        css={{
          width: 120,
          height: 120,
          display: "block",
          margin: "auto",
          marginTop: 15,
          ...styles,
          "@media (min-width: 375px)": {
            width: 170,
            height: 170
          }
        }}
      />
    </div>
  );
}

export default PicturePlane;
