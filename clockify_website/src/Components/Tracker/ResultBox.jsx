import {Box, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import {FaDollarSign, FaEllipsisV} from "react-icons/fa";
import styles from "../Styles/TrackerCss/ResultBox.module.css";
import {result} from "./DisplayBox";

export const ResultBox = ({projectData}) => {
  let date = new Date().now;

  return (
    <div className={styles.Container_Results}>
      <div className={styles.Container_Results_box1}>
        <div>Task</div>
        <div>Total : 00:00:00</div>
      </div>
      {/* ------------------------------------------------------------------- */}

      {projectData?.map((elem) => (
        <div className={styles.Container_Results_box2}>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="5px">
            <Box bg="" height="80px">
              <div className={styles.Result_box1}>
                <div>
                  <h3>
                    <span>Task Name :- </span>
                    {elem.task}
                  </h3>
                </div>
                <div>
                  <span>Project Name :- </span>
                  {elem.project}
                </div>
              </div>
            </Box>
            {/* ====================================================================== */}
            <Box height="80px">
              <div className={styles.Result_box2}>
                {/* ............................................................. */}
                <div className={styles.Result_box2_logo}>
                  <div>
                    <img
                      className={styles.DisplayBox2_edit_img}
                      src="https://app.clockify.me/assets/ui-icons/tag-gray.svg"
                      alt="e"
                    />
                  </div>

                  <div>
                    <FaDollarSign />
                  </div>
                </div>
                {/* ............................................................. */}
                <div className={styles.Result_box2_date}>
                  <div></div>
                  <div></div>
                  <div className={styles.Result_box2_timer_count}><img src="https://app.clockify.me/assets/ui-icons/calendar-gray.svg" alt="" /></div>
                </div>
                {/* ............................................................. */}

                <div className={styles.Result_box2_timer}>
                  <div className={styles.Result_box2_timer_count}>00:00:00</div>
                  <div  className={styles.Result_box2_timer_count}><img src="https://app.clockify.me/assets/ui-icons/play.svg" alt="" /></div>
                </div>
                {/* ............................................................. */}

                <div className={styles.Result_box2_delete}>
                  <FaEllipsisV />
                </div>
                {/* ............................................................. */}
              </div>
            </Box>
          </SimpleGrid>
        </div>
      ))}
    </div>
  );
};
