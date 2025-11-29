import { useEffect, useState } from "react";
import { CARD_URL } from "./constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(`https://namastedev.com/api/v1/listRestaurants`);

    const jsonData = await data.json();
    // console.log("data inside the fetch", data);
    const restaurantArray =
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    //This is the proper structure but the initial render data matches the above structure thats why i used that in setState
    const restaurantData = restaurantArray.map((restaurant) => {
      return restaurant.info;
    });

    setRestaurants(restaurantData);
  };

  console.log("fetched restaurants", restaurants);
  return restaurants;
};

export default useRestaurants;
