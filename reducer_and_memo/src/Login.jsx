//
import { createContext, useContext, useState } from "react";

//1. Create Context
const loginContext = createContext();

//2.Provide a Context
export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  return (
    <loginContext.Provider value={{ login }}>{children}</loginContext.Provider>
  );
};

//3. Use Context using Custom Hook

export const useLoginContext = () => {
  // this is Our Custom Hook

  return useContext(loginContext);
};
