import React from "react";
import { css } from "@emotion/css";

const imageWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 600px;
  overflow: hidden;
  > * {
    width: 100%;
  height: 100%;
  }
`;

const pauseImage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
`;

const gameImage = css`
  object-fit: contain;
`;

interface Props {
  image: string;
  alt: string;
  pause: boolean;
}

const GameImage = ({ image, alt, pause }: Props) => (
  <div className={imageWrapper}>
    {pause ? <div className={pauseImage}>pause</div> : (
      <img
        className={gameImage}
        src={image}
        alt={alt}
      />
    )}
  </div>
);

export default GameImage;
