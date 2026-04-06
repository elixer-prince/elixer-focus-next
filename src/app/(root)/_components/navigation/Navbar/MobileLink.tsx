"use client";

import { useCloseNavbar } from "@/app/(root)/_components/navigation/Navbar/store";
import clsx from "clsx";
import Link from "next/link";
import type { PropsWithChildren } from "react";

const MobileLink = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  const closeNavbar = useCloseNavbar();
  const isActive = href === window.location.pathname;

  return (
    <Link
      className={clsx(
        "flex items-center gap-1 rounded-md px-4 py-2 transition-colors duration-500",
        {
          "text-primary bg-primary-content/10 pointer-events-none font-bold":
            isActive,
          "border-primary-content/50 hover:bg-primary-content/4 hover:border-primary-content/75":
            !isActive,
        },
      )}
      href={href}
      onClick={closeNavbar}
    >
      {children}
    </Link>
  );
};

export default MobileLink;
