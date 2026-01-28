function flatten(arr) {
  console.log("Trying to flatten")

  const flatArr = arr.reduce((accumulator,item) => {
    console.log(`Item is ${item}`)
    if (Array.isArray(item)) {
      accumulator = accumulator.concat(flatten(item))
    } else {
    console.log(`Returning ${item}`)
    accumulator.push(item)
    }
    return accumulator
  },[])

  console.log(flatArr)
  return flatArr;
}


flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]])

/*
Flatten the Array
Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. Retain the original order of the items in the arrays.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. flatten([1, [2, 3], 4]) should return [1, 2, 3, 4].
Waiting:2. flatten([5, [4, [3, 2]], 1]) should return [5, 4, 3, 2, 1].
Waiting:3. flatten(["A", [[[["B"]]]], "C"]) should return ["A", "B", "C"].
Waiting:4. flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]]) should return ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].
Waiting:5. flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]]) should return ["red","blue","green","yellow","purple","orange","pink","brown"].

*/