import Sidebar from "@/app/settings/_components/navigation/Sidebar/Index";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar />

      <main className="p-8 max-sm:mt-(--navbar-height) sm:ml-(--sidebar-width)">
        {children}
      </main>
    </>
  );
};

export default Layout;
