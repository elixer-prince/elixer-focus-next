"use client";

import SessionOption from "@/app/(root)/(home)/_components/Timer/Header/SessionSwitcher/SessionOption";
import useSessionSwitch from "@/lib/hooks/timer/useSessionSwitch";
import { useCurrentSessionType } from "@/lib/stores/timer/session";

const OptionsContainer = () => {
  const {
    switchToFocus,
    switchToShortBreak,
    switchToLongBreak,
    switchToCustom,
  } = useSessionSwitch();
  const currentSessionType = useCurrentSessionType();

  return (
    // Options Container
    <ul
      tabIndex={-1}
      className="dropdown-content menu bg-base-100 rounded-box z-20 w-52 p-2 shadow-sm"
    >
      <li>
        <SessionOption
          value="Focus"
          onChange={switchToFocus}
          checked={currentSessionType === "Focus"}
        >
          Focus
        </SessionOption>
      </li>
      <li>
        <SessionOption
          value="Short Break"
          onChange={switchToShortBreak}
          checked={currentSessionType === "Short Break"}
        >
          Short Break
        </SessionOption>
      </li>
      <li>
        <SessionOption
          value="Long Break"
          onChange={switchToLongBreak}
          checked={currentSessionType === "Long Break"}
        >
          Long Break
        </SessionOption>
      </li>
      <li>
        <SessionOption
          value="Custom Session"
          onChange={switchToCustom}
          checked={currentSessionType === "Custom"}
          isCustomOption
        >
          Custom
        </SessionOption>
      </li>
    </ul>
  );
};

export default OptionsContainer;
