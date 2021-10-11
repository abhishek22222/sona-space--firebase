import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="placement history2.png"
          alt=""
        />
        <p>Placement History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="placement history1.jpg"
          alt=""
        />

        <p>Placement Cell</p>
      </div>
      <div className="sidebarOption">
        <img
          src="college_curriculum.jpg"
          alt=""
        />
        <p>college_curriculum.jpg</p>
      </div>

        <Add />
        <p className="text">Discover Spaces</p>
    </div>
  );
}

export default SidebarOptions;
