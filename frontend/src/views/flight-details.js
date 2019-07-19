/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";
import { useRound } from "../selectors";
import Header from "../components/header";
import PicturePlane from "./../components/picture-plane";
import {
  buttonStyles,
  Card,
  TitleView,
  LabelValue,
  Center,
  ColumnEvenly
} from "../components/ui";

function FlightDetails() {
  const game = useRound();
  const current = game.currentGame;
  return (
    <ColumnEvenly>
      <Header />
      <PicturePlane />
      <div css={{ width: "100%" }}>
        <TitleView>
          <h1>Flight {game.currentGame}</h1>
        </TitleView>
        <Card>
          <LabelValue
            label="Destination"
            value={game.games[current].destination}
            border="Bottom"
          />
          <LabelValue
            label="Capacity"
            value={game.games[current].totalSeats}
            border="Bottom"
          />
          <LabelValue
            label="Date"
            value={game.games[current].dateFlight}
            border="Bottom"
          />
        </Card>
      </div>
      <Center>
        <Link to="/critical-ratio" css={buttonStyles}>
          Start
        </Link>
      </Center>
    </ColumnEvenly>
  );
}

export default FlightDetails;
