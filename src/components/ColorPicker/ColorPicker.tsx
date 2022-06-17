import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { SketchPicker, ColorResult } from "react-color";
import { TextContainer, TextField } from "@shopify/polaris";

type TProps = {
  color: string;
  onColorChange: (color: string) => void;
  title: string;
};

const ColorPicker: React.FC<TProps> = ({ color, onColorChange, title }) => {
  const [isOpen, setOpen] = useState(false);
  const PreviewColorDiv = styled.div`
    width: 36px;
    height: 36px;
    background: ${color};
    margin-right: 5px;
    border-radius: 20%;
  `;
  const SwatchDiv = styled.div`
    padding: 5px;
    background: #fff;
    border-radius: 1px;
    boxshadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: inline-flex;
    cursor: pointer;
  `;
  const PopoverDiv = styled.div`
    position: absolute;
    z-index: 99;
  `;
  const CoverDiv = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  `;

  const handleClick = useCallback(() => {
    setOpen(!isOpen);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleChangeColor = useCallback((color: ColorResult) => {
    onColorChange(color.hex);
  }, []);

  return (
    <div>
      <TextContainer>
        <p>{title}</p>
      </TextContainer>
      <SwatchDiv onClick={handleClick}>
        <PreviewColorDiv />
        <TextField
          value={color}
          onChange={onColorChange}
          label=""
          autoComplete=""
        />
      </SwatchDiv>
      {isOpen ? (
        <PopoverDiv>
          <CoverDiv onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChangeColor} />
        </PopoverDiv>
      ) : null}
    </div>
  );
};

export default ColorPicker;
