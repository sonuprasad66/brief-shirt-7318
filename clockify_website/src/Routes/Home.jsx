import React from "react";
import {FreeTimeTracker} from "../Components/Home/FreeTimeTracker";
import {HomeNavbar} from "../Navbar/HomeNavbar";

export const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <FreeTimeTracker />
    </div>
  );
};
