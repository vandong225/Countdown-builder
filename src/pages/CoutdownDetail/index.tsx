import {
  Page,
  Layout,
  Button,
  Card,
  TextField,
  FormLayout,
} from "@shopify/polaris";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HorizontalTabs } from "../../components";
import styled from "styled-components";
import { CountdownBar } from "../../components/CountdownDetail/CountdownBar/CountdownBar";
import { ButtonCountdown } from "../../components/CountdownDetail/ButtonCountdown/ButtonCountdown";
import CountdownPreview from "../../components/CountdownPreview/CountdownPreview";
import TimerSettings from "../../components/CountdownDetail/Timer/TimerSettings";

const DivBottom = styled.div`
  margin-top: 5rem;
`;

const tabs = [
  {
    id: "bar-1",
    content: "Countdown Bar",
    accessibilityLabel: "Bar",
    panelID: "bar-content-1",
  },
  {
    id: "button-1",
    content: "Button",
    panelID: "button-content-1",
  },
  {
    id: "timer-1",
    content: "Timer",
    panelID: "timer-content-1",
  },
];

export function CountdownDetail() {
  const { cId } = useParams();

  const [selected, setSelected] = useState(0);
  return (
    <Page
      breadcrumbs={[{ content: "Home", url: "/" }]}
      title="General"
      primaryAction={<Button primary>Save</Button>}
    >
      <FormLayout>
        <TextField
          label="Name"
          onChange={console.log}
          value="countdown name"
          autoComplete=""
        />
      </FormLayout>

      <Layout>
        <Layout.Section>
          <Card>
            <CountdownPreview />
          </Card>
        </Layout.Section>
      </Layout>
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
        <Layout.Section>
          {selected === 0 && <CountdownBar />}
          {selected === 1 && <ButtonCountdown />}
          {selected === 2 && <TimerSettings />}
        </Layout.Section>
      </Layout>
      {/* <Layout>
        <SaveBar />
      </Layout> */}
      <DivBottom />
    </Page>
  );
}
