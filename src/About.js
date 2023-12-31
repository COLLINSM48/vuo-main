import React from "react";
import GridTwo from "./GridTwo";
import NavTwo from "./NavTwo";
import Footer from "./Footer";
import NavBar from "./NavBar";

function About() {
  return (
    <div>
      <NavBar />
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

export default About;
