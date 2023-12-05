import { describe, expect, test } from "vitest";
import { checkPasswordStrength, hello } from "./utils";

describe("utils tests", () => {
  const veryWeakPassword = "pass";
  const weakPassword = "password";
  const moderatePassword = "Password";
  const strongPassword = "P@ssword";
  const veryStrongPassword = '0@MH1;6*8gY]rr3GkCjE)k?[m$*FurYmCFw"~2';

  test("render hello greeting", async () => {
    const greeting = hello("Brian");
    expect(greeting).toBe("Hello Brian!");
  });

  test("render password strength is invalid", async () => {
    const strength = checkPasswordStrength("");

    expect(strength.label).toBe("Invalid");
  });

  test("render password strength is very weak", async () => {
    const strength = checkPasswordStrength(veryWeakPassword);

    expect(strength.label).toBe("Very Weak");
  });

  test("render password strength is weak", async () => {
    const strength = checkPasswordStrength(weakPassword);

    expect(strength.label).toBe("Weak");
  });

  test("render password strength is moderate", async () => {
    const strength = checkPasswordStrength(moderatePassword);

    expect(strength.label).toBe("Moderate");
  });

  test("render password strength is strong", async () => {
    const strength = checkPasswordStrength(strongPassword);

    expect(strength.label).toBe("Strong");
  });

  test("render password strength is very strong", async () => {
    const strength = checkPasswordStrength(veryStrongPassword);

    expect(strength.label).toBe("Very Strong");
  });
});
