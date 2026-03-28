import Navbar from "@/app/(root)/_components/navigation/Navbar/Index";
import Sidebar from "@/app/(root)/_components/navigation/Sidebar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />

      <Sidebar />

      <main className="mt-(--navbar-height) mb-(--music-player-height) md:ml-(--sidebar-width)">
        {children}
      </main>
    </>
  );
};

export default Layout;
