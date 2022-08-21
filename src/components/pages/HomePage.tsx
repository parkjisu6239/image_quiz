import React from "react";
import { css } from "@emotion/css";
import type { Quiz, Option, Step } from "src/types";
import { csvToJSON } from "src/utils/data";
import Setting from "src/components/templates/Setting";
import Loading from "src/components/templates/Loading";
import Game from "src/components/templates/Game";
import { stuffle } from "src/utils/misc";
import Guide from "src/components/templates/Guide";

const homeCss = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

function HomePage() {
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
        timeLimit: time
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
    <article className={homeCss}>
      {renderContent()}
    </article>
  );
}

export default HomePage;
