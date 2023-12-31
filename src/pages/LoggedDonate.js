import React from "react";
import DonateContent from "../DonateContent";
import NavFive from "../NavFive";
import "../DonateContent.css";
import LoggedNav from "./LoggedNav";

function LoggedDonate() {
  return (
    <div>
      <div>
        <LoggedNav />
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
export default LoggedDonate;
