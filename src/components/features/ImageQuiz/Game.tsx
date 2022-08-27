import React from "react";
import { css } from "@emotion/css";

import gameOverImage from "src/assets/game-over.gif";
import type { Quiz, Option } from "src/types";

import Button from "src/components/UI/atoms/Button";
import Round from "./Round";

const gameCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const gameover = css`
  display: grid;
  gap: 30px;
  h1 {
    font-family: 'Silkscreen', cursive;
    font-size: 50px;
    margin-bottom: 0;
  }
`;
interface Props {
  quizList: Quiz[]
  moveToNextStep: () => void;
  gameOption: Option;
}

const Game = ({ quizList, moveToNextStep, gameOption }:Props) => {
  const [round, setRound] = React.useState(0);
  const [isEnd, setIsEnd] = React.useState(false);
  const totalQuiz = quizList.length;

  if (!totalQuiz) {
    return <div>문제 없음</div>;
  }

  if (isEnd) {
    return (
      <section className={gameover}>
        <h1>Game Over</h1>
        <img src={gameOverImage} alt="game over" width="100%" />
        <Button onClick={moveToNextStep}>처음으로</Button>
      </section>
    );
  }

  const moveToNextRound = () => {
    if (round + 1 < totalQuiz) {
      setRound((prev) => prev + 1);
    } else {
      setIsEnd(true);
    }
  };

  return (
    <section className={gameCss}>
      <Round
        round={round}
        totalQuiz={totalQuiz}
        image={quizList[round].image}
        answer={quizList[round].answer}
        timeLimit={gameOption.timeLimit}
        moveToNextRound={moveToNextRound}
      />
    </section>
  );
};

export default Game;
