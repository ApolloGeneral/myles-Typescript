import React, { useState, createContext } from "react";
import { IUser } from "../typings/myles";

export const UserContext = createContext<any>({});

export const UserProvider = (props: { children: React.ReactNode }) => {
  const [isSigned, setIsSigned] = useState<IUser | undefined>(undefined);

  return (
    <UserContext.Provider value={{ isSigned, setIsSigned }}>
      {props.children}
    </UserContext.Provider>
  );
};
