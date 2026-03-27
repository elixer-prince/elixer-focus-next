import usePauseCountdown from "@/app/hooks/timer/usePauseCountdown";
import useStartCountdown from "@/app/hooks/timer/useStartCountdown";
import {
  useRemainingTimeInSeconds,
  useTimerPaused,
} from "@/app/stores/timer/countdown";

const useHandleCountdownState = () => {
  const { startCountdownWithSound } = useStartCountdown();
  const { pauseCountdown } = usePauseCountdown();

  const timerPaused = useTimerPaused();
  const remainingTimeInSeconds = useRemainingTimeInSeconds();

  const isEndingSoon = remainingTimeInSeconds <= 10;

  const handleCountdownState = () => {
    if (timerPaused) return startCountdownWithSound();
    pauseCountdown();
  };

  return { handleCountdownState, isEndingSoon };
};

export default useHandleCountdownState;
