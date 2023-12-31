import React from "react";
import NavThree from "../NavThree";
import GridThree from "../GridThree";
import NavFour from "../NavFour";
import GridFour from "../GridFour";
import LoggedNav from "./LoggedNav";
import Footer from "../Footer";

function LoggedWork() {
  return (
    <div>
      <div>
        <LoggedNav />
      </div>

      <div>
        <NavThree />
      </div>

      <div>
        <GridThree />
      </div>

      <div>
        <NavFour />
      </div>

      <div>
        <GridFour />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default LoggedWork;
