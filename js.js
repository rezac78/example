function remainder(a, b) {
  if (a > b) {
    console.log(Math.ceil(a / b));
  } else if (b > a) {
    console.log(Math.ceil(b / a));
  }
}

remainder(13, 72);
