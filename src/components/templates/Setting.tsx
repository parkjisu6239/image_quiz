import React from "react";
import type { Option } from "src/types";
import { css } from "@emotion/css";

const formCss = css`
  display: grid;
  padding: 20px 30px;
  border: 1px solid #eeeccc;
`;
interface Props {
  file: File | null;
  setFile: (file: File | null) => void;
  gameOption: Option;
  setTimeLimit: (time: number) => void;
  setRandom: (random: boolean) => void;
  moveToNextStep: () => void;
}

const timerOption = [3, 4, 5, 6, 7, 8, 9, 10];

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
    <form className={formCss}>
      <label htmlFor="file">파일 업로드(only .csv)
        <input
          id="file"
          type="file"
          name="file"
          accept=".csv,.xml"
          onChange={handleFileInput}
        />
      </label>
      <label htmlFor="timer">타이머 시간 선택:
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
            >{timer}초
            </option>
          ))}
        </select>
      </label>
      <fieldset>
        <legend>순서 섞기</legend>
        <div>
          <label htmlFor="random">섞는다
            <input
              type="radio"
              id="random"
              name="random"
              value="true"
              checked
              onChange={(e) => setRandom(true)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="linear">안 섞는다
            <input
              type="radio"
              id="linear"
              name="random"
              value="false"
              onChange={(e) => setRandom(false)}
            />
          </label>
        </div>
      </fieldset>
      <button disabled={!file} onClick={moveToNextStep}>완료</button>
    </form>
  );
};

export default Setting;
