import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import charity from "./lottie/charity.json";

function HeroSection() {
  // Use the useMediaQuery hook to check the screen width
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // You can adjust the breakpoint as needed

  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = () => {
    setIsLoading(true);

    // You can add your donation processing logic here.
    // After processing, you can set isLoading back to false.
  };

  const options = {
    animationData: charity,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <Grid container spacing={isMobile ? 1 : 2}>
        {/* First column */}
        {/* first grid first */}
        <Grid item xs={12} sm={6} md={6}>
          <div style={{ padding: "1.5em" }}>
            <div>
              <p
                style={{
                  color: "#E93E3A",
                  fontSize: isMobile ? "14px" : "16px",
                  fontWeight: "700",
                }}
              >
                <i>RAISE AS YOU RISE</i>
              </p>
            </div>
            <div style={{ paddingTop: "0.9em", color: "#0C080B" }}>
              <h1
                style={{
                  fontSize: isMobile ? "24px" : "36px", // Adjust font size based on screen width
                }}
              >
                Village Upliftment Organization
              </h1>
            </div>
            <div>
              <p
                style={{
                  fontSize: isMobile ? "16px" : "24px",
                  lineHeight: "1.5em",
                  paddingTop: "1.0em",
                }}
              >
                The Village Upliftment Organization, also known as M.V.U.R, is a
                participatory and operational non-profit organization that works
                closely with its community stakeholders. Its primary mission is
                to identify and address community issues, offering innovative
                and practical solutions to enhance the well-being of the public.
                M.V.U.R primarily focuses on poverty alleviation and operates in
                the Muchila Village of Namwala district, located in the Southern
                province of Zambia.
              </p>
            </div>
            <div style={{ paddingTop: "1.5em" }}>
              <Link to="/donate">
                <Button
                  variant="contained"
                  disableElevation
                  style={{
                    backgroundColor: "#0C080B",
                    borderRadius: "0px",
                    textTransform: "capitalize",
                    padding: "10px 30px",
                    fontWeight: "bold",
                  }}
                  onClick={handleButtonClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="#E93E3A;" /> // Show loader when loading
                  ) : (
                    "Donate"
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </Grid>

        {/* Second grid first */}
        <Grid item xs={12} sm={6} md={6}>
          <div>{View}</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;
