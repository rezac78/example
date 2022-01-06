function spinWords(string) {
  const sentence = "";
  const separate = string.split(" ");

  for (let i = 0; i < separate.length; i++) {
    if (sentence) sentence += " ";
    if (separate[i].length >= 5) {
      sentence += separate[i].split("").reverse().join("");
    }else{
      sentence += separate[i]
    }
  }
  return sentence;
}

spinWords("This is another tes");
