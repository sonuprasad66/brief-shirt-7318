import React from "react";
import styles from "./Footer.module.css";
import {Box, SimpleGrid} from "@chakra-ui/react";
import {Link} from "react-router-dom";
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
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <SimpleGrid columns={[1, 1, 1, 2]} spacing="40px">
          <Box></Box>
          <Box></Box>
        </SimpleGrid>

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className={styles.Footer_div1_first}>
          <div>
            <Link to="/">
              <img
                className={styles.Footer_div1_first_img}
                src="https://clockify.me/assets/images/clockify-logo.svg  "
                alt="fi"
              />
            </Link>
          </div>
          <div className={styles.Footer_div1_first_p}>
            <p>
              The world's leading time tracker and <br /> timesheet software for
              teams
            </p>
          </div>
          <div className={styles.Footer_div1_first_signup}>
            <Link to="/signup">SIGN UP FREE</Link>
          </div>
          <div className={styles.Footer_div1_first_login}>
            <Link to="/login">LOG IN</Link>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}
        <div className={styles.Footer_div1_secound}>
          <SimpleGrid columns={[1, 1, 2, 4]} spacing="20px">
            {/* -------------------------------------------------------------------------- */}
            <Box height="100%" className={styles.Footer_div1_box}>
              <div className={styles.Footer_div1_box1}>
                <h3>PRODUCT</h3>

                <div className={styles.Footer_div1_box1a}>Features</div>

                <div className={styles.Footer_div1_box1a}>Download</div>

                <div className={styles.Footer_div1_box1a}>Integrations</div>

                <div className={styles.Footer_div1_box1a}>Upgrade</div>

                <div className={styles.Footer_div1_box1a}>API</div>
              </div>
            </Box>
            {/* -------------------------------------------------------------------------- */}
            <Box height="100%" className={styles.Footer_div1_box}>
              <div className={styles.Footer_div1_box1}>
                <h3>SOLUTION</h3>

                <div className={styles.Footer_div1_box1a}>Features</div>

                <div className={styles.Footer_div1_box1a}>Download</div>

                <div className={styles.Footer_div1_box1a}>Integrations</div>

                <div className={styles.Footer_div1_box1a}>Upgrade</div>

                <div className={styles.Footer_div1_box1a}>API</div>
              </div>
            </Box>
            {/* -------------------------------------------------------------------------- */}
            <Box height="100%" className={styles.Footer_div1_box}>
              <div className={styles.Footer_div1_box1}>
                <h3>COMPANY</h3>

                <div className={styles.Footer_div1_box1a}>Features</div>

                <div className={styles.Footer_div1_box1a}>Download</div>

                <div className={styles.Footer_div1_box1a}>Integrations</div>

                <div className={styles.Footer_div1_box1a}>Upgrade</div>

                <div className={styles.Footer_div1_box1a}>API</div>
              </div>
            </Box>
            {/* -------------------------------------------------------------------------- */}
            <Box height="100%" className={styles.Footer_div1_box}>
              <div className={styles.Footer_div1_box1}>
                <h3>SUPPORT</h3>

                <div className={styles.Footer_div1_box1a}>Features</div>

                <div className={styles.Footer_div1_box1a}>Download</div>

                <div className={styles.Footer_div1_box1a}>Integrations</div>

                <div className={styles.Footer_div1_box1a}>Upgrade</div>

                <div className={styles.Footer_div1_box1a}>API</div>
              </div>
            </Box>
            {/* -------------------------------------------------------------------------- */}
          </SimpleGrid>
        </div>
      </div>

      {/* ###################################################################################### */}

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
