import React from "react";
import { CARD_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo } = props.resData.info || {};
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-image" alt="res-image" src={CARD_URL}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{props.resData.info.sla.deliveryTime}-mins</h4>
    </div>
  );
};

export default RestaurantCard;
