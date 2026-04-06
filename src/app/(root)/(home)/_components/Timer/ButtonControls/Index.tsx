"use client";

import PauseButton from "@/app/(root)/(home)/_components/Timer/ButtonControls/PauseButton";
import ResetButton from "@/app/(root)/(home)/_components/Timer/ButtonControls/ResetButton";
import SkipButton from "@/app/(root)/(home)/_components/Timer/ButtonControls/SkipButton";
import StartButton from "@/app/(root)/(home)/_components/Timer/ButtonControls/StartButton";
import { useTimerPaused, useTimerRunning } from "@/lib/stores/timer/countdown";

const ButtonControls = () => {
  const timerPaused = useTimerPaused();
  const timerRunning = useTimerRunning();

  return (
    <div className={"mb-8 flex justify-center gap-4"}>
      {timerPaused && <StartButton />}
      {!timerPaused && <PauseButton />}
      {timerRunning && <ResetButton />}
      <SkipButton />
    </div>
  );
};

export default ButtonControls;
