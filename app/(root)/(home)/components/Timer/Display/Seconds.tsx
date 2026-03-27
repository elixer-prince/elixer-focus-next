"use client";

import useHandleCountdownState from "@/app/hooks/timer/useHandleCountdownState";
import { useRemainingTimeInSeconds } from "@/app/stores/timer/countdown";
import clsx from "clsx";

const CountdownSeconds = () => {
  const remainingTimeInSeconds = useRemainingTimeInSeconds();
  const { isEndingSoon } = useHandleCountdownState();

  return (
    <span
      className={clsx("pointer-events-none z-10", {
        "text-error": isEndingSoon,
      })}
    >
      <span className={clsx({ "animate-pulse": isEndingSoon })}>
        {remainingTimeInSeconds}
      </span>
      <span className="text-primary"> seconds</span>
    </span>
  );
};

export default CountdownSeconds;
