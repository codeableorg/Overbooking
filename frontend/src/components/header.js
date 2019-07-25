/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useCurrentGame } from "../selectors";
import { Dialog, DialogOverlay } from "@reach/dialog";
import { createPortal } from "react-dom";
import { Button } from "./ui";
import { navigate } from "@reach/router";
import { useReset } from "../action-hooks";

function Header({ show }) {
  const current = useCurrentGame();

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
    setIsDialogOpen(true);
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
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            backgroundColor: "#ffffff",
            borderRadius: 18
          }}
        >
          <i className="fas fa-home" onClick={handleOpenModal} />
        </div>
        {shouldShow ? (
          <div
            id="divFlight"
            css={{
              width: 109,
              height: 36,
              borderRadius: 18,
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <label
              css={{
                padding: 8,
                width: 67,
                height: 14,
                fontFamily: "Rubik",
                fontSize: 14,
                fontWeight: 500,
                fontStyle: "normal",
                fontStretch: "normal",
                lineHeight: 1,
                letterSpacing: "normal",
                color: "#000000"
              }}
            >
              Flight {current}/7
            </label>
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
              You will lose all your progress, Are you sure?
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
