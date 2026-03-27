import CountdownContext from "@/app/context/timer/Context";
import { useContext } from "react";

const useCountdownContext = () => {
  const countdownTimerContext = useContext(CountdownContext);

  if (!countdownTimerContext)
    throw new Error("CountdownContext must be defined!");

  return countdownTimerContext;
};

export default useCountdownContext;
