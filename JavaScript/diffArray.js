function diffArray (arr1,arr2) {

const arr1Filter = arr1.filter(item =>!arr2.includes(item))
const arr2Filter = arr2.filter(item =>!arr1.includes(item))

const returnArr = arr1Filter.concat(arr2Filter)
console.log(returnArr)
return returnArr

}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])


diffArray(["pen", "book"], ["book", "pencil", "notebook"])