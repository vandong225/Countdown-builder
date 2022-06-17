import { Card } from "@shopify/polaris";
import ColorPicker from "../../ColorPicker/ColorPicker";
import styled from "styled-components";

type TProps = {};

export const ColorConfig: React.FC<TProps> = () => {
  const FlexDiv = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
  `;

  return (
    <Card title="Color">
      <Card.Section subdued={true}>
        <FlexDiv>
          <ColorPicker
            color="#941717"
            onColorChange={console.log}
            title="Background Color"
          />
          <ColorPicker
            color="#941717"
            onColorChange={console.log}
            title="Background Button"
          />
          <ColorPicker
            color="#941717"
            onColorChange={console.log}
            title="Background Timmer"
          />
        </FlexDiv>
        <FlexDiv>
          <ColorPicker
            color="#941717"
            onColorChange={console.log}
            title="Text Color"
          />
          <ColorPicker
            color="#941717"
            onColorChange={console.log}
            title="Text Button Color"
          />
          <ColorPicker
            color="#941717"
            onColorChange={console.log}
            title="Text Timmer Color"
          />
        </FlexDiv>
      </Card.Section>
    </Card>
  );
};
