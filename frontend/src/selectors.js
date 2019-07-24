import { useSelector, shallowEqual } from "react-redux";

function useGames() {
  return useSelector(state => state.games, shallowEqual);
}

function useCurrentGame() {
  return useSelector(state => state.currentGame, shallowEqual);
}

function useGame(param) {
  return useSelector(state => state.games[param], shallowEqual);
}

export { useGames, useCurrentGame, useGame };
