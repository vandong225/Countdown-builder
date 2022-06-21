import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICountdown,
  IBarCountdown,
  IButtonCountdown,
  ITimerCountdown,
} from "../../../shares/interfaces/countdown";

const initialState: ICountdown = {
  id: 0,
  name: "",
  bar: {
    afterText: "10% off for all orders",
    background: "#FFD9D2",
    beforeText: "Our sale will end",
    enableClose: false,
    externalLink: "",
    fontSize: 16,
    padding: "0px 0xp 0px 0px",
    textColor: "#000",
    enalbeExternalLink: false,
    backgroundOnHover: "#e7a396",
    textColorOnHover: "#fff",
  },
  btn: {
    background: "#FFD9D2",
    borderRadius: "4px",
    enable: true,
    externalLink: "",
    fontSize: 0,
    padding: "0px 6px",
    position: "",
    textColor: "#000",
    content: "Shop now",
    backgroundOnHover: "#333",
    textColorOnHover: "#fff",
  },
  timer: {
    background: "#333",
    textColor: "#fff",
    startTime: Date.now(),
    endTime: Date.now(),
  },
};

export const countdownSlice = createSlice({
  name: "countdown",
  initialState,
  reducers: {
    setBar: (
      state,
      action: PayloadAction<{
        field: keyof IBarCountdown;
        value: string | number | boolean;
      }>
    ) => {
      const { field, value } = action.payload;
      (state.bar[field] as any) = value;
    },
    setBtn: (
      state,
      action: PayloadAction<{
        field: keyof IButtonCountdown;
        value: string | number | boolean;
      }>
    ) => {
      const { field, value } = action.payload;
      (state.btn[field] as any) = value;
    },
    setTimer: (
      state,
      action: PayloadAction<{
        field: keyof ITimerCountdown;
        value: string | number | boolean;
      }>
    ) => {
      const { field, value } = action.payload;
      (state.timer[field] as any) = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBar, setBtn, setTimer } = countdownSlice.actions;

export default countdownSlice.reducer;
