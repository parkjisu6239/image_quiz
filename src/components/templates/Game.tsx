import React from "react";
import type { Quiz, Option } from "src/types";

interface Props {
  quizList: Quiz[] | null
  moveToNextStep: () => void;
  gameOption: Option;
}

const Game = ({ quizList, moveToNextStep, gameOption }:Props) => {
  const totalQuiz = quizList ? quizList.length : 0;
  const [round, setRound] = React.useState(0);
  const [isEnd, setIsEnd] = React.useState(false);

  if (!totalQuiz || !quizList) {
    return <div>오류</div>;
  }

  if (isEnd) {
    return (
      <div>
        끝!
        <button onClick={moveToNextStep}>처음으로</button>
      </div>
    );
  }

  const moveToNextRound = () => {
    if (round + 1 < totalQuiz) {
      setRound((prev) => prev + 1);
    } else {
      setIsEnd(true);
    }
  };

  // TODO
  // 1. Round component
  // 2. Countdown component
  // 3. 출제 순서 랜덤으로 섞기
  // 4. 라운드 시작, 일시정지, 재시작, 정답 보기 Controller component
  // 5. style

  return (
    <div>
      <img src={quizList[round].image} alt={`quiz-${round}`} />
      <button onClick={moveToNextRound}>다음</button>
    </div>
  );
};

export default Game;
