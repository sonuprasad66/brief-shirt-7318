import React from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "../Styles/HomeCss/TimeTrackerVideo.module.css";
import {VideoModal} from "./VideoModal";

export const TimeTrackerVideo = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);

  let handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  let handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Customer_logo}>
        <img
          src="https://clockify.me/assets/images/customers-light-gray-3.svg"
          alt="C_logo"
        />
      </div>
      <div className={styles.Customer_video_img}>
        <div className={styles.Customer_video_logo} onClick={handleModal}>
          {/* <img
            src="https://clockify.me/assets/images/play-button.svg"
            alt="v_play_img"
          /> */}
          {<VideoModal modal={modal} />}
        </div>

        {!toggle && (
          <img
            src="https://clockify.me/assets/images/time-tracker-screenshot.svg"
            alt="video_img"
          />
        )}
        {toggle && (
          <img
            src="https://clockify.me/assets/images/time-tracker-dark-screenshot.svg"
            alt="video_img"
          />
        )}
      </div>

      <div className={styles.toggle_btn} onClick={handleToggle}>
        {toggle ? (
          <span className={styles.span2}></span>
        ) : (
          <span className={styles.span1}></span>
        )}
      </div>
    </div>
  );
};
