import useCountdownContext from "@/app/hooks/timer/useCountdownContext";
import useEndTicking from "@/app/hooks/timer/useEndTicking";
import useSessionSwitch from "@/app/hooks/timer/useSessionSwitch";
import {
  useSetRemainingTimeInSeconds,
  useSetTimerPaused,
  useSetTimerRunning,
  useTimerPaused,
  useTimerRunning,
} from "@/app/stores/timer/countdown";
import { convertMillisecondsToSeconds } from "@/app/utils/conversion";
import { getCurrentTimestamp } from "@/app/utils/date";
import { clearIntervalIfItExists } from "@/app/utils/interval";
import { saveToLocalStorage } from "@/app/utils/storage";
import { useCallback } from "react";

const useCountdownTimerHelpers = () => {
  const { autoSwitchSessionType } = useSessionSwitch();
  const { stopEndTicking } = useEndTicking();

  const timerRunning = useTimerRunning();
  const timerPaused = useTimerPaused();
  const setTimerRunning = useSetTimerRunning();
  const setTimerPaused = useSetTimerPaused();
  const setRemainingTimeInSeconds = useSetRemainingTimeInSeconds();

  const { timerEndTimeRef, timerIntervalRef, isEndTickingRef } =
    useCountdownContext();

  const timerShouldNotBeActiveOnRefresh = useCallback((): boolean => {
    return !timerRunning || timerPaused;
  }, [timerRunning, timerPaused]);

  const timerShouldBeTickingOnRefresh = useCallback(
    (remainingSeconds: number): boolean => {
      return (
        remainingSeconds > 0 &&
        remainingSeconds <= 10 &&
        !isEndTickingRef.current
      );
    },
    [isEndTickingRef],
  );

  const timerEndedWhileAway = useCallback(
    (remainingSeconds: number): boolean => {
      return remainingSeconds <= 0;
    },
    [],
  );

  const handleEndedTimerWhileAway = useCallback(() => {
    stopEndTicking();
    setRemainingTimeInSeconds(0);
    setTimerPaused(true);
    setTimerRunning(false);
    autoSwitchSessionType();
    clearIntervalIfItExists(timerIntervalRef);
    saveToLocalStorage("timerEndTime", null);
  }, [
    timerIntervalRef,
    stopEndTicking,
    setRemainingTimeInSeconds,
    setTimerPaused,
    setTimerRunning,
    autoSwitchSessionType,
  ]);

  const calculateNewRemainingSeconds = useCallback(
    (endTime: number): number => {
      if (!timerEndTimeRef.current) return 0;

      const now = getCurrentTimestamp();

      return Math.max(
        0,
        Math.round(convertMillisecondsToSeconds(endTime - now)),
      );
    },
    [timerEndTimeRef],
  );

  return {
    timerShouldNotBeActiveOnRefresh,
    timerShouldBeTickingOnRefresh,
    timerEndedWhileAway,
    handleEndedTimerWhileAway,
    calculateNewRemainingSeconds,
  };
};

export default useCountdownTimerHelpers;
