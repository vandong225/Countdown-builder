import { Card, Tabs } from "@shopify/polaris";
import { TabDescriptor } from "@shopify/polaris/build/ts/latest/src/components/Tabs/types";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 2rem;
`;

type TProps = {
  tabSelected: number;
  handleTabChange: (index: number) => void;
  tabs: TabDescriptor[];
};

export const HorizontalTabs: React.FC<TProps> = ({
  handleTabChange,
  tabSelected,
  tabs,
}) => {
  return (
    <Div>
      <Card>
        <Tabs
          tabs={tabs}
          selected={tabSelected}
          onSelect={handleTabChange}
        ></Tabs>
      </Card>
    </Div>
  );
};
