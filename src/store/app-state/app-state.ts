import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  isLoading: boolean;
  toast: {
    message: string;
    isError: boolean;
  };
}

const initialState: IAppState = {
  isLoading: true,
  toast: {
    isError: false,
    message: "",
  },
};

export const appStateSlice = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    turnOnLoading: (state) => {
      state.isLoading = true;
    },
    turnOffLoading: (state) => {
      state.isLoading = false;
    },
    setToast: (
      state,
      action: PayloadAction<{ message: string; isError?: boolean }>
    ) => {
      state.toast.message = action.payload.message;
      state.toast.isError = !!action.payload.isError;
    },
  },
});

// Action creators are generated for each case reducer function
export const { turnOffLoading, turnOnLoading, setToast } =
  appStateSlice.actions;

export default appStateSlice.reducer;
