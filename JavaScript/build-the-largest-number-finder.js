

function largestOfAll(masterArray) {
  let resultArray = [];
  let largestNum;
  let thisArray = [];

  topLoop: for (let arrays of masterArray) {
    thisArray = arrays
    let largestNum;
    largestNum = thisArray[0];
    bottomLoop: for (let thisNum of thisArray) {
      if (thisNum > largestNum) {
        largestNum = thisNum;
      }
    }
    resultArray.push(largestNum);
  }
  return resultArray;
}


let result1 = largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

let result2 = largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])

let result3 = largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])

let result4 = largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])



console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


