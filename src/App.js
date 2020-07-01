import React from "react";
import { HashRouter as Switch, Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
// import SearchBar from "./components/search/SearchBar";
import Pokemon from "./components/pokemon/Pokemon";

import backgroundImage from "./components/assets/bg.jpg";

function App() {
  return (
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <NavBar></NavBar>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
