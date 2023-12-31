import React from "react";
import NavThree from "./NavThree";
import GridThree from "./GridThree";
import Footer from "./Footer";
import NavFour from "./NavFour";
import GridFour from "./GridFour";
import NavBar from "./NavBar";

function Work() {
  return (
    <div>
      <div>
        <NavBar />
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
export default Work;
