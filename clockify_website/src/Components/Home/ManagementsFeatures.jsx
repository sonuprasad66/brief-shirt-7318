import React from "react";
import styles from "../Styles/HomeCss/ManagementsFeatures.module.css";
import {Box, Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import {Button, ButtonGroup} from "@chakra-ui/react";

export const ManagementsFeatures = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container1}>
        <div className={styles.Features_header}>
          <h2>Time management features</h2>
        </div>
        <div className={styles.Features_text_about}>
          <p>
            Track productivity, attendance, and billable hours with a simple
            time tracker and timesheet.
          </p>
        </div>
      </div>

      <div className={styles.Container2}>
        {/* Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
   will have the same effect. */}

        <SimpleGrid columns={[1, 1, 1, 2]} spacing="150px">
          <Box bg="white" height="400px">
            <div>
              <h3 className={styles.Homepage_h3}>Timekeeping</h3>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Timer</span>
              <br />
              <span className={styles.Homepage_span2}>
                Track work hours in real time.
              </span>
            </div>

            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Timesheet </span>
              <br />
              <span className={styles.Homepage_span2}>
                Enter time in a weekly timesheet.
              </span>
            </div>

            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Calendar </span>
              <br />
              <span className={styles.Homepage_span2}>
                Visually block out and manage time.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Auto tracker </span>
              <br />
              <span className={styles.Homepage_span2}>
                Track apps and websites you use.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Kiosk </span>
              <br />
              <span className={styles.Homepage_span2}>
                Clock in from a shared device.
              </span>
            </div>
          </Box>
          {/* ----------------------------------------------------------------------------------- */}
          <Box bg="white" height="450px">
            <div className={styles.Homepage_Griditem_img_div}>
              <img
                className={styles.Homepage_Griditem_img}
                src="https://clockify.me/assets/images/feature-time-tracker-methods.svg"
                alt="a"
              />
            </div>
          </Box>
          {/* ----------------------------------------------------------------------------------- */}
          <Box bg="white" height="450px">
            <div>
              <img
                className={styles.Homepage_Griditem_img}
                src="https://clockify.me/assets/images/feature-time-reporting-activity.svg"
                alt="b"
              />
            </div>
          </Box>
          {/* ----------------------------------------------------------------------------------- */}
          <Box bg="white" height="400px">
            <div>
              <h3 className={styles.Homepage_h3}>Reporting</h3>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Reports </span>
              <br />
              <span className={styles.Homepage_span2}>
                Analyze and export tracked time.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Activity </span>
              <br />
              <span className={styles.Homepage_span2}>
                See who works on what.
              </span>
            </div>

            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Rates </span>
              <br />
              <span className={styles.Homepage_span2}>
                See earnings, cost, and profit.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Progress </span>
              <br />
              <span className={styles.Homepage_span2}>
                Track project estimates and budget.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Location </span>
              <br />
              <span className={styles.Homepage_span2}>
                See visited sites and routes.
              </span>
            </div>
          </Box>
          {/* ----------------------------------------------------------------------------------- */}
          <Box bg="white" height="400px">
            <div>
              <h3 className={styles.Homepage_h3}>Management</h3>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Scheduling </span>
              <br />
              <span className={styles.Homepage_span2}>
                Schedule work, assignments, and shifts.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Time off </span>
              <br />
              <span className={styles.Homepage_span2}>
                Manage leaves and holidays.
              </span>
            </div>

            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Approval </span>
              <br />
              <span className={styles.Homepage_span2}>
                Submit and approve timesheets.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Invoicing </span>
              <br />
              <span className={styles.Homepage_span2}>
                Create invoices from billable time.
              </span>
            </div>
            <div className={styles.Homepage_Griditem}>
              <span className={styles.Homepage_span1}>Expenses </span>
              <br />
              <span className={styles.Homepage_span2}>
                Record project expenses and fees.
              </span>
            </div>
          </Box>
          {/* ----------------------------------------------------------------------------------- */}
          <Box bg="white" height="450px">
            <div>
              <img
                className={styles.Homepage_Griditem_img}
                src="https://clockify.me/assets/images/feature-team-scheduling.svg"
                alt="c"
              />
            </div>
          </Box>
          {/* ----------------------------------------------------------------------------------- */}
        </SimpleGrid>
      </div>
      <div className={styles.Container3}>
        <Button className={styles.Features_button} colorScheme="blue">
          SEE ALL FEATURES
        </Button>
      </div>
    </div>
  );
};
