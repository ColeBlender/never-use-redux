"use client";

import { CartContext } from "@/providers/GlobalStateProvider";
import { useContext } from "react";

const useGlobalState = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a ContextProvider");
  }
  return context;
};

export default useGlobalState;
