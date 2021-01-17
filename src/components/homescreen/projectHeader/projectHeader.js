import React from "react";
import "./style.css";

// this logo will come from user
import logo from "./logo192.png";

export default function ProjectHeader() {
  return (
    <div className="header">
      <div className="header__title">My Projects</div>
      <div className="user__info">
        <img className="img" src={logo} alt={logo} />

        <div className="user__name"> Devjoyti</div>
      </div>
    </div>
  );
}
