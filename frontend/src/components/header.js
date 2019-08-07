/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useCurrentGame } from "../selectors";
import { Dialog, DialogOverlay } from "@reach/dialog";
import { createPortal } from "react-dom";
import { Button } from "./ui";
import { navigate } from "@reach/router";
import { useReset } from "../action-hooks";
import iconHome from "./../images/home.svg";

function Header({ show, direction }) {
  const current = useCurrentGame();
  const iconPlane = Array.from({ length: 7 }, (_, index) => (
    <svg
      key={index}
      css={{ transform: "rotate(-45deg)", marginRight: 1 }}
      width="14"
      height="13"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 10C22 9.1579 21.23 8.42105 20.35 8.42105L14.3 8.42105L8.8 0L6.6 0L9.35 8.42105L3.3 8.42105L1.65 6.31579H0L1.1 10L0 13.6842H1.65L3.3 11.5789L9.35 11.5789L6.6 20H8.8L14.3 11.5789L20.35 11.5789C21.23 11.5789 22 10.8421 22 10Z"
        fill={index < current ? "#006dff" : "#a9a9ab"}
      />
    </svg>
  ));

  const [shouldShow, setShouldShow] = React.useState(true);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  const reset = useReset();

  React.useEffect(() => {
    if (!show) {
      setShouldShow(show);
    }
  }, [show]);

  function resetProgress() {
    reset();
    navigate("/");
  }

  function handleCloseModal(event) {
    setIsDialogOpen(false);
  }
  function handleOpenModal(event) {
    if (!direction) {
      setIsDialogOpen(true);
    } else {
      resetProgress();
    }
  }

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
      <div
        css={{
          position: "absolute",
          top: 8,
          left: 16,
          right: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px,10px,10px,10px"
        }}
      >
        <div
          onClick={handleOpenModal}
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            backgroundColor: "#ffffff",
            borderRadius: 18,
            cursor: "pointer"
          }}
        >
          <img src={iconHome} />
        </div>
        {shouldShow ? (
          <div
            id="divFlight"
            css={{
              padding: "0 11px",
              height: 36,
              borderRadius: 18,
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div css={{ marginRight: -4 }}>{iconPlane}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {createPortal(
        <DialogOverlay
          isOpen={isDialogOpen}
          onDismiss={handleCloseModal}
          css={{
            display: "flex",
            backgroundColor: "rgba(0,0,0, 0.75)"
          }}
        >
          <Dialog
            isOpen={isDialogOpen}
            onDismiss={handleCloseModal}
            css={{
              ...dialogContent,
              width: "80%",
              margin: "auto",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              borderRadius: 8,
              overflow: "hidden",
              "@media (min-width: 375px)": {
                width: 343
              }
            }}
          >
            <p
              css={{
                fontSize: 18,
                lineHeight: 1.5,
                textAlign: "center",
                maxWidth: 295
              }}
            >
              You will lose all your progress, Are you sure?
            </p>
            <div
              css={{
                display: "flex",
                padding: "10px",
                justifyContent: "center"
              }}
            >
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
              <Button onClick={resetProgress}>Confirm</Button>
            </div>
          </Dialog>
        </DialogOverlay>,
        $portal
      )}
    </>
  );
}

export default Header;
