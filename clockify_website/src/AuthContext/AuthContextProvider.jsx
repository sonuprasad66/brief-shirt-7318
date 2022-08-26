import React from "react";
import {createContext} from "react";
import {useState} from "react";

export const AppContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState({isAuth: false, tolen: null});

  const userLogin = (token) => {
    setIsAuth({isAuth: true, toke: token});
  };

  return (
    <div>
      <AppContext.Provider value={{isAuth, userLogin}}>
        {children}
      </AppContext.Provider>
    </div>
  );
};
