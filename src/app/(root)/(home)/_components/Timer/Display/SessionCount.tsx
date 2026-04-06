import useHandleCountdownState from "@/lib/hooks/timer/useHandleCountdownState";
import {
  useCurrentSessionCount,
  useResetCurrentSessionCount,
  useSessionCountLimit,
} from "@/lib/stores/timer/session";
import clsx from "clsx";

const SessionCount = () => {
  const currentSessionCount = useCurrentSessionCount();
  const sessionCountLimit = useSessionCountLimit();
  const resetCurrentSessionCount = useResetCurrentSessionCount();

  const { isEndingSoon } = useHandleCountdownState();

  const handleSessionReset = () => {
    if (currentSessionCount === 0) return;
    if (confirm("Are you sure you want to reset the session count?")) {
      resetCurrentSessionCount();
    }
  };

  return (
    // Session Count
    <button
      onClick={handleSessionReset}
      className="bg-base-100 from-primary/10 border-primary/25 border-t-primary peer-hover:border-primary/55 peer-hover:border-t-primary peer-hover:shadow-primary/25 absolute top-12 cursor-pointer rounded-md border bg-linear-to-b px-2 py-1 font-bold transition-all duration-1000 peer-hover:shadow-[0_0_18px_var(--p)]"
    >
      <span className={clsx({ "text-error animate-pulse": isEndingSoon })}>
        {currentSessionCount}
      </span>
      <span className="text-primary"> / </span>
      <span className={clsx({ "text-error animate-pulse": isEndingSoon })}>
        {sessionCountLimit}
      </span>
    </button>
  );
};

export default SessionCount;
