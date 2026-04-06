import useCountdownContext from "@/lib/hooks/timer/useCountdownContext";
import useSessionSwitch from "@/lib/hooks/timer/useSessionSwitch";
import { playSound } from "@/lib/utils/sound";

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
