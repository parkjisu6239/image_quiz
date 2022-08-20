import React from "react";

const useCountdown = (
  time: number,
  round: number,
  onCountdownEnd?: () => void
) => {
  const [countdown, setCountdown] = React.useState(time * 1000);
  const [pause, setPause] = React.useState(false);

  const togglePause = () => {
    setPause((prev) => !prev);
  };

  React.useEffect(() => {
    setPause(false);
    setCountdown(time * 1000);
  }, [time, round]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (pause) return;
      setCountdown((prev) => prev - 1000);
    }, 1000);

    if (countdown === 0) {
      onCountdownEnd?.();
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown, time, onCountdownEnd, pause]);

  const countdownTime = countdown / 1000;

  return {
    countdownTime, pause, togglePause
  };
};

export default useCountdown;
