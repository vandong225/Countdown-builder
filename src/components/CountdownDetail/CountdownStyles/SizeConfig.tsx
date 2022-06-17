import { Card, FormLayout, TextField } from "@shopify/polaris";

type TProps = {};

export const SizeConfig: React.FC<TProps> = () => {
  return (
    <Card title="Size">
      <Card.Section subdued title="Bar">
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Text font size:"
              onChange={console.log}
              value="12"
              autoComplete=""
              step={1}
              type="number"
              prefix="px"
            />
            <TextField
              label="Bar padding:"
              onChange={console.log}
              value="12"
              autoComplete=""
              step={1}
              type="number"
              prefix="px"
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
      <Card.Section subdued title="Button">
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Button font size:"
              onChange={console.log}
              value="12"
              autoComplete=""
              step={1}
              type="number"
              prefix="px"
            />
            <TextField
              label="Button radius:"
              onChange={console.log}
              value="12"
              autoComplete=""
              step={1}
              type="number"
              prefix="px"
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
