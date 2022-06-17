import {
  Card,
  Checkbox,
  FormLayout,
  Select,
  TextField,
} from "@shopify/polaris";

type TProps = {};

export const BehaviorCountdown: React.FC<TProps> = () => {
  return (
    <Card title="Behavior">
      <Card.Section subdued={true}>
        <FormLayout>
          <FormLayout.Group>
            <Select
              label="Clickable"
              onChange={console.log}
              value="messageAfter"
              helpText=""
              options={[
                { label: "None", value: "", title: "123" },
                { label: "All positions", value: "", title: "123" },
                { label: "Only Button", value: "", title: "123" },
                { label: "Without Button", value: "", title: "123" },
              ]}
            />
            <TextField
              label="External link"
              onChange={console.log}
              value="External link"
              autoComplete=""
              helpText="Dash to the provided link address after clicking the bar"
            />
          </FormLayout.Group>
          <Checkbox
            label="Enable close button"
            onChange={console.log}
            checked={true}
          />
          <Checkbox label="Use button" onChange={console.log} checked={true} />
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
            <TextField
              label="Button content"
              onChange={console.log}
              value="button"
              autoComplete=""
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
