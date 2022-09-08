import React from "react";
import {DisplayBox} from "./DisplayBox";
import {TrackerNavbar} from "./TrackerNavbar";
import styles from "../Styles/TrackerCss/DisplayBox.module.css";
import {ResultBox} from "./ResultBox";

export const TrackerPage = () => {
  return (
    <div className={styles.Tracker_bg}>
      <TrackerNavbar />
      <DisplayBox />
      {/* <ResultBox /> */}
    </div>
  );
};
