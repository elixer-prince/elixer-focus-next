"use client";

import useFocusRing from "@/app/(root)/(home)/_components/Timer/Display/FocusRing/hooks/useFocusRing";

const BackgroundTrack = () => {
  const { radius, CENTER } = useFocusRing();

  return (
    <circle
      className="stroke-primary-content/25 fill-none stroke-8"
      cx={CENTER}
      cy={CENTER}
      r={radius}
    />
  );
};

export default BackgroundTrack;
