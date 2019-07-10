import { useSelector, shallowEqual } from "react-redux";

function useRound() {
  return useSelector(state => state, shallowEqual);
}

export { useRound };
