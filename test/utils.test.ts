import { expect, test } from "vitest";

import { add, subtract, multiply, divide } from "../lib/utils";

test("adds 1 + 2 to equal 3", () => {
  expect(add([1, 2])).toBe(3);
});

test("substract 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiply 5 * 2 to equal 10", () => {
  expect(multiply(5, 2)).toBe(10);
});

test("divide 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});
