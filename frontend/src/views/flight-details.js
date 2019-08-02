/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";
import { useGame, useCurrentGame } from "../selectors";
import Header from "../components/header";
import {
  buttonStyles,
  Card,
  TitleView,
  LabelValue,
  Center,
  ColumnEvenly,
  Row
} from "../components/ui";

function FlightDetails() {
  const current = useCurrentGame();
  const game = useGame(current);
  return (
    <ColumnEvenly>
      <Header show={true} />
      <TitleView>
        <h1>Flight {game.flightNumber}</h1>
        <span
          css={{
            textTransform: "uppercase",
            color: "#596275",
            fontWeight: 400,
            fontSize: 12,
            display: "block",
            marginTop: 4
          }}
        >
          {game.destination}
        </span>
      </TitleView>
      <section css={{ width: "100%" }}>
        <div
          css={{
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            position: "relative",
            bottom: -2
          }}
        >
          <Center>
            <img
              src={[game.journey.originImage]}
              alt={game.journey.originName}
            />
          </Center>
          <Center>
            <img
              src={[game.journey.destinationImage]}
              alt={game.journey.destinationName}
            />
          </Center>
        </div>
        <div css={{ width: "100%", position: "relative", zIndex: 1 }}>
          <Card>
            <Row styles={{ borderBottom: "1px solid #E7EAF1" }}>
              <LabelValue
                label="Origin"
                value={game.journey.originName}
                border="Right"
              />
              <LabelValue
                label="Destination"
                value={game.journey.destinationName}
                border="Right"
              />
            </Row>
            <LabelValue
              label="Seat Capacity"
              value={game.totalSeats}
              border="Bottom"
            />
            <LabelValue label="Date" value={game.dateFlight} border="Bottom" />
          </Card>
        </div>
      </section>

      <Center>
        <Link to="/critical-ratio" css={buttonStyles}>
          Start Game
        </Link>
      </Center>
    </ColumnEvenly>
  );
}

export default FlightDetails;
