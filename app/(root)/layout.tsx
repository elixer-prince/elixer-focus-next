import Sidebar from "@/app/(root)/components/Sidebar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar />

      <main className="debug-border mt-(--navbar-height) mb-(--music-player-height) md:ml-(--sidebar-width)">
        {children}
      </main>
    </>
  );
};

export default Layout;
