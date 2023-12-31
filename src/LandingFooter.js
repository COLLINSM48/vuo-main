import React from "react";

function LandingFooter() {
  
  return (
    <footer>
      <center>
        <div style={{ paddingTop: "1.0rem" }}>
          <hr />
        </div>
        <p
          style={{
            fontSize: ".65em",
            color: "#ffffff",
            fontWeight: "500",
            padding: "1.5rem 1.5rem 2.5rem 1.5rem",
          }}
        >
          &copy; {new Date().getFullYear()} Village Upliftment Organization
        </p>
        <a href="http://nomadsoftwares.com" style={{color:'#444444', fontSize:'0.6vw', fontWeight:'bolder'}}>Developed by Nomad Softwares</a>
      </center>
    </footer>
  );
}

export default LandingFooter;
