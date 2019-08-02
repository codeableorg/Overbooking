/** @jsx jsx */
import React from "react";
import { jsx, keyframes } from "@emotion/core";
import { Link } from "@reach/router";
import { buttonStyles } from "../components/ui";
import iconPlane from "./../images/icon-plane.svg";
import cloud1 from "./../images/cloud1.svg";
import cloud2 from "./../images/cloud2.svg";
import cloud3 from "./../images/cloud3.svg";
import cloud4 from "./../images/cloud4.svg";
import cloud5 from "./../images/cloud5.svg";
import cloud6 from "./../images/cloud5.svg";

function Home() {
  const titleCss = {
    fontWeight: "bold",
    fontSize: 37,
    color: "white",
    textAlign: "center",
    marginBottom: "1rem"
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
    0% {margin-left: 380px}
    100% {margin-left: -410px}
  `;

  return (
    <main
      css={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: "linear-gradient(180deg, #01A4FE 0%, #0047FF 100%)"
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
            color: "#0176FF"
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
            position: "relative",
            zIndex: 2
          }}
        >
          Leaderboard
        </Link>
      </div>
    </main>
  );
}

export default Home;
