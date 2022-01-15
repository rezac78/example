function deleteNth(arr, x) {
  var count = {};
  return arr.filter(function(a){
    count[a] = ~~count[a]+1;
    return count[a]<=x;
  })
}

deleteNth([1, 1, 1, 1], 2);
