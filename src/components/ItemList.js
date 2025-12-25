import { useDispatch } from "react-redux";
import { IMAGE_BASE_URL } from "../utils/constants";
import { addItem } from "../utils/appStore/cardSlice";

const ItemList = ({ cardItems }) => {
  const dispatch = useDispatch();

  console.log("cardItems", cardItems);

  const addToCard = (item) => {
    //Dispatch an Action
    //what ever i pass inside here it will goes to the action.payload
    //Internally redux is handling things ,bcz there the first param is state but we pass the payload directly.

    dispatch(addItem(item));
  };
  return (
    <div className="font-light text-md">
      {cardItems.map((item) => {
        console.log("inside card item -->", item);
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex items-start gap-4"
          >
            <div className="w-9/12 text-left py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 h-28 flex-shrink-0 ">
              <img
                src={IMAGE_BASE_URL + item.card.info.imageId}
                className="w-full h-full object-cover rounded-md"
              ></img>
              <div className="absolute ">
                <button
                  className="py-0 px-6 text-sm bg-white shadow-lg absolute top-[-40px] ml-11"
                  onClick={() => {
                    addToCard(item);
                  }}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
