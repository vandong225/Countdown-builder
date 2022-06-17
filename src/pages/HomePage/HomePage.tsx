import { Page, Layout } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { HorizontalTabs } from "../../components";
import { HomeTable } from "../../components/HomeTable";
import { useAppState } from "../../hook/useAppState";

const tabs = [
  {
    id: "all-customers-1",
    content: "All",
    accessibilityLabel: "All customers",
    panelID: "all-customers-content-1",
  },
  {
    id: "plans-1",
    content: "Plans",
    panelID: "plans-content-1",
  },
  {
    id: "settings-1",
    content: "Setting",
    panelID: "settings-content-1",
  },
];

export function HomePage() {
  const { setToast } = useAppState();
  useEffect(() => {
    setToast("Welcome to app");
  }, []);
  const [selected, setSelected] = useState(0);

  return (
    <Page fullWidth title="Countdown Builder">
      <Layout>
        <Layout.Section>
          <HorizontalTabs
            tabs={tabs}
            tabSelected={selected}
            handleTabChange={setSelected}
          />
        </Layout.Section>
      </Layout>
      <Layout>
        <Layout.Section>{selected === 0 && <HomeTable />}</Layout.Section>
      </Layout>
    </Page>
  );
}
