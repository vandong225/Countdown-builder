import {
  Card,
  Checkbox,
  FormLayout,
  Select,
  TextField,
} from "@shopify/polaris";

type TProps = {};

export const ButtonBehavior: React.FC<TProps> = () => {
  return (
    <Card title="Behavior">
      <Card.Section subdued={true}>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="External link"
              onChange={console.log}
              value="External link"
              autoComplete=""
              helpText="Dash to the provided link address after clicking the bar"
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <Select
              label="Button Position"
              onChange={console.log}
              value="messageAfter"
              helpText=""
              options={[
                { label: "Before timer", value: "", title: "123" },
                { label: "After timer", value: "", title: "123" },
              ]}
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
