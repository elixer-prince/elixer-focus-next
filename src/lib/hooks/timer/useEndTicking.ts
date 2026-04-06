import useCountdownContext from "@/lib/hooks/timer/useCountdownContext";
import { playSound, stopSound } from "@/lib/utils/sound";
import { useCallback } from "react";

const useEndTicking = () => {
  const { timerTickingSoundEffectRef, isEndTickingRef } = useCountdownContext();

  const startEndTicking = useCallback((): void => {
    if (isEndTickingRef.current) return;

    isEndTickingRef.current = true;

    const sound = timerTickingSoundEffectRef.current as HTMLAudioElement;

    try {
      sound.loop = false;
    } catch (error) {
      console.error(`Error setting loop for sound: ${sound.src}`, error);
    }

    playSound(sound as HTMLAudioElement);
  }, [isEndTickingRef, timerTickingSoundEffectRef]);

  const stopEndTicking = useCallback((): void => {
    if (!isEndTickingRef.current) return;

    isEndTickingRef.current = false;
    stopSound(timerTickingSoundEffectRef.current as HTMLAudioElement);
  }, [isEndTickingRef, timerTickingSoundEffectRef]);

  return { startEndTicking, stopEndTicking };
};

export default useEndTicking;
