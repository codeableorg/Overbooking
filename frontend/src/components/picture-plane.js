/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import plane from "./../images/planemain/plane.svg";
import clouds from "./../images/planemain/clouds.svg";
import { Frame } from "framer";

function PicturePlane({ styles = {} }) {
  return (
    <div
      css={{
        width: 120,
        height: 120,
        borderRadius: "50%",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0047FF 0%, #01A4FE 100%)",
        ...styles
      }}
    >
      <Frame
        initial={{ x: -65, y: 107 }}
        animate={{ x: 0, y: 37 }}
        height={80}
        width={80}
        style={{ background: "transparent" }}
        transition={{ duration: 0.85, ease: "backInOut", delay: 0.25 }}
      >
        <img src={plane} width={85} />
      </Frame>
      <Frame
        y={20}
        initial={{ x: -8 }}
        animate={{ x: -155 }}
        width={280}
        height={76}
        transition={{ loop: Infinity, ease: "linear", duration: 8 }}
        style={{ background: "transparent" }}
      >
        <img src={clouds} />
      </Frame>
    </div>
  );
}

export default PicturePlane;
