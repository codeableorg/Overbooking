/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import airplane from "../images/airplane.png";
import { Button } from "../components/ui";
import ValueCancelation from "../components/value-cancelation";
import { useRound } from "../selectors";
import { navigate } from "@reach/router";
import Header from "../components/header";
import { useSetCurrentGame } from "../action-hooks";

function FlightDetails() {
  // TODO: WIP animation of values
  const game = useRound();
  const {
    cancellations,
    overbookingNumber,
    totalRevenue,
    overbookingCost,
    underageCost
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

  React.useEffect(() => {}, [cancellation]);

  function changeCurrentGame(event) {
    event.preventDefault();
    setCurrentGame(game.currentGame + 1);
    navigate("/flight-details");
  }

  function goToScore(event) {
    setCurrentGame(1);
    navigate("/score");
  }

  return (
    <div>
      <Header />
      <img
        src={airplane}
        css={{ margin: "auto", display: "block", marginBottom: 20 }}
        alt="airplane"
      />
      <div css={{ textAlign: "center", marginBottom: 40 }}>
        <p>Overbooked seats: {overbookingNumber}</p>
        <p>Total cancellatioms</p>
        <span css={{ fontSize: 56, fontWeight: "bold" }}>{cancellation}</span>
      </div>
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
      {game.currentGame < 7 ? (
        <Button onClick={changeCurrentGame}>Next Flight</Button>
      ) : (
        <Button onClick={goToScore}>My Score</Button>
      )}
    </div>
  );
}

export default FlightDetails;
