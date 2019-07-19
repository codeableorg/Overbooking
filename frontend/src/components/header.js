/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useRound } from "../selectors";

function Header() {
  const game = useRound();

  return (
    <div
      css={{
        position: "absolute",
        top: 8,
        left: 16,
        right: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px,10px,10px,10px"
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          backgroundColor: "#ffffff",
          borderRadius: 18
        }}
      >
        <i class="fas fa-home" />
      </div>
      <div
        css={{
          width: 109,
          height: 36,
          borderRadius: 18,
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <label
          css={{
            padding: 8,
            width: 67,
            height: 14,
            fontFamily: "Rubik",
            fontSize: 14,
            fontWeight: 500,
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: 1,
            letterSpacing: "normal",
            color: "#000000"
          }}
        >
          Flight {game.currentGame}/7
        </label>
      </div>
    </div>
  );
}

export default Header;
