import { Card, FormLayout, TextField } from "@shopify/polaris";
import { useCountdown } from "../../../hook/useCountdown";

type TProps = {};

export const BarContent: React.FC<TProps> = () => {
  const {
    countdown,
    setAfterText,
    setBeforeText,
    setFontSize,
    setPadding,
  } = useCountdown();

  const { afterText, beforeText, fontSize, padding } = countdown.bar;
  return (
    <Card title="Text Content">
      <Card.Section subdued>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Message before timer:"
              onChange={setBeforeText}
              value={beforeText}
              autoComplete=""
            />
            <TextField
              label="Message afer timer:"
              onChange={setAfterText}
              value={afterText}
              autoComplete=""
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <TextField
              label="Text font size:"
              onChange={(value) => setFontSize(+value)}
              value={`${fontSize}`}
              autoComplete=""
              step={1}
              type="number"
              prefix="px"
            />
            <TextField
              label="Bar padding:"
              onChange={(value) => setPadding(+value)}
              value={`${padding}`}
              autoComplete=""
              type="text"
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
