import React from "react";
import contacts from "../contacts";
import CircularImage from "./CircleImg";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <CircularImage image={props.imgURL} />
      </div>
      <div className="bottom">
        <Info info={props.phone} />
        <Info info={props.email} />
      </div>
    </div>
  );
}
export default Card;