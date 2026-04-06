import CurrentSessionType from "@/app/(root)/(home)/_components/Timer/Header/CurrentSessionType";
import SessionSwitcher from "@/app/(root)/(home)/_components/Timer/Header/SessionSwitcher/Index";

const CountdownTimerHeader = () => {
  return (
    <header className="timer-header flex flex-col items-center justify-center gap-4 select-none">
      <CurrentSessionType />
      <SessionSwitcher />
    </header>
  );
};

export default CountdownTimerHeader;
