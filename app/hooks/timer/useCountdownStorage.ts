import useCountdownTimerContext from "@/app/hooks/timer/useCountdownContext";
import {
  useSetRemainingTimeInSeconds,
  useSetStartTimeInMinutes,
  useSetTimerPaused,
  useSetTimerRunning,
} from "@/app/stores/timer/countdown";
import { convertMinutesToSeconds } from "@/app/utils/conversion";
import { saveToLocalStorage } from "@/app/utils/storage";

const UseCountdownStorage = () => {
  const { timerIntervalRef, timerEndTimeRef } = useCountdownTimerContext();

  const setTimerRunning = useSetTimerRunning();
  const setTimerPaused = useSetTimerPaused();
  const setStartTimeInMinutes = useSetStartTimeInMinutes();
  const setRemainingTimeInSeconds = useSetRemainingTimeInSeconds();

  // * Locked * //
  const resetTimerStorage = (newStartTime: number) => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    setTimerRunning(false);
    setTimerPaused(true);

    timerEndTimeRef.current = null;
    saveToLocalStorage("timerEndTime", null);

    setStartTimeInMinutes(newStartTime);
    setRemainingTimeInSeconds(convertMinutesToSeconds(newStartTime));
  };

  return { resetTimerStorage };
};

export default UseCountdownStorage;
