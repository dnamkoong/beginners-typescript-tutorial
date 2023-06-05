import { expect, it } from "vitest";

export const addTwoNumbers = (params: { first: number, second: number }) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});

// Solution TWO:
// type can represent anything
type AddTwoNumbersArgs = {
  first: number;
  second: number;
};
export const addTwoNumbers2 = (params: AddTwoNumbersArgs) => {}

// Solution THREE:
// interface can represent mostly objects
interface AddTwoNumbersArgs2 {
  first: number;
  second: number;
}

export const addTwoNumbers3 = (params: AddTwoNumbersArgs2) => {}
