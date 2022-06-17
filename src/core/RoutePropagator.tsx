import { useEffect } from "react";
import {
  useAppBridge,
  RoutePropagator as AppBridgeRouterPropagator,
} from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { useLocation, useNavigate } from "react-router-dom";

export const RoutePropagator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appBridge = useAppBridge();

  /**
   * Subscribe to appBridge changes - captures appBridge urls
   * and sends them to Next.js router. Use useEffect hook to
   * load once when component mounted
   */
  useEffect(() => {
    const unsubscribe = appBridge.subscribe(Redirect.Action.APP, ({ path }) => {
      if (location.pathname !== path) {
        navigate(path);
      }
    });

    return unsubscribe;
  }, [appBridge]);

  return <AppBridgeRouterPropagator location={location} />;
};
