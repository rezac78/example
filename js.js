function createPhoneNumber(numbers) {
  const perNumber = numbers.slice(0, 3).join("");
  const number = numbers.slice(3, 6).join("");
  const numberPer = numbers.slice(6, 10).join("");
  return `(${perNumber}) ${number}-${numberPer}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
