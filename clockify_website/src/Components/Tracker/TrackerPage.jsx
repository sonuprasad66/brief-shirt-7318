import React from "react";
import {DisplayBox} from "./DisplayBox";
import {TrackerNavbar} from "./TrackerNavbar";
import styles from "../Styles/TrackerCss/DisplayBox.module.css";
import {TodoList} from "./Todo/TodoList";

export const TrackerPage = () => {
  return (
    <div className={styles.Tracker_bg}>
      <TrackerNavbar />
      <DisplayBox />
      {/* <TodoList /> */}
    </div>
  );
};
