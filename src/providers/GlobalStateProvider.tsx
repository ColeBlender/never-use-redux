"use client";

import { User } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type CartContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

function GlobalStateProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const contextValue = { user, setUser };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default GlobalStateProvider;
