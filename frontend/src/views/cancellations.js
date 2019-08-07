/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import ValueCancelation from "../components/value-cancelation";
import { useGame, useCurrentGame } from "../selectors";
import { navigate } from "@reach/router";
import Header from "../components/header";
import { useSpring, animated, interpolate } from "react-spring";
import {
  useSetCurrentGame,
  useAddNetRevenue,
  useAddMoneyLeft
} from "../action-hooks";
import PictureBoss from "./../components/picture-boss";

import {
  Button,
  Row,
  TitleView,
  Card,
  LabelValue,
  Center,
  ColumnEvenly
} from "../components/ui";

function FlightDetails() {
  const addMoneyLeft = useAddMoneyLeft();
  let current = useCurrentGame();
  const game = useGame(current);
  const {
    cancellations,
    overbookingNumber,
    totalRevenue,
    overbookingCost,
    underageCost,
    feedback
  } = game;
  const seatsStatus = cancellations - overbookingNumber;
  const currentTotalRevenue = totalRevenue / 1000;
  const currentOverbookingCost =
    seatsStatus < 0 ? (seatsStatus * overbookingCost) / -1000 : 0;
  const currentUnderageCost =
    seatsStatus > 0 ? (seatsStatus * underageCost) / 1000 : 0;
  const netRevenue = currentTotalRevenue - currentOverbookingCost;

  const numCancellations = useSpring({
    number: cancellations,
    from: { number: 0 }
  });
  const numTotalRev = useSpring({
    number: currentTotalRevenue,
    from: { number: 0 }
  });
  const numOverbook = useSpring({
    number: currentOverbookingCost,
    from: { number: 0 }
  });
  const numUnderCost = useSpring({
    number: currentUnderageCost,
    from: { number: 0 }
  });
  const numNetRev = useSpring({
    number: netRevenue,
    from: { number: 0 }
  });

  const setCurrentGame = useSetCurrentGame();
  const addNetRevenue = useAddNetRevenue();
  const myProgressBar = React.useRef(null);

  React.useEffect(() => {
    cancelBar();
  }, [cancellations]);

  function changeCurrentGame(event) {
    addNetRevenue(netRevenue.toFixed(1) * 1);
    addMoneyLeft(currentUnderageCost * 1000);
    setCurrentGame(++current);
    navigate("/flight-details");
  }

  function goToScore(event) {
    addNetRevenue(netRevenue.toFixed(1) * 1);
    addMoneyLeft(currentUnderageCost * 1000);
    setCurrentGame(1);
    navigate("/score");
  }

  function animateValue(valueIn, opt) {
    if (opt) {
      return (
        <animated.span>
          {valueIn.number.interpolate(val => val.toFixed(1))}
        </animated.span>
      );
    } else {
      return (
        <animated.span>
          {valueIn.number.interpolate(val => Math.floor(val))}
        </animated.span>
      );
    }
  }
  const cssProgressStatus = {
    borderRadius: 8,
    width: 100,
    height: 8,
    marginBottom: 10,
    backgroundColor: "#e7eaf1",
    "@media (min-width: 375px)": {
      width: 140
    }
  };

  const cssProgressBar = {
    borderRadius: 8,
    width: "0%",
    height: 10,
    backgroundColor: "#01A4FE",
    textAlign: "center",
    lineHeight: 32,
    color: "black"
  };

  const cssP = {
    padding: 16,
    fontSize: 14,
    lineHeight: 1.5,
    maxWidth: 295,
    margin: "auto",
    "@media (min-width: 375px)": {
      fontSize: 16
    }
  };

  function cancelBar() {
    let element = myProgressBar.current;
    let width = 1;
    let identity = setInterval(scene, 7);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++;
        element.style.width = width + "%";
      }
    }
  }

  return (
    <ColumnEvenly>
      <Header show={true} />
      <div>
        <TitleView>
          <h1>Flight Performance</h1>
        </TitleView>

        <Card>
          <Row>
            <LabelValue
              label="Overbooked seats"
              value={overbookingNumber}
              border="Right"
            />
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <LabelValue
                label="Total cancellations"
                value={animateValue(numCancellations, false)}
                border="Right"
              >
                <div id="Progress_Status" css={cssProgressStatus}>
                  <div
                    ref={myProgressBar}
                    id="myprogressBar"
                    css={cssProgressBar}
                  />
                </div>
              </LabelValue>
            </div>
          </Row>
        </Card>
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <ValueCancelation
          value={animateValue(numTotalRev, true)}
          label="Total revenue"
        />
        <ValueCancelation
          value={animateValue(numOverbook, true)}
          label="Overbooking cost"
        />
        <ValueCancelation
          value={animateValue(numUnderCost, true)}
          label="Underage cost"
        />
        <ValueCancelation
          value={animateValue(numNetRev, true)}
          label="Net revenue"
        />
      </div>
      <div
        css={{
          display: "flex",
          alignItems: "flex-start"
        }}
      >
        <PictureBoss
          styles={{
            margin: 0,
            marginRight: 5,
            flex: "0 0 40px",
            width: "auto",
            height: "auto",
            "@media (min-width: 375px)": {
              width: "auto",
              height: "auto"
            }
          }}
        />
        <Card>
          <p css={cssP}>{feedback}</p>
        </Card>
      </div>

      <Center>
        {current < 7 ? (
          <Button onClick={changeCurrentGame}>Next Flight</Button>
        ) : (
          <Button onClick={goToScore}>My Score</Button>
        )}
      </Center>
    </ColumnEvenly>
  );
}

export default FlightDetails;
