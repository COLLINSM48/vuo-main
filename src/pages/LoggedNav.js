import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import "../Nav.css";

const imagePath = "./logo.png";

function LoggedNav() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "#ffffff", color: "#000000" }}
        >
          <Toolbar>
            <Link to="/loggedlanding" className="nav-style">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={imagePath}
                  alt="Test"
                  style={{
                    width: "40px",
                    height: "40px",
                    paddingLeft: "0.5em",
                  }}
                />
                <p
                  style={{
                    paddingLeft: "0.5em",
                    paddingTop: "0.5em",
                  }}
                >
                  Home
                </p>
              </div>
            </Link>
            <div style={{ marginLeft: "auto", paddingTop: "0.5em" }}>
              <div
                style={{
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to="/loggedwork" className="nav-style">
                  <p>Work</p>
                </Link>
                <Link to="/loggedabout" className="nav-style">
                  <p style={{ paddingLeft: "1.5em" }}>About</p>
                </Link>
                <Link to="/loggedcontact" className="nav-style">
                  <p style={{ paddingLeft: "1.5em" }}>Contact</p>
                </Link>
                <Link to="/logout" className="nav-style">
                  <p style={{ paddingLeft: "1.5em" }}>Logout</p>
                </Link>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default LoggedNav;
