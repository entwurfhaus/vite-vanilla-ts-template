import { describe, expect, test } from "vitest";
import { add, subtract, multiply, divide } from "./math";

describe("math tests", () => {
  test("add", () => {
    const result = add(100, 111);
    expect(result).toBe(211);
  });

  test("subtract", () => {
    const result = subtract(1234, 111);
    expect(result).toBe(1123);
  });

  test("multiply", () => {
    const result = multiply(12, 12);
    expect(result).toBe(144);
  });

  test("divide", () => {
    const result = divide(16, 2);
    expect(result).toBe(8);
  });
});
