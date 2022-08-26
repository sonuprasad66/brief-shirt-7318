import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "../Styles/HomeCss/StartWithClockify.module.css";

export const StartWithClockify = () => {
  const nevigate = useNavigate();
  const handleStart = () => {
    nevigate("/tracker");
  };

  return (
    <div className={styles.World_Class_support}>
      <div className={styles.World_Class_support_box}>
        <div className={styles.World_Class_support_box_h1}>
          <h2>Start tracking time with Clockify</h2>
        </div>

        <div className={styles.World_Class_support_box_p}>
          <p>24/7 Support</p>
          <p>•</p>
          <p>Cancel Anytime</p>
          <p>•</p>
          <p>Free Forever</p>
        </div>

        <div className={styles.Header__button_div}>
          <button className={styles.Header__button} onClick={handleStart}>
            Create FREE account
          </button>
        </div>
        <div className={styles.Header__text}>
          <img
            src="https://clockify.me/assets/images/signed-up-icon.svg"
            alt="p"
          />
          <a href="#">135,920 people signed up last month</a>
        </div>
      </div>
    </div>
  );
};
