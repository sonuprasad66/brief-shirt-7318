import React from "react";
import {FaAlignJustify} from "react-icons/fa";
import styles from "../Styles/TrackerCss/TrackerNavbar.module.css";
import "../Styles/TrackerCss/Dropdown.css";
import "../Styles/TrackerCss/Logout.css";
import "../Styles/TrackerCss/Sidebar.css";
import {myFunction} from "./dropdown";
import {Logout} from "./Logout";
import {Sidebar, CloseSidebar} from "./Sidebar";
import {useState} from "react";
import {useContext} from "react";
import {AppContext} from "../../AuthContext/AuthContextProvider";
export const TrackerNavbar = () => {
  const [manageSidebar, setManageSidebar] = useState(false);
  const {isAuth, userLogin, userLogout} = useContext(AppContext);
  console.log(isAuth);
  // {/*==========================================================*/}
  const handleDropdown = () => {
    myFunction();
  };
  const handleLogout = () => {
    console.log("click");
    Logout();
  };
  const handleSidebar = () => {
    Sidebar();
  };
  const handleClose = () => {
    CloseSidebar();
  };

  // const handleTogle = () => {
  //   if (manageSidebar) {
  //     setManageSidebar(false);
  //   } else {
  //     setManageSidebar(true);
  //   }
  // };

  // {/*==========================================================*/}
  return (
    <div className={styles.Container_Tnavbar}>
      {/* -------------------------------------------------------------------------------------- */}

      <div className={styles.Container_Tnavbar_box1}>
        {/* ++++++++++++++++++++++++++++++++Side bar++++++++++++++++++++++++++++++++++++++ */}
        <div className={styles.Container_Tnavbar_box1_icon}>
          {/* <FaAlignJustify /> */}

          <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>
              ×
            </a>
            <div>TIME TRACKER</div>
            <div>CLIENTS</div>
            <div>REPORTS</div>
            <div>CALENDAR</div>
            <p>ANALYZE</p>
            <div>PROJECTS</div>
            <div>DASHBOARD</div>
            <p>MANAGE</p>
            <div>TEAM</div>
            <div>TAGS</div>
            <div>SETTINGS</div>
          </div>

          <div>
            <div onClick={handleSidebar}>
              <FaAlignJustify />
            </div>
          </div>
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div>
          <a href="/">
            <img
              className={styles.Container_Tnavbar_box1_img}
              src="https://clockify.me/assets/images/clockify-logo.svg"
              alt="l"
            />
          </a>
          {/* <img
            className={styles.Container_Tnavbar_box1_img}
            src="https://clockify.me/assets/images/clockify-logo.svg"
            alt="l"
          /> */}
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      <div className={styles.Container_Tnavbar_box2}>
        <div className={styles.Tnavbar_box2_workspace}> workspace </div>
        <div>
          <button className={styles.Tnavbar_box2_upbtn}>UPGRADE</button>
        </div>
        {/* ==================================================================================== */}
        <div className={styles.Tnavbar_box2_qicon}>
          <div class="dropdown">
            <img
              class="dropbtn"
              onClick={handleDropdown}
              src="https://app.clockify.me/assets/nav-icons/help.svg"
              alt="?"
            />
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">Documentation</a>
              <a href="#about">Totorials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        {/* ==================================================================================== */}
        <div className={styles.Tnavbar_box2_bellicon}>
          <img
            src="https://app.clockify.me/assets/nav-icons/notification.svg"
            alt="b"
          />
        </div>
        {/* ==================================================================================== */}
        <div className={styles.Tnavbar_box2_sort_name} onClick={handleLogout}>
          <div class="Ldropdown">
            <p class="Ldropbtn">SS</p>
            <div id="LmyDropdown" class="Ldropdown-content">
              <a href="#home">Name</a>
              <a href="#about">Email</a>
              <a href="#about">Profile Setting</a>
              <a href="#about">Dark Theme</a>
              <a href="#about">DownLoad apps</a>
              <a href="#about">Try chat app</a>
              <div onClick={userLogout}>
                <a href="#about">Log out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
    </div>
  );
};
