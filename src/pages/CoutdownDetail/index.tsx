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
import SaveBar from "../../components/Bar/SaveBar";
import { CountdownContent } from "../../components/CountdownDetail/Content/CountdownContent";
import { CountdownStyles } from "../../components/CountdownDetail/CountdownStyles/CountdownStyles";

import styled from "styled-components";

const DivBottom = styled.div`
  margin-top: 5rem;
`;

const tabs = [
  {
    id: "all-customers-1",
    content: "Styles",
    accessibilityLabel: "All customers",
    panelID: "all-customers-content-1",
  },
  {
    id: "content-1",
    content: "Content",
    panelID: "content-content-1",
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
          <Card>Preview</Card>
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
          {selected === 0 && <CountdownStyles />}
          {selected === 1 && <CountdownContent />}
        </Layout.Section>
      </Layout>
      {/* <Layout>
        <SaveBar />
      </Layout> */}
      <DivBottom />
    </Page>
  );
}
