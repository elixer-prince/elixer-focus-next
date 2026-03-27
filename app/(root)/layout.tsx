import Sidebar from "@/app/(root)/_components/Sidebar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar />

      <main className="mt-(--navbar-height) mb-(--music-player-height) md:ml-(--sidebar-width)">
        {children}
      </main>
    </>
  );
};

export default Layout;
