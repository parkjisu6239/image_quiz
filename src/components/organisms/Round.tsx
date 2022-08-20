import React from "react";
import GameImage from "src/components/molecules/GameImage";
import RoundController from "src/components/molecules/RoundController";
import useCountdown from "src/hooks/useCountdown";

interface Props {
  round: number;
  image: string;
  answer: string;
  timeLimit: number;
}

const Round = ({
  round, image, answer, timeLimit
}: Props) => {
  const {
    countdownTime,
    pause,
    togglePause
  } = useCountdown(timeLimit, round);
  const [isAnsShow, setIsAnsShow] = React.useState(false);
  const countdownEnd = countdownTime === 0;
  const isAnswerVisible = countdownEnd && isAnsShow;

  const showAnsButton = {
    disabled: !countdownEnd,
    onClick: () => setIsAnsShow((prev) => !prev),
    text: isAnsShow ? "정답 숨기기" : "정답 보기"
  };

  const pauseButton = {
    disabled: countdownEnd,
    onClick: togglePause,
    text: pause ? "resume" : "pause"
  };

  return (
    <div>
      <GameImage
        image={image}
        alt={`quiz-${round}`}
        pause={pause}
      />
      <span>{countdownTime}</span>
      {isAnswerVisible && <span>{answer}</span>}
      <RoundController
        showAnsButton={showAnsButton}
        pauseButton={pauseButton}
      />
    </div>
  );
};

export default Round;
