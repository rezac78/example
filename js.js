var uniqueInOrder = function (iterable) {
  const newStr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      newStr.push(iterable[i])
    }
  }
  return newStr
};
uniqueInOrder("AAAABBBCCDAABBB");
