import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withDiscountLabel } from "./RestaurentCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const restaurantList = useRestaurants();
  const isOnline = useOnlineStatus();

  const [filteredRes, setFilteredRes] = useState(null);
  const [searchText, setSearchText] = useState("");

  //context
  const { loggedInUser, setUserName } = useContext(UserContext);

  //keep this in a variable
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

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
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border-2 rounded-lg mx-4 p-1 focus:bg-amber-50"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn border-2 rounded-lg bg-gray-300 px-2 py-1 text-md hover:bg-gray-400"
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
        <button
          className="border-2 rounded-md h-10 px-2 bg-gray-300 hover:bg-gray-400"
          onClick={() => topRatedRestaurants()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <label>UserName</label>
        <input
          type="text"
          className="border border-black rounded-lg mx-10 px-2"
          value={loggedInUser}
          onChange={(e) => {
            return setUserName(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {isOnline &&
          filteredRes?.map((restaurant) => {
            return (
              <Link key={restaurant?.id} to={`restaurants/${restaurant?.id}`}>
                {/* {if the restaurant have the discount percentage then show it on the card (higher order component) } */}
                {restaurant.aggregatedDiscountInfoV3?.header ? (
                  <RestaurantCardDiscount
                    key={restaurant.id}
                    resData={restaurant}
                  />
                ) : (
                  <RestaurantCard key={restaurant.id} resData={restaurant} />
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Body;
