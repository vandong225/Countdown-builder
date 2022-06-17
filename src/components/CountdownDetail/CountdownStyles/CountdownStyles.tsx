import { Layout } from "@shopify/polaris";
import { ColorConfig } from "./ColorConfig";
import { SizeConfig } from "./SizeConfig";

type TProps = {};

export const CountdownStyles: React.FC<TProps> = () => {
  return (
    <Layout>
      <Layout.Section>
        <ColorConfig />
        <SizeConfig />
      </Layout.Section>
    </Layout>
  );
};
