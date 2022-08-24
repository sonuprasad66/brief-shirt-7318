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
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="40px">
          <Box bg="tomato" height="400px"></Box>
          <Box bg="tomato" height="400px"></Box>
          <Box bg="tomato" height="400px"></Box>
          <Box bg="tomato" height="400px"></Box>
        </SimpleGrid>
      </div>
    </div>
  );
};
