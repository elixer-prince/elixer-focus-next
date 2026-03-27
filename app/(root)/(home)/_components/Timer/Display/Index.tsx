import ClickableArea from "@/app/(root)/(home)/_components/Timer/Display/ClickableArea";
import FocusRing from "@/app/(root)/(home)/_components/Timer/Display/FocusRing/Index";
import MinutesAndSeconds from "@/app/(root)/(home)/_components/Timer/Display/MinutesAndSeconds";
import Seconds from "@/app/(root)/(home)/_components/Timer/Display/Seconds";
import SessionCount from "@/app/(root)/(home)/_components/Timer/Display/SessionCount";

const TimerDisplay = () => {
  return (
    <div className="relative flex aspect-square w-70 max-w-full flex-col items-center justify-center overflow-hidden p-10 outline-none select-none">
      <ClickableArea />
      <FocusRing />
      <SessionCount />
      <Seconds />
      <MinutesAndSeconds />
    </div>
  );
};

export default TimerDisplay;
