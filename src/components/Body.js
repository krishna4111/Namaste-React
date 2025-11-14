import { useState } from "react";
import RestaurantCard from "./RestaurentCards";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  const topRatedRestaurants = () => {
    const filteredRestaurant = restaurantList.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });
    setRestaurantList(filteredRestaurant);
  };

  return (
    <div className="body">
      <div className="search">
        <input></input>
        <div className="filter">
          <button className="filter-btn" onClick={() => topRatedRestaurants()}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
