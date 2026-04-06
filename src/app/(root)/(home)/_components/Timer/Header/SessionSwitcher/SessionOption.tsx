"use client";

import {
  useSetCurrentSessionType,
  useSetCustomSessionInputShown,
} from "@/lib/stores/timer/session";
import type { PropsWithChildren } from "react";

interface SessionOptionProps {
  value: string;
  checked: boolean;
  isCustomOption?: boolean;
  onChange: () => void;
}

const SessionOption = ({
  value,
  checked,
  children,
  isCustomOption,
  onChange,
}: PropsWithChildren<SessionOptionProps>) => {
  const setCustomSessionInputShown = useSetCustomSessionInputShown();
  const setCurrentSessionType = useSetCurrentSessionType();

  return (
    // Session Option
    <label>
      <input
        name="session-type"
        type="radio"
        className="accent-primary"
        value={value}
        onChange={() => {
          if (isCustomOption) {
            setCurrentSessionType("Custom");
            return setCustomSessionInputShown(true);
          }
          setCustomSessionInputShown(false);
          onChange();
        }}
        checked={checked}
      />
      {children}
    </label>
  );
};

export default SessionOption;
