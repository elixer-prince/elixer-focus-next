import Sidebar from "@/app/(root)/Sidebar";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Sidebar />

      <main>{children}</main>

      <Link href="/settings">Settings</Link>
    </div>
  );
};

export default Layout;
