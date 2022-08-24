import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/HomeCss/TimeTrackingApp.module.css";

export const TimeTrackingApp = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Everywere_div1}>
        <div>
          <h2>Time tracking apps</h2>
        </div>
        <div>
          <p>
            Clockify works across devices. Track time from anywhere — all data
            is synced online.
          </p>
        </div>
      </div>
      <div className={styles.Everywere_div2}>
        {/* // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}` //
        will have the same effect. */}
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="100px">
          <Box height="600px">
            <div className={styles.Everywere_div2_img}>
              <img
                src="https://clockify.me/assets/images/time-tracking-app-desktop.png"
                alt="App"
              />
            </div>
            <div className={styles.Everywere_div2_text}>
              <h3>DESKTOP APP</h3>
            </div>
            <div className={styles.Everywere_div2_btn}>
              <button colorScheme="teal" variant="ghost">
                Windows
              </button>
              <button colorScheme="teal" variant="ghost">
                Mac
              </button>
              <button colorScheme="teal" variant="ghost">
                Linux
              </button>
            </div>
          </Box>

          <Box height="600px">
            <div className={styles.Everywere_div2_img}>
              <img
                src="https://clockify.me/assets/images/time-tracking-app-web.png"
                alt="App"
              />
            </div>
            <div className={styles.Everywere_div2_text}>
              <h3>WEB APP</h3>
            </div>
            <div className={styles.Everywere_div2_btn}>
              <button colorScheme="teal" variant="ghost">
                Edge
              </button>
              <button colorScheme="teal" variant="ghost">
                Chrom
              </button>
              <button colorScheme="teal" variant="ghost">
                Firefox
              </button>
            </div>
          </Box>

          <Box height="600px">
            <div className={styles.Everywere_div2_img}>
              <img
                src="https://clockify.me/assets/images/time-tracking-app-mobile.png"
                alt="App"
              />
            </div>
            <div className={styles.Everywere_div2_text}>
              <h3>MOBILE APP</h3>
            </div>
            <div className={styles.Everywere_div2_btn}>
              <button colorScheme="teal" variant="ghost">
                Android
              </button>
              <button colorScheme="teal" variant="ghost">
                iOS
              </button>
            </div>
          </Box>

          <Box height="600px">
            <div className={styles.Everywere_div2_img}>
              <img
                src="https://clockify.me/assets/images/time-tracking-app-kiosk.png"
                alt="App"
              />
            </div>
            <div className={styles.Everywere_div2_text}>
              <h3>KIOSK APP</h3>
            </div>
            <div className={styles.Everywere_div2_btn}>
              <button colorScheme="teal" variant="ghost">
                Any device
              </button>
            </div>
          </Box>
        </SimpleGrid>
      </div>
    </div>
  );
};
