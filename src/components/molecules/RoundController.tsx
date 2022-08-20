import React from "react";

type ButtonProps = {
  disabled: boolean;
    onClick: () => void;
    text: string;
}

interface Props {
  showAnsButton: ButtonProps;
  pauseButton: ButtonProps;
}

const RoundController = ({ showAnsButton, pauseButton }: Props) => (
  <div>
    <button
      disabled={showAnsButton.disabled}
      onClick={showAnsButton.onClick}
    >{showAnsButton.text}
    </button>
    <button
      disabled={pauseButton.disabled}
      onClick={pauseButton.onClick}
    >{pauseButton.text}
    </button>
  </div>
);

export default RoundController;
