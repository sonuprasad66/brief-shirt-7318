import React from "react";
import {useEffect} from "react";
import {useRef} from "react";
import {useState} from "react";
import {Box, SimpleGrid} from "@chakra-ui/react";
import {FaDollarSign, FaListUl} from "react-icons/fa";
import styles from "../Styles/TrackerCss/DisplayBox.module.css";
import {AddProjectModal} from "./AddProjectModal";
import {ResultBox} from "./ResultBox";

// =================================================================================

let fixTime = (time) => (time < 10 ? "0" + time : time);

let getTime = (time) => {
  let secound = time % 60;
  let min = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / 3600) % 60;

  return `${fixTime(hours)}:${fixTime(min)}:${fixTime(secound)}`;
};

// =================================================================================

export const DisplayBox = ({handleAdd}) => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState({
    task: "",
    project: "",
  });
  const [projectData, setProjectData] = useState([]);
  const red = {color: "white", backgroundColor: "red"};
  const green = {color: "white", backgroundColor: "#03A9F4"};

  // console.log(projectData);
  //__________________________________________________________________________________________;
  const [timer, setTimer] = useState(0);
  let ref = useRef(null);

  let handleStart = () => {
    if (toggle) {
    }
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  };

  let handlePause = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  let handleReset = () => {
    setProjectData([...projectData, text]);
    handlePause();
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      handlePause();
    };
  }, []);

  //__________________________________________________________________________________________;

  return (
    <>
      <div className={styles.DisplayBox}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="0px">
          {/* -------------------------------------------------------------------------- */}
          <Box
            border="1px solid grey"
            borderRight="none"
            height="60px"
            className={styles.Display_grid_box1}
          >
            <div className={styles.DisplayBox_1}>
              {/* -------------------------------input------------------------------------------- */}
              <div className={styles.DisplayBox1_input}>
                <input
                  value={text.task}
                  onChange={(e) => setText({...text, task: e.target.value})}
                  type="text"
                  placeholder="What are you working on?"
                />
              </div>
              {/* ------------------------------------Add-------------------------------------- */}
              <div>
                <AddProjectModal text={text} setText={setText} />
              </div>
              {/* -------------------------------------------------------------------------- */}
            </div>
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box
            border="1px solid grey"
            borderLeft="none"
            height="60px"
            className={styles.Display_grid_box2}
          >
            <div className={styles.DisplayBox_2}>
              <div className={styles.DisplayBox2_edit}>
                <img
                  className={styles.DisplayBox2_edit_img}
                  src="https://app.clockify.me/assets/ui-icons/tag-gray.svg"
                  alt="e"
                />
              </div>

              <div className={styles.DisplayBox2_dollor}>
                <div className={styles.DisplayBox2_dollor_c}>
                  <FaDollarSign />
                </div>
              </div>

              <div className={styles.DisplayBox2_start}>
                {/* _________________________________________________________________________________ */}
                <div className={styles.DisplayBox2_start_counter}>
                  {getTime(timer)}
                </div>

                <div
                  style={toggle ? red : green}
                  className={styles.DisplayBox2_start_btn}
                  onClick={() => {
                    setToggle(!toggle);
                    !toggle ? handleStart() : handleReset();
                  }}
                >
                  {!toggle ? "START" : "STOP"}
                </div>
                {/* _________________________________________________________________________________ */}
              </div>

              <div className={styles.DisplayBox2_toggle}>
                <div>
                  <img
                    src="https://app.clockify.me/assets/ui-icons/plus-blue.svg"
                    alt="p"
                  />
                </div>
                <div>
                  <FaListUl />
                </div>
              </div>
            </div>
          </Box>
          {/* -------------------------------------------------------------------------- */}
        </SimpleGrid>
      </div>

      <ResultBox projectData={projectData} />
    </>
  );
};
