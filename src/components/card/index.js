import React from "react";
import "./style.css";
const index = ({ robot }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${robot.id}?set=set2&size=180x180`}></img>
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </div>
  );
};

export default index;
