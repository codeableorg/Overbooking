import React from "react";
import { useDispatch } from "react-redux";

import {
  reset,
  addCriticalRatio,
  addOverbookingNumber,
  addMoneyLeft,
  suggestOverbookingNumber,
  setTotalRevenue,
  setCurrentGame,
  submitScore,
  addNetRevenue,
  addFeedback,
  addLastGameComplete
} from "./actions";

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useAddLastGameComplete() {
  const dispatch = useDispatch();
  return React.useCallback(
    lastGame => dispatch(addLastGameComplete(lastGame)),
    [dispatch]
  );
}

export function useAddCriticalRatio() {
  const dispatch = useDispatch();
  return React.useCallback(
    criticalRatio => dispatch(addCriticalRatio(criticalRatio)),
    [dispatch]
  );
}

export function useAddMoneyLeft() {
  const dispatch = useDispatch();
  return React.useCallback(money => dispatch(addMoneyLeft(money)), [dispatch]);
}

export function useSetCurrentGame() {
  const dispatch = useDispatch();
  return React.useCallback(
    currentGame => dispatch(setCurrentGame(currentGame)),
    [dispatch]
  );
}

export function useSuggestOverbookingNumber() {
  const dispatch = useDispatch();
  return React.useCallback(
    criticalRatio => dispatch(suggestOverbookingNumber(criticalRatio)),
    [dispatch]
  );
}

export function useAddOverbookingNumber() {
  const dispatch = useDispatch();
  return React.useCallback(
    overbookingNumber => dispatch(addOverbookingNumber(overbookingNumber)),
    [dispatch]
  );
}

export function useAddNetRevenue() {
  const dispatch = useDispatch();
  return React.useCallback(netRevenue => dispatch(addNetRevenue(netRevenue)), [
    dispatch
  ]);
}

export function useAddFeedback() {
  const dispatch = useDispatch();
  return React.useCallback(feedback => dispatch(addFeedback(feedback)), [
    dispatch
  ]);
}
export function useSetTotalRevenue() {
  const dispatch = useDispatch();
  return React.useCallback(
    totalRevenue => dispatch(setTotalRevenue(totalRevenue)),
    [dispatch]
  );
}

export function useSubmitScore() {
  const dispatch = useDispatch();
  return React.useCallback(user => dispatch(submitScore(user)), [dispatch]);
}
