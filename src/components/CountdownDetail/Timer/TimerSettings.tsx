import { Layout } from "@shopify/polaris";
import { TimerColor } from "./TimeColor";
import { TimeSetting } from "./TimeSetting";

type TProps = {};

const TimerSettings: React.FC<TProps> = () => {
  return (
    <Layout>
      <Layout.Section>
        <TimeSetting />
        <TimerColor />
      </Layout.Section>
    </Layout>
  );
};

export default TimerSettings;
