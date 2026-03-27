import type { RefObject } from "react";

export type CountdownTimerContextType = {
  timerIntervalRef: RefObject<ReturnType<typeof setInterval> | null>;
  timerEndTimeRef: RefObject<number | null>;
  hasPlayedEndBeepRef: RefObject<boolean>;
  isEndTickingRef: RefObject<boolean>;
  modalRef: RefObject<HTMLDialogElement | null>;
  elapsedIntervalRef: RefObject<ReturnType<typeof setInterval> | null>;

  readonly timerBeepSoundEffectRef: RefObject<HTMLAudioElement | null>;
  readonly timerOffClickSoundEffectRef: RefObject<HTMLAudioElement | null>;
  readonly timerOnClickSoundEffectRef: RefObject<HTMLAudioElement | null>;
  readonly timerTickingSoundEffectRef: RefObject<HTMLAudioElement | null>;
  readonly resetTimerSoundEffectRef: RefObject<HTMLAudioElement | null>;
};
