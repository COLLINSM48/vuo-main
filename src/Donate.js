import React from "react";
import DonateContent from "./DonateContent";
import NavFive from "./NavFive";
import "./DonateContent.css";
import NavBar from "./NavBar";

function Donate() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <NavFive />
      </div>
      <div className="background-image">
        <div>
          <DonateContent />
        </div>
      </div>
    </div>
  );
}
export default Donate;
