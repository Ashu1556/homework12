import React from "react";
import "./Card.css";
const Card = ({ category, image, rating, title, price }) => {
  return (
    <div className="card_container">
      <div className="card_container_avatar">
        <img src={image} alt="user_img" />
      </div>
      <div className="card_container_login">
        <p>
          <b>Title:-</b>&nbsp;
          {title}
        </p>
        <div className="text">
          <p>
            <b>Price:-</b>&nbsp;
            {price}
          </p>
          <p>
            <b>Rating:-</b>&nbsp;
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
