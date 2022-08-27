import { css } from "@emotion/css";
import React from "react";
import Timer from "src/components/UI/atoms/Timer";
import GameImage from "src/components/UI/molecules/GameImage";
import RoundController from "src/components/UI/molecules/RoundController";
import useCountdown from "src/hooks/useCountdown";
import { defaultBoxCss, small } from "src/styles";
import timeoutSound from "src/assets/timeout.wav";

const roundCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 30px;
  ${small} {
    width: 100%;
    padding: 10px 0;
  }
`;

const roundText = css`
  margin: 0;
`;

const answerCss = css`
  width: 100%;
  font-size: large;
  ${defaultBoxCss}
`;

interface Props {
  round: number;
  totalQuiz: number;
  image: string;
  answer: string;
  timeLimit: number;
  moveToNextRound: () => void;
}

const Round = ({
  round,
  totalQuiz,
  image,
  answer,
  timeLimit,
  moveToNextRound
}: Props) => {
  const audio = new Audio(timeoutSound);
  const onCountdownEnds = () => {
    audio.play();
  };
  const {
    countdownTime,
    pause,
    togglePause
  } = useCountdown(timeLimit, round, onCountdownEnds);
  const [isAnsShow, setIsAnsShow] = React.useState(false);
  const countdownEnd = countdownTime === 0;
  const isAnswerVisible = countdownEnd && isAnsShow;

  React.useEffect(() => {
    const keyboardHandler = (ev: KeyboardEvent) => {
      ev.preventDefault();
      if (ev.code === "Space" && !countdownEnd && timeLimit > 0) {
        togglePause();
      } else if (ev.code === "KeyA" && countdownEnd) {
        setIsAnsShow((prev) => !prev);
      } else if (ev.code === "KeyD") {
        moveToNextRound();
      }
    };

    window.addEventListener("keyup", keyboardHandler);

    return () => {
      window.removeEventListener("keyup", keyboardHandler);
    };
  }, [togglePause, countdownEnd, moveToNextRound, timeLimit]);

  React.useEffect(() => {
    setIsAnsShow(false);
  }, [round]);

  const showAnsButton = {
    disabled: !countdownEnd,
    onClick: () => setIsAnsShow((prev) => !prev),
    text: isAnsShow ? "정답 숨기기" : "정답 보기",
    theme: "green"
  };

  const pauseButton = {
    disabled: countdownEnd,
    onClick: togglePause,
    text: pause ? "resume" : "pause",
    theme: "red"
  };

  const nextButton = {
    disabled: false,
    onClick: moveToNextRound,
    text: "다음"
  };

  const buttons = timeLimit ? [
    showAnsButton,
    pauseButton,
    nextButton
  ] : [showAnsButton, nextButton];

  return (
    <div className={roundCss}>
      <h3 className={roundText}>{round + 1} / {totalQuiz}</h3>
      {timeLimit > 0
        && (
        <Timer countdown={countdownTime} />
        )}
      <GameImage
        image={image}
        alt={`quiz-${round}`}
        pause={pause}
      />
      <span className={answerCss}>{isAnswerVisible ? answer : "🧐"}</span>
      <RoundController
        buttons={buttons}
      />
    </div>
  );
};

export default Round;
