import { Card } from "@shopify/polaris";
import ColorPicker from "../../ColorPicker/ColorPicker";
import { useCountdown } from "../../../hook/useCountdown";
import styled from "styled-components";

type TProps = {};

const FlexDiv = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const ButtonColor: React.FC<TProps> = () => {
  const { countdown, setBgBtn, setTextColorBtn, setTextColorBtnOnHover, setBgBtnOnHover } = useCountdown();
  const { btn } = countdown;
  const { background, textColor, backgroundOnHover, textColorOnHover } = btn;

  return (
    <Card title="Color">
      <FlexDiv>
        <Card.Section subdued={true}>
          <ColorPicker
            color={background}
            onColorChange={setBgBtn}
            title="Background Button"
          />
          <ColorPicker
            color={textColor}
            onColorChange={setTextColorBtn}
            title="Text Button Color"
          />
        </Card.Section>
        <Card.Section subdued={true}>
          <ColorPicker
            color={backgroundOnHover}
            onColorChange={setBgBtnOnHover}
            title="Background Hover"
          />
          <ColorPicker
            color={textColorOnHover}
            onColorChange={setTextColorBtnOnHover}
            title="Text Hover"
          />
        </Card.Section>
      </FlexDiv>
    </Card>
  );
};
