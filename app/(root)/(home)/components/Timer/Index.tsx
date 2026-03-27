"use client";

import ButtonControls from "@/app/(root)/(home)/components/Timer/ButtonControls/Index";
import TimerDisplay from "@/app/(root)/(home)/components/Timer/Display/Index";
import CountdownTimerHeader from "@/app/(root)/(home)/components/Timer/Header/Index";
import TimerProvider from "@/app/providers/Timer";

const Timer = () => {
  return (
    // Timer Container
    <TimerProvider>
      <section className="flex w-150 flex-col items-center justify-center gap-4 rounded-xl p-8">
        <CountdownTimerHeader />
        <TimerDisplay />
        <ButtonControls />
      </section>
    </TimerProvider>
  );
};

export default Timer;
