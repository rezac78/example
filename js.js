function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

arrayDiff([1, 2, 2, 2, 3], [2]);
