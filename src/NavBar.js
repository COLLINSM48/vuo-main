import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import "./Nav.css";

const imagePath = "./logo.png";

function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "#ffffff", color: "#000000" }}
        >
          <Toolbar>
            <Link to="/" className="nav-style">
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
                  Village Upliftment Organization
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
                <Link to="/login" className="nav-style">
                  <p>Login</p>
                </Link>
                <Link to="/about" className="nav-style">
                  <p style={{ paddingLeft: "1.5em" }}>About</p>
                </Link>
                <Link to="/work" className="nav-style">
                  <p style={{ paddingLeft: "1.5em" }}>Work</p>
                </Link>
                <Link to="/contact" className="nav-style">
                  <p style={{ paddingLeft: "1.5em" }}>Contact</p>
                </Link>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBar;
