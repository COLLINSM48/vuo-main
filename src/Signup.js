import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Implement your signup logic here.
    navigate("/loggedlanding");
  };

  return (
    <div>
      <center>
        <p style={{ fontWeight: "bolder", color: "#E93E3A", padding: "6px" }}>
          Login or SignUp
        </p>
      </center>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
            paddingTop: "1.3em",
          }}
        >
          <div>
            <div style={{ paddingTop: "0.5em" }}></div>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth={400}
            />
          </div>

          <div style={{ paddingTop: "0.9em" }}>
            <div style={{ paddingTop: "0.3em" }}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth={400}
              />
            </div>
          </div>

          <div style={{ paddingTop: "0.5em" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignup}
              style={{
                backgroundColor: "#E93E3A",
                fontWeight: "600",
                textTransform: "capitalize",
                padding: "5px 40px",
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
