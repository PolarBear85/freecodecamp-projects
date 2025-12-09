function mostFrequent(arr) {
let mostFrequent = ["",0]
  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x])
    const total = arr.filter(item => {
      return item == arr[x]
    })
    console.log(total.length)
    if (total.length > mostFrequent[1]) {
      mostFrequent[0] = arr[x]
      mostFrequent[1] = total.length
    }
  }

  console.log(mostFrequent[0])
  return mostFrequent[0]
}


mostFrequent(["a", "b", "a", "c"])
mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60])


/*
Most Frequent
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.

Tests
Passed:1. mostFrequent(["a", "b", "a", "c"]) should return "a".
Passed:2. mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.
Passed:3. mostFrequent([true, false, "false", "true", false]) should return false.
Passed:4. mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.
*/