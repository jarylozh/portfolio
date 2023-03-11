import "./index.scss";

import React from "react";
import { Navbar } from "../Navbar";
import { Intro } from "../Intro/index";
import { About } from "../About/index";
import { Works } from "../Works/index";
import { Experience } from "../Experience/index";
const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
          <Intro />
          <About />
          <Experience />
          <Works />

    </div>
  );
};

export default Layout;
