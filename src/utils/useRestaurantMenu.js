import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestInfo] = useState(null);

  //fetch data
  useEffect(() => {
    fetchData();
  }, []); //in here it fetch the data only once.

  const fetchData = async () => {
    // const menu = await fetch(`${MENU_API}/${resId}`);
    const menu = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/123456`
    );
    const resInfo = await menu.json();

    setRestInfo(resInfo);
  };

  return resInfo;
};

export default useRestaurantMenu;
