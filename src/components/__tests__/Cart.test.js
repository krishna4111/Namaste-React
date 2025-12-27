import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu.js";
import appStore from "../../utils/appStore/appStore.js";
import Header from "../Header.js";
import MOCK_DATA from "../mocks/mockResMenu.json";
import Cart from "../Cart.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  //get the accordian button
  const accordionHeader = screen.getByText("Recommended (3)");

  //expand the accordian to see the accordian items
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("food-items").length).toBe(3);

  //get all the add buttons in that accordian items
  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  //clicks the first accordian add button
  fireEvent.click(addBtns[0]);

  //Now the header cart count would be increased
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  //click on second item to add
  fireEvent.click(addBtns[1]);

  //check the count is two or not
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  //now we have to check weather it is added in the card page or not
  //the reason why i check 5 is that already the component renders 3 ele in the resmenu in the accordian
  //then i added 2 to the cart element , all are rendering in the same page so that so that i am checking that.
  expect(screen.getAllByTestId("food-items").length).toBe(5);

  //click the clear card button
  fireEvent.click(screen.getByText("Clear Cart"));

  expect(screen.getAllByTestId("food-items").length).toBe(3);
});
