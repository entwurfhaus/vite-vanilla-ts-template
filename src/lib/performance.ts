/**
 * To calculate the function speed
 *
 * @template T The return type of the function
 * @template Args The types of the function arguments
 * @param {(...args: Args) => T} func The function to measure
 * @param {Args} args The arguments to pass to the function
 * @returns {number} The execution time in milliseconds
 */
export function calculateFunctionSpeed<T, Args extends unknown[]>(
  func: (...args: Args) => T,
  ...args: Args
): number {
  const startTime = performance.now();
  func(...args);
  const endTime = performance.now();
  const executionTime = endTime - startTime;

  return executionTime;
}
