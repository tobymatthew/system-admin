import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <span className="topbar__left--logo">SystemAdmin</span>
        </div>
        <div className="topbar__right">
          <div className="topbar__icon-container">
            <NotificationsNone />
            <span className="topbar__icon-badge">2</span>
          </div>
          <div className="topbar__icon-container">
            <Language/>
            <span className="topbar__icon-badge">2</span>
          </div>
          <div className="topbar__icon-container">
            <Settings/>
          </div>
        </div>
      </div>
    </div>
  );
}
