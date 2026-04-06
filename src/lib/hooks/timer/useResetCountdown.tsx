import useCountdownContext from "@/lib/hooks/timer/useCountdownContext";
import useCountdownTimerStorage from "@/lib/hooks/timer/useCountdownStorage";
import usePageTitle from "@/lib/hooks/usePageTitle";
import { useTimerRunning } from "@/lib/stores/timer/countdown";
import {
  useCurrentSessionType,
  useCustomSessionDuration,
  useFocusDuration,
  useLongBreakDuration,
  useShortBreakDuration,
} from "@/lib/stores/timer/session";
import { clearIntervalIfItExists } from "@/lib/utils/interval";
import { playSound } from "@/lib/utils/sound";

const useResetCountdown = () => {
  const { resetTimerSoundEffectRef, timerIntervalRef } = useCountdownContext();
  const { resetPageTitle } = usePageTitle();
  const { resetTimerStorage } = useCountdownTimerStorage();

  const timerRunning = useTimerRunning();

  const focusDuration = useFocusDuration();
  const shortBreakDuration = useShortBreakDuration();
  const longBreakDuration = useLongBreakDuration();
  const customSessionDuration = useCustomSessionDuration();
  const currentSessionType = useCurrentSessionType();

  const calculateInitialTime = (): number => {
    switch (currentSessionType) {
      case "Focus":
        return focusDuration;
      case "Short Break":
        return shortBreakDuration;
      case "Long Break":
        return longBreakDuration;
      case "Custom":
        return customSessionDuration;
    }
  };

  const resetCountdown = () => {
    clearIntervalIfItExists(timerIntervalRef);

    const initialTime = calculateInitialTime();

    resetTimerStorage(initialTime);
    resetPageTitle();
  };

  const resetCountdownWithSound = () => {
    if (!timerRunning) return;

    // TODO: Implement this as an overlay
    if (confirm("Are you sure you want to reset the countdown?")) {
      resetCountdown();
      playSound(resetTimerSoundEffectRef.current as HTMLAudioElement);
    }
  };

  return { resetCountdown, resetCountdownWithSound };
};

export default useResetCountdown;
