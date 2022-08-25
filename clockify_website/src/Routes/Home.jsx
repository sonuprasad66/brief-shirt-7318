import React from "react";
import {Footer} from "../Components/Footer/Footer";
import {FreeTimeTracker} from "../Components/Home/FreeTimeTracker";
import {ManagementsFeatures} from "../Components/Home/ManagementsFeatures";
import {StartWithClockify} from "../Components/Home/StartWithClockify";
import {TimeTrackerVideo} from "../Components/Home/TimeTrackerVideo";
import {TimeTrackingApp} from "../Components/Home/TimeTrackingApp";
import {WhyWithClockify} from "../Components/Home/WhyWithClockify";
import {WorldClassSupport} from "../Components/Home/WorldClassSupport";
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
      <WorldClassSupport />
      <StartWithClockify />
      {/* <Footer /> */}
    </div>
  );
};
