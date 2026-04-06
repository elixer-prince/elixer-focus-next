"use client";

import useStartCountdown from "@/lib/hooks/timer/useStartCountdown";
import { MdPlayArrow } from "react-icons/md";

const StartButton = () => {
  const { startCountdownWithSound } = useStartCountdown();

  return (
    <button className="btn btn-primary" onClick={startCountdownWithSound}>
      <MdPlayArrow size={24} />
      <span className="max-sm:hidden">Start</span>
    </button>
  );
};

export default StartButton;
