function rowSumOddNumbers(n) {
  const oddNumbers = [];
  let startNumber = n * n - (n - 1);
  while (n > 0) {
    oddNumbers.push(startNumber);
    startNumber += 2;
    n--;
  }
  const sum = oddNumbers.reduce((a, b) => a + b, 0);
  return sum;
}
