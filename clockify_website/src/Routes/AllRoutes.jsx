import React from "react";
import {Route, Routes} from "react-router-dom";
import {DownloadPage} from "./DownloadPage";
import {FeturesPage} from "./FeturesPage";
import {Home} from "./Home";
import {Login} from "./Login";
import {SignUp} from "./SignUp";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/features" element={<FeturesPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </div>
  );
};
