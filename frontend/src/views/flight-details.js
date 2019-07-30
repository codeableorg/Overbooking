/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";
import { useGame, useCurrentGame } from "../selectors";
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
  const current = useCurrentGame();
  const game = useGame(current);
  return (
    <ColumnEvenly>
      <Header show={true} />
      <PicturePlane />
      <div css={{ width: "100%" }}>
        <TitleView>
          <h1>Flight {current}</h1>
        </TitleView>
        <Card>
          <LabelValue
            label="Destination"
            value={game.destination}
            border="Bottom"
          />
          <LabelValue
            label="Capacity"
            value={game.totalSeats}
            border="Bottom"
          />
          <LabelValue label="Date" value={game.dateFlight} border="Bottom" />
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
