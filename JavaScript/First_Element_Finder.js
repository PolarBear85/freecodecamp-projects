function findElement(inputArray, truthTest) {
    for (let num of inputArray) {
        console.log(num);
        console.log(truthTest(num));
        if (truthTest(num)=== true) {
            return num;
        }
    }
}

findElement([1,3,5,8,9,10], function(num) { return num % 2 === 0; })
