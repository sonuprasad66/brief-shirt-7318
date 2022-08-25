import React from "react";
import {Link} from "react-router-dom";
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import styles from "../Components/Styles/OtherPages/Login.module.css";

export const Login = () => {
  return (
    <div className={styles.Container_Login}>
      <div className={styles.Container_Login1}>
        <div>
          {/* ------------------------------------------------------------------------------ */}
          <div className={styles.Signup_navbar}>
            <div className={styles.Signup_navbar_img}>
              <a href="/">
                <img
                  src="https://clockify.me/assets/images/clockify-logo.svg"
                  alt="home"
                />
              </a>
            </div>
            <div className={styles.Signup_navbar_login}>
              <span className={styles.Signup_navbar_acc}>
                Don't have an account?
              </span>
              <Link to="/signup"> Sign Up</Link>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------ */}
          <div className={styles.Signup_input_box}>
            <div className={styles.Signup_inner_input_box}>
              <div>
                <h2 className={styles.Input_h2}>Log In</h2>
              </div>
              <input
                className={styles.Input_email}
                type="email"
                placeholder="Enter Email"
              />
              <input
                className={styles.Input_email}
                type="password"
                placeholder="Enter Password"
              />
              <div className={styles.Input_checkbox}>
                <div className={styles.Input_checkbox1}>
                  <input type="checkbox" />
                  <label>
                    {" "}
                    Stay logged <br />
                    <span className={styles.Input_checkbox_in}>in</span>{" "}
                  </label>
                </div>
                <div className={styles.Input_forgot_password}>
                  <a href="">
                    Forgot <br /> password?
                  </a>
                </div>
              </div>
              <div className={styles.Signup_btn}>
                {" "}
                <button>LOG IN</button>
              </div>
              <div className={styles.Signup_or}>
                <div className={styles.Signup_l}></div>
                <span>OR</span>
                <div className={styles.Signup_l}></div>
              </div>

              <div className={styles.Signup_google}>
                <img
                  src="https://app.clockify.me/assets/ui-icons/icon-google.svg"
                  alt="g"
                />
                <span> Continue with Google</span>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------ */}

          <div className={styles.Signup_after}>
            <div className={styles.Signup_language}>
              <img
                src="https://app.clockify.me/assets/ui-icons/translate.svg"
                alt="language"
              />
              <span> English </span>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className={styles.Signup_condition}>
              <img
                src="https://app.clockify.me/assets/ui-icons/safe.svg"
                alt="t"
              />
              <span>Your data is safe with us:</span>
              <a href="">Security Privacy</a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================================================ */}

      <div className={styles.Container_Login2}>
        <div className={styles.Container_Login2_text}>
          <div className={styles.Container_Login2_text1}>
            <button  className={styles.Container_Login2_text1_btn}>NEW</button>
            <h1  className={styles.Container_Login2_text1_h1}>Scheduling</h1>
          </div>

          <div className={styles.Container_Login2_text2}>
            <div className={styles.Container_Login2_text2_t}>
              Visualize projects on a timeline and plan team's capacity (see
              who's busy and who's available).
            </div>
          </div>

          <div className={styles.Container_Login2_text3}>
            <button  className={styles.Container_Login2_text3_btn}>SEE HOE IT WORKS</button>
          </div>
        </div>

        {/* ==================================================================================================== */}
        <div className={styles.Container_Login2_img}>
          <img
            className={styles.Container_Login2_image}
            src="https://app.clockify.me/assets/features-info/scheduling-promo.webp"
            alt="ls"
          />
        </div>
      </div>
    </div>
  );
};
