import { css } from "@emotion/css";
import React from "react";
import imageQuizExample from "src/assets/imageQuizExample.png";
import exapleCSV from "src/assets/image_quiz_example_form.csv";
import { defaultBoxCss } from "src/styles";

const guide = css`
  display: grid;
  gap: 2px;
  ${defaultBoxCss}

  p {
    margin: 0px;
  }

  ol {
    text-align: start;
  }
`;

const Guide = () => (
  <fieldset className={guide}>
    <legend><h3>Guide</h3></legend>
    <img src={imageQuizExample} alt="example" />
    <ol>
      <li>문제 파일은 위 사진 형식으로 작성되어야 합니다.</li>
      <li><a href={exapleCSV} download>여기</a>
        를 클릭하면 예제 파일을 다운로드 할 수 있습니다.
      </li>
      <li>맨 위의 헤더 부분(Url, Answer)은 제거하면 안됩니다.</li>
      <li>이미지 url은 구글 이미지등 우클릭시 &quot;이미지 주소 복사&quot; 하여 구할 수 있습니다.</li>
    </ol>
  </fieldset>
);

export default Guide;
