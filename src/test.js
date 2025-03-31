import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize the first letter", () => {
  expect(capitalize("mohammad")).toBe("Mohammad");
});

test("reverse the word", () => {
  expect(reverse("Mohammad")).toBe("dammahoM");
});

test("adding nums on calculator", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtracting nums on calculator", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("multiply nums on calculator", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("dividing nums on calculator", () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(0.67);
});

test("dividing by zero on calculator", () => {
  expect(calculator.divide(2, 0)).toBeNull();
});

test("caesarCipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array 1", () => {
  expect(analyzeArray([2, 3, 5, 6])).toStrictEqual({
    max: 6,
    min: 2,
    average: 4,
    length: 4,
  });
});

test("analyze array 2", () => {
  expect(analyzeArray([10.25, 6.35, 8.65, 25.65])).toStrictEqual({
    max: 25.65,
    min: 6.35,
    average: 12,
    length: 4,
  });
});
