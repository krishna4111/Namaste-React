import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore/appStore";

//mocking the fetch function.
//fetch returns a promise so that it is also returns a promise.
//the .json is also returns a promise
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

//act is used when ever we have to update the state.
//check for the search button is present or not.
it("Should test the search feature in the body component ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );

  //   const cardsBeforeSearch = screen.getAllByTestId("resCard");

  //   expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  //writing something inside the input box and check the rendering.
  //writing something is also a event it is a onChange event.
  const searchInput = screen.getByTestId("searchbox");

  //Typing on the input box
  fireEvent.change(searchInput, { target: { value: "Burger" } });
  //Clicking the search button
  fireEvent.click(searchButton);

  //   const filteredCards = screen.getAllByTestId("resCard");

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  //   expect(filteredCards.length).toBeGreaterThanOrEqual(0);
});

//test the top rated restaurant
it("Should test the top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );
  const restaurantCards = screen.getAllByTestId("resCard");

  const topRatedResButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedResButton);

  const topRatedResCards = screen.getAllByTestId("resCard");

  expect(topRatedResButton).toBeInTheDocument();
  expect(topRatedResCards.length).toBeLessThanOrEqual(restaurantCards.length);
});
