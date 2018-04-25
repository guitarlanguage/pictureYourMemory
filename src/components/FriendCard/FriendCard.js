import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} value={props.id} onClick={()=> props.hitPlayer(props.id)}/>
    </div>
  </div> 
);

export default FriendCard;
