import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} value={props.id} onClick={()=> props.hitPlayer(props.id)}/>
      <h5>Name: {props.name}</h5>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div> 
);

export default FriendCard;
