import { Card, Checkbox, FormLayout } from "@shopify/polaris";
import { useCountdown } from "../../../hook/useCountdown";

type TProps = {};

export const ButtonActive: React.FC<TProps> = () => {
  const { countdown, toggleEnableButton } = useCountdown();
  const { btn } = countdown;
  const { enable } = btn;
  return (
    <Card title="Active">
      <Card.Section subdued>
        <FormLayout>
          <Checkbox
            label="Use button"
            onChange={toggleEnableButton}
            checked={enable}
          />
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
