/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import airplane from "../images/airplane.png";
import { Button } from "../components/ui";
import ValueCancelation from "../components/value-cancelation";
import { useRound } from "../selectors";

function FlightDetails() {
  const game = useRound();
  const cancelation = 0;
  const [oCost, setOCost] = React.useState(0);
  const [uCost, setUCost] = React.useState(0);
  const [netRevenue, setNetRevenue] = React.useState(0);

  return (
    <div>
      <img
        src={airplane}
        css={{ margin: "auto", display: "block", marginBottom: 20 }}
      />
      <div css={{ textAlign: "center", marginBottom: 40 }}>
        <p>Overbooked seats: {game.overbookingNumber}</p>
        <p>Total cancellatioms</p>
        <span css={{ fontSize: 56, fontWeight: "bold" }}>
          {game.cancellations}
        </span>
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 40
        }}
      >
        <ValueCancelation value={game.totalRevenue} label="Total revenue" />
        <ValueCancelation
          value={game.overbookingNumber}
          label="Overbooking cost"
        />
        <ValueCancelation value="3" label="Underage cost" />
        <ValueCancelation value="13" label="Net revenue" />
      </div>
      <Button>Again</Button>
    </div>
  );
}

export default FlightDetails;
