function getMiddle(s) {
  const lengthNum = s.length;
  if (lengthNum % 2 == 1) {
    const odd = Math.floor(lengthNum / 2);
    return s[odd];
  }else{
    const even = Math.floor(lengthNum / 2);
    const even1 = Math.floor((lengthNum / 2)-1);
    // return ;
    console.log(s[even]+s[even1])
  }
}
getMiddle("test");
