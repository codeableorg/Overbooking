/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useRound } from "../selectors";
import { useAddOverbookingNumber, useSetTotalRevenue } from "../action-hooks";
import { Button } from "../components/ui";
import airplane from "./../images/airplane.png";
import { navigate } from "@reach/router";
import Header from "../components/header";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { createPortal } from "react-dom";

function OverbookingNumber() {
  const [value, setValue] = React.useState(0);
  const game = useRound();
  const {
    suggestedOverbooking,
    myCriticalRatio,
    pricePerSeat,
    totalSeats
  } = game.games[game.currentGame];
  const addOverbookingNumber = useAddOverbookingNumber();
  const setTotalRevenue = useSetTotalRevenue();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  function handleChange(event) {
    event.preventDefault();
    const data = event.target.value;
    setValue(data);
  }
  const revenue = value * pricePerSeat + totalSeats * pricePerSeat;

  const bulletPosition = (value / totalSeats) * 77 + "%";

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCloseModal(event) {
    setIsDialogOpen(false);
  }
  function handleOpenModal(event) {
    setIsDialogOpen(true);
  }
  function saveData() {
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
  const titleCss = {
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    padding: "20px"
  };

  const dialogContent = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "30%",
    boxSizing: "border-box",
    margin: 0
  };

  return (
    <section css={containerCSS}>
      <Header />
      <img
        src={airplane}
        alt="airplane"
        css={{ marginBottom: 15, height: 180 }}
      />
      <p>Critical Ratio: {myCriticalRatio}</p>
      <p>Suggested Overbooking: {suggestedOverbooking}</p>
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
          max={totalSeats}
          value={value}
          onChange={handleChange}
          css={sliderCSS}
        />
        <p css={{ fontSize: 14, marginTop: 15 }}>Choose your overbooking</p>
        <Button css={{ marginTop: 35 }} type="submit" onClick={handleOpenModal}>
          Set overbooking
        </Button>

        {createPortal(
          <DialogOverlay isOpen={isDialogOpen} onDismiss={handleCloseModal}>
            <Dialog
              isOpen={isDialogOpen}
              onDismiss={handleCloseModal}
              css={dialogContent}
            >
              <h1 css={titleCss}>
                You Are setting {value} seats for overbooking
              </h1>
              <div
                css={{
                  display: "flex",
                  padding: "10px"
                }}
              >
                <Button onClick={handleCloseModal}>Cancel</Button>
                <Button onClick={saveData}>Confirm</Button>
              </div>
            </Dialog>
          </DialogOverlay>,
          $portal
        )}
      </form>
    </section>
  );
}

export default OverbookingNumber;
