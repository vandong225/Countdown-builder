import {
  Card,
  FormLayout,
  TextField,
} from "@shopify/polaris";

type TProps = {};

export const TextContentCountdown: React.FC<TProps> = () => {
  return (
    <Card title="Text Content">
      <Card.Section subdued>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Message before timer:"
              onChange={console.log}
              value="messageBefore"
              autoComplete=""
            />
            <TextField
              label="Message afer timer:"
              onChange={console.log}
              value="messageAfter"
              autoComplete=""
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <TextField
              label="Message top timer:"
              onChange={console.log}
              value="messageBefore"
              autoComplete=""
            />
            <TextField
              label="Message bottom timer:"
              onChange={console.log}
              value="messageAfter"
              autoComplete=""
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
