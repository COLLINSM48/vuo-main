// AuthenticationForm.js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./Login";
import Signup from "./Signup";
import { Card, CardContent } from "@mui/material";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ padding: "50px 480px" }}>
      <Card
        className="custom-card"
        style={{ width: "500px", height: "410px", borderRadius: "20px" }}
      >
        <CardContent>
          {isLogin ? <Login /> : <Signup />}
          <div
            style={{ paddingTop: "1em", fontSize: "15px", fontWeight: "bold" }}
          >
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>

            <div style={{ paddingTop: "0.9em" }}>
              <Button
                onClick={() => setIsLogin(!isLogin)}
                style={{
                  backgroundColor: "#E93E3A",
                  textTransform: "lowercase",
                  color: " #ffffff",
                  fontWeight: "500",
                }}
              >
                {isLogin ? "Sign Up" : "Login"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Authentication;
