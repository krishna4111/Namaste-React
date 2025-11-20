import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurentCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //useEffect -> Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.8174064&lng=78.683551&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const jsonData = await data.json();
    const restaurantArray =
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    //This is the proper structure but the initial render data matches the above structure thats why i used that in setState
    const restaurantData = restaurantArray.map((restaurant) => {
      return restaurant.info;
    });

    setRestaurantList(restaurantData);
    setFilteredRestaurant(restaurantData);
  };

  const topRatedRestaurants = () => {
    const filteredRestaurant = restaurantList.filter((restaurant) => {
      return restaurant.avgRating > 4.5;
    });
    setRestaurantList(filteredRestaurant);
  };

  return restaurantList.length === 0 ? (
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
              setFilteredRestaurant(filteredRestaurants);
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
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant.id} to={`restaurant/${restaurant.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
