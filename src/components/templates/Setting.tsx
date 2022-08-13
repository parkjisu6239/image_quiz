import React from "react";
import type { Option } from "src/types";

interface Props {
  file: File | null;
  setFile: (file: File | null) => void;
  gameOption: Option;
  setTimeLimit: (time: number) => void;
  setRandom: (random: boolean) => void;
  moveToNextStep: () => void;
}

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
    <div>
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
          <option value="3">3초</option>
          <option value="4">4초</option>
          <option value="5">5초</option>
          <option value="6">6초</option>
          <option value="7">7초</option>
          <option value="8">8초</option>
          <option value="9">9초</option>
          <option value="10">10초</option>
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
    </div>
  );
};

export default Setting;
