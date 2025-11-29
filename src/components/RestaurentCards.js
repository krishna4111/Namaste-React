import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    props.resData || {};

  const { deliveryTime } = sla;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-image"
        alt="res-image"
        src={IMAGE_BASE_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}-mins</h4>
    </div>
  );
};

export default RestaurantCard;
