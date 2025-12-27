import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(false);
  const isOnline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const handleLoginLogout = () => {
    setLogin(!login);
  };

  const store = useSelector((store) => store);

  const cartItems = store.card.items;

  //subscribing to the store using useSelector
  // const cartItems = useSelector((store) => {
  //   //In here we have to mention what part of(which slice) we have to access.
  //   return store.card.items;
  // });

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-md sm:bg-yellow-100 h-20">
      <div className="logo-container">
        <img className="w-20 h-20" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex gap-4 p-4 ">
          <li>online Status: {isOnline ? "🟢" : "🔴"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/groceries">grocery</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/card">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              handleLoginLogout();
            }}
          >
            {login ? "Logout" : "Login"}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
