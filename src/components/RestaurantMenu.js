import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{costForTwo}</h3>
      <h2>Menu</h2>
      <ul>
        {menu &&
          menu.map((resInfo) => {
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
