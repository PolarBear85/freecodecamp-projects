function chunkArrayInGroups(array,size) {
    let result = [];
    let arrayLength = array.length;

    for (let count = 0; count<arrayLength; count +=size) {
        result.push(array.slice(count, count+size));
    }
    return result;


}


group1 = chunkArrayInGroups(["a", "b", "c", "d"], 2);
group2 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
group3 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

console.log(group1);
console.log(group2);
console.log(group3);
