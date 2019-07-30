/** @jsx jsx */
import React from "react";
import { jsx, keyframes } from "@emotion/core";
import { Link } from "@reach/router";
import { buttonStyles, WhisperText } from "../components/ui";
import iconPlane from "./../images/icon-plane.svg";
import { Dialog, DialogOverlay } from "@reach/dialog";
import { createPortal } from "react-dom";
import cloud1 from "./../images/cloud1.svg";
import cloud2 from "./../images/cloud2.svg";
import cloud3 from "./../images/cloud3.svg";
import cloud4 from "./../images/cloud4.svg";
import cloud5 from "./../images/cloud5.svg";
import cloud6 from "./../images/cloud5.svg";
import codeable from "./../images/codeable.svg";

function Home() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  const titleCss = {
    fontWeight: "bold",
    fontSize: 37,
    color: "white",
    textAlign: "center",
    marginBottom: "1rem"
  };
  const dialogContent = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: 210,
    boxSizing: "border-box",
    margin: 0
  };
  const upAndDown = keyframes`
    from 0%, to {
      transform: translate3d(0,0,0);
    }
    50% {
      transform: translate3d(0, -30px, 0);
    }
  `;

  const movingCloud = keyframes`
    0% {margin-left: 180px}
    100% {margin-left: -610px}
  `;

  function handleOpenModal() {
    setIsDialogOpen(true);
  }

  function handleCloseModal(event) {
    setIsDialogOpen(false);
  }

  return (
    <main
      css={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: "linear-gradient(180deg, #0047FF 0%, #01A4FE 100%)"
      }}
    >
      <img
        src={cloud1}
        alt="cloud"
        css={{
          position: "absolute",
          top: "1.65%",
          left: "45.33%",
          animation: `${movingCloud} 18s linear infinite`
        }}
      />
      <img
        alt="plane"
        src={iconPlane}
        css={{
          position: "absolute",
          top: "18.14%",
          right: "80.27%",
          animation: `${upAndDown} 4s ease infinite`
        }}
      />
      <img
        src={cloud2}
        alt="cloud"
        css={{
          position: "absolute",
          top: "42.43%",
          left: "27.47%",
          animation: `${movingCloud} 12s linear infinite`
        }}
      />
      <img
        src={cloud3}
        alt="cloud"
        css={{
          position: "absolute",
          top: "33.88%",
          left: "72.53%",
          animation: `${movingCloud} 15s linear infinite`
        }}
      />
      <img
        src={cloud4}
        alt="cloud"
        css={{
          position: "absolute",
          top: "16.04%",
          left: "79.73%",
          animation: `${movingCloud} 20s linear infinite`
        }}
      />
      <img
        src={cloud5}
        alt="cloud"
        css={{
          position: "absolute",
          top: "86.21%",
          left: "30.13%",
          animation: `${movingCloud} 16s linear infinite`
        }}
      />
      <img
        src={cloud6}
        alt="cloud"
        css={{
          position: "absolute",
          top: "65.07%",
          left: "72.8%",
          animation: `${movingCloud} 10s linear infinite`
        }}
      />
      <div
        css={{
          top: 150,
          bottom: 0,
          right: 0,
          left: 0,
          position: "absolute",
          "@media (min-width: 375px)": {
            top: 190
          }
        }}
      >
        <h1 css={titleCss}>OVERBOOKING</h1>
        <Link
          to="/instructions"
          css={{
            ...buttonStyles,
            background: "white",
            margin: "0 auto",
            marginTop: 135,
            color: "#084B8A"
          }}
        >
          NEW GAME
        </Link>

        <Link
          to="/ranking"
          css={{
            ...buttonStyles,
            margin: "0 auto",
            marginTop: 24,
            background: "rgba(255,255,255,0.35)",
            position: "relative"
          }}
        >
          Leaderboard
        </Link>
        <WhisperText
          styles={{
            position: "absolute",
            bottom: 8,
            width: "100%",
            color: "white",
            marginBottom: 8
          }}
        >
          <span css={{ opacity: 0.65 }} onClick={handleOpenModal}>
            Developed By
          </span>
        </WhisperText>
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
            <div
              css={{
                lineHeight: 1.5,
                textAlign: "center",
                maxWidth: 295,
                color: "black",
                fontFamily: "monospace",
                fontSize: 12,
                "@media (min-width: 375px)": {
                  fontSize: 14
                }
              }}
            >
              <span
                css={{ color: "#737373", marginBottom: 16, display: "block" }}
              >
                With <b css={{ fontWeight: 400, color: "red" }}>❤</b> by
              </span>
              <ul
                css={{
                  textAlign: "center",
                  marginBottom: 20,
                  color: "#299FBB"
                }}
              >
                <li
                  css={{
                    marginBottom: 4
                  }}
                >
                  <a
                    css={{ color: "inherit", textDecoration: "none" }}
                    href="https://twitter.com/valevstech"
                    target="_blank"
                  >
                    @valevstech
                  </a>
                </li>
                <li css={{ marginBottom: 4 }}>
                  <a
                    css={{ color: "inherit", textDecoration: "none" }}
                    href="https://twitter.com/Christopher_roa"
                    target="_blank"
                  >
                    @christopher_roa
                  </a>
                </li>
                <li css={{ marginBottom: 4 }}>
                  <a
                    css={{ color: "inherit", textDecoration: "none" }}
                    href="https://twitter.com/yummta"
                    target="_blank"
                  >
                    @yummta
                  </a>
                </li>
              </ul>
              <img src={codeable} width="76" alt="operator" />
            </div>
          </Dialog>
        </DialogOverlay>,
        $portal
      )}
    </main>
  );
}

export default Home;
