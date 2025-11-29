import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurentCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const restaurantList = useRestaurants();
  const isOnline = useOnlineStatus();
  // const isOnline = true;
  console.log("isOnline", isOnline);

  const [filteredRes, setFilteredRes] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredRes(restaurantList);
  }, [restaurantList]);

  const topRatedRestaurants = () => {
    const filtered = restaurantList.filter(
      (restaurant) => restaurant.avgRating > 4.5
    );
    setFilteredRes(filtered);
  };

  if (isOnline === false) {
    return (
      <h1>Looks like you are offline please check your internet connection</h1>
    );
  }

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = restaurantList.filter(
                (restaurant) => {
                  return restaurant.name.toLowerCase().includes(searchText);
                }
              );
              setFilteredRes(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={() => topRatedRestaurants()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {isOnline &&
          filteredRes?.map((restaurant) => {
            return (
              <Link key={restaurant?.id} to={`restaurant/${restaurant?.id}`}>
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Body;
