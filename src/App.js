import React from "react";
import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Donate from "./Donate";
import LoginSign from "./LoginSign";
import About from "./About";
import Work from "./Work";
import LoggedWork from "./pages/LoggedWork";
import LoggedAbout from "./pages/LoggedAbout";
import LoggedDonate from "./pages/LoggedDonate";
import LoggedLanding from "./pages/LoggedLanding";
import TrackProjects from "./pages/TrackProjects";

const StyledText = styled.div`
  font-family: "Epilogue";
  font-size: 20px;
`;

function App() {
  return (
    <div className="App">
      <StyledText>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<LoginSign />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/loginsign" element={<LoginSign />} />
            {/* loggedin route */}
            <Route path="loggedLanding" element={<LoggedLanding />} />
            <Route path="/loggeddonate" element={<LoggedDonate />} />
            <Route path="/loggedabout" element={<LoggedAbout />} />
            <Route path="/loggedwork" element={<LoggedWork />} />
            <Route path="/logout" element={<LandingPage />} />
            { <Route path="/trackedprojects" element={<TrackProjects />} />}
          </Routes>
        </BrowserRouter>
      </StyledText>
    </div>
  );
}

export default App;
