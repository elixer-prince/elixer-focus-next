"use client";

import useHandleCountdownState from "@/app/hooks/timer/useHandleCountdownState";
import { useCustomSessionInputShown } from "@/app/stores/timer/session";
import clsx from "clsx";

const ClickableArea = () => {
  const { handleCountdownState } = useHandleCountdownState();
  const customSessionInputShown = useCustomSessionInputShown();

  return (
    // Clickable Area
    <button
      onClick={handleCountdownState}
      className={clsx(
        "hover:bg-base-200 active:bg-base-100 bg-transition-all peer absolute inset-5 cursor-pointer rounded-full duration-1000 hover:duration-1000 active:duration-100",
        {
          "pointer-events-none": customSessionInputShown,
        },
      )}
    />
  );
};

export default ClickableArea;
