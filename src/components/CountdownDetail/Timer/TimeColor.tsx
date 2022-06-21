import { Card } from "@shopify/polaris";
import ColorPicker from "../../ColorPicker/ColorPicker";
import styled from "styled-components";
import { useCountdown } from "../../../hook/useCountdown";

type TProps = {};
const FlexDiv = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const TimerColor: React.FC<TProps> = () => {
  const { countdown, setTextColorTimer, setBackgroundTimer } = useCountdown();

  const { textColor, background } = countdown.timer;
  return (
    <Card title="Color">
      <FlexDiv>
        <Card.Section subdued={true}>
          <ColorPicker
            color={background}
            onColorChange={setBackgroundTimer}
            title="Background Color"
          />
          <ColorPicker
            color={textColor}
            onColorChange={setTextColorTimer}
            title="Text Color"
          />
        </Card.Section>
      </FlexDiv>
    </Card>
  );
};
