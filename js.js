function hammingDistance (a, b) {
	let count = 0
  let strLength = a.length;
  for(let i = 0; i < strLength; i++) {
    if(a[i] != b[i]) count++;
  }
  return count;
}

hammingDistance("1010", "0101")