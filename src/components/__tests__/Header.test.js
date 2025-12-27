import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore/appStore.js";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //get the login button

  //   way-1 -> using getByRole - this is a good way
  //then name is the exact name of the element.
  const loginButton = screen.getByRole("button", { name: "Login" });

  //   way - 2 -> using getByText
  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

//check my cart is there or not
it("should Render header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //we can also pass regex as well
  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

//checking cart item with 0
it("should Render header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart - (0 items)");

  expect(cart).toBeInTheDocument();
});

//checking when we click Login -> logout
it("should change Login  button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {
    name: "Logout",
  });

  expect(logoutButton).toBeInTheDocument();
});
