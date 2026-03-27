import useCountdownContext from "@/app/hooks/timer/useCountdownContext";
import useCountdownHelpers from "@/app/hooks/timer/useCountdownHelpers";
import useCountdownInterval from "@/app/hooks/timer/useCountdownInterval";
import useEndTicking from "@/app/hooks/timer/useEndTicking";
import {
  useRemainingTimeInSeconds,
  useSetRemainingTimeInSeconds,
  useSetTimerPaused,
  useSetTimerRunning,
  useTimerPaused,
} from "@/app/stores/timer/countdown";
import { clearIntervalIfItExists } from "@/app/utils/interval";
import { playSound } from "@/app/utils/sound";
import { saveToLocalStorage } from "@/app/utils/storage";
import { calculateEndTime } from "@/app/utils/timer/calculations";
import { useCallback } from "react";

const useStartCountdown = () => {
  const { startEndTicking, stopEndTicking } = useEndTicking();
  const { runInterval } = useCountdownInterval();
  const { calculateNewRemainingSeconds } = useCountdownHelpers();
  const {
    timerEndedWhileAway,
    timerShouldBeTickingOnRefresh,
    timerShouldNotBeActiveOnRefresh,
    handleEndedTimerWhileAway,
  } = useCountdownHelpers();

  const timerPaused = useTimerPaused();
  const remainingTimeInSeconds = useRemainingTimeInSeconds();
  const setTimerRunning = useSetTimerRunning();
  const setTimerPaused = useSetTimerPaused();
  const setRemainingTimeInSeconds = useSetRemainingTimeInSeconds();

  const { timerOnClickSoundEffectRef, timerEndTimeRef, timerIntervalRef } =
    useCountdownContext();

  const startCountdown = useCallback(() => {
    stopEndTicking();

    setTimerPaused(false);
    setTimerRunning(true);

    const endTime = calculateEndTime(remainingTimeInSeconds);

    // Save the end time to local storage
    // and as a reference
    timerEndTimeRef.current = endTime;
    saveToLocalStorage("timerEndTime", endTime);

    runInterval(endTime);
  }, [
    timerEndTimeRef,
    remainingTimeInSeconds,
    runInterval,
    setTimerPaused,
    setTimerRunning,
    stopEndTicking,
  ]);

  const startCountdownWithSound = () => {
    if (!timerPaused) return;

    playSound(timerOnClickSoundEffectRef.current);
    startCountdown();
  };

  /**
   * Starts the timer on page load if the timer is
   * not paused or running.
   *
   * @returns {void}
   */
  const startCountdownOnPageLoad = useCallback(() => {
    if (timerShouldNotBeActiveOnRefresh()) return;

    if (!timerEndTimeRef.current) return;

    clearIntervalIfItExists(timerIntervalRef);

    const endTime = timerEndTimeRef.current;
    const remainingSeconds = calculateNewRemainingSeconds(endTime);

    if (timerShouldBeTickingOnRefresh(remainingSeconds)) startEndTicking();

    if (timerEndedWhileAway(remainingSeconds))
      return handleEndedTimerWhileAway();

    setRemainingTimeInSeconds(remainingSeconds);
    runInterval(endTime);
  }, [
    timerEndTimeRef,
    timerIntervalRef,
    timerEndedWhileAway,
    timerShouldBeTickingOnRefresh,
    timerShouldNotBeActiveOnRefresh,
    runInterval,
    startEndTicking,
    calculateNewRemainingSeconds,
    handleEndedTimerWhileAway,
    setRemainingTimeInSeconds,
  ]);

  return {
    startCountdown,
    startCountdownWithSound,
    startCountdownOnPageLoad,
  };
};

export default useStartCountdown;
