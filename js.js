var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
function countSheeps(arrayOfSheep) {
  let counter = 0
  for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) counter += 1
  }
  console.log(counter);
}

countSheeps(array1);
