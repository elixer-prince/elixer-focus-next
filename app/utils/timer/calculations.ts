import { convertSecondsToMilliseconds } from "@/app/utils/conversion";
import { getCurrentTimestamp } from "@/app/utils/date";

export const calculateEndTime = (remainingTimeInSeconds: number): number => {
  return (
    getCurrentTimestamp() + convertSecondsToMilliseconds(remainingTimeInSeconds)
  );
};

export const calculateRemainingSeconds = (
  now: number,
  endTime: number,
): number => {
  // Math.max() is used here to ensure the remaining seconds is never less
  // than zero.
  return Math.max(0, Math.round((endTime - now) / 1000));
};
