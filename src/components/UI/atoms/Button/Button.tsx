import React from "react";
import { css, cx } from "@emotion/css";
import type { ButtonThemeColor, colorOption } from "./types";
import { themeColor } from "./constants";

const defaultButtonCss = (buttonThemeColor: colorOption) => css`
  min-width: 64px;
  padding: 7px 16px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background-color: ${buttonThemeColor.default};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, 
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, 
    rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border: none;
  font-size: 15px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
  :not(:disabled):hover {
    background-color: ${buttonThemeColor.hover};
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 1px 2px
  }
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeColor;
}

const Button = ({ className, theme = "blue", ...props }: Props) => (
  <button
    {...props}
    className={cx(defaultButtonCss(themeColor[theme]), className)}
  >
    { props.children }
  </button>
);

export default Button;
