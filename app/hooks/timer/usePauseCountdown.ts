import useCountdownContext from "@/app/hooks/timer/useCountdownContext";
import {
  useSetTimerPaused,
  useTimerPaused,
} from "@/app/stores/timer/countdown";
import { clearIntervalIfItExists } from "@/app/utils/interval";
import { playSound } from "@/app/utils/sound";

const usePauseCountdown = () => {
  const { timerOffClickSoundEffectRef, timerIntervalRef } =
    useCountdownContext();

  const timerPaused = useTimerPaused();
  const setTimerPaused = useSetTimerPaused();

  const pauseCountdown = () => {
    if (timerPaused) return;

    playSound(timerOffClickSoundEffectRef.current);
    setTimerPaused(true);
    clearIntervalIfItExists(timerIntervalRef);
  };

  return { pauseCountdown };
};

export default usePauseCountdown;
