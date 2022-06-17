import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  turnOffLoading,
  turnOnLoading,
  setToast,
} from "../store/app-state/app-state";

export const useAppState = () => {
  const appState = useSelector((state: RootState) => state.appState);
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      appState,
      turnOffLoading: () => {
        dispatch(turnOffLoading());
      },
      turnOnLoading: () => {
        dispatch(turnOnLoading());
      },
      setToast: (message: string, isError = false) => {
        dispatch(setToast({ message, isError }));
      },
    }),
    [appState]
  );
};
