import "@/app/index.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Elixer Focus",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en-JM">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
