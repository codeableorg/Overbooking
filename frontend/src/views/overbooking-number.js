/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useRound } from "../selectors";
import { useAddOverbookingNumber, useSetTotalRevenue } from "../action-hooks";
import { Button } from "../components/ui";
import airplane from "./../images/airplane.png";
import { navigate } from "@reach/router";
import Header from "../components/header";

function OverbookingNumber() {
  const [value, setValue] = React.useState(0);
  const firstRound = useRound();
  const addOverbookingNumber = useAddOverbookingNumber();
  const setTotalRevenue = useSetTotalRevenue();

  function handleChange(event) {
    event.preventDefault();
    const data = event.target.value;
    setValue(data);
  }
  const seats = firstRound.totalSeats;
  const pricePerSeat = firstRound.pricePerSeat;
  const revenue = value * pricePerSeat + seats * pricePerSeat;

  const bulletPosition = (value / seats) * 77 + "%";

  function handleSubmit(event) {
    event.preventDefault();
    addOverbookingNumber(parseInt(value));
    setTotalRevenue(revenue);
    navigate("/cancellations");
  }

  const containerCSS = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh"
  };

  const sliderCSS = {
    marginTop: "29px",
    width: "80%",
    "&::-webkit-slider-runnable-track": {
      width: "100%",
      height: "2px",
      cursor: "pointer",
      boxShadow: "none",
      background: "black",
      borderRadius: "0px",
      border: "0px solid #010101"
    },
    "&::-moz-range-track": {
      width: "100%",
      height: "2px",
      cursor: "pointer",
      boxShadow: "none",
      background: "black",
      borderRadius: "0px",
      border: "0px solid #010101"
    },

    "&::-webkit-slider-thumb": {
      border: "0px solid black",
      boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
      height: "42px",
      width: "42px",
      borderRadius: "50%",
      background: "black",
      cursor: "pointer",
      marginTop: "-10px"
    },
    "&::-moz-range-thumb": {
      border: "0px solid black",
      boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
      height: "42px",
      width: "42px",
      borderRadius: "50%",
      background: "black",
      cursor: "pointer",
      marginTop: "-10px"
    }
  };

  const labelCSS = {
    position: "relative",
    transformOrigin: "center center",
    display: "flex",
    width: "48px",
    height: "48px",
    background: "transparent",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    boxSizing: "border-box",
    border: "2px solid black",
    marginTop: "20px",
    marginRight: "77%",
    color: "black",
    lineHeight: "normal",
    fontSize: "28px",
    left: bulletPosition
  };

  return (
    <section css={containerCSS}>
      <Header />
      <img
        src={airplane}
        alt="airplane"
        css={{ marginBottom: 15, height: 180 }}
      />
      <p>Critical Ratio: {firstRound.myCriticalRatio}</p>
      <p>Suggested Overbooking: {firstRound.suggestedOverbooking}</p>
      <p css={{ fontWeight: "bolder", marginTop: 25 }}>
        Total Revenue: $ {revenue}
      </p>
      <form
        onSubmit={handleSubmit}
        css={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <span id="rs-bullet" css={labelCSS}>
          {value}
        </span>
        <input
          id="rs-range-line"
          type="range"
          min="0"
          max={seats}
          value={value}
          onChange={handleChange}
          css={sliderCSS}
        />
        <p css={{ fontSize: 14, marginTop: 15 }}>Choose your overbooking</p>
        <Button css={{ marginTop: 35 }} type="submit">
          Set overbooking
        </Button>
      </form>
    </section>
  );
}

export default OverbookingNumber;
