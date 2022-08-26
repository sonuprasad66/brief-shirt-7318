import React from "react";
import {FaAlignJustify} from "react-icons/fa";
import styles from "../Styles/TrackerCss/TrackerNavbar.module.css";
import {IconModal} from "./IconModal";
export const TrackerNavbar = () => {
  return (
    <div className={styles.Container_Tnavbar}>
      {/* -------------------------------------------------------------------------------------- */}

      <div className={styles.Container_Tnavbar_box1}>
        <div className={styles.Container_Tnavbar_box1_icon}>
          <FaAlignJustify />
        </div>
        <div>
          <img
            className={styles.Container_Tnavbar_box1_img}
            src="https://clockify.me/assets/images/clockify-logo.svg"
            alt="l"
          />
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      <div className={styles.Container_Tnavbar_box2}>
        <div className={styles.Tnavbar_box2_workspace}> workspace </div>
        <div>
          <button className={styles.Tnavbar_box2_upbtn}>UPGRADE</button>
        </div>
        <div className={styles.Tnavbar_box2_qicon}>{<IconModal />}</div>
        <div className={styles.Tnavbar_box2_bellicon}>
          <img
            src="https://app.clockify.me/assets/nav-icons/notification.svg"
            alt="b"
          />
        </div>
        <div className={styles.Tnavbar_box2_sort_name}>SS</div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
    </div>
  );
};
