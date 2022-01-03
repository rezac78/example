function findShort(s){
  const result = Math.min(...s.split(' ').map((word) => word.length));
  return result;
}

findShort("turns out random test cases are easier than writing out basic ones");
