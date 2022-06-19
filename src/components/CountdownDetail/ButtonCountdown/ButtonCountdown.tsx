import { Layout } from "@shopify/polaris";
import { ButtonActive } from "./ButtonActive";
import { ButtonBehavior } from "./ButtonBehavior";
import { ButtonColor } from "./ButtonColor";
import { ButtonContent } from "./ButtonContent";

type TProps = {};

export const ButtonCountdown: React.FC<TProps> = () => {
  return (
    <Layout>
      <Layout.Section>
        <ButtonActive />
        <ButtonContent />
        <ButtonColor />
        <ButtonBehavior />
      </Layout.Section>
    </Layout>
  );
};
