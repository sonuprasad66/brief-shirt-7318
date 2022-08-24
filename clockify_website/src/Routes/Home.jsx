import React from "react";
import {FreeTimeTracker} from "../Components/Home/FreeTimeTracker";
import {ManagementsFeatures} from "../Components/Home/ManagementsFeatures";
import {TimeTrackerVideo} from "../Components/Home/TimeTrackerVideo";
import {TimeTrackingApp} from "../Components/Home/TimeTrackingApp";
import { WhyWithClockify } from "../Components/Home/WhyWithClockify";
import {HomeNavbar} from "../Navbar/HomeNavbar";

export const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <FreeTimeTracker />
      <TimeTrackerVideo />
      <ManagementsFeatures />
      <TimeTrackingApp />
      <WhyWithClockify />
    </div>
  );
};
