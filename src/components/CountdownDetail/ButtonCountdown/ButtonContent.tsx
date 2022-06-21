import { Card, FormLayout, TextField } from "@shopify/polaris";
import { useCountdown } from "../../../hook/useCountdown";

type TProps = {};

export const ButtonContent: React.FC<TProps> = () => {
  const {
    countdown,
    setBtnText,
    setPaddingBtn,
    setBorderRadiusBtn,
    setFontSizeBtn,
  } = useCountdown();
  const { btn } = countdown;
  const { content, padding, borderRadius, fontSize } = btn;
  return (
    <Card title="Text Content">
      <Card.Section subdued>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Button content"
              onChange={setBtnText}
              value={content}
              autoComplete=""
              maxLength={16}
            />
            <TextField
              label="padding:"
              onChange={setPaddingBtn}
              value={padding}
              autoComplete=""
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <TextField
              label="Text font size:"
              onChange={setFontSizeBtn}
              value={fontSize.toString()}
              autoComplete=""
              step={1}
              type="number"
              prefix="px"
            />
            <TextField
              label="Border radius:"
              onChange={setBorderRadiusBtn}
              value={borderRadius}
              autoComplete=""
            />
          </FormLayout.Group>
        </FormLayout>
      </Card.Section>
    </Card>
  );
};
