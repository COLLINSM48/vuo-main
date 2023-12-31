import React from "react";
import { useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Contact.css";
import "./LinkStyles.css";

function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-evenly",
        color: "white",
      }}
    >
      <div style={{ paddingLeft: "0.5em" }}>
        <div style={{ color: "#ffffff" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "0.5em",
              paddingBottom: "0.2em",
            }}
          >
            Contact Us
          </p>
        </div>
        <div style={{ flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "0.3em" }}>
              <LocationOnIcon />
            </div>
            <p
              style={{
                fontSize: "13px",
                paddingLeft: "0.2em",
                fontWeight: "bold",
                paddingTop: "1em",
              }}
            >
              C101 RIVERVIEW MOTEL, MAZABUKA, ZAMBIA.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "0.3em" }}>
              <LocalPhoneIcon />
            </div>
            <p
              style={{
                fontSize: "13px",
                paddingLeft: "0.2em",
                fontWeight: "bold",
                paddingTop: "1em",
              }}
            >
              +260969479030
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "0.3em" }}>
              <EmailIcon />
            </div>
            <Link
              to="mailto:villageupliftment@gmail.com"
              className="link-style"
            >
              <p
                style={{
                  fontSize: "13px",
                  paddingLeft: "0.2em",
                  fontWeight: "bold",
                  paddingTop: "1em",
                }}
              >
                villageupliftment@gmail.com
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ paddingLeft: "0.5em" }}>
        {/* connect with us */}
        <div style={{ color: "#ffffff" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "0.5em",
              paddingBottom: "0.2em",
            }}
          >
            Connect with Us Via
          </p>
        </div>
        <div style={{ flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <div style={{ paddingTop: "0.3em" }}>
                <LinkedInIcon />
              </div>
              <Link to="#" className="link-style">
                <p
                  style={{
                    fontSize: "13px",
                    paddingLeft: "0.2em",
                    fontWeight: "bold",
                    paddingTop: "1em",
                  }}
                >
                  LinkedIn
                </p>
              </Link>
            </div>
            <div style={{ display: "flex", paddingLeft: "0.5em" }}>
              <div style={{ paddingTop: "0.3em" }}>
                <FacebookIcon />
              </div>
              <Link to="#" className="link-style">
                <p
                  style={{
                    fontSize: "13px",
                    paddingLeft: "0.2em",
                    fontWeight: "bold",
                    paddingTop: "1em",
                  }}
                >
                  Facebook
                </p>
              </Link>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "0.3em" }}>
              <TwitterIcon />
            </div>
            <Link to="#" className="link-style">
              <p
                style={{
                  fontSize: "13px",
                  paddingLeft: "0.2em",
                  fontWeight: "bold",
                  paddingTop: "1em",
                }}
              >
                Twitter
              </p>
            </Link>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "0.3em" }}>
              <InstagramIcon />
            </div>
            <Link to="#" className="link-style">
              <p
                style={{
                  fontSize: "13px",
                  paddingLeft: "0.2em",
                  fontWeight: "bold",
                  paddingTop: "1em",
                }}
              >
                Instagram
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* </Grid> */}
    </div>
  );
}

export default Contact;
