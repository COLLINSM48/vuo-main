import React from "react";
import GridTwo from "../GridTwo";
import NavTwo from "../NavTwo";
import LoggedNav from "./LoggedNav";
import Footer from "../Footer";

function LoggedAbout() {
  return (
    <div>
      <LoggedNav />
      <div>
        <NavTwo />
      </div>

      <div>
        <GridTwo />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LoggedAbout;
