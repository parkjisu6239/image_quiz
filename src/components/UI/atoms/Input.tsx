import React from "react";
import { css } from "@emotion/css";

const inputCss = (width: string) => css`
  width: ${width};
  padding: 7px 10px;
  border: 1px solid #bebebe;
  border-radius: 5px;
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  height?: "SMALL" | "MEDIUM" | "LARGE";
  width?: string;
}

const Input = ({ height = "MEDIUM", width = "100px", ...props }: Props) => (
  <input
    className={inputCss(width)}
    {...props}
  />
);

export default Input;
