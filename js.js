function highAndLow(numbers) {
  const arr = numbers.split(" ");
  let maxNum = arr[0];
  let minNum = arr[0];

  for (let num of arr) {
    if (Number(num) > maxNum) {
      maxNum = num;
    }
    if (Number(num) < minNum) {
      minNum = num;
    }
  }
  return maxNum + " " + minNum;
}

highAndLow("1 2 3 4 5");
