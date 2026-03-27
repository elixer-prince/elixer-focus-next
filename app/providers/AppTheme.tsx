"use client";

import useAppTheme from "@/app/hooks/useAppTheme";
import { PropsWithChildren } from "react";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  useAppTheme();

  return <>{children}</>;
};

export default AppThemeProvider;
