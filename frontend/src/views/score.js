/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSubmitScore } from "../action-hooks";
import { Button } from "../components/ui";
import { useRound } from "../selectors";

function Score() {
  const [username, setUsername] = React.useState("");
  const game = useRound();
  const submitScore = useSubmitScore();
  const dataToSend = {
    user: {
      games_attributes: Object.values(game.games)
    }
  };

  const styleInputCss = {
    margin: "10px auto",
    background: "none",
    border: "1px solid black",
    borderRadius: ".25rem",
    boxSizing: "border-box",
    display: "block",
    fontSize: "1rem",
    padding: ".5rem",
    color: "#34495e",
    width: "100%",
    "&:focus": {
      outline: "none",
      borderColor: "rgba(242, 107, 117, 0.5)"
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    Object.assign(dataToSend.user, { name: username });
    submitScore(dataToSend);
  }

  function handleChange(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        css={styleInputCss}
        type="text"
        autoComplete="off"
        name="username"
        aria-label="Enter your name"
        onChange={handleChange}
      />
      <Button type="submit">SAVE MY SCORE</Button>
    </form>
  );
}

export default Score;
