"use client";

import useHandleCountdownState from "@/lib/hooks/timer/useHandleCountdownState";
import useSessionSwitch from "@/lib/hooks/timer/useSessionSwitch";
import { useRemainingTimeInSeconds } from "@/lib/stores/timer/countdown";
import {
  useCustomSessionInputShown,
  useSetCustomSessionDuration,
  useSetCustomSessionInputShown,
} from "@/lib/stores/timer/session";
import { formatTimeInMinutesAndSeconds } from "@/lib/utils/formatting";
import clsx from "clsx";
import { KeyboardEvent } from "react";

const CountdownMinutesAndSeconds = () => {
  const remainingTimeInSeconds = useRemainingTimeInSeconds();
  const customSessionInputShown = useCustomSessionInputShown();
  const setCustomSessionInputShown = useSetCustomSessionInputShown();
  const setCustomSessionDuration = useSetCustomSessionDuration();

  const { isEndingSoon } = useHandleCountdownState();
  const { updateCustomDurationAndReset } = useSessionSwitch();

  const baseClasses = "z-10 text-7xl transition-colors duration-500";

  const handleDurationChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (event.currentTarget.value.trim() === "") {
        event.currentTarget.value = "";
        return;
      }

      const value = Number(event.currentTarget.value);

      setCustomSessionDuration(value);
      updateCustomDurationAndReset(value);
      event.currentTarget.value = "";
      setCustomSessionInputShown(false);
    }
  };

  return customSessionInputShown ? (
    <div className={baseClasses}>
      <input
        type="text"
        placeholder="25"
        className="border-primary-content/50 focus:outline-primary w-30 rounded-md border-2 px-4 py-2 text-center text-6xl placeholder:italic"
        onKeyDown={(event) => handleDurationChange(event)}
      />
    </div>
  ) : (
    <div
      className={clsx(baseClasses, "pointer-events-none", {
        "text-error animate-pulse": isEndingSoon,
      })}
    >
      {formatTimeInMinutesAndSeconds(remainingTimeInSeconds)}
    </div>
  );
};

export default CountdownMinutesAndSeconds;
