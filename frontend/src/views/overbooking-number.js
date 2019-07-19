/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useRound } from "../selectors";
import {
  useAddOverbookingNumber,
  useSetTotalRevenue,
  useAddFeedback
} from "../action-hooks";
import { navigate } from "@reach/router";
import Header from "../components/header";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import PicturePlane from "./../components/picture-plane";
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
// TODO: to refactor messages
function OverbookingNumber() {
  const messages = {
    criticalRatio: {
      right: "Great job! You calculated the critical ratio correctly. ",
      wrong: "It looks like your critical ratio calculation was a little off. "
    },
    overBooking: {
      equalToSuggested: {
        message: "You utilized the suggested overbooking ",
        cancelations: {
          equalToOverbooking:
            "which matched cancellations and optimized revenue. Good job!",
          greatherThanOverbooking:
            "but there were more cancellations than expected. Too bad.",
          lowerThanOverbooking:
            "but you were simply unlucky as cancellations did not materialize."
        }
      },
      greatherThanSuggested: {
        message: "You gambled ",
        cancelations: {
          equalToOverbooking: "and won. Congrats!",
          greatherThanOverbooking:
            "but there were still more cancellations than expected. That's just unlucky.",
          lowerThanOverbooking:
            "and lost. Let's hope those overbooking costs don't come out of your budget!"
        }
      },
      lowerThanSuggested: {
        message: "You played it safe ",
        cancelations: {
          equalToOverbooking: "and won. Congrats!",
          greatherThanOverbooking:
            "but in this case fortune favored the bold and you left money on the table.",
          lowerThanOverbooking:
            "but apparently not safe enough. Better luck next time."
        }
      }
    }
  };
  const [value, setValue] = React.useState(0);
  const game = useRound();
  const {
    suggestedOverbooking,
    myCriticalRatio,
    pricePerSeat,
    totalSeats,
    overbookingNumber,
    criticalRatio,
    cancellations
  } = game.games[game.currentGame];
  const addOverbookingNumber = useAddOverbookingNumber();
  const setTotalRevenue = useSetTotalRevenue();
  const addFeedback = useAddFeedback();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  function adviceOne() {
    if (criticalRatio === myCriticalRatio) {
      return messages.criticalRatio.right;
    } else {
      return messages.criticalRatio.wrong;
    }
  }

  function adviceTwo(overbookingNumber) {
    let messageCancellation = "";
    if (overbookingNumber === suggestedOverbooking) {
      let optEqual = messages.overBooking.equalToSuggested.cancelations;
      if (cancellations === overbookingNumber) {
        messageCancellation = optEqual.equalToOverbooking;
      } else if (cancellations > overbookingNumber) {
        messageCancellation = optEqual.greatherThanOverbooking;
      } else {
        messageCancellation = optEqual.lowerThanOverbooking;
      }
      return (
        messages.overBooking.equalToSuggested.message + messageCancellation
      );
    } else if (overbookingNumber > suggestedOverbooking) {
      let optGreather = messages.overBooking.greatherThanSuggested.cancelations;
      if (cancellations === overbookingNumber) {
        messageCancellation = optGreather.equalToOverbooking;
      } else if (cancellations > overbookingNumber) {
        messageCancellation = optGreather.greatherThanOverbooking;
      } else {
        messageCancellation = optGreather.lowerThanOverbooking;
      }
      return (
        messages.overBooking.greatherThanSuggested.message + messageCancellation
      );
    } else {
      let optLower = messages.overBooking.lowerThanSuggested.cancelations;
      if (cancellations === overbookingNumber) {
        messageCancellation = optLower.equalToOverbooking;
      } else if (cancellations > overbookingNumber) {
        messageCancellation = optLower.greatherThanOverbooking;
      } else {
        messageCancellation = optLower.lowerThanOverbooking;
      }
      return (
        messages.overBooking.lowerThanSuggested.message + messageCancellation
      );
    }
  }

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
    addFeedback(adviceOne() + adviceTwo(parseInt(value)));
    navigate("/cancellations");
  }

  const sliderCSS = {
    marginTop: "16px",
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
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        css={{
          width: "100%",
          height: "100%"
        }}
      >
        <ColumnEvenly>
          <PicturePlane />
          <div css={{ width: "100%" }}>
            <TitleView>
              <h1>Overbooking</h1>
            </TitleView>
            <Card styles={{ marginBottom: 16 }}>
              <Row>
                <LabelValue
                  label="Critical Ratio"
                  value={myCriticalRatio}
                  border="Right"
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
                value={`$ ${revenue}`}
                border="Right"
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
            <span id="rs-bullet" css={{ fontSize: 32 }}>
              {value}
            </span>

            <input
              id="rs-range-line"
              type="range"
              min="0"
              max={totalSeats}
              value={value}
              onChange={handleChange}
              css={{ marginBottom: 8, ...sliderCSS }}
            />
            <WhisperText>Choose your overbooking</WhisperText>
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
            backgroundColor: "rgba(239, 245, 255, 0.75)"
          }}
        >
          <Dialog
            isOpen={isDialogOpen}
            onDismiss={handleCloseModal}
            css={{
              ...dialogContent,
              width: 343,
              margin: "auto",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              borderRadius: 8,
              overflow: "hidden"
            }}
          >
            <p
              css={{
                fontSize: 18,
                lineHeight: 1.5,
                textAlign: "center",
                maxWidth: 295,
                marginBottom: 24
              }}
            >
              You Are setting {value} seats for overbooking
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
