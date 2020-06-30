import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/layout/NavBar";
// import Dashbord from "./components/layout/Dashboard";
import Dashboard from "./components/layout/Dashboard";

import backgroundImage from "./components/assets/bg.jpg";

function App() {
  return (
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <NavBar></NavBar>
      <div className="container">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
