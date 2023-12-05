import { PasswordStrength } from "~/constants";

/**
 * Say hello
 *
 * @param {string} name
 * @returns {string} `Hello ${name}!`
 */
export const hello = (name: string): string => {
  return `Hello ${name}!`;
};

/**
 * Check password strength
 *
 * @param {string} password
 * @returns {string} Weak, Very Weak, Moderate, Strong, Very Strong
 */
export const checkPasswordStrength = (password: string) => {
  // Define criteria for a strong password
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  // Calculate the overall strength based on criteria
  let strength = 0;
  if (password.length >= minLength) strength++;
  if (hasUpperCase) strength++;
  if (hasLowerCase) strength++;
  if (hasNumber) strength++;
  if (hasSpecialChar) strength++;

  // Return a value representing the strength level
  switch (strength) {
    case 5:
      return { strength, label: PasswordStrength.VERY_STRONG };
    case 4:
      return { strength, label: PasswordStrength.STRONG };
    case 3:
      return { strength, label: PasswordStrength.MODERATE };
    case 2:
      return { strength, label: PasswordStrength.WEAK };
    case 1:
      return { strength, label: PasswordStrength.VERY_WEAK };
    default:
      return { strength, label: PasswordStrength.INVALID };
  }
};
