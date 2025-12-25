import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/appStore/cardSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.card.items;
  });

  const dispatch = useDispatch();

  const clearCartItem = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={clearCartItem}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h4 className="font-bold m-5 p-5">
            Cart item is Empty , Add Items to Cart
          </h4>
        )}
        <ItemList cardItems={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
