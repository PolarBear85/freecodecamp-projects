let firstNumber = 5;
let secondNumber = 10;
debugger; // Code execution pauses here
let sum = firstNumber + secondNumber;
console.log(sum);



class Pizza {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }

  static createMargherita() {
    return new this("Margherita", 6.99);
  }
}

const newPizza = Pizza.createMargherita()
console.log(newPizza)




const recursiveCountdown = (number) => {
    console.log(`Function execution started for number: ${number}`);
    if (number < 1) {
        console.log(`Base case reached, begin resolving stack`);
        return;
    }
    console.log(`Calling recursiveCountdown with number: ${number - 1}`);
    recursiveCountdown(number - 1);
    console.log(`Function execution completed for number: ${number}`);
  };

recursiveCountdown(5);