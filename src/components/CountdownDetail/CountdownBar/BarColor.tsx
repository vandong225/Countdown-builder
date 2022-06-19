import { Card } from "@shopify/polaris";
import ColorPicker from "../../ColorPicker/ColorPicker";
import styled from "styled-components";
import { useCountdown } from "../../../hook/useCountdown";

type TProps = {};
const FlexDiv = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const BarColor: React.FC<TProps> = () => {
  const {
    countdown,
    setTextColor,
    setBackground,
    setBgOnHover,
    setTextColorOnHover,
  } = useCountdown();

  const { textColor, background, backgroundOnHover, textColorOnHover } =
    countdown.bar;
  return (
    <Card title="Color">
      <FlexDiv>
        <Card.Section subdued={true}>
          <ColorPicker
            color={background}
            onColorChange={setBackground}
            title="Background Color"
          />
          <ColorPicker
            color={textColor}
            onColorChange={setTextColor}
            title="Text Color"
          />
        </Card.Section>
        <Card.Section subdued={true}>
          <ColorPicker
            color={backgroundOnHover}
            onColorChange={setBgOnHover}
            title="Background Hover"
          />
          <ColorPicker
            color={textColorOnHover}
            onColorChange={setTextColorOnHover}
            title="Text Hover"
          />
        </Card.Section>
      </FlexDiv>
    </Card>
  );
};
