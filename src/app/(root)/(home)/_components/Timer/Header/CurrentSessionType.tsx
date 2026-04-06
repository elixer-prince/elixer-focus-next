"use client";

import { useCurrentSessionType } from "@/lib/stores/timer/session";

const CurrentSessionType = () => {
  const currentSessionType = useCurrentSessionType();

  return (
    // Current Session Type
    <h2 className="text-center text-4xl font-bold">
      {currentSessionType} <span className={"max-sm:hidden"}>Session</span>
    </h2>
  );
};

export default CurrentSessionType;
