"use cient";

import { ThemeProvider } from "./_providers/theme-provider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
