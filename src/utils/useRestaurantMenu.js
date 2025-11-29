import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestInfo] = useState(null);

  //fetch data
  useEffect(() => {
    fetchData();
  }, []); //in here it fetch the data only once.

  const fetchData = async () => {
    const menu = await fetch(`${MENU_API}/${resId}`);
    const resInfo = await menu.json();
    const actualMenuData =
      resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    setRestInfo(actualMenuData);
  };

  return resInfo;
};

export default useRestaurantMenu;
