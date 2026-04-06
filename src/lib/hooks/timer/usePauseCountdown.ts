import useCountdownContext from "@/lib/hooks/timer/useCountdownContext";
import {
  useSetTimerPaused,
  useTimerPaused,
} from "@/lib/stores/timer/countdown";
import { clearIntervalIfItExists } from "@/lib/utils/interval";
import { playSound } from "@/lib/utils/sound";

const usePauseCountdown = () => {
  const { timerOffClickSoundEffectRef, timerIntervalRef } =
    useCountdownContext();

  const timerPaused = useTimerPaused();
  const setTimerPaused = useSetTimerPaused();

  const pauseCountdown = () => {
    if (timerPaused) return;

    playSound(timerOffClickSoundEffectRef.current as HTMLAudioElement);
    setTimerPaused(true);
    clearIntervalIfItExists(timerIntervalRef);
  };

  return { pauseCountdown };
};

export default usePauseCountdown;
