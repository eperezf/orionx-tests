let a= [10, 6, 8, 4, 9, 1, 7, 2, 5, 3];


function getLowestDuplicateIndex(arr) {
  let unique = [];
  let lower = 100001;
  for (var n of arr) {
    if (!unique.includes(n)) {
      unique.push(n);
    } else {
      return n;
    }
  }
  return -1;
}


console.log(getLowestDuplicateIndex(a));
