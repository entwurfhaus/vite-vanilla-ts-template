import { describe, expect, test } from "vitest";

import { add, subtract } from "./math";
import { calculateFunctionSpeed } from "./performance";
import { hello } from "./utils";

describe("performance tests", () => {
  test("calculate hello() speed returns number type", () => {
    const result = calculateFunctionSpeed<string, [string]>(hello, "Brian");
    console.log("hello()", result);
    expect(result).toBeTypeOf("number");
  });

  test("calculate add() speed returns number type", () => {
    const result = calculateFunctionSpeed<number, [number, number]>(add, 123.56, 555.12);
    console.log("add()", result);
    expect(result).toBeTypeOf("number");
  });

  test("calculate subtract() speed returns number type", () => {
    const result = calculateFunctionSpeed<number, [number, number]>(subtract, 7283.16, 5255.12);
    console.log("sub()", result);
    expect(result).toBeTypeOf("number");
  });
});
