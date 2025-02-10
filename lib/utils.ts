function add(numbers_to_add: number[]): number {
  return numbers_to_add.reduce((acc, curr) => acc + curr, 0);
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

export { add, subtract, multiply, divide };
