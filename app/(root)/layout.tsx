import Navbar from "@/app/(root)/_components/navigation/Navbar/Index";
import Sidebar from "@/app/(root)/_components/navigation/Sidebar";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />

      <Sidebar />

      <Toaster />

      <main className="mt-(--navbar-height) mb-(--music-player-height) md:ml-(--sidebar-width)">
        {children}
      </main>
    </>
  );
};

export default Layout;
