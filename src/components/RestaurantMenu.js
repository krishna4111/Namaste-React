import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  const { resId } = useParams();
  console.log("paramId is", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const restaurantMenuData = await fetch(`${MENU_API}/${resId}`);
    // const restaurantMenuData = await fetch(
    //   `https://namastedev.com/api/v1/listRestaurantMenu/123456`
    // );
    const menu = await restaurantMenuData.json();
    const actualRestaurantData = menu?.data?.cards[2]?.card?.card?.info;
    console.log("restaurant", actualRestaurantData);
    const actualMenuData =
      menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    console.log("menu data", actualMenuData);
    setMenu(actualMenuData);
    setRestaurant(actualRestaurantData);
  };
  if (menu === null || restaurant === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = restaurant;

  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <h3>{cuisines.join(" , ")}</h3> */}
      <h3>{costForTwo}</h3>
      <h2>Menu</h2>
      <ul>
        {menu &&
          menu.map((menuData) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
