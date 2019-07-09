import React from "react";
import { useDispatch } from "react-redux";

import { reset, addCriticalRatio, addOverbookingNumber } from "./actions";

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

export function useAddOverbookingNumber() {
  const dispatch = useDispatch();
  return React.useCallback(
    overbookingNumber => dispatch(addOverbookingNumber(overbookingNumber)),
    [dispatch]
  );
}
