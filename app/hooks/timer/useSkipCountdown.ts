import useCountdownContext from "@/app/hooks/timer/useCountdownContext";
import useSessionSwitch from "@/app/hooks/timer/useSessionSwitch";
import { playSound } from "@/app/utils/sound";

const useSkipCountdown = (): {
  skipCountdown: () => void;
} => {
  const { autoSwitchSessionType } = useSessionSwitch();

  const { resetTimerSoundEffectRef } = useCountdownContext();

  const skipCountdown = () => {
    // TODO: Implement this as an overlay
    if (confirm("Are you sure you want to skip the countdown?")) {
      playSound(resetTimerSoundEffectRef.current as HTMLAudioElement);
      autoSwitchSessionType();
    }
  };

  return { skipCountdown };
};

export default useSkipCountdown;
