/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useRound } from "../selectors";

function Header() {
  const game = useRound();

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
        right: 2,
        left: 0
      }}
    >
      <div>home</div>
      <div>Flight {game.currentGame}/7</div>
    </div>
  );
}

export default Header;
