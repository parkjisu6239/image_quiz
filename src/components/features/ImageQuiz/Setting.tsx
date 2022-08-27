import React from "react";
import type { Option } from "src/types";
import { css } from "@emotion/css";
import Button from "src/components/UI/atoms/Button";

const formCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px 30px;
  border: 1px solid #ececec;
  border-radius: 5px;
  justify-content: flex-start;

  > label {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    margin-top: 30px;
    width: 100%;
  }
`;

const orderCss = css`
  display: flex;
`;
interface Props {
  file: File | null;
  setFile: (file: File | null) => void;
  gameOption: Option;
  setTimeLimit: (time: number) => void;
  setRandom: (random: boolean) => void;
  moveToNextStep: () => void;
}

const timerOption = [0, 3, 4, 5, 6, 7, 8, 9, 10];

const Setting = ({
  file,
  setFile,
  gameOption,
  setTimeLimit,
  setRandom,
  moveToNextStep
}: Props) => {
  const handleFileInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
    } else {
      // eslint-disable-next-line no-alert
      alert("선택된 파일이 없습니다.");
    }
  };

  return (
    <fieldset className={formCss}>
      <legend><h3>Game Setting</h3></legend>
      <label htmlFor="file">문제 파일(only .csv)
        <input
          id="file"
          type="file"
          name="file"
          accept=".csv,.xml"
          onChange={handleFileInput}
        />
      </label>
      <label htmlFor="timer">타이머 시간
        <select
          name="timer"
          id="timer"
          value={gameOption.timeLimit}
          onChange={(e) => setTimeLimit(parseInt(e.target.value, 10))}
        >
          {timerOption.map((timer) => (
            <option
              key={timer}
              value={timer}
            >{timer ? `${timer}초` : "타이머 없음"}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="order" className={orderCss}>
        <span>문제 순서</span>
        <div id="order">
          <label htmlFor="random">
            <input
              type="radio"
              id="random"
              name="random"
              value="true"
              checked
              onChange={() => setRandom(true)}
            />
            랜덤
          </label>
        </div>
        <div>
          <label htmlFor="linear">
            <input
              type="radio"
              id="linear"
              name="random"
              value="false"
              onChange={() => setRandom(false)}
            />
            순서대로
          </label>
        </div>
      </label>
      <Button disabled={!file} onClick={moveToNextStep}>완료</Button>
    </fieldset>
  );
};

export default Setting;
