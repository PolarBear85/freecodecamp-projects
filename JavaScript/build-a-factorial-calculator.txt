** start of script.js **

//let num = Math.floor(Math.random()*20)+1

let num = 7;

function factorialCalculator(number) {
    let result = 1
    for (let factor = 1; factor <= number; factor++ ) {
        result = result * factor;
        
    }
    return result;
}


let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

** end of script.js **

