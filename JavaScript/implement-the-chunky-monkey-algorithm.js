

function chunkArrayInGroups(array,size) {
    let result = [];
    let arrayLength = array.length;

    for (let count = 0; count<arrayLength; count +=size) {
        result.push(array.slice(count, count+size));
    }
    return result;


}


