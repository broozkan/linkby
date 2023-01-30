function getFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}

console.log(getFibonacci(1));