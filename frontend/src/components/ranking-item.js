/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Card, Center } from "../components/ui";
import CurrencyFormat from "react-currency-format";

function RankingItem({ factorColor, index, user, resalt }) {
  const toneColor = 165 - factorColor * index;
  if (index === "none") {
    return (
      <Card
        styles={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          marginBottom: 8,
          height: 60,
          overflow: "hidden",
          background: "rgb(1,165,255)",
          color: "white"
        }}
      >
        <strong
          css={{
            fontSize: 20,
            padding: 16,
            fontWeight: 400,
            marginRight: "auto"
          }}
        >
          {user.name}
        </strong>
        <span
          css={{
            fontSize: 20,
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            padding: 16
          }}
        >
          {user.scores ? (
            <CurrencyFormat
              value={user.scores[0].totalRevenue}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$ "}
            />
          ) : (
            ""
          )}
        </span>
      </Card>
    );
  } else {
    return (
      <Card
        key={index}
        styles={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          marginBottom: 8,
          height: 60,
          overflow: "hidden",
          background: `${resalt ? "rgb(1," + toneColor + ",255)" : "white"}`,
          color: `${resalt ? "white" : "inherit"}`
        }}
      >
        {index !== "none" && (
          <Center
            styles={{
              fontSize: 22,
              padding: 16,
              fontWeight: 700,
              width: 60,
              textAlign: "center",
              boxSizing: "border-box",
              color: "white",
              background: `rgb(1, ${toneColor}, 255)`
            }}
          >
            {index + 1}
          </Center>
        )}

        <strong
          css={{
            fontSize: 20,
            padding: 16,
            fontWeight: 400,
            marginRight: "auto"
          }}
        >
          {user.user.name}
        </strong>
        <span
          css={{
            fontSize: 20,
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            padding: 16
          }}
        >
          <CurrencyFormat
            value={user.totalRevenue}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$ "}
          />
        </span>
      </Card>
    );
  }
}

export default RankingItem;
