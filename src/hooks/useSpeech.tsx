import React from "react";

const useSpeech = () => {
  const synth = window.speechSynthesis;
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [isPause, setIsPause] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [rate, setRate] = React.useState("1");
  const [pitch, setPitch] = React.useState("1");

  const resume = () => {
    setIsPause(false);
    synth.resume();
  };

  const pause = () => {
    setIsPause(true);
    synth.pause();
  };

  const pauseOrResume = () => {
    if (synth.paused) {
      resume();
    } else {
      pause();
    }
  };

  const cancle = () => {
    if (synth.speaking) {
      synth.cancel();
    }
  };

  const speak = () => {
    const utterThis = new SpeechSynthesisUtterance(value);
    utterThis.rate = Number(rate);
    utterThis.pitch = Number(pitch);
    utterThis.onstart = (ev: SpeechSynthesisEvent) => {
      setIsSpeaking(true);
    };
    utterThis.onend = (ev: SpeechSynthesisEvent) => {
      setIsSpeaking(false);
    };
    synth.speak(utterThis);
  };

  return {
    isSpeaking,
    isPause,
    value,
    rate,
    pitch,
    setValue,
    setRate,
    setPitch,
    resume,
    pause,
    pauseOrResume,
    cancle,
    speak
  };
};

export default useSpeech;
