import React from "react";
import { preloadImage } from "src/utils/data";
import type { Quiz } from "src/types";

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
    <div>
      {isLoading
        ? <span>이미지 로딩중</span>
        : <button onClick={moveToNextStep}>게임 시작하기</button>}
    </div>
  );
};

export default Loading;
