import React from "react";
import { css } from "@emotion/css";

import type { Quiz, Option, Step } from "src/types";

import Setting from "src/components/features/ImageQuiz/Setting";
import Loading from "src/components/features/ImageQuiz/Loading";
import Game from "src/components/features/ImageQuiz/Game";
import Guide from "src/components/features/ImageQuiz/Guide";

import { csvToJSON } from "src/utils/data";
import { stuffle } from "src/utils/misc";

const imageQuizCss = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

function ImageQuizPage() {
  const [step, setStep] = React.useState<Step>("SETTING");
  const [file, setFile] = React.useState<File | null>(null);
  const [gameOption, setGameOption] = React.useState<Option>(
    { timeLimit: 5, isRandom: true }
  );
  const [quizList, setQuizList] = React.useState<Quiz[] | null>(null);

  const setTimeLimit = (time: number) => {
    setGameOption((prev) => {
      return {
        ...prev,
        timeLimit: time || undefined
      };
    });
  };

  const setRandom = (random: boolean) => {
    setGameOption((prev) => {
      return {
        ...prev,
        isRandom: random
      };
    });
  };

  const moveToNextStep = () => {
    if (step === "SETTING") {
      setStep("LOADING");
    } else if (step === "LOADING") {
      setStep("GAME");
    } else {
      setStep("SETTING");
    }
  };

  React.useEffect(() => {
    if (file == null) {
      return;
    }
    file.text()
      .then((text) => {
        setQuizList(csvToJSON(text));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [file]);

  const renderContent = () => {
    if (step === "SETTING") {
      return (
        <section>
          <Setting
            file={file}
            setFile={setFile}
            gameOption={gameOption}
            setTimeLimit={setTimeLimit}
            setRandom={setRandom}
            moveToNextStep={moveToNextStep}
          />
          <Guide />
        </section>
      );
    }

    if (step === "LOADING") {
      return (
        <Loading
          quizList={quizList}
          moveToNextStep={moveToNextStep}
        />
      );
    }

    if (quizList) {
      return (
        <Game
          quizList={gameOption.isRandom ? stuffle(quizList) : quizList}
          moveToNextStep={moveToNextStep}
          gameOption={gameOption}
        />
      );
    }

    return <div>error</div>;
  };

  return (
    <article className={imageQuizCss}>
      {renderContent()}
    </article>
  );
}

export default ImageQuizPage;
