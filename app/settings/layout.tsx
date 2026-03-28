import Sidebar from "@/app/settings/_components/navigation/Sidebar/Index";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Sidebar />

      <main className="p-8 max-sm:mt-(--navbar-height) sm:ml-(--sidebar-width)">
        {children}
      </main>
    </div>
  );
};

export default Layout;
