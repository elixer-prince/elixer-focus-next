"use client";

import useAppTheme from "@/lib/hooks/useAppTheme";
import { PropsWithChildren } from "react";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  useAppTheme();

  return <>{children}</>;
};

export default AppThemeProvider;
