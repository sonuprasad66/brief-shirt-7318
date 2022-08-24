import React from "react";
import styles from "../Styles/HomeCss/TimeTrackerVideo.module.css";

export const TimeTrackerVideo = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Customer_logo}>
        <img
          src="https://clockify.me/assets/images/customers-light-gray-3.svg"
          alt="C_logo"
        />
      </div>
      <div className={styles.Customer_video_img}>
        <img
          src="https://clockify.me/assets/images/time-tracker-screenshot.svg"
          alt="video_img"
        />
      </div>
      <div className={styles.Customer_video_logo}>
        <img
          src="https://clockify.me/assets/images/play-button.svg"
          alt="v_play_img"
        />
      </div>

      <div>
        <span>toggle</span>
      </div>
    </div>
  );
};
