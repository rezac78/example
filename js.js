function filter_list(l) {
  console.log(l.filter((x) => typeof x === "number"));
}

filter_list([1, 2, "a", "b"]);
