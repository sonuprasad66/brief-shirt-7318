import React from "react";
import {useContext} from "react";
import {Navigate} from "react-router-dom";
import {AppContext} from "../AuthContext/AuthContextProvider";

export const PrivateRoutes = ({children}) => {
  const {isAuth} = useContext(AppContext);

  if (isAuth.isAuth == false) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
};
