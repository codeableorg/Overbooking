/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSubmitScore } from "../action-hooks";
import { Button } from "../components/ui";
import { useRound } from "../selectors";
import { Link } from "@reach/router";

function Score() {
  const [username, setUsername] = React.useState("");
  const game = useRound();
  const submitScore = useSubmitScore();

  function handleChange(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  const gamesArray = Object.values(game.games);

  const total = gamesArray.reduce((acc, round) => {
    return acc + round.netRevenue;
  }, 0);

  let correct = 0;

  gamesArray.forEach(game => {
    if (game.criticalRatio === game.myCriticalRatio) {
      correct += 1;
    }
    return correct;
  });

  const dataToSend = {
    user: {
      games_attributes: Object.values(game.games),
      scores_attributes: [
        {
          totalRevenue: (total * 1000).toFixed(0)
        }
      ]
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    Object.assign(dataToSend.user, { name: username });
    submitScore(dataToSend);
  }

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

  const buttonLabelCss = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  const titleCss = {
    fontWeight: "bolder",
    fontSize: 30,
    textAlign: "center",
    marginBottom: "5%",
    marginTop: "20%"
  };

  const bottomButtonsCss = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    margin: "20% 0"
  };

  const scoresCss = {
    display: "flex",
    flexDirection: "column",
    width: "max-content",
    margin: 0,
    alignItems: "center",
    fontSize: 14
  };

  return (
    <main css={{ width: "100%" }}>
      <h1 css={titleCss}>Final Score</h1>
      <div
        css={{
          marginBottom: "40%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <section css={scoresCss}>
          <span css={{ width: "max-content" }}>TOTAL REVENUE</span>
          <span css={{ width: "max-content", fontSize: 18 }}>
            $ {(total * 1000).toFixed(0)}
          </span>
        </section>
        <section css={scoresCss}>
          <span css={{ width: "max-content" }}>ACCURACY (C.R.)</span>
          <span css={{ width: "max-content", fontSize: 18 }}>{correct}/7</span>
        </section>
      </div>
      <form
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <section
          css={{
            width: "80%",
            textAlign: "center",
            margin: "0 auto",
            marginBottom: "5%"
          }}
        >
          Save your score and see your position in the leaderboard
        </section>
        <label htmlFor="username" css={{ margin: "0 auto" }}>
          Name
        </label>
        <input
          css={styleInputCss}
          type="text"
          autoComplete="off"
          name="username"
          id="username"
          aria-label="Enter your name"
          onChange={handleChange}
          required
        />
        <Button type="submit">SAVE MY SCORE</Button>
      </form>
      <div css={bottomButtonsCss}>
        <div css={buttonLabelCss}>
          <Link to="/">
            <Button css={{ width: 50, height: 50, borderRadius: "50%" }}>
              <i class="fas fa-redo fa-2x" />
            </Button>
          </Link>
          <span css={{ flexShrink: 1 }}>Play again</span>
        </div>
        <div css={buttonLabelCss}>
          <Link to="/ranking">
            <Button css={{ width: 50, height: 50, borderRadius: "50%" }}>
              <i class="fas fa-list fa-2x" />
            </Button>
          </Link>
          <span css={{ flexShrink: 1 }}>Leaderboard</span>
        </div>
      </div>
    </main>
  );
}

export default Score;
