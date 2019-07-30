/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useCurrentGame, useGame } from "../selectors";
import {
  useAddOverbookingNumber,
  useSetTotalRevenue,
  useAddFeedback
} from "../action-hooks";
import { navigate } from "@reach/router";
import Header from "../components/header";
import { Dialog, DialogOverlay } from "@reach/dialog";
import CurrencyFormat from "react-currency-format";
import "@reach/dialog/styles.css";
import PicturePlane from "./../components/picture-plane";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {
  Button,
  Row,
  TitleView,
  Card,
  LabelValue,
  WhisperText,
  ColumnEvenly,
  Center
} from "../components/ui";

import { createPortal } from "react-dom";
import PictureBoss from "../components/picture-boss";

function OverbookingNumber() {
  const msgRatio = {
    right: "Great job! You calculated the critical ratio correctly. ",
    wrong: "It looks like your critical ratio calculation was a little off. "
  };

  // message after compared my overbooking with suggested overbooking
  const msgOverBooking = {
    0: "You utilized the suggested overbooking ",
    1: "You gambled ",
    2: "You played it safe "
  };

  // message after compared cancellations with own overbooking
  const msgCancellations = {
    equal: {
      0: "which matched cancellations and optimized revenue. Good job!",
      1: "but there were more cancellations than expected. Too bad.",
      2: "but you were simply unlucky as cancellations did not materialize."
    },
    greater: {
      0: "and won. Congrats!",
      1: "but there were still more cancellations than expected. That's just unlucky.",
      2: "and lost. Let's hope those overbooking costs don't come out of your budget!"
    },
    lower: {
      0: "and won. Congrats!",
      1: "but in this case fortune favored the bold and you left money on the table.",
      2: "but apparently not safe enough. Better luck next time."
    }
  };

  const current = useCurrentGame();
  const game = useGame(current);
  const {
    suggestedOverbooking,
    myCriticalRatio,
    pricePerSeat,
    totalSeats,
    criticalRatio,
    cancellations
  } = game;
  const [value, setValue] = React.useState(0);
  const addOverbookingNumber = useAddOverbookingNumber();
  const setTotalRevenue = useSetTotalRevenue();
  const addFeedback = useAddFeedback();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  function firstAdvice() {
    return criticalRatio === myCriticalRatio ? msgRatio.right : msgRatio.wrong;
  }

  function sign(a, b) {
    if (a === b) {
      return 0;
    } else if (a > b) {
      return 1;
    } else {
      return 2;
    }
  }

  function secondAdvice(overbookingNumber) {
    let booking = sign(overbookingNumber, suggestedOverbooking);
    let cancels = sign(cancellations, overbookingNumber);
    let values = Object.values(msgCancellations);
    let msg = "";
    switch ("" + booking + cancels) {
      case "00":
        msg = msgOverBooking[0] + values[0][0];
        break;
      case "01":
        msg = msgOverBooking[0] + values[0][1];
        break;
      case "02":
        msg = msgOverBooking[0] + values[0][2];
        break;
      case "10":
        msg = msgOverBooking[1] + values[1][0];
        break;
      case "11":
        msg = msgOverBooking[1] + values[1][1];
        break;
      case "12":
        msg = msgOverBooking[1] + values[1][2];
        break;
      case "20":
        msg = msgOverBooking[2] + values[2][0];
        break;
      case "21":
        msg = msgOverBooking[2] + values[2][1];
        break;
      case "22":
        msg = msgOverBooking[2] + values[2][2];
        break;
      default:
        break;
    }
    return msg;
  }

  function handleChange(value) {
    setValue(value);
  }

  const revenue = value * pricePerSeat + totalSeats * pricePerSeat;
  const currencyRevenue = (
    <CurrencyFormat
      value={revenue}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );

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
    addFeedback(firstAdvice() + secondAdvice(parseInt(value)));
    navigate("/cancellations");
  }

  const dialogContent = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "90%",
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8,
    height: 268,
    "@media (min-width: 375px)": {
      width: 343
    }
  };

  return (
    <>
      <Header show={true} />
      <form
        onSubmit={handleSubmit}
        css={{
          width: "100%",
          height: "100%"
        }}
      >
        <ColumnEvenly>
          <PicturePlane css={{ height: 30 }} />
          <div css={{ width: "100%" }}>
            <TitleView>
              <h1>Set Overbooking Target</h1>
            </TitleView>
            <Card styles={{ marginBottom: 16 }}>
              <Row>
                <LabelValue
                  label="Critical Ratio"
                  value={myCriticalRatio}
                  border="Right"
                  styleLabel={{
                    maxWidth: 30
                  }}
                />
                <LabelValue
                  label="Suggested Overbooking"
                  value={suggestedOverbooking}
                  border="Right"
                />
              </Row>
            </Card>
            <Card>
              <LabelValue
                label="Total Revenue"
                value={currencyRevenue}
                border="Right"
                styleLabel={{ display: "flex", justifyContent: "center" }}
                stylesValue={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              />
            </Card>
          </div>
          <div
            css={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <span id="rs-bullet" css={{ fontSize: 32, marginBottom: 8 }}>
              {value}
            </span>
            <div
              css={{
                width: "100%",
                padding: "0 40px",
                boxSizing: "border-box",
                marginBottom: 16
              }}
            >
              <Slider
                min={0}
                max={totalSeats / 3}
                defaultValue={0}
                onChange={handleChange}
                railStyle={{ backgroundColor: "#CBCFD6", height: 8 }}
                trackStyle={{
                  background:
                    "linear-gradient(90deg, #01A4FE 0%, #0047FF 100%)",
                  height: 8
                }}
                handleStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#0047FF",
                  boxSizing: "content-box",
                  border: "12px solid white",
                  marginLeft: -12,
                  marginTop: -12,
                  opacity: 0.85,
                  boxShadow: "0 0 13px -3px #092457"
                }}
              />
            </div>
            <WhisperText>Number of Seats Overbooked</WhisperText>
          </div>

          <Center>
            <Button type="submit" onClick={handleOpenModal}>
              Set overbooking
            </Button>
          </Center>
        </ColumnEvenly>
      </form>

      {createPortal(
        <DialogOverlay
          isOpen={isDialogOpen}
          onDismiss={handleCloseModal}
          css={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0, 0.75)"
          }}
        >
          <Dialog
            isOpen={isDialogOpen}
            onDismiss={handleCloseModal}
            css={{
              ...dialogContent
            }}
          >
            <PictureBoss
              styles={{
                margin: "auto",
                marginTop: 0,
                marginBottom: 16,
                width: 64,
                height: 64,
                backgroundColor: "#F4F6FA",
                "@media (min-width: 375px)": {
                  width: 64,
                  height: 64
                }
              }}
            />
            <p
              css={{
                fontSize: 16,
                lineHeight: 1.5,
                textAlign: "center",
                maxWidth: 295,
                width: "80%",
                margin: "auto",
                marginBottom: 8
              }}
            >
              You will overbook {value} seats on this flight
            </p>

            <div css={{ display: "flex", padding: "10px" }}>
              <Button
                onClick={handleCloseModal}
                styles={{
                  background: "white",
                  color: "black",
                  textTransform: "capitalize",
                  fontSize: 16,
                  boxShadow: "none",
                  fontWeight: 400
                }}
              >
                Cancel
              </Button>
              <Button onClick={saveData}>Confirm</Button>
            </div>
          </Dialog>
        </DialogOverlay>,
        $portal
      )}
    </>
  );
}

export default OverbookingNumber;
