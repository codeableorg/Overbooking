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
import { Link } from "@reach/router";

function FlightDetails() {
  // TODO: WIP animation of values
  const game = useRound();
  const seatsStatus = game.cancellations - game.overbookingNumber;
  const totalRevenue = game.totalRevenue / 1000;
  const [cancellation, setCancellations] = React.useState(game.cancellations);
  const [overbookingCost, setOverbookingCost] = React.useState(
    seatsStatus < 0 ? (seatsStatus * game.overbookingCost) / -1000 : 0
  );
  const [underageCost, setUnderageCost] = React.useState(
    seatsStatus > 0 ? (seatsStatus * game.underageCost) / 1000 : 0
  );
  const [netRevenue, setNetRevenue] = React.useState(
    totalRevenue - overbookingCost - underageCost
  );

  const setCurrentGame = useSetCurrentGame();

  React.useEffect(() => {}, [cancellation]);

  function changeCurrentGame(event) {
    event.preventDefault();
    setCurrentGame(game.currentGame + 1);
    navigate("/");
  }
  return (
    <form onSubmit={changeCurrentGame}>
      <Header />
      <img
        src={airplane}
        css={{ margin: "auto", display: "block", marginBottom: 20 }}
        alt="airplane"
      />
      <div css={{ textAlign: "center", marginBottom: 40 }}>
        <p>Overbooked seats: {game.overbookingNumber}</p>
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
        <ValueCancelation value={totalRevenue} label="Total revenue" />
        <ValueCancelation value={overbookingCost} label="Overbooking cost" />
        <ValueCancelation value={underageCost} label="Underage cost" />
        <ValueCancelation value={netRevenue.toFixed(1)} label="Net revenue" />
      </div>
      {game.currentGame < 8 ? (
        <Button>Next Flight {game.currentGame}/7</Button>
      ) : (
        <Button>My Score</Button>
      )}
    </form>
  );
}

export default FlightDetails;
