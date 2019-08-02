/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import bossImage from "./../images/boss.png";

function PictureBoss({ styles = {} }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "white",
        marginTop: 15,
        "@media (min-width: 375px)": {
          width: 140,
          height: 140,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center"
        },
        ...styles
      }}
    >
      <img
        src={bossImage}
        css={{
          display: "block",
          width: "100%",
          height: "100%"
        }}
        alt="operator"
      />
    </div>
  );
}

export default PictureBoss;
