/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import ValueCancelation from "../components/value-cancelation";
import { useRound } from "../selectors";
import { navigate } from "@reach/router";
import Header from "../components/header";
import {
  useSetCurrentGame,
  useAddNetRevenue,
  useAddFeedback
} from "../action-hooks";

import {
  Button,
  Row,
  TitleView,
  Card,
  LabelValue,
  Center,
  WhisperText
} from "../components/ui";

function FlightDetails() {
  // TODO: WIP animation of values
  const game = useRound();
  const {
    cancellations,
    overbookingNumber,
    totalRevenue,
    overbookingCost,
    underageCost,
    feedback
  } = game.games[game.currentGame];
  const seatsStatus = cancellations - overbookingNumber;
  const currentTotalRevenue = totalRevenue / 1000;
  const [cancellation, setCancellations] = React.useState(cancellations);
  const [currentOverbookingCost, setOverbookingCost] = React.useState(
    seatsStatus < 0 ? (seatsStatus * overbookingCost) / -1000 : 0
  );
  const [currentUnderageCost, setUnderageCost] = React.useState(
    seatsStatus > 0 ? (seatsStatus * underageCost) / 1000 : 0
  );
  const [netRevenue, setNetRevenue] = React.useState(
    currentTotalRevenue - currentOverbookingCost - currentUnderageCost
  );

  const setCurrentGame = useSetCurrentGame();
  const addNetRevenue = useAddNetRevenue();
  const addFeedback = useAddFeedback();

  React.useEffect(() => {}, [cancellation]);

  function changeCurrentGame(event) {
    addNetRevenue(netRevenue.toFixed(1) * 1);
    setCurrentGame(++game.currentGame);
    navigate("/flight-details");
  }

  function goToScore(event) {
    addNetRevenue(netRevenue.toFixed(1) * 1);
    setCurrentGame(1);
    navigate("/score");
  }

  return (
    <>
      <Header />
      <TitleView styles={{ marginTop: 72 }}>
        <h1>Cancellations</h1>
      </TitleView>

      <Card styles={{ marginBottom: 48 }}>
        <Row>
          <LabelValue
            label="Overbooked seats"
            value={overbookingNumber}
            border="Right"
          />
          <LabelValue
            label="Total cancellations"
            value={cancellation}
            border="Right"
          />
        </Row>
      </Card>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 40
        }}
      >
        <ValueCancelation value={currentTotalRevenue} label="Total revenue" />
        <ValueCancelation
          value={currentOverbookingCost.toFixed(1)}
          label="Overbooking cost"
        />
        <ValueCancelation value={currentUnderageCost} label="Underage cost" />
        <ValueCancelation value={netRevenue.toFixed(1)} label="Net revenue" />
      </div>

      <Card>
        <div>
          <h2>Feedback</h2>
          <p>{feedback}</p>
        </div>
        {game.currentGame < 7 ? (
          <Button onClick={changeCurrentGame}>Next Flight</Button>
        ) : (
          <Button onClick={goToScore}>My Score</Button>
        )}
      </Card>

      <Center>
        {game.currentGame < 7 ? (
          <Button onClick={changeCurrentGame}>Next Flight</Button>
        ) : (
          <Button onClick={goToScore}>My Score</Button>
        )}
      </Center>
    </>
  );
}

export default FlightDetails;
