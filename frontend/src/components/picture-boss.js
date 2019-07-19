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
        width: 140,
        height: 140,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "white",
        ...styles
      }}
    >
      <img src={bossImage} width="140" height="140" alt="operator" />
    </div>
  );
}

export default PictureBoss;
