import React from "react";
import {DisplayBox} from "./DisplayBox";
import {Sidebar} from "./Sidebar";
import {TrackerNavbar} from "./TrackerNavbar";
import styles from "../Styles/TrackerCss/DisplayBox.module.css";

export const TrackerPage = () => {
  return (
    <div className={styles.Tracker_bg}>
      <TrackerNavbar />
      {/* <Sidebar /> */}
      <DisplayBox />
    </div>
  );
};

{
  /* <img
onClick={onOpen}
src="https://app.clockify.me/assets/nav-icons/help.svg"
alt="?"
/> */
}
