import React from "react";
import "../../App.css";

function ButtonIcon({ onClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="btn" onClick={onClick}>
        <i className="fa fa-plus" style={{ color: "white" }}></i>
      </button>
    </div>
  );
}

export default ButtonIcon;
