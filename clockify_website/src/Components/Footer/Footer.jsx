import React from "react";
import styles from "./Footer.module.css";
import {Box, SimpleGrid} from "@chakra-ui/react";
export const Footer = () => {
  return (
    <div className={styles.Footer}>
      {/* ============================================================================================ */}
      <div className={styles.Footer_div1}>
        <SimpleGrid columns={[1, 2, 2, 5]} spacing="20px">
          <Box bg="tomato" height="350px" width="250px"></Box>
          <Box bg="tomato" height="350px" ></Box>
          <Box bg="tomato" height="350px" ></Box>
          <Box bg="tomato" height="350px" ></Box>
          <Box bg="tomato" height="350px" ></Box>
        </SimpleGrid>
      </div>

      {/* ============================================================================================ */}
      <div className={styles.Footer_div2}>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
         
        </SimpleGrid>
      </div>

      {/* ============================================================================================ */}
    </div>
  );
};
