import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const actualMenuData =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  if (resInfo === null) {
    return <Shimmer />;
  }

  const RecommendedMenu =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const actualRecommendedMenu = RecommendedMenu.filter((menu) => {
    return menu?.card?.card;
  }).map((menu) => {
    return menu?.card?.card;
  });

  const { name, cuisines, costForTwo } = actualMenuData[0].card.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {/* {category accordian } */}
      {actualRecommendedMenu.map((category, index) => {
        return (
          //controlled component
          <RestaurantCategory
            key={category.title}
            data={category}
            show={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
