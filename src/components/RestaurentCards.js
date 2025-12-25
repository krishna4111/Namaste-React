import { IMAGE_BASE_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    props.resData || {};

  const { deliveryTime } = sla;
  return (
    <div className="m-4 p-4 w-[250px] rounded-xl   hover:shadow-2xl bg-gray-200 hover:bg-gray-300">
      <img
        className="rounded-xl"
        alt="res-image"
        src={IMAGE_BASE_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg ">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}-mins</h4>
    </div>
  );
};

//Higher order component
//input - RestaurantCard
//output - RestaurantCardDiscount

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-md px-2 py-1">
          {props.resData?.aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaurantCard;
