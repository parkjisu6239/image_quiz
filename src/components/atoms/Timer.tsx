import { css, keyframes } from "@emotion/css";
import React from "react";

const timer = css`
  position: absolute;
  top: 4%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid #df6b30;
  font-size: 55px;
  font-family: 'Silkscreen', cursive;
  background-color: white;

  span {
    padding-bottom: 4px;
  }
`;

interface Props {
  countdown: number;
}

const Timer = ({ countdown }: Props) => (
  <div className={timer}>
    <span>{countdown }</span>
  </div>
);

export default Timer;
