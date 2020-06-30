import React, { Component } from "react";
// import styled from "styled-components";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top h-navbar-red">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
            POKEDEX
          </a>
        </div>
      </div>
    );
  }
}
