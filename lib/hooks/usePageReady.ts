"use client";

import { createContext, useContext } from "react";

export const PageReadyContext = createContext(false);

export function usePageReady() {
  return useContext(PageReadyContext);
}
