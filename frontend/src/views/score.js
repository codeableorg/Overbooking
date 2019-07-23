/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSubmitScore } from "../action-hooks";
import { useRound } from "../selectors";
import { Link } from "@reach/router";
import {
  Button,
  LabelValue,
  Card,
  Row,
  TitleView,
  Center,
  Input
} from "../components/ui";

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

  const buttonLabelCss = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  const bottomButtonsCss = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: 25
  };

  const totalAmount = `$ ${(total * 1000).toFixed(0)}`;
  const accuracyNumber = `${correct}/7`;

  return (
    <main css={{ width: "100%" }}>
      <TitleView>
        <h1 css={{ marginTop: 18 }}>Final Score</h1>
      </TitleView>

      <Card>
        <Row>
          <LabelValue
            label="TOTAL REVENUE"
            value={totalAmount}
            border="Right"
            css={{ margin: "10px 0px" }}
          />
          <LabelValue
            label="ACCURACY (C.R.)"
            value={accuracyNumber}
            border="Right"
          />
        </Row>
      </Card>
      <form
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "40%"
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
        <Card styles={{ marginBottom: 24 }}>
          <div css={{ display: "flex", flexDirection: "column", padding: 16 }}>
            <label
              htmlFor="critical-ratio"
              css={{
                fontSize: 11,
                color: "#7e879a",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: 8
              }}
            >
              Name
            </label>
            <Input
              aria-label="Enter your name"
              id="username"
              name="username"
              required
              autoComplete="off"
              type="text"
              onChange={handleChange}
              autoFocus
            />
          </div>
        </Card>

        <Center>
          <Button css={{ marginTop: 24 }} type="submit">
            SAVE MY SCORE
          </Button>
        </Center>
      </form>
      <div css={bottomButtonsCss}>
        <div css={buttonLabelCss}>
          <Link
            to="/"
            css={{
              background: "linear-gradient(180deg, #01A4FE 0%, #0047FF 100%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "white"
            }}
          >
            <i class="fas fa-redo fa-lg" />
          </Link>
          <span css={{ flexShrink: 1 }}>Play again</span>
        </div>
        <div css={buttonLabelCss}>
          <Link
            to="/ranking"
            css={{
              background: "linear-gradient(180deg, #01A4FE 0%, #0047FF 100%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "white"
            }}
          >
            <i class="fas fa-list fa-lg" />
          </Link>
          <span css={{ flexShrink: 1 }}>Leaderboard</span>
        </div>
      </div>
    </main>
  );
}

export default Score;
