function sortArray(array) {
  const even = array.map((elm) => (elm % 2 == 0 ? elm : ""));
  const odd = array.filter((elm) => elm % 2 == 1).sort((a, b) => a - b);
  const result = [];
  for (let i = 0, j = 0; i < array.length; i += 1) {
    if (even[i] === "") {
      result.push(odd[+j]);
      j += 1;
    } else {
      result.push(even[i]);
    }
  }
  return result;
}

sortArray([5, 8, 6, 3, 4]);
