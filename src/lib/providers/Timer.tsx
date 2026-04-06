import CountdownContext from "@/lib/context/timer";
import type { CountdownTimerContextType } from "@/lib/types/timer/context";
import { getFromLocalStorage } from "@/lib/utils/storage";
import { type PropsWithChildren, useEffect, useMemo, useRef } from "react";

// Assets
const beepSoundURL = "/assets/sound-effects/beep.mp3";
const offClickSoundURL = "/assets/sound-effects/off-click.mp3";
const onClickSoundURL = "/assets/sound-effects/on-click.mp3";
const resetTimerSoundURL = "/assets/sound-effects/reset-timer.mp3";
const tickingSoundURL = "/assets/sound-effects/ticking.mp3";

const CountdownProvider = ({ children }: PropsWithChildren) => {
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerEndTimeRef = useRef<number | null>(
    getFromLocalStorage("timerEndTime") || null,
  );
  const hasPlayedEndBeepRef = useRef<boolean>(false);
  const isEndTickingRef = useRef<boolean>(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const elapsedIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const timerBeepSoundEffectRef = useRef<HTMLAudioElement | null>(null);
  const timerOffClickSoundEffectRef = useRef<HTMLAudioElement | null>(null);
  const timerOnClickSoundEffectRef = useRef<HTMLAudioElement | null>(null);
  const timerTickingSoundEffectRef = useRef<HTMLAudioElement | null>(null);
  const resetTimerSoundEffectRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    timerBeepSoundEffectRef.current = new Audio(beepSoundURL);
    timerOffClickSoundEffectRef.current = new Audio(offClickSoundURL);
    timerOnClickSoundEffectRef.current = new Audio(onClickSoundURL);
    timerTickingSoundEffectRef.current = new Audio(tickingSoundURL);
    resetTimerSoundEffectRef.current = new Audio(resetTimerSoundURL);
  }, []);

  const contextValue: CountdownTimerContextType = useMemo(
    () => ({
      timerIntervalRef,
      timerEndTimeRef,
      hasPlayedEndBeepRef,
      isEndTickingRef,
      modalRef,
      elapsedIntervalRef,

      timerBeepSoundEffectRef,
      timerOffClickSoundEffectRef,
      timerOnClickSoundEffectRef,
      timerTickingSoundEffectRef,
      resetTimerSoundEffectRef,
    }),
    [],
  );

  return (
    <CountdownContext.Provider value={contextValue}>
      {children}
    </CountdownContext.Provider>
  );
};

export default CountdownProvider;
