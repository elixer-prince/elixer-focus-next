import useCountdownAlerts from "@/lib/hooks/timer/useCountdownAlerts";
import useCountdownContext from "@/lib/hooks/timer/useCountdownContext";
import useEndTicking from "@/lib/hooks/timer/useEndTicking";
import useSessionSwitch from "@/lib/hooks/timer/useSessionSwitch";
import usePageTitle from "@/lib/hooks/usePageTitle";
import {
  useResetElapsedTimeInSeconds,
  useSetElapsedTimeInSeconds,
  useSetRemainingTimeInSeconds,
} from "@/lib/stores/timer/countdown";
import {
  useCurrentSessionType,
  useSetPreviousSessionType,
} from "@/lib/stores/timer/session";
import { getCurrentTimestamp } from "@/lib/utils/date";
import { clearIntervalIfItExists } from "@/lib/utils/interval";
import { playSound } from "@/lib/utils/sound";
import { calculateRemainingSeconds } from "@/lib/utils/timer/calculations";
import { timerHasEnded, timerIsAboutToEnd } from "@/lib/utils/timer/checks";
import { useCallback } from "react";

const useCountdownInterval = () => {
  const { autoSwitchSessionType } = useSessionSwitch();
  const { startEndTicking, stopEndTicking } = useEndTicking();
  const { displayRemainingTimeInPageTitle } = usePageTitle();
  const { alertUserOfTimerEnd } = useCountdownAlerts();

  const { timerBeepSoundEffectRef, timerIntervalRef, elapsedIntervalRef } =
    useCountdownContext();

  const currentSessionType = useCurrentSessionType();
  const setPreviousSessionType = useSetPreviousSessionType();
  const setElapsedTimeInSeconds = useSetElapsedTimeInSeconds();
  const resetElapsedTimeInSeconds = useResetElapsedTimeInSeconds();

  const setRemainingTimeInSeconds = useSetRemainingTimeInSeconds();

  const resetElapsedTime = useCallback(() => {
    clearIntervalIfItExists(elapsedIntervalRef);
    resetElapsedTimeInSeconds();
  }, [elapsedIntervalRef, resetElapsedTimeInSeconds]);

  const createElapsedInterval = useCallback(() => {
    if (elapsedIntervalRef.current) return;

    const startTime = getCurrentTimestamp();

    elapsedIntervalRef.current = setInterval(() => {
      const now = getCurrentTimestamp();
      const elapsedSeconds = Math.floor((now - startTime) / 1000);
      setElapsedTimeInSeconds(elapsedSeconds);
    }, 100);
  }, [setElapsedTimeInSeconds, elapsedIntervalRef]);

  const createNewInterval = useCallback(
    (endTime: number) => {
      return setInterval(() => {
        const now = getCurrentTimestamp();
        const remainingSeconds = calculateRemainingSeconds(now, endTime);

        displayRemainingTimeInPageTitle(remainingSeconds, currentSessionType);

        if (timerIsAboutToEnd(remainingSeconds)) startEndTicking();

        setRemainingTimeInSeconds(remainingSeconds);

        if (timerHasEnded(remainingSeconds)) {
          clearIntervalIfItExists(timerIntervalRef);
          stopEndTicking();
          playSound(timerBeepSoundEffectRef.current as HTMLAudioElement);
          setPreviousSessionType(currentSessionType);
          alertUserOfTimerEnd();
          autoSwitchSessionType();
          resetElapsedTime();
          createElapsedInterval();
        }
      }, 100);
    },
    [
      currentSessionType,
      timerBeepSoundEffectRef,
      timerIntervalRef,
      autoSwitchSessionType,
      startEndTicking,
      stopEndTicking,
      resetElapsedTime,
      alertUserOfTimerEnd,
      displayRemainingTimeInPageTitle,
      setRemainingTimeInSeconds,
      setPreviousSessionType,
      createElapsedInterval,
    ],
  );

  const runInterval = useCallback(
    (endTime: number) => {
      clearIntervalIfItExists(timerIntervalRef);
      timerIntervalRef.current = createNewInterval(endTime);
    },
    [timerIntervalRef, createNewInterval],
  );

  return { runInterval, resetElapsedTime };
};

export default useCountdownInterval;
