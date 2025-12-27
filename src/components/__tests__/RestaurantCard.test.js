import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantCards from "../RestaurentCards";
import MOCK_DATA from "../mocks/resCardMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore/appStore";
import "@testing-library/jest-dom";

it("Should render the restaurant card component with props Data", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantCards resData={MOCK_DATA} />
      </Provider>
    </BrowserRouter>
  );

  //check the card is successfully loaded or not
  //for that checks the name of the restaurant is on the screen or not
  const resCard = screen.getByText(MOCK_DATA.name);

  expect(resCard).toBeInTheDocument();
});
