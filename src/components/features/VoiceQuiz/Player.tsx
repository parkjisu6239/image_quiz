import { css } from "@emotion/css";
import React from "react";
import Button from "src/components/UI/atoms/Button";
import useSpeech from "src/hooks/useSpeech";
import { defaultBoxCss, small } from "src/styles";

const playerCss = css`
  width: 500px;
  display: grid;
  gap: 20px;
  margin: 0 auto;
  ${small} {
    padding: 0 10px;
    width: 100%;
    border: none;
  }
`;

const speakCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  textarea {
    width: 100%;
    min-height: 200px;
    resize: none;
    border: 1px solid #bebebe;
    border-radius: 5px;
    margin: 0%;
  }
`;

const optionsCss = css`
  display: flex;
  gap: 10px;
  justify-content: center;
  label {
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }
  ${small} {
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;

const buttonsCss = css`
  padding: 0 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  button {
    width: 100%;
    border-radius: 30px;
  }
`;

const Player = () => {
  const {
    isSpeaking,
    isPause,
    value,
    rate,
    pitch,
    setValue,
    setRate,
    setPitch,
    pauseOrResume,
    cancle,
    speak
  } = useSpeech();

  const onClickPlay = () => {
    cancle();
    speak();
  };

  const resetOption = () => {
    setValue("");
    setRate("1");
    setPitch("1");
  };

  return (
    <section className={playerCss}>
      <label htmlFor="speak" className={speakCss}>텍스트
        <textarea
          onChange={(e) => setValue(e.target.value)}
          name="speak"
          id="speak"
          value={value}
        />
      </label>
      <div className={optionsCss}>
        <label htmlFor="rate">속도
          <input
            onChange={(e) => {
              setRate(e.target.value);
            }}
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            id="rate"
            value={rate}
          />
        </label>
        <label htmlFor="pitch">피치
          <input
            onChange={(e) => {
              setPitch(e.target.value);
            }}
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            id="pitch"
            value={pitch}
          />
        </label>
      </div>
      <div className={buttonsCss}>
        <Button onClick={resetOption}>초기화</Button>
        <Button onClick={onClickPlay}>말하기</Button>
        <Button onClick={cancle} disabled={!isSpeaking}>취소</Button>
        <Button onClick={pauseOrResume}>
          {isPause ? "resume" : "pause"}
        </Button>
      </div>
    </section>
  );
};

export default Player;
