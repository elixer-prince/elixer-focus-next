import clsx from "clsx";
import Link from "next/link";

const NavLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      aria-label="Elixer Focus logo"
      href="/"
      className={clsx(className, "select-none")}
    >
      <span className="navbar-logo inline-block text-2xl font-bold">
        Elixer Focus
      </span>
    </Link>
  );
};

export default NavLogo;
