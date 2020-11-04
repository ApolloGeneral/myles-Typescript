import React, { useState, createContext } from "react";

export const UserContext = createContext<any>({});

export const UserProvider = (props: { children: React.ReactNode }) => {
  const [isSigned, setIsSigned] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isSigned, setIsSigned }}>
      {props.children}
    </UserContext.Provider>
  );
};
