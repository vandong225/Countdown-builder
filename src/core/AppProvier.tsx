import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import {
  Provider as AppBridgeProvider,
  useAppBridge,
} from "@shopify/app-bridge-react";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import { userLoggedInFetch } from "../lib/app-bridge";
import AppLoader from "../components/AppLoader";
import { useAppState } from "../hook/useAppState";
import { Provider } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";
import { RoutePropagator } from "./RoutePropagator";
import { Outlet } from "react-router-dom";
import Link from "./Link";
import { AppToast } from "../components/Toast/AppToast";

const AppInitializer = ({ children }) => {
  const { appState, turnOffLoading } = useAppState();
  // const dispatch = useDispatch();
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        turnOffLoading();
        console.log(appState.isLoading);
      }, 4000);
      resolve(1);
    });
  }, []);

  if (appState.isLoading) return <AppLoader />;

  return <>{children}</>;
};

const MyProvider = ({ children }) => {
  const app = useAppBridge();

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: "include",
      fetch: userLoggedInFetch(app) as WindowOrWorkerGlobalScope["fetch"],
    }),
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppInitializer>{children}</AppInitializer>
      </Provider>
    </ApolloProvider>
  );
};

export default function AppProvider() {
  return (
    <PolarisProvider i18n={translations} linkComponent={Link}>
      <AppBridgeProvider
        config={{
          apiKey: process.env.SHOPIFY_API_KEY,
          host: new URL(location.href).searchParams.get("host"),
          forceRedirect: true,
        }}
      >
        <MyProvider>
          <Outlet />
          <RoutePropagator />
          <AppToast />
        </MyProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  );
}
