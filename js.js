function nbYear(p0, percent, aug, p) {
  var n = 0;
  while (p0 < p) {
    n++
    p0 = p0 + (p0*percent/100) + aug;
  }
  if (p0 >= p) {
      return n;
  }
  return n;

}

nbYear(1500, 5, 100, 5000);
