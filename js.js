function findUniq(arr) {
  let strayChar = arr[0];
  for (let i = 1; i < numbers.length; i++) {
    if (strayChar !== numbers[i]) {
      return (strayChar = numbers[i]);
    }
  }
  return 0;
}

findUniq([1, 1, 1, 2, 1, 1]);
