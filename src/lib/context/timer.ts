import type { CountdownTimerContextType } from "@/lib/types/timer/context";
import { createContext } from "react";

const CountdownContext = createContext<CountdownTimerContextType | undefined>(
  undefined,
);

export default CountdownContext;
