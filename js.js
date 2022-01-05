function sumTwoSmallestNumbers(numbers) {
  var ordered = numbers.sort(function (a, b) {
    return a - b;
  });
  const sum = ordered[0] + ordered[1] 
  return sum
}
sumTwoSmallestNumbers([19, 5, 42, 2, 77]);
