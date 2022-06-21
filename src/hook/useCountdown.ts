import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setBar, setBtn, setTimer } from "../store/countdown/countdown";

export const useCountdown = () => {
  const countdown = useSelector((state: RootState) => state.countdown);
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      countdown,
      setAfterText: (value: string) => {
        dispatch(setBar({ field: "afterText", value }));
      },
      setBeforeText: (value: string) => {
        dispatch(setBar({ field: "beforeText", value }));
      },
      setBgOnHover: (value: string) => {
        dispatch(setBar({ field: "backgroundOnHover", value }));
      },
      setTextColorOnHover: (value: string) => {
        dispatch(setBar({ field: "textColorOnHover", value }));
      },
      setFontSize: (value: number) => {
        console.log(value);
        dispatch(setBar({ field: "fontSize", value }));
      },
      setPadding: (value: number) => {
        dispatch(setBar({ field: "padding", value }));
      },
      setBtnText: (value: string) => {
        dispatch(setBtn({ field: "content", value }));
      },
      setBgBtn: (value: string) => {
        dispatch(setBtn({ field: "background", value }));
      },
      setTextColorBtn: (value: string) => {
        dispatch(setBtn({ field: "textColor", value }));
      },
      setBgBtnOnHover: (value: string) => {
        dispatch(setBtn({ field: "backgroundOnHover", value }));
      },
      setTextColorBtnOnHover: (value: string) => {
        dispatch(setBtn({ field: "textColorOnHover", value }));
      },
      setFontSizeBtn: (value: string) => {
        dispatch(setBtn({ field: "fontSize", value }));
      },
      setPaddingBtn: (value: string) => {
        dispatch(setBtn({ field: "padding", value }));
      },
      setBorderRadiusBtn: (value: string) => {
        dispatch(setBtn({ field: "borderRadius", value }));
      },

      setStartTime: (value: number) => {
        dispatch(setTimer({ field: "startTime", value }));
      },
      setEndTime: (value: number) => {
        dispatch(setTimer({ field: "endTime", value }));
      },

      //color
      setTextColor: (value: string) => {
        dispatch(setBar({ field: "textColor", value }));
      },
      setBackground: (value: string) => {
        dispatch(setBar({ field: "background", value }));
      },

      setTextColorTimer: (value: string) => {
        dispatch(setTimer({ field: "textColor", value }));
      },
      setBackgroundTimer: (value: string) => {
        dispatch(setTimer({ field: "background", value }));
      },

      //behavior:

      toggleEnableExternalLink: () => {
        dispatch(
          setBar({
            field: "enalbeExternalLink",
            value: !countdown.bar.enalbeExternalLink,
          })
        );
      },
      toggleEnableClose: () => {
        dispatch(
          setBar({
            field: "enableClose",
            value: !countdown.bar.enableClose,
          })
        );
      },
      setExternalLink: (value: string) => {
        dispatch(setBar({ field: "externalLink", value }));
      },

      toggleEnableButton: () => {
        dispatch(
          setBtn({
            field: "enable",
            value: !countdown.btn.enable,
          })
        );
      },
    }),
    [countdown]
  );
};
