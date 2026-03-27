import { formatTimeInMinutesAndSeconds } from "@/app/utils/formatting";
import { useCallback } from "react";

const usePageTitle = () => {
  const displayRemainingTimeInPageTitle = useCallback(
    (remainingSeconds: number, currentSessionType: string) => {
      const time = formatTimeInMinutesAndSeconds(remainingSeconds);

      if (currentSessionType === "Focus") {
        document.title = `${time} - Time to focus!`;
      } else {
        document.title = `${time} - Take a break!`;
      }
    },
    [],
  );

  const resetPageTitle = useCallback(() => {
    document.title = "Elixer Focus - Home";
  }, []);

  const updatePageTitle = useCallback((newTitle: string = "Elixer Focus") => {
    document.title = newTitle;
  }, []);

  return {
    displayRemainingTimeInPageTitle,
    resetPageTitle,
    updatePageTitle,
  };
};

export default usePageTitle;
