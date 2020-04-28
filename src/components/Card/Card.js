import React from "react";
import "./Card.css";

const Card = props => (
    <div className="click-item neutral" onClick ={() => { props.increment(props.id); props.shuffle(props.id); }}>
    <img className="card-image" src={props.image} alt={props.name}/>
</div>
);

export default Card;