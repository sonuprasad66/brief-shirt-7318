import {Box, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/HomeCss/WhyWithClockify.module.css";

export const WhyWithClockify = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Advantage_box1}>
        <h2>Why track time with Clockify</h2>
      </div>
      <div className={styles.Advantage_box2}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="100px">
          {/* -------------------------------------------------------------------------------------------------- */}
          <Box bg="" height="350px" className={styles.Advantage_row_box}>
            <div className={styles.Advantage_row_box_content}>
              <div className={styles.Advantage_row_box_content1}>
                <h3>Boost productivity</h3>
              </div>

              <div className={styles.Advantage_row_box_content2}>
                <p>
                  Track time you spend on activities, see where your time goes,
                  and improve your time management skills.
                </p>
              </div>

              <div className={styles.Advantage_row_box_content3}>
                <span>Learn more →</span>
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------------------------------- */}
          <Box bg="" height="350px" className={styles.Advantage_row_box}>
            <div className={styles.Advantage_row_box_content}>
              <div className={styles.Advantage_row_box_content1}>
                <h3>Bill clients</h3>
              </div>

              <div className={styles.Advantage_row_box_content2}>
                <p>
                  Track billable time and expenses, show clients how much you've
                  worked, see how much you've earned, and create invoices.
                </p>
              </div>

              <div className={styles.Advantage_row_box_content3}>
                <span>Learn more →</span>
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------------------------------- */}

          <Box bg="" height="350px" className={styles.Advantage_row_box}>
            <div className={styles.Advantage_row_box_content}>
              <div className={styles.Advantage_row_box_content1}>
                <h3>Manage team</h3>
              </div>

              <div className={styles.Advantage_row_box_content2}>
                <p>
                  Track attendance for payroll and accounting, see who works on
                  what, and manage workload among teams.
                </p>
              </div>

              <div className={styles.Advantage_row_box_content3}>
                <span>Learn more →</span>
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------------------------------- */}

          <Box bg="" height="350px" className={styles.Advantage_row_box}>
            <div className={styles.Advantage_row_box_content}>
              <div className={styles.Advantage_row_box_content1}>
                <h3>Business intelligence</h3>
              </div>

              <div className={styles.Advantage_row_box_content2}>
                <p>
                  Track time and analyze your company's efficiency across
                  projects, clients, departments, and employees.
                </p>
              </div>

              <div className={styles.Advantage_row_box_content3}>
                <span>Learn more →</span>
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------------------------------- */}
        </SimpleGrid>
      </div>
      {/* ================================================================================= */}
      <div className={styles.Uniqueness_price}>
        <div className={styles.Uniqueness_price_box}>
          <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px">
            {/* -------------------------------------------------------------------------------------------------- */}
            <Box bg="" height="300px">
              <img className={styles.Uniqueness_price_box_img}
                src="https://clockify.me/assets/images/free-forever-clock-4.svg"
                alt="price"
              />
            </Box>
            {/* -------------------------------------------------------------------------------------------------- */}
            <Box bg="" height="320px" className={styles.Uniqueness_text}>
              <div className={styles.Uniqueness_text_item}>
                <div>
                  <p >
                    <span className={styles.Uniqueness_text_item_p}>FREE</span> <br />
                   <span className={styles.Uniqueness_text_item_2}> FOREVER!</span>
                  </p>
                </div>

                <div>
                  <span className={styles.Uniqueness_text_item_li}>✓</span>
                  <span className={styles.Uniqueness_text_item_lit}> Unlimited users</span>
                </div>
                <div>
                  <span className={styles.Uniqueness_text_item_li}>✓</span>
                  <span className={styles.Uniqueness_text_item_lit}> Unlimited tracking</span>
                </div>
                <div>
                  <span className={styles.Uniqueness_text_item_li}>✓</span>
                  <span className={styles.Uniqueness_text_item_lit}> Unlimited projects</span>
                </div>

                <div className={styles.Uniqueness_price_text_a}><a href="">Upgrade →</a></div>
              </div>
            </Box>
            {/* -------------------------------------------------------------------------------------------------- */}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
