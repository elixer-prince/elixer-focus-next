import CountdownContext from "@/app/context/timer";
import type { CountdownTimerContextType } from "@/app/types/timer/context";
import { getFromLocalStorage } from "@/app/utils/storage";
import { type PropsWithChildren, useMemo, useRef } from "react";

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

  const timerBeepSoundEffectRef = useRef(new Audio(beepSoundURL));
  const timerOffClickSoundEffectRef = useRef(new Audio(offClickSoundURL));
  const timerOnClickSoundEffectRef = useRef(new Audio(onClickSoundURL));
  const timerTickingSoundEffectRef = useRef(new Audio(tickingSoundURL));
  const resetTimerSoundEffectRef = useRef(new Audio(resetTimerSoundURL));

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
