import { Toast, Frame, Page, Button } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useAppState } from "../../hook/useAppState";

export const AppToast = () => {
  const { appState, setToast } = useAppState();
  const { isError, message } = appState.toast;

  const toastMarkup = message ? (
    <Toast
      content={message}
      onDismiss={() => setToast("")}
      error={isError}
      duration={3000}
    />
  ) : null;

  return (
    <div style={{ height: "250px" }}>
      <Frame>{toastMarkup}</Frame>
    </div>
  );
};
