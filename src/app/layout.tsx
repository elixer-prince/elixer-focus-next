import "@/ui/index.css";
import AppThemeProvider from "@/lib/providers/AppTheme";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Elixer Focus",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en-JM" className="not-motion-reduce:scroll-smooth bg-base-300">
      <body className="antialiased">
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
