"use client";

import CurrentTime from "@/app/(root)/_components/navigation/Navbar/CurrentTime";
import HamburgerIcon from "@/app/(root)/_components/navigation/Navbar/HamburgerIcon";
import MobileLinkContainer from "@/app/(root)/_components/navigation/Navbar/MobileLinkContainer";
import NavLogo from "@/app/(root)/_components/navigation/Navbar/NavLogo";
import SettingsLink from "@/app/(root)/_components/navigation/Navbar/SettingsLink";
import { useNavbarIsOpen } from "@/app/(root)/_components/navigation/Navbar/store";
import clsx from "clsx";

const Navbar = () => {
  const navbarIsOpen = useNavbarIsOpen();

  return (
    // Navbar
    <nav
      className={clsx(
        "border-b-base-content/50 fixed top-0 right-0 left-0 z-40 flex h-(--navbar-height) flex-col items-start border-b p-0 shadow-md backdrop-blur-sm transition-all duration-1000",
        {
          "max-md:bg-base-300 max-md:h-screen": navbarIsOpen,
        },
      )}
    >
      {/* Wrapper Container */}
      <div className="flex min-h-19.5 w-full items-center justify-between p-4">
        {/* Left Container */}
        <div className="flex items-center gap-2">
          <HamburgerIcon />

          {/* Logo Container */}
          <div className="flex items-baseline gap-8">
            <NavLogo />
          </div>
        </div>

        {/* Inner Right Container */}
        <div className="flex items-center gap-4">
          {/* <LoginLink /> */}
          <CurrentTime />
          <SettingsLink />
        </div>
      </div>

      {/* Mobile Navbar Container */}
      <div className="flex size-full justify-center p-4 md:hidden">
        {navbarIsOpen && <MobileLinkContainer />}
      </div>
    </nav>
  );
};

export default Navbar;
