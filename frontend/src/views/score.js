/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSubmitScore, useAddLastGameComplete } from "../action-hooks";
import { useGames } from "../selectors";
import { Link, navigate } from "@reach/router";
import {
  Button,
  LabelValue,
  Card,
  Row,
  TitleView,
  Center,
  ColumnEvenly,
  Input
} from "../components/ui";
import Header from "../components/header";
import CurrencyFormat from "react-currency-format";

function Score() {
  const [username, setUsername] = React.useState("");
  const games = useGames();
  const submitScore = useSubmitScore();
  const addLastGameComplete = useAddLastGameComplete();

  function handleChange(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  const gamesArray = Object.values(games);

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
      games_attributes: Object.values(games),
      scores_attributes: [
        {
          totalRevenue: (total * 1000).toFixed(0)
        }
      ]
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    Object.assign(dataToSend.user, { name: username });
    const lastGame = await submitScore(dataToSend);
    addLastGameComplete(lastGame);
    navigate(`ranking/${lastGame.id}`);
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

  const totalAmount = (
    <CurrencyFormat
      value={(total * 1000).toFixed(0)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
  const accuracyNumber = `${correct}/7`;

  const cashLeft = gamesArray.reduce((acc, round) => {
    return acc + round.moneyLeft;
  }, 0);

  return (
    <ColumnEvenly>
      <Header />
      <TitleView>
        <h1>Final Score</h1>
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
        <LabelValue
          label="Cash left on the table"
          value={
            <CurrencyFormat
              value={cashLeft}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          }
          border="Right"
          styleLabel={{ display: "flex", justifyContent: "center" }}
          stylesValue={{
            display: "flex",
            justifyContent: "center"
          }}
          styles={{ borderTop: "1px solid #E7EAF1" }}
        />
      </Card>

      <form
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: 35,
          width: "100%"
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
          Save your score and see your position on the leaderboard
        </section>
        <Card styles={{ marginBottom: 24 }}>
          <div css={{ display: "flex", flexDirection: "column", padding: 16 }}>
            <label
              htmlFor="critical-ratio"
              css={{
                fontSize: 11,
                color: "#6E6E6E",
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
          <Button css={{ marginTop: 16 }} type="submit">
            SAVE MY SCORE
          </Button>
        </Center>
      </form>
      <section css={bottomButtonsCss}>
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
              color: "white",
              fontSize: 15
            }}
          >
            <i className="fas fa-redo fa-lg" />
          </Link>
          <span
            css={{
              flexShrink: 1,
              fontSize: 14,
              marginTop: "0.5em",
              color: "#6B7285"
            }}
          >
            Play again
          </span>
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
              color: "white",
              fontSize: 15
            }}
          >
            <i className="fas fa-list fa-lg" />
          </Link>
          <span
            css={{
              flexShrink: 1,
              fontSize: 14,
              marginTop: "0.5em",
              color: "#6B7285"
            }}
          >
            Leaderboard
          </span>
        </div>
      </section>
    </ColumnEvenly>
  );
}

export default Score;
