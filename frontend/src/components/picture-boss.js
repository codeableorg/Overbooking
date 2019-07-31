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
        overflow: "hidden",
        backgroundColor: "white",
        marginTop: 15,
        ...styles,
        "@media (min-width: 375px)": {
          width: 140,
          height: 140,
          borderRadius: "50%"
        }
      }}
    >
      <img
        src={bossImage}
        css={{
          width: 100,
          height: 100,
          "@media (min-width: 375px)": {
            width: 140,
            height: 140
          }
        }}
        alt="operator"
      />
    </div>
  );
}

export default PictureBoss;
