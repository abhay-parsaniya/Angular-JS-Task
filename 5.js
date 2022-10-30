function arrSplit(arr, size) {
  let resultArr = [];
  while (arr.length) {
    // console.log(arr.length);
    // console.log(resultArr);
    resultArr.push(arr.splice(0, size));
    // console.log(arr.length);
    // console.log(resultArr);
  }
  return resultArr;
}

console.log(arrSplit(["a", "b", "c", "a", "b", "c"], 3));

// arrSplit(["a", "b", "c", "a", "b"], 3)
