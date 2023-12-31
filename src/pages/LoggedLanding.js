import React from "react";
import HeroSection from "../HeroSection";
import Contact from "../Contact";
import LandingFooter from "../LandingFooter";
import LoggedNav from "./LoggedNav";

function LoggedLanding() {
  return (
    <div>
      <div>
        <LoggedNav />
      </div>
      <div style={{ paddingLeft: "1.5em" }}>
        <HeroSection />
      </div>

      <div style={{ backgroundColor: "#0C080B" }}>
        <div
          id="contact"
          style={{
            paddingTop: "1.5em",
            width: "100%",
          }}
        >
          <Contact />
        </div>

        <div>
          <LandingFooter />
        </div>
      </div>
    </div>
  );
}
export default LoggedLanding;
