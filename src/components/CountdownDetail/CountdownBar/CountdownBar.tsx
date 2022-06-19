import { Layout } from "@shopify/polaris";
import { BarBehavior } from "./BarBehavior";
import { BarColor } from "./BarColor";
import { BarContent } from "./BarContent";

type TProps = {};

export const CountdownBar: React.FC<TProps> = () => {
  return (
    <Layout>
      <Layout.Section>
        <BarContent />
        <BarColor />
        <BarBehavior />
      </Layout.Section>
    </Layout>
  );
};
