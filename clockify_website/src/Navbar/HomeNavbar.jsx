import React from "react";
import {Link} from "react-router-dom";
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
        <div className={styles.HNav1_fd}>
          <Link to="/login">LOGIN</Link>
        </div>
        <div className={styles.HNav2_signup}>
          <Link to="/signup">SIGN UP FREE</Link>
        </div>
      </div>
    </div>
  );
};
