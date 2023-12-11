/**
 * To calculate the function speed
 *
 * @param {(...args: any[]) => T} func
 * @param {any[]} args
 * @returns
 */
export function calculateFunctionSpeed<T>(
  func: (...args: any[]) => T,
  ...args: any[]
): number {
  const startTime = performance.now();
  func(...args);
  const endTime = performance.now();
  const executionTime = endTime - startTime;

  return executionTime;
}
