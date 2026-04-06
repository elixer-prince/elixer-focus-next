import usePauseCountdown from "@/lib/hooks/timer/usePauseCountdown";
import useStartCountdown from "@/lib/hooks/timer/useStartCountdown";
import {
  useRemainingTimeInSeconds,
  useTimerPaused,
} from "@/lib/stores/timer/countdown";

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
