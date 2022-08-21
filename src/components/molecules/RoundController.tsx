import React from "react";
import Button from "src/components/atoms/Button";
import { css } from "@emotion/css";
import { defaultBoxCss } from "src/styles";
import type { ButtonThemeColor } from "src/components/atoms/Button/types";

const controller = (cnt: number) => css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${cnt}, 1fr);
  gap: 10px;
  ${defaultBoxCss}
`;

type ButtonProps = {
  disabled: boolean;
  onClick: () => void;
  text: string;
  theme?: ButtonThemeColor;
}

interface Props {
  buttons: ButtonProps[]
}

const RoundController = ({ buttons }: Props) => (
  <div className={controller(buttons.length)}>
    {buttons.map((buttonOption, index) => (
      <Button
        key={index}
        disabled={buttonOption.disabled}
        onClick={buttonOption.onClick}
        theme={buttonOption.theme}
      >{buttonOption.text}
      </Button>
    ))}
  </div>
);

export default RoundController;
