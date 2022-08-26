import React from "react";
import styles from "./Footer.module.css";
import {Box, SimpleGrid} from "@chakra-ui/react";
import {
  FaTwitter,
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className={styles.Footer}>
      {/* ============================================================================================ */}
      <div className={styles.Footer_div1}>
        <SimpleGrid columns={[1, 2, 2, 5]} spacing="20px">
          {/* -------------------------------------------------------------------------- */}
          <Box bg="tomato" height="350px"></Box>
          {/* -------------------------------------------------------------------------- */}
          <Box bg="" height="350px"  className={styles.Footer_div1_box}>
            <div className={styles.Footer_div1_box1}>
              <h3>Product</h3>

              <a href="" className={styles.Footer_div1_box1a}>
                Features
              </a>
              <br />
              <a href="" className={styles.Footer_div1_box1a}>
                Download
              </a>
              <br />
              <a href="" className={styles.Footer_div1_box1a}>
                Integrations
              </a>
              <br />
              <a href="" className={styles.Footer_div1_box1a}>
                Upgrade
              </a>
              <br />
              <a href="" className={styles.Footer_div1_box1a}>
                API
              </a>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box bg="tomato" height="350px"></Box>
          {/* -------------------------------------------------------------------------- */}
          <Box bg="tomato" height="350px"></Box>
          {/* -------------------------------------------------------------------------- */}
          <Box bg="tomato" height="350px"></Box>
          {/* -------------------------------------------------------------------------- */}
        </SimpleGrid>
      </div>

      {/* ============================================================================================ */}
      <div className={styles.Footer_div2}>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing="5px">
          {/* -------------------------------------------------------------------------- */}
          <Box bg="" height="30px">
            <div className={styles.Footer_div2_box1}>
              <div>
                <a href="">© 2022 Clockify</a>
              </div>
              <div>
                <a href="">Sitemap</a>
              </div>
              <div>
                <a href="">Cookies</a>
              </div>
              <div>
                <a href="">Terms</a>
              </div>
              <div>
                <a href="">Privacy</a>
              </div>
              <div>
                <a href="">Security</a>
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box bg="" height="30px">
            <div className={styles.Footer_div2_box2}>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaInstagramSquare />
              </div>
              <div>
                <FaYoutube />
              </div>
              <div>
                <FaLinkedin />
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box bg="" height="30px">
            <div className={styles.Footer_div2_box3}>
              <a href="">
                COING Inc, 2100 Geng Road, Suite 210, Palo Alto, CA 94303, USA,
                +1-855-738-8741
              </a>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box bg="" height="30px">
            <div className={styles.Footer_div2_box4}>
              <div>
                <img
                  src="https://clockify.me/assets/images/globe.svg"
                  alt="a"
                />
              </div>
              <div>
                <p>ESPAÑOL </p>
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------- */}
        </SimpleGrid>
      </div>

      {/* ============================================================================================ */}
    </div>
  );
};
