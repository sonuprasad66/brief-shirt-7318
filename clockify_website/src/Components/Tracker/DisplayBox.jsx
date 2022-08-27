import React from "react";
import {Box, SimpleGrid} from "@chakra-ui/react";
import { FaDollarSign,FaListUl } from "react-icons/fa";
import styles from "../Styles/TrackerCss/DisplayBox.module.css";

export const DisplayBox = () => {
  return (
    <div className={styles.DisplayBox}>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing="0px">
        {/* -------------------------------------------------------------------------- */}
        <Box
          border="1px solid grey"
          height="60px"
          className={styles.Display_grid_box1}
        >
          <div className={styles.DisplayBox_1}>
            <div className={styles.DisplayBox1_input}>
              <input type="text" placeholder="What are you working on?" />
            </div>
            <div className={styles.DisplayBox_project}>
              <img
                src="https://app.clockify.me/assets/ui-icons/plus-blue.svg"
                alt="p"
              />
              <span className={styles.DisplayBox_project_span}>Project</span>
            </div>
          </div>
        </Box>
        {/* -------------------------------------------------------------------------- */}
        <Box border="1px solid grey" height="60px"  className={styles.Display_grid_box2}>
          <div className={styles.DisplayBox_2}>
            <div className={styles.DisplayBox2_edit}>
                <img className={styles.DisplayBox2_edit_img} src="https://app.clockify.me/assets/ui-icons/tag-gray.svg" alt="e" />
            </div>

            <div className={styles.DisplayBox2_dollor}>
               <div className={styles.DisplayBox2_dollor_c}><FaDollarSign /></div>
            </div>

            <div className={styles.DisplayBox2_start}>
                <div className={styles.DisplayBox2_start_counter}>00:00:00</div>
                <div className={styles.DisplayBox2_start_btn}>START</div>
            </div>


            <div className={styles.DisplayBox2_toggle}>
           <div> <img
                src="https://app.clockify.me/assets/ui-icons/plus-blue.svg"
                alt="p"
              /></div>
                <div><FaListUl/></div>
            </div>
          </div>
        </Box>
        {/* -------------------------------------------------------------------------- */}
      </SimpleGrid>
    </div>
  );
};
