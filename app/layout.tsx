import "@/app/index.css";
import AppThemeProvider from "@/app/providers/AppTheme";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Elixer Focus",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en-JM">
      <body className="debug-border antialiased">
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
