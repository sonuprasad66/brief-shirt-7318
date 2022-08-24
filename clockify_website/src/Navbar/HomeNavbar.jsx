import React from "react";
import styles from "./Navbar.module.css";

export const HomeNavbar = () => {
  return (
    <div className={styles.HNavbar}>
      <div className={styles.HNav1}>
        <div>
          <a href="/">
            <img
              src="https://clockify.me/assets/images/clockify-logo.svg"
              alt="home"
            />
          </a>
        </div>

        <div className={styles.HNav1_fd}>
          <a href="/">FEATURES</a>
        </div>

        <div className={styles.HNav1_fd}>DOWNLOAD</div>
      </div>

      <div className={styles.HNav2}>
        <div className={styles.HNav1_fd}>LOGIN</div>
        <div className={styles.HNav2_signup}>SIGN UP FREE</div>
      </div>
    </div>
  );
};
