import DropdownButton from "@/app/(root)/(home)/_components/Timer/Header/SessionSwitcher/DropdownToggle";
import OptionsContainer from "@/app/(root)/(home)/_components/Timer/Header/SessionSwitcher/OptionsContainer";

const SessionSwitcher = () => {
  return (
    // Session Switcher
    <div className="dropdown dropdown-center">
      <DropdownButton />
      <OptionsContainer />
    </div>
  );
};

export default SessionSwitcher;
