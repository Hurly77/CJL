import React from "react";

import { AppContextProvider } from "./context/AppContext";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppContextProvider>{children}</AppContextProvider>;
}

export default AppLayout;
