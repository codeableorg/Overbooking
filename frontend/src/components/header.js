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
        justifyContent: "space-between"
      }}
    >
      <div>home</div>
      <div>Flight {game.currentGame}/7</div>
    </div>
  );
}

export default Header;
