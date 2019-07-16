import React from "react";
import { useDispatch } from "react-redux";

import {
  reset,
  addCriticalRatio,
  addOverbookingNumber,
  suggestOverbookingNumber,
  setTotalRevenue,
  setCurrentGame,
  submitScore
} from "./actions";

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useAddCriticalRatio() {
  const dispatch = useDispatch();
  return React.useCallback(
    criticalRatio => dispatch(addCriticalRatio(criticalRatio)),
    [dispatch]
  );
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
