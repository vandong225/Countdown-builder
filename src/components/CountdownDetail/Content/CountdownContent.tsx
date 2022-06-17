import { Layout } from "@shopify/polaris";
import { BehaviorCountdown } from "./BehaviorCountdown";
import { TextContentCountdown } from "./TextContentCountdown";

type TProps = {};

export const CountdownContent: React.FC<TProps> = () => {
  return (
    <Layout>
      <Layout.Section>
        <TextContentCountdown />
        <BehaviorCountdown />
      </Layout.Section>
    </Layout>
  );
};
