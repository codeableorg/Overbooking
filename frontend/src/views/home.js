/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { TitleView, buttonStyles } from "../components/ui";

function Home() {
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
      <svg
        css={{ position: "absolute", top: "1.65%", left: "45.33%" }}
        width="102"
        height="47"
        viewBox="0 0 102 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M93.5 0H34C29.308 0 25.5 3.82836 25.5 8.54545C25.5 13.2625 29.308 17.0909 34 17.0909H42.5V17.1037C45.9552 17.1806 48.7433 20.0092 48.7433 23.5C48.7433 26.9951 45.9595 29.8236 42.5 29.8963V29.9091H8.5C3.808 29.9091 0 33.7375 0 38.4545C0 43.1716 3.808 47 8.5 47H72.25C76.942 47 80.75 43.1716 80.75 38.4545C80.75 33.7375 76.942 29.9091 72.25 29.9091C68.731 29.9091 65.875 27.0378 65.875 23.5C65.875 19.9622 68.731 17.0909 72.25 17.0909H93.5C98.192 17.0909 102 13.2625 102 8.54545C102 3.82836 98.192 0 93.5 0Z"
          fill="white"
        />
      </svg>
      <svg css={{ position: "absolute", top: "18.14%", right: "80.27%" }} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10C22 9.1579 21.23 8.42105 20.35 8.42105L14.3 8.42105L8.8 0L6.6 0L9.35 8.42105L3.3 8.42105L1.65 6.31579H0L1.1 10L0 13.6842H1.65L3.3 11.5789L9.35 11.5789L6.6 20H8.8L14.3 11.5789L20.35 11.5789C21.23 11.5789 22 10.8421 22 10Z" fill="white"/>
      </svg>
      <svg
        css={{ position: "absolute", top: "42.88%", right: "82.2%" }}
        width="66"
        height="47"
        viewBox="0 0 66 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M-27.5 47L32 47C36.692 47 40.5 43.1716 40.5 38.4545C40.5 33.7375 36.692 29.9091 32 29.9091L23.5 29.9091L23.5 29.8963C20.0448 29.8194 17.2567 26.9908 17.2567 23.5C17.2567 20.0049 20.0405 17.1764 23.5 17.1037L23.5 17.0909L57.5 17.0909C62.192 17.0909 66 13.2625 66 8.54545C66 3.82836 62.192 -3.32906e-07 57.5 -7.43094e-07L-6.25 -6.3163e-06C-10.942 -6.72648e-06 -14.75 3.82835 -14.75 8.54545C-14.75 13.2625 -10.942 17.0909 -6.25 17.0909C-2.731 17.0909 0.125002 19.9622 0.125002 23.5C0.125002 27.0378 -2.731 29.9091 -6.25 29.9091L-27.5 29.9091C-32.192 29.9091 -36 33.7374 -36 38.4545C-36 43.1716 -32.192 47 -27.5 47Z"
          fill="white"
        />
      </svg>
      <svg
        css={{ position: "absolute", top: "16.04%", left: "79.73%" }}
        width="76"
        height="89"
        viewBox="0 0 76 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M76 0H21.28C16.5814 0 12.768 3.79733 12.768 8.47619C12.768 13.155 16.5814 16.9524 21.28 16.9524H46.816C50.34 16.9524 53.2 19.7961 53.2 23.3095C53.2 26.8187 50.34 29.6667 46.816 29.6667H40.432C34.5545 29.6667 29.792 34.4091 29.792 40.2619C29.792 46.1147 34.5545 50.8571 40.432 50.8571H59.584C63.108 50.8571 65.968 53.7051 65.968 57.2143C65.968 60.7234 63.108 63.5714 59.584 63.5714H12.768C5.71581 63.5714 0 69.2674 0 76.2857C0 83.3082 5.71581 89 12.768 89H76V0Z"
          fill="white"
        />
      </svg>
      <div css={{ paddingTop: 168 }}>
        <TitleView
          styles={{
            color: "white",
            fontSize: 37,
            fontWeight: "bold"
          }}
        >
          <h1>OVERBOOKING GAME</h1>
        </TitleView>
        <Link
          to="/instructions"
          css={{
            ...buttonStyles,
            background: "white",
            margin: "0 auto",
            marginTop: 135,
            color: "linear-gradient(180deg, #01A4FE 0%, #0047FF 100%)"
          }}
        >
          NEW GAME
        </Link>

        <Link
          to="/ranking"
          css={{ ...buttonStyles, margin: "0 auto", marginTop: 24 }}
        >
          Leaderboard
        </Link>
      </div>
    </main>
  );
}

export default Home;
