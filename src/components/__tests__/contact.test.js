import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test case", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    //try to check
    const heading = screen.getByRole("heading");

    //In here we checks that weather my heading is inside my document or not.
    expect(heading).toBeInTheDocument();
  });

  test("Should check the button is present or not", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load input name ", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  test("should load 2 input boxes on the contact page", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
