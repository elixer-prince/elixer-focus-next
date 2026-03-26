import Sidebar from "@/app/settings/Sidebar";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Sidebar />

      <main>{children}</main>

      <Link href="/">Home</Link>
    </div>
  );
};

export default Layout;
