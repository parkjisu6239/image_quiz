import React from "react";
import { preloadImage } from "src/utils/data";
import type { Quiz } from "src/types";
import Button from "src/components/UI/atoms/Button";
import { css } from "@emotion/css";
import { defaultBoxCss } from "src/styles";

const loadingCss = css`
  display: grid;
  padding: 20px;
  gap: 20px;
  ul {
    text-align: start;
  }

  fieldset {
    ${defaultBoxCss}
  }
`;

interface Props {
  quizList: Quiz[] | null
  moveToNextStep: () => void;
}

const Loading = ({ quizList, moveToNextStep }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (quizList === null) {
      return;
    }

    quizList.forEach((quiz) => {
      preloadImage(quiz.image);
    });
    setIsLoading(false);
  }, [quizList]);

  return (
    <section className={loadingCss}>
      <fieldset>
        <legend><h3>게임 조작</h3></legend>
        <ul>
          <li>게임은 마우스와 키보드로 조작할 수 있습니다.</li>
          <li>라운드를 넘기려면 "다음" 버튼 혹은 "D" 키를 누르면 됩니다.</li>
          <li>타이머를 일시정지 혹은 재개하려면 "pause/resume" 버튼 혹은 "Space"를 누르면 됩니다.</li>
          <li>정답을 보려면 "정답보기" 버튼 혹은 "A"를 누르면 됩니다.</li>
        </ul>
      </fieldset>
      {isLoading
        ? <span>이미지 로딩중</span>
        : <Button onClick={moveToNextStep}>게임 시작하기</Button>}
    </section>
  );
};

export default Loading;
