import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <span>POKEDEX</span>
        </div>
      </div>
    );
  }
}
