function arrayDiff(arr1, arr2) {


const arr1Filter = arr1.filter(item =>!arr2.includes(item))
const arr2Filter = arr2.filter(item =>!arr1.includes(item))

const returnArr = arr1Filter.concat(arr2Filter).sort()
console.log(returnArr)
return returnArr

}

arrayDiff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])


arrayDiff(["pen", "book"], ["book", "pencil", "notebook"])

/*
Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.

Tests
Passed:1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
Passed:2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
Passed:3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
Passed:4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
Passed:5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].
*/