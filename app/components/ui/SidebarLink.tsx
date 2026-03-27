"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

interface LinkProps {
  href: string;
}

const SidebarLink = ({ href, children }: PropsWithChildren<LinkProps>) => {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        "flex items-center gap-1 rounded-md p-2 transition-colors duration-500",
        {
          "text-primary bg-primary-content/10 pointer-events-none font-bold":
            pathname === href,
          "border-primary-content/50 hover:bg-primary-content/4 hover:border-primary-content/75":
            pathname !== href,
        },
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
