import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //This line is known as assertion
  expect(result).toBe(7);
});

//React test cases - Unit Testing
//lets check weather the page is loaded or not.
//we will try to do
