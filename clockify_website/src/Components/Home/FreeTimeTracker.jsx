import React from "react";
import styles from "../Styles/HomeCss/FreeTimeTracker.module.css";
import {Button} from "@chakra-ui/react";

export const FreeTimeTracker = () => {
  return (
    <div className={styles.Container}>
      <h1>
        The most popular free
        <span className={styles.h1time_tracker}> time tracker</span> for teams
      </h1>
      <div className={styles.Header__desc}>
        <p>
          Time tracking software used by millions. Clockify is a simple time
          tracker and timesheet app that lets you and your team track work hours
          across projects. Unlimited users, free forever.
        </p>

        <div className={styles.Hero_stars}>
          <div>
            <img
              src="https://clockify.me/assets/images/stars-small.svg"
              alt="star"
            />
          </div>
          <div className={styles.Hero_stars2}>4,000+ Reviews</div>
        </div>
      </div>
      <div className={styles.Header__button_div}>
        <button className={styles.Header__button} colorScheme="blue">
          Get Started - It's Free!
        </button>
      </div>

      <div className={styles.Header__text}>
        <img
          src="https://clockify.me/assets/images/signed-up-icon.svg"
          alt="p"
        />
        <a href="#">76,318 people signed up last month</a>
      </div>
    </div>
  );
};
