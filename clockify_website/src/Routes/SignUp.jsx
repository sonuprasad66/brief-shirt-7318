import React from "react";
import {Link} from "react-router-dom";
import styles from "../Components/Styles/OtherPages/SignUp.module.css";
export const SignUp = () => {
  return (
    <div className={styles.Main}>
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
          <Link to="/login">Log in</Link>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------ */}
      <div className={styles.Signup_text}>
        <div className={styles.Signup_text1}> Get started with Clockify </div>
        <div className={styles.Signup_text2}>
          <p>
            Create a free account to start tracking time and supercharge your
            productivity.
          </p>
        </div>
        <div className={styles.Signup_text3}>
          <span> No credit card required . Unsubscribe at any time </span>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className={styles.Signup_input_box}>
        <div className={styles.Signup_inner_input_box}>
         <div> <h2 className={styles.Input_h2}>Sign up</h2></div>
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
          <div  className={styles.Input_checkbox}>
            <input type="checkbox" />
            <label> I agree to the</label>
            <a href="">Terms of Use</a>
          </div>
         <div className={styles.Signup_btn}> <button>CREATE FREE ACCOUNT</button></div>
          <div className={styles.Signup_or}>
            <div className={styles.Signup_l}></div>
            <span >OR</span>
            <div className={styles.Signup_l}></div>
          </div>

          <div className={styles.Signup_google}>
            <img src="https://app.clockify.me/assets/ui-icons/icon-google.svg" alt="g" />
            <span> Continue with Google</span>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------ */}

      <div className={styles.Signup_after}>
        <div className={styles.Signup_language}>
        <img src="https://app.clockify.me/assets/ui-icons/translate.svg" alt="language" />
        <span> English </span>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className={styles.Signup_condition}>
          <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="t" />
          <span>Your data is safe with us:</span>
          <a href="">Security Privacy</a>
        </div>
        
      </div>
    </div>
  );
};
