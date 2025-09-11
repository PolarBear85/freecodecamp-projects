function mutation(array) {
    let first = array[0].toLowerCase();
    let second = array[1].toLowerCase().split("");
3
    for (let count = 0; count<=second.length-1; count++) {
        if (first.includes(second[count])!== true) {
            return false;
        }
        
    }
    return true;


    
}



input = ["HELLO", "hello"];
input2 = ["hello", "hey"];
input3 = ["Alien", "line"];

console.log(mutation(input))
console.log(mutation(input2));
console.log(mutation(input3));