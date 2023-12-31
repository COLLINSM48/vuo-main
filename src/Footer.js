import React from "react";

function Footer() {
  return (
    <footer>
      <center>
        <p
          style={{
            fontSize: "15px",
          }}
        >
          &copy; {new Date().getFullYear()} Village Upliftment Organization
        </p>
        <a href="http://nomadsoftwares.com" style={{color:'#444444'}}>Developed by Nomad Softwares</a>
      </center>
    </footer>
  );
}

export default Footer;
