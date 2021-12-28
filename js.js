function hero(bullets, dragons) {
  if ((bullets * dragons) % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

hero(0, 1);
