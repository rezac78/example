String.prototype.toJadenCase = function () {
  let jCased = [];
  let words = this.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    jCased.push(word[0].toUpperCase() + word.slice(1));
  }
  return jCased.join(" ");
};
