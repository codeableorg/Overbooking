/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import RankingItem from "./../components/ranking-item";
import { TitleView, ColumnEvenly } from "../components/ui";
import { useLastGame } from "./../selectors";

import Header from "../components/header";

function Ranking({ id }) {
  const [ranking, setRanking] = React.useState([]);
  const [outOfRank, setOutOfRank] = React.useState(null);
  const factorColor = (95 / (ranking.length - 1)).toFixed();
  const lastGame = useLastGame();
  console.log(lastGame);

  React.useEffect(() => {
    async function getRanking() {
      const dataRanking = await fetch("http://localhost:4000/api/ranking").then(
        response => response.json()
      );
      if (dataRanking.every(e => e.user.id !== id) && id) setOutOfRank(true);
      setRanking(dataRanking);
    }
    getRanking();
  }, [id]);

  return (
    <>
      <ColumnEvenly styles={{ alignItems: "stretch" }}>
        <Header direction={true} />
        <div>
          <TitleView>
            <h1>Your Score</h1>
          </TitleView>
          {outOfRank && <RankingItem index={"none"} user={lastGame} />}
        </div>
        <div>
          <TitleView>
            <h1>Leaderboard</h1>
          </TitleView>
          <div>
            {ranking.map((user, i) => (
              <RankingItem
                resalt={user.user.id === id ? true : false}
                key={i}
                factorColor={factorColor}
                index={i}
                user={user}
              />
            ))}
          </div>
        </div>
      </ColumnEvenly>
    </>
  );
}

export default Ranking;
