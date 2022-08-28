import React from "react";
import {createContext} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export const AppContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState({isAuth: false, tolen: null});
  const navigate = useNavigate();
  const userLogin = (token) => {
    setIsAuth({isAuth: true, toke: token});
  };

  const userLogout = (token) => {
    setIsAuth({isAuth: false, toke: null});
    navigate("/");
  };

  return (
    <div>
      <AppContext.Provider value={{isAuth, userLogin, userLogout}}>
        {children}
      </AppContext.Provider>
    </div>
  );
};
