function frankenSplice(array1,array2,index) {
    
    let newSplice = [...array2];
    let spliceIndex=array1.length;
    
    for (let i = 0 ;i <spliceIndex; i++){
        newSplice.splice(index,0,array1[i]);
        index++;
    }
    console.log(array1);
    console.log(array2);
    console.log(newSplice);
    return newSplice;
}



let firstArray = ["claw", "tentacle"];
let secondArray = ["head", "shoulders", "knees", "toes"];
let index = 2;


console.log(frankenSplice(firstArray,secondArray,index));