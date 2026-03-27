import BackgroundTrack from "@/app/(root)/(home)/components/Timer/Display/FocusRing/BackgroundTrack";
import ColouredArc from "@/app/(root)/(home)/components/Timer/Display/FocusRing/ColouredArc";
import EndDot from "@/app/(root)/(home)/components/Timer/Display/FocusRing/EndDot";

const FocusRing = () => {
  return (
    <svg
      className="focus-ring pointer-events-none absolute inset-0 size-full rotate-270 overflow-hidden rounded-full"
      viewBox="0 0 344 344"
    >
      <BackgroundTrack />
      <ColouredArc />
      <EndDot />
    </svg>
  );
};

export default FocusRing;
