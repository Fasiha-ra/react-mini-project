import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="image" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.category}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="_blank" className="btn">
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
