import {
  Card,
  Checkbox,
  FormLayout,
  Select,
  TextField,
} from "@shopify/polaris";
import { useCountdown } from "../../../hook/useCountdown";
import { GroupBar } from "../../Bar/GroupBar";

type TProps = {};

export const BarBehavior: React.FC<TProps> = () => {
  const {
    countdown,
    toggleEnableExternalLink,
    setExternalLink,
    toggleEnableClose,
  } = useCountdown();

  const { enalbeExternalLink, externalLink, enableClose } = countdown.bar;
  return (
    <Card title="Behavior">
      <Card.Section subdued={true}>
        <FormLayout>
          <Checkbox
            label="Enable external link"
            onChange={toggleEnableExternalLink}
            checked={enalbeExternalLink}
          />
          {enalbeExternalLink && (
            <GroupBar>
              <TextField
                label="External link"
                onChange={setExternalLink}
                value={externalLink}
                autoComplete=""
                helpText="Dash to the provided link address after clicking the bar"
              />
            </GroupBar>
          )}
          <Checkbox
            label="Enable close"
            onChange={toggleEnableClose}
            checked={enableClose}
          />
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
